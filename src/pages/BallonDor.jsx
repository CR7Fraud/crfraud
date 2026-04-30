import React from 'react';
import Navbar from '../components/Navbar';
import BallonDorSection from '../components/BallonDorSection';
import Footer from '../components/Footer';

export default function BallonDor() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <div className="pt-14">
        <BallonDorSection />
      </div>
      <Footer />
    </div>
  );
}