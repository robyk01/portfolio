import './Navbar.css'

function Navbar(){
    return(
        <nav className="section" id="navbar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#portfolio">Work</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar