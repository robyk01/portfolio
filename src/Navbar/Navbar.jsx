import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar(){
    return(
        <nav className="section" id="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#portfolio">Work</a></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar