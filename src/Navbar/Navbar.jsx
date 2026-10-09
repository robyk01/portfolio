import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css'

function Navbar(){
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToElement = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (location.hash) {
                window.history.pushState(null, '', '/');
            }
        } else {
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleWorkClick = (e) => {
        e.preventDefault();
        if (location.pathname === '/') {
            scrollToElement('portfolio');
            window.history.pushState(null, '', '#portfolio');
        } else {
            navigate('/#portfolio');
            setTimeout(() => scrollToElement('portfolio'), 120);
        }
    };

    const handleBlogClick = (e) => {
        e.preventDefault();
        if (location.pathname === '/blog') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/blog');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleContactClick = (e) => {
        e.preventDefault();
        const contactEl = document.getElementById('contact');
        if (contactEl) {
            contactEl.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', '#contact');
        } else {
            navigate('/#contact');
            setTimeout(() => scrollToElement('contact'), 120);
        }
    };

    const isHome = location.pathname === '/' && (!location.hash || location.hash === '#about');
    const isWork = location.pathname === '/' && location.hash === '#portfolio';
    const isBlog = location.pathname.startsWith('/blog');
    const isContact = location.hash === '#contact';

    return(
        <nav className="section" id="navbar">
            <ul>
                <li>
                    <a 
                        href="/" 
                        onClick={handleHomeClick}
                        className={isHome ? 'active' : ''}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a 
                        href="/#portfolio" 
                        onClick={handleWorkClick}
                        className={isWork ? 'active' : ''}
                    >
                        Work
                    </a>
                </li>
                <li>
                    <a 
                        href="/blog" 
                        onClick={handleBlogClick}
                        className={isBlog ? 'active' : ''}
                    >
                        Blog
                    </a>
                </li>
                <li>
                    <a 
                        href="#contact" 
                        onClick={handleContactClick}
                        className={isContact ? 'active' : ''}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;