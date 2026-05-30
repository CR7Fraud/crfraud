import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { queryClientInstance } from "@/lib/query-client";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import { AuthProvider } from "@/lib/AuthContext";
import { I18nProvider } from "./lib/i18n";
import LoadingScreen from "@/components/LoadingScreen";
// Add page imports here
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Donate from "./pages/Donate.jsx";
import BallonDor from "./pages/BallonDor";
import RiggedUCL from "./pages/RiggedUCL";
import Managers from "./pages/Managers";
import CharacterBehaviour from "./pages/CharacterBehaviour";
import NationalTeam from "./pages/NationalTeam";
import LigaComprada from "./pages/LigaComprada";
import WhyMessi from "./pages/WhyMessi";
import { Navigate } from "react-router-dom";

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

const ScrollToTop = () => {
  const location = useLocation();
  const hasMountedRef = useRef(false);

  useEffect(() => {
    if (hasMountedRef.current) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return;
    }

    hasMountedRef.current = true;
  }, [location.pathname]);

  return null;
};

const AuthenticatedApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ballon-dor" element={<BallonDor />} />
      <Route path="/rigged-ucl" element={<RiggedUCL />} />
      <Route path="/managers" element={<Managers />} />
      <Route path="/character-behaviour" element={<CharacterBehaviour />} />
      <Route path="/national-team" element={<NationalTeam />} />
      <Route
        path="/selfishness"
        element={<Navigate replace to="/character-behaviour" />}
      />
      <Route
        path="/crying"
        element={<Navigate replace to="/character-behaviour" />}
      />
      <Route
        path="/hypocrisy"
        element={<Navigate replace to="/character-behaviour" />}
      />
      <Route path="/liga-comprada" element={<LigaComprada />} />
      <Route path="/why-messi" element={<WhyMessi />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donate" element={<Donate />} />
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
          <div className="relative min-h-screen bg-black">
            <div
              className="min-h-screen"
              style={{
                opacity: introDone ? 1 : 0,
                transition: "opacity 800ms cubic-bezier(.16, 1, .3, 1)",
              }}
            >
              <Router>
                <ScrollToTop />
                <AuthenticatedApp />
              </Router>
              <Toaster />
            </div>
            {!introDone ? (
              <LoadingScreen onComplete={() => setIntroDone(true)} />
            ) : null}
          </div>
        </QueryClientProvider>
      </AuthProvider>
    </I18nProvider>
  );
}

export default App;
