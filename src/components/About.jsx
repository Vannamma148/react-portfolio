import React from 'react'
import { Link } from 'react-router-dom'


export default function About() {
  return (
    <section className="hero-section" id="about">
    <div className="webdev">
        <img loading="lazy" src="public/webdev.jpeg" alt="" />
    </div>
    <div className="about">
        <h1 className="heading">Vannamma N A</h1>
        <h2 className="sub-heading">Web Developer</h2>
        <p>
            Hello! I'm Vannamma N A, a creative web designer with over 3 years
            of experience in building visually appealing, SEO-friendly, and
            user-centric websites. I specialize in frontend design, website
            optimization, and Canva-based branding to help businesses enhance
            their online presence.
        </p>
        <Link to="/contact" target="_blank" class="btn-link"> Contact Now</Link>
    </div>
</section>
  )
}
