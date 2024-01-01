import Home from './pages/Home/Home'
import AboutMe from './pages/AboutMe/AboutMe'
import Skills from './pages/Skills/Skills'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import MyProjects from './pages/MyProjects/MyProjects'
import './App.css'
import Navbar from "./Components/Navbar/Navbar";



function App() {
  return (
    <div className="bg-[#02050a] flex">
      <div className='lg:w-[22%]'>
        <Navbar />
      </div>
      <div className='w-full lg:w-[78%]'>
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


