import React from 'react';
import Navbar from '../components/Navbar';
import RiggedUCLSection from '../components/RiggedUCLSection';
import Footer from '../components/Footer';

export default function RiggedUCL() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <div className="pt-14">
        <RiggedUCLSection />
      </div>
      <Footer />
    </div>
  );
}