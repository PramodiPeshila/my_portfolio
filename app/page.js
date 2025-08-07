'use client';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";  
import Work from "./components/Work"; 
import Contact from "./components/Contact";  
import Footer from "./components/Footer";
import React, { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    // Always set dark mode
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
