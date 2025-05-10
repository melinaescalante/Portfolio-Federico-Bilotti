import { useState } from 'react'
import { HomeSection } from './sections/HomeSection'
import { Navbar } from './components/Navbar'
import { TechnologiesSection } from './sections/TechnologiesSection'
import { ProjectSection } from './sections/ProjectSection'
import { Footer } from './components/Footer'
import { ContactSection } from './sections/ContactSection'
function App() {

  return (
    <>
      <main className=' pb-10 mx-auto'>
        <Navbar></Navbar>
        <HomeSection></HomeSection>
        <TechnologiesSection></TechnologiesSection>
        <ProjectSection></ProjectSection>
        <ContactSection>

        <Footer></Footer>
        </ContactSection>
      </main>
    </>
  )
}

export default App
