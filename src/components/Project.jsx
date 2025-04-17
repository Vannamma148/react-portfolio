import React from 'react'

export const Project = () => {
  return (
    <section id="projects">
            <div className="our-project">
                <div className="headings">
                    <span className="title">Work</span>
                    <h2 className="heading">Showcasing Innovation & Creativity</h2>
                    <p>
                        A collection of my best web design and development projects, crafted with modern technologies for seamless performance, aesthetics, and SEO optimization.
                    </p>
                </div>
                <div className="projects">
                    <div className="project-item">
                        <div className="project-img">
                            <a href="https://smvkengineering.com/" target="_blank">
                                <img loading="lazy" src="public/projects/smvk-engineering-fabrication.webp"
                                    alt="smvk_engineering" />
                            </a>
                        </div>
                        <a href="https://smvkengineering.com/" target="_blank">
                            <h2 className="project-name">SMVK Engineering</h2>
                        </a>
                    </div>
                    <div className="project-item">
                        <div className="project-img">
                            <a href="https://hkgroupindia.com/" target="_blank">
                                <img loading="lazy" src="public/projects/hk-group.webp" alt="hk_group" />
                            </a>
                        </div>
                        <a href="https://hkgroupindia.com/" target="_blank">
                            <h2 className="project-name">HK GROUP</h2>
                        </a>
                    </div>
                    <div className="project-item">
                        <div className="project-img">
                            <a href="https://www.hicareprotectivewear.com/" target="_blank">
                                <img loading="lazy" src="public/projects/hicare.webp" alt="hicareprotectivewear" />
                            </a>
                        </div>
                        <a href="https://www.hicareprotectivewear.com/" target="_blank">
                            <h2 className="project-name">Hicare Protective Wear</h2>
                        </a>
                    </div>
                    <div className="project-item">
                        <div className="project-img">
                            <a href="https://telespacenetwork.com/" target="_blank">
                                <img loading="lazy" src="public/projects/telespacenetwork.webp" alt="telespacenetwork" />
                            </a>
                        </div>
                        <a href="https://telespacenetwork.com/" target="_blank">
                            <h2 className="project-name">Telespace Network</h2>
                        </a>
                    </div>
                </div>
            </div>
        </section>
  )
}
