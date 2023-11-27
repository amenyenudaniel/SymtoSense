import Discover from "@/components/Discover";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavbarMain from "@/components/NavbarMain";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <NavbarMain />
      <Hero />
      <Discover />
      <Footer />
    </section>
  );
};

export default HomePage;
