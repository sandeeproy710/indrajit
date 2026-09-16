import React from 'react'

export default function About() {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>

            <div className="about__container container grid">
                <img src="/assets/img/self.png" alt="Portrait of Indrajit Koley" className="about__img" />

                <div className="about__data">
                    <p className="about__description">I'm a final-year undergraduate student at NIT Patna, passionate about consulting and technology. Seeking opportunities to contribute to innovative solutions and grow as a software engineer.</p>

                    <div className="about__info">
                        <div>
                            <span className="about__info-title">800+ hrs</span>
                            <span className="about__info-name">Time Spent</span>
                        </div>

                        <div>
                            <span className="about__info-title">04+</span>
                            <span className="about__info-name">Projects</span>
                        </div>

                        <div>
                            <span className="about__info-title">18+</span>
                            <span className="about__info-name">Months <br />experience</span>
                        </div>
                    </div>

                    <div className="about__buttons">
                        <a download href="/assets/ResumeIndrajitKoley.pdf" className="button button--flex">Download CV<i className="fas fa-download button__icon" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
