import { useState } from "react";
import { HomeSection } from "./sections/HomeSection";
import { Navbar } from "./components/Navbar";
import { TechnologiesSection } from "./sections/TechnologiesSection";
import { ProjectSection } from "./sections/ProjectSection";
import { Footer } from "./components/Footer";
import { ContactSection } from "./sections/ContactSection";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <main className="  mx-auto">
        <HomeSection></HomeSection>
        <TechnologiesSection></TechnologiesSection>
        <ProjectSection></ProjectSection>
      </main> <div className="pb-14">

      <ContactSection>
        <Footer></Footer>
      </ContactSection>
      </div>
    </>
  );
}

export default App;
