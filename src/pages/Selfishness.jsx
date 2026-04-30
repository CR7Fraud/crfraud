import React from 'react';
import Navbar from '../components/Navbar';
import SelfishnessSection from '../components/SelfishnessSection';
import Footer from '../components/Footer';

export default function Selfishness() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <div className="pt-14">
        <SelfishnessSection />
      </div>
      <Footer />
    </div>
  );
}