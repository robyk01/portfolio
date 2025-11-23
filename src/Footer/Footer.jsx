import './Footer.css'

function Footer(){
    return(
        <footer className="footer-container" id="contact">
            <div className="footer-content">
                <div className="contact-info">
                    <h3>Get In Touch</h3>
                    <p>I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you.</p>
                    <a 
                        href="mailto:amoreroberto85@gmail.com" 
                        className="email-link"
                    >
                        amoreroberto85@gmail.com
                    </a>
                </div>

                <div className="social-links">
                    <h4>Connect with me</h4>
                    <ul>
                        <li><a href="https://github.com/robyk01" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/amore-roberto-0bb418327/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>
                </div>

            </div>

            <div className="copyright">
                <p>&copy; {new Date().getFullYear()} | All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer