import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Qualification from './components/Qualification'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
    useEffect(() => {
        const sections = Array.from(document.querySelectorAll('section[id]'))

        function scrollActive() {
            const scrollY = window.pageYOffset
            sections.forEach((current) => {
                const sectionHeight = current.offsetHeight
                const sectionTop = current.offsetTop - 50
                const sectionId = current.getAttribute('id')
                const selector = `.nav__menu a[href*="${sectionId}"]`
                const navLinkEl = document.querySelector(selector)
                if (navLinkEl) {
                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        navLinkEl.classList.add('active-link')
                    } else {
                        navLinkEl.classList.remove('active-link')
                    }
                }
            })
        }

        function scrollHeader() {
            const nav = document.getElementById('header')
            if (!nav) return
            if (window.scrollY >= 80) nav.classList.add('scroll-header')
            else nav.classList.remove('scroll-header')
        }

        function scrollUp() {
            const scrollUp = document.getElementById('scroll-up')
            if (!scrollUp) return
            if (window.scrollY >= 560) scrollUp.classList.add('show-scroll')
            else scrollUp.classList.remove('show-scroll')
        }

        window.addEventListener('scroll', scrollActive)
        window.addEventListener('scroll', scrollHeader)
        window.addEventListener('scroll', scrollUp)

        // initial run
        scrollActive()
        scrollHeader()
        scrollUp()

        return () => {
            window.removeEventListener('scroll', scrollActive)
            window.removeEventListener('scroll', scrollHeader)
            window.removeEventListener('scroll', scrollUp)
        }
    }, [])

    return (
        <div>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Qualification />
                <Projects />
                <Contact />
            </main>
            <Footer />
            <a href="#" className="scrollup" id="scroll-up"><i className="uil uil-arrow-up scrollup__icon" /></a>
        </div>
    )
}
