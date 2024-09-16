import React from "react";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Bio from "./components/Bio"
import Skills from"./components/Skills"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer";
import Logo from "./components/logo";

const App=()=>{
  return(
    <div className="bg-gradient-to-r from-[#331212] from-10% via-[#2f094b] via-30% to-[#2e2355] to-90% relative h-full
    overflow-y-auto antialiased">
      <div className="fixed inset-0 bg-fixed
      bg-cover bg-center bg-img"></div>
      <div className="relative z-10 flex flex-col items-center
      p-4 space-y-8 container mx-auto">
        <Hero/>
        <Navbar/>
        <Project/>
        <Bio/>
        <Skills/>
        <ContactForm/>
        <Footer/>
      </div>

    </div>

  )
}
export default App;