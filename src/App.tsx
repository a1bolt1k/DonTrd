import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Fuel } from "./components/Fuel";
import { Geography } from "./components/Geography";
import { Subdivisions } from "./components/Subdivisions";
import { Partners } from "./components/Partners";
import { Documents } from "./components/Documents";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#EFF2F6] text-[#111827] font-sans selection:bg-[#E86F1F] selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Fuel />
        <Geography />
        <Subdivisions />
        <Partners />
        <Documents />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
