import { useEffect } from 'react'
import Navbar from './Navbar/Navbar.jsx'
import About from './About/About.jsx'
import Projects from './Projects/Projects.jsx'
import Footer from './Footer/Footer.jsx'
import Blog from './Blog/Blog.jsx'
import { Routes, Route, useLocation } from 'react-router-dom'
import BlogPost from './Blog/BlogPost.jsx'
import { Analytics } from "@vercel/analytics/react"

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

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
      <Analytics />
      <ScrollToTop />
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
