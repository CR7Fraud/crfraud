import React from 'react';
import Navbar from '../components/Navbar';
import HypocrisySection from '../components/HypocrisySection';
import Footer from '../components/Footer';

export default function Hypocrisy() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <div className="pt-14">
        <HypocrisySection />
      </div>
      <Footer />
    </div>
  );
}