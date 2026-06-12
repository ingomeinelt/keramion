"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import ConsultationModal from "@/components/ConsultationModal";

export default function Home() {
  const [showConsultation, setShowConsultation] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      <Hero onBookConsultation={() => setShowConsultation(true)} />
      <Gallery />
      <About />
      <Pricing />
      <Contact />
      {showConsultation && (
        <ConsultationModal onClose={() => setShowConsultation(false)} />
      )}
    </main>
  );
}
