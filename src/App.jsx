import Home from './pages/Home/Home'
import AboutMe from './pages/AboutMe/AboutMe'
import Skills from './pages/Skills/Skills'
// import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import MyProjects from './pages/MyProjects/MyProjects'
import './App.css'




function App() {
  return (
    <div className="bg-[#151518]">
      <div>
        <section>
          <Home />
        </section>
        <section>
          <AboutMe />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <MyProjects />
        </section>
        {/* <section>
          <Blog />
        </section> */}
        <section>
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default App;


