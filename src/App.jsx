
import styled from 'styled-components'
import Home from './pages/Home/Home'
import AboutMe from './pages/AboutMe/AboutMe'
import Skills from './pages/Skills/Skills'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'


const Container = styled.div`
  
`

function App() {

  return (
    <Container className="bg-gradient-to-r from-[#5b74e0] to-[#6c35a3]">
      <Home />
      <AboutMe />
      <Skills />
      <Blog />
      <Contact />
    </Container>
  )
}

export default App
