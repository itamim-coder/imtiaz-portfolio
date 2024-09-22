import About from "@/components/About";
import Contact from "@/components/Contact";
import MyProject from "@/components/MyProject";
import Github from "@/components/Github";
import HeroSection from "@/components/Hero";
import NavBar from "@/components/NavBar";
import ProjectsSection from "@/components/ProjectSection";
import Skills from "@/components/Skill";
import React, { useEffect } from "react";
import Info from "@/components/Info";
import { Blog } from "@/components/Blog";
import Footer from "@/components/Footer";
// import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
function Home() {


  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar></NavBar>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <About></About>
        <MyProject></MyProject>
        <Info></Info>
        <Blog />
        <Github />
        <Contact />
        <Footer></Footer>
      </div>
    </main>
  );
}

export default Home;
