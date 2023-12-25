
// import styled from 'styled-components'
import Home from './pages/Home/Home'
import AboutMe from './pages/AboutMe/AboutMe'
import Skills from './pages/Skills/Skills'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'


// const Container = styled.div`
//     height: 100vh
//     scroll-snap-type: y mandatory;
//     scroll-behavior: smooth;
//     overflow-y: auto;
// `

function App() {

  return (
    <div>
      <Home />
      <AboutMe />
      <Skills />
      <Blog />
      <Contact />
    </div>
  )
}

export default App
