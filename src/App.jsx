import Navbar from './Navbar/Navbar.jsx'
import About from './About/About.jsx'
import Projects from './Projects/Projects.jsx'
import Footer from './Footer/Footer.jsx'
import Blog from './Blog/Blog.jsx'
import { Routes, Route } from 'react-router-dom'
import BlogPost from './Blog/BlogPost.jsx'

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
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App
