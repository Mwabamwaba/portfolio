"use client";

import LoadingScreen from "@/components/LoadingScreen";
import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Background Effects */}
      <div className="grid-bg" />
      <div className="noise-overlay" />
      <CursorGlow />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <About />

        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <Skills />

        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <Projects />

        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <Experience />

        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
