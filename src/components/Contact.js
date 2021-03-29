import React from 'react'
import '../App.css';

function Contact() {
    return (
        <div>
            <section className="contact">
            <div className="container">
                <div className="section-title text-center mt-5">
                <h2>Contact</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, accusamus.</p>
                </div>
                <div className="row">
                <div className="col-lg-6">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="contact-box">
                        <i className="fas fa-map-signs" />
                        <h3>Address</h3>
                        <p>Lorem Brasilia Zip code: 45687 </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contact-box mt-4">
                        <i className="fas fa-envelope" />
                        <h3>Email Us</h3>
                        <p>test@example.com<br />contact@example.com</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contact-box mt-4">
                        <i className="fas fa-phone" />
                        <h3>Call Us</h3>
                        <p>+55 61 1234 789 <br />+55 61 123 4567</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <form>
                    <div className="form-row">
                        <div className="col-md-6 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" />
                        </div>
                        <div className="col-md-6 form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="message" rows={5} defaultValue={""} />
                    </div>
                    <div className="text-center">
                        <button type="submit">Send Message</button></div>
                    </form>
                </div>
                </div>
            </div>
            </section>

        </div>
    )
}

export default Contact
