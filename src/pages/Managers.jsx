import React from 'react';
import Navbar from '../components/Navbar';
import SackedManagersSection from '../components/SackedManagersSection';
import Footer from '../components/Footer';

export default function Managers() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <div className="pt-14">
        <SackedManagersSection />
      </div>
      <Footer />
    </div>
  );
}