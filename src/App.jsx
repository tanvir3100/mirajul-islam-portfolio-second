
import Home from './pages/Home/Home'
import AboutMe from './pages/AboutMe/AboutMe'
import Skills from './pages/Skills/Skills'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import MyProjects from './pages/MyProjects/MyProjects'




function App() {
  return (
    <div className="bg-gradient-to-r from-[#5b74e0] to-[#6c35a3] px-4 lg:px-12 mx-auto">
      <Home />
      <AboutMe />
      <Skills />
      <MyProjects />
      <Blog />
      <Contact />
    </div>
  )
}

export default App
