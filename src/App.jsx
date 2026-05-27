import ExperienceSection from './sections/ExperienceSection.jsx'
import Hero from './sections/Hero.jsx'
import TechStack from './sections/TechStack.jsx'
import Projects from './sections/Projects.jsx'
import Education from './sections/Education.jsx'
import NavBar from './components/NavBar.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

const App = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <ExperienceSection />
    <TechStack />
    <Projects />
    <Education />
    <Contact />
    <Footer />
    </>
  )
}

export default App