import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { queryClientInstance } from "@/lib/query-client";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import { AuthProvider, useAuth } from "@/lib/AuthContext";
import UserNotRegisteredError from "@/components/UserNotRegisteredError";
import { I18nProvider } from "./lib/i18n";
import LoadingScreen from "@/components/LoadingScreen";
// Add page imports here
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import BallonDor from "./pages/BallonDor";
import RiggedUCL from "./pages/RiggedUCL";
import Managers from "./pages/Managers";
import Selfishness from "./pages/Selfishness";
import NationalTeam from "./pages/NationalTeam";
import Crying from "./pages/Crying";
import Hypocrisy from "./pages/Hypocrisy";
import LigaComprada from "./pages/LigaComprada";
import WhyMessi from "./pages/WhyMessi";

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } =
    useAuth();
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const alreadySeenIntro =
      window.sessionStorage.getItem("crfraud_intro_seen") === "true";
    if (alreadySeenIntro) {
      setIntroDone(true);
    }
  }, []);

  const markIntroDone = () => {
    window.sessionStorage.setItem("crfraud_intro_seen", "true");
    setIntroDone(true);
  };

  if (isLoadingPublicSettings || isLoadingAuth || !introDone) {
    return <LoadingScreen onComplete={markIntroDone} />;
  }

  if (authError) {
    if (authError.type === "user_not_registered") {
      return <UserNotRegisteredError />;
    } else if (authError.type === "auth_required") {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ballon-dor" element={<BallonDor />} />
      <Route path="/rigged-ucl" element={<RiggedUCL />} />
      <Route path="/managers" element={<Managers />} />
      <Route path="/selfishness" element={<Selfishness />} />
      <Route path="/national-team" element={<NationalTeam />} />
      <Route path="/crying" element={<Crying />} />
      <Route path="/hypocrisy" element={<Hypocrisy />} />
      <Route path="/liga-comprada" element={<LigaComprada />} />
      <Route path="/why-messi" element={<WhyMessi />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <I18nProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClientInstance}>
          <Router>
            <AuthenticatedApp />
          </Router>
          <Toaster />
        </QueryClientProvider>
      </AuthProvider>
    </I18nProvider>
  );
}

export default App;
