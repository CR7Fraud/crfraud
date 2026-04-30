import React from 'react';
import Navbar from '../components/Navbar';
import WhyMessiIsBetterSection from '../components/WhyMessiIsBetterSection';
import Footer from '../components/Footer';

export default function WhyMessi() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <div className="pt-14">
        <WhyMessiIsBetterSection />
      </div>
      <Footer />
    </div>
  );
}