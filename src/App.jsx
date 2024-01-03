import Home from './pages/Home/Home'
import AboutMe from './pages/AboutMe/AboutMe'
import Skills from './pages/Skills/Skills'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import MyProjects from './pages/MyProjects/MyProjects'
import './App.css'
import Navbar from './Components/Navbar/Navbar'




function App() {

  // className="bg-gradient-to-r from-[#171235] to-[#220c5f]"

  return (
    <div className='bg-orange-600'>
      <div>
        <Navbar />
        <section id='home'>
          <Home />
        </section>
        <section id='about'>
          <AboutMe />
        </section>
        <section id='skills'>
          <Skills />
        </section>
        <section id='myProjects'>
          <MyProjects />
        </section>
        <section id='blog'>
          <Blog />
        </section>
        <section id='contact'>
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default App;


