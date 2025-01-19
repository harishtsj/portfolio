import './App.css'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'
// import Experience from './sections/Experience/Experience'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/skills'

function App() {

  return (
    <>
      <Hero />
      {/* <Experience /> */}
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
