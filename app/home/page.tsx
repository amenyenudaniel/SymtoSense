import Discover from "@/components/Discover";
import Hero from "@/components/Hero";
import NavbarMain from "@/components/NavbarMain";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <NavbarMain />
      <Hero />
      <Discover />
    </section>
  );
};

export default HomePage;
