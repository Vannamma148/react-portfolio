import React from 'react'

export default function Contact() {
    return (
        <section id="contact">
            <div className="contact-info">
                <div className="contact-details">
                    <span className="title">Contact Me</span>
                    <h2 className="heading">Let’s Connect & Collaborate</h2>
                    <p>
                        Have a project in mind or need a stunning website? Feel free to reach out, and let's create something amazing together!
                    </p>
                    <span>Mobile:</span>
                    <a href="tel:+919619357302" target="_main" className="">

                        <i className="fa fa-phone"></i> +91 9619357302
                    </a>
                    <span>Email:</span>
                    <a href="mailto:vannamma31@gmail.com" target="_main">
                        <i className="fa fa-envelope"></i> vannamma31@gmail.com
                    </a>
                    <span>Location:</span>
                    <a href="https://maps.app.goo.gl/GWHWNkpCZqqP6UjC6" target="_blank">
                        <i className="fa fa-location"> </i> Vikhroli East, Mumbai- 400 083
                    </a>
                </div>
                <div className="contact-form">
                    <span className="title">Let's Connect!</span>
                    <h2 className="heading">Have any question? Contact Now!</h2>

                    <form action="https://api.web3forms.com/submit" method="post">
                        <input type="hidden" name="access_key" value="6b083dd1-1f41-4ec4-8e4e-aa82b05f7d53" />
                        <input type="hidden" name="subject" value="New Submission from Web3Forms" />

                        <div className="name">
                            <input type="text" id="name" name="name" placeholder="Enter Your Name" required />
                        </div>
                        <div className="email">
                            <input type="email" id="email" name="email" placeholder="Enter Your Email" required />
                        </div>

                        <div className="phone">
                            <input type="number" name="phone" id="phone" placeholder="Enter Your Phone" required />
                        </div>
                        <div className="message">
                            <textarea rows="4" cols="" name="message" placeholder="Message" id="message" required></textarea>
                        </div>
                        <input type="submit" value="Submit Now" className="btn-link" />
                    </form>
                </div>
            </div>
        </section>
    )
}
