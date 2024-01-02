import Home from './pages/Home/Home'
import AboutMe from './pages/AboutMe/AboutMe'
import Skills from './pages/Skills/Skills'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import MyProjects from './pages/MyProjects/MyProjects'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
// import Navbar from "./Components/Navbar/Navbar";



function App() {
  return (
    <div className="bg-gradient-to-r from-[#171235] to-[#220c5f]">
      <div>
        <Navbar/>
        <Home />
        <AboutMe />
        <Skills />
        <MyProjects />
        <Blog />
        <Contact />
      </div>
    </div>
  )
}

export default App;


