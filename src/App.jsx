import Navbar from './Navbar/Navbar.jsx'
import About from './About/About.jsx'
import Projects from './Projects/Projects.jsx'
import Footer from './Footer/Footer.jsx'
import Blog from './Blog/Blog.jsx'
import { Routes, Route } from 'react-router-dom'

function Home(){
  return(
    <>
      <About />
      <Projects />

    </>
  )
}

function App() {
  return(
    <>
      <Navbar />
      <main className='app-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App
