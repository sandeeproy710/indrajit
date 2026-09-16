import React from 'react'

export default function Hero() {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__social">
                        <a href="https://www.linkedin.com/in/koleyindrajit/" target="_blank" rel="noreferrer" className="home__social-icon">
                            <i className="uil uil-linkedin-alt home__icon" />
                        </a>
                        <a href="https://github.com/koleyindrajit" target="_blank" rel="noreferrer" className="home__social-icon">
                            <i className="uil uil-github-alt home__icon" />
                        </a>
                    </div>

                    <div className="home__data">
                        <h1 className="home__title">Hi, I'm Indrajit Koley</h1>
                        <h3 className="home__subtitle">Electronics and Communication Student</h3>
                        <p className="home__description">A final-year engineering student at <strong>National Institute of Technology Patna</strong></p>
                        <a href="#contact" className="button button--flex">Contact me<i className="uil uil-message button__icon" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
