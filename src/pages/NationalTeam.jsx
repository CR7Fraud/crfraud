import React from 'react';
import Navbar from '../components/Navbar';
import CarriedByNationalTeamSection from '../components/CarriedByNationalTeamSection';
import Footer from '../components/Footer';

export default function NationalTeam() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <div className="pt-14">
        <CarriedByNationalTeamSection />
      </div>
      <Footer />
    </div>
  );
}