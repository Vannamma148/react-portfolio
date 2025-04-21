import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
    <section id="footer-section">
       <div className="footer-section">
        <div className="footer-logo">
        <h3 className="h-title">About Us</h3>
            <p>"Designing and developing modern, SEO-friendly websites with a focus on user experience, performance, and aesthetics. Let’s build something great together!"</p>
        </div>
        <div className="quick-links ql">
            <h3 className="h-title">Quick Links</h3>
            <ul className="links">
                <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/skill">Skills</Link></li>
                        <li><Link to="/project">Project</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
              
            </ul>
        </div>
        <div className="quick-links">
            <h3 className="h-title">Contact Info</h3>
            <ul className="links">
                <li> <a href="tel:+919619357302" target="_main" className="">
                    <i className="fa fa-phone"></i> +91 9619357302
                </a></li>
                <li> <a href="mailto:vannamma31@gmail.com" target="_main">
                    <i className="fa fa-envelope"></i> vannamma31@gmail.com
                </a></li>
                <li> <a href="https://maps.app.goo.gl/GWHWNkpCZqqP6UjC6" target="_blank">
                    <i className="fa fa-location"> </i> Vikhroli, Mumbai- 400 083
                </a></li>
               
            </ul>
           
        </div>
        <div className="quick-links ">
            <h3 className="h-title">Socail Links</h3>
            <ul className="links">
               
                <li><i className="fa-brands fa-linkedin-in"></i> <a href="https://www.linkedin.com/in/vannamma-dev/">Linkedin</a></li>
                <li><i className="fa-brands fa-github"></i> <a href="https://github.com/Vannamma148" target="_blank">Github</a></li>
                <li><i className="fa-brands fa-whatsapp"></i> <a href="https://wa.me/9619357302?text=Hello!%20I'm%20interested%20in%20your%20services.
                    " target="_blank">Whatsapp</a></li>
                <li><i className="fa-solid fa-phone"></i> <a href="tel:+919619357302" target="_blank">Phone</a></li>
            </ul>
        </div>
       </div>
       <div className="copywrite">
        <p>&copy; 2025 Vannamma N A. All Rights Reserved.</p>
    </div>
    </section>
   
</footer>
  )
}
