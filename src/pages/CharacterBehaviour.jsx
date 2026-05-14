import React from "react";
import Navbar from "../components/Navbar";
import CharacterBehaviourSection from "../components/CharacterBehaviourSection";
import Footer from "../components/Footer";

export default function CharacterBehaviour() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <div className="pt-14">
        <CharacterBehaviourSection />
      </div>
      <Footer />
    </div>
  );
}
