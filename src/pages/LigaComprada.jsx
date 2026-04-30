import React from 'react';
import Navbar from '../components/Navbar';
import LigaCompradaSection from '../components/LigaCompradaSection';
import Footer from '../components/Footer';

export default function LigaComprada() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <div className="pt-14">
        <LigaCompradaSection />
      </div>
      <Footer />
    </div>
  );
}