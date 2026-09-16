import React, { useState } from 'react'

export default function Skills() {
    const [openIndex, setOpenIndex] = useState(0)

    const sections = [
        {
            title: 'Programming Languages',
            items: ['Java', 'JavaScript', 'Python'],
            icon: 'fas fa-pencil-ruler'
        },
        {
            title: 'IT Constructs',
            items: ['DS & Algorithms', 'OOPs', 'DBMS'],
            icon: 'fas fa-code'
        },
        {
            title: 'Technologies',
            items: ['Git/GitHub', 'SQL', 'NextJs', 'NodeJs', 'Tailwind'],
            icon: 'fas fa-swatchbook'
        }
    ]

    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical knowledge</span>

            <div className="skills__container container grid">
                {sections.map((sec, idx) => (
                    <div key={sec.title}>
                        <div className={`skills__content ${openIndex === idx ? 'skills__open' : 'skills__close'}`}>
                            <div className="skills__header" onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)} role="button" tabIndex={0}>
                                <i className={`${sec.icon} skills__icon`} />
                                <div>
                                    <h1 className="skills__title">{sec.title}</h1>
                                </div>
                                <i className="uil uil-angle-down skills__arrow" />
                            </div>

                            <div className="skills__list grid">
                                {sec.items.map((it) => (
                                    <div className="skills__data" key={it}><div className="skills__titles"><h3 className="skills__name">{it}</h3></div></div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
