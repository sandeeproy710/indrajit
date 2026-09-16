import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">Indrajit</h1>
                        <span className="footer__subtitle">ECE Engg. Student</span>
                    </div>

                    <ul className="footer__links">
                        <li><a href="#qualification" className="footer__link">Qualification</a></li>
                        <li><a href="#portfolio" className="footer__link">Portfolio</a></li>
                        <li><a href="#contact" className="footer__link">Contact-Me</a></li>
                    </ul>
                </div>

                <p className="footer__copy">© Indrajit. All right reserved</p>
            </div>
        </footer>
    )
}
