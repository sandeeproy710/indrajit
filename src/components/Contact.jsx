import React from 'react'

export default function Contact() {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <i className="uil uil-calling contact__icon" />
                        <div>
                            <h3 className="contact__title">Contact Me</h3>
                            <span className="contact__subtitle">748XXXXXXX</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <i className="uil uil-envelope-minus contact__icon" />
                        <div>
                            <h3 className="contact__title">Email</h3>
                            <span className="contact__subtitle">ikoley615@gmail.com</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <i className="uil uil-map-marker contact__icon" />
                        <div>
                            <h3 className="contact__title">Location</h3>
                            <span className="contact__subtitle">Jamshedpur, Jharkhand, India</span>
                        </div>
                    </div>
                </div>

                <form action="mailto:ikoley615@gmail.com" method="get" encType="text/plain" className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label htmlFor="name" className="content__label">Name</label>
                            <input id="name" name="name" type="text" className="contact__input" />
                        </div>

                        <div className="contact__content">
                            <label htmlFor="email" className="content__label">Email</label>
                            <input id="email" name="email" type="email" className="contact__input" />
                        </div>
                    </div>

                    <div className="contact__content">
                        <label htmlFor="message" className="content__label">Message</label>
                        <textarea id="message" name="message" cols="0" rows="7" className="contact__input" />
                    </div>

                    <div>
                        <button type="submit" className="button button--flex">Send Message<i className="uil uil-message button__icon" /></button>
                    </div>
                </form>
            </div>
        </section>
    )
}
