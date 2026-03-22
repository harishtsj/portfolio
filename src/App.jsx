import './App.css'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'
// import Experience from './sections/Experience/Experience'
import Hero from './sections/Hero/Hero'
import Navbar from './sections/Navbar/Navbar'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/skills'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <div className='app-body'>
        <Hero />
        {/* <Experience /> */}
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
