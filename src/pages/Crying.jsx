import React from 'react';
import Navbar from '../components/Navbar';
import CryingOnInternetSection from '../components/CryingOnInternetSection';
import Footer from '../components/Footer';

export default function Crying() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <div className="pt-14">
        <CryingOnInternetSection />
      </div>
      <Footer />
    </div>
  );
}