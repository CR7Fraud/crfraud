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

const normalizeEmDashText = (node) => {
  if (!node) {
    return;
  }

  if (node.nodeType === Node.TEXT_NODE) {
    if (node.nodeValue && node.nodeValue.includes("—")) {
      node.nodeValue = node.nodeValue.replaceAll("—", "-");
    }

    return;
  }

  if (
    node.nodeType !== Node.ELEMENT_NODE &&
    node.nodeType !== Node.DOCUMENT_FRAGMENT_NODE
  ) {
    return;
  }

  const walker = document.createTreeWalker(node, window.NodeFilter.SHOW_TEXT);

  let currentNode = walker.nextNode();

  while (currentNode) {
    if (currentNode.nodeValue && currentNode.nodeValue.includes("—")) {
      currentNode.nodeValue = currentNode.nodeValue.replaceAll("—", "-");
    }

    currentNode = walker.nextNode();
  }
};

const TextNormalizer = () => {
  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    const rootNode = document.body;

    if (!rootNode) {
      return undefined;
    }

    normalizeEmDashText(rootNode);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData") {
          normalizeEmDashText(mutation.target);
          continue;
        }

        for (const addedNode of mutation.addedNodes) {
          normalizeEmDashText(addedNode);
        }
      }
    });

    observer.observe(rootNode, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, []);

  return null;
};

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } =
    useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return <div className="fixed inset-0 bg-black" aria-hidden="true" />;
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
  const [introDone, setIntroDone] = useState(false);

  return (
    <I18nProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClientInstance}>
          <TextNormalizer />
          <Router>
            {!introDone ? (
              <LoadingScreen onComplete={() => setIntroDone(true)} />
            ) : (
              <AuthenticatedApp />
            )}
          </Router>
          <Toaster />
        </QueryClientProvider>
      </AuthProvider>
    </I18nProvider>
  );
}

export default App;
