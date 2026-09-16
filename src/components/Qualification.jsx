import React, { useState } from 'react'

export default function Qualification() {
    const [openModal, setOpenModal] = useState(-1)

    const items = [
        {
            title: 'Class 10th',
            subtitle: 'Tagore Academy\nICSE',
            date: '- 2019',
            bullets: [
                'Subjects studied: Science, Maths, English, History, Civics & Geography, Computer Application.',
                'Scored 93.2%',
                'Cleared RMO in class 9.'
            ]
        },
        {
            title: 'Class 12th',
            subtitle: 'Tagore Academy\nISC',
            date: '- 2021',
            bullets: ['Subjects studied: Physics, Chemistry, Maths, English, Statistics , Computer Application.', 'Scored 89%']
        },
        {
            title: 'College',
            subtitle: 'National Institute of Technology, Patna',
            date: '2022 - 2027',
            bullets: [
                'Studying core subjects of ECE including DSA, Signal Processing, Optimization Techniques, Semiconductor Technology, Digital Electronics, Microwave Engineering, AI/ML, Control system, Advanced Communication Engineering.',
                'Technical Member in Robotics Club.',
                'Photography Lead in DesCo.',
                'Web Lead in GYB.',
                '2nd position in Founders Fusion a business pitch hackathon of NIT Patna.',
                '3rd Position in Brand Crusade hosted by Amity Patna.',
                'Scored an aggregate of 6.83 CGPA till now.'
            ]
        }
    ]

    return (
        <section className="qualification__section service__section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container grid services__container">
                <div className="qualification__tabs">
                    <div className="qualification__button button--flex qualification__active" data-target="#education">
                        <i className="uil uil-graduation-cap qualification__icon" />
                        Education
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content qualifiation__active services__content" data-content id="education">
                        {items.map((it, idx) => (
                            <div className="qualification__data" key={it.title}>
                                <div>
                                    <h3 className="qualification__title">{it.title}</h3>
                                    <span className="qualification__subtitle">{it.subtitle.split('\n').map((s, i) => (<span key={i}>{s}<br /></span>))}</span>
                                    <div className="qualification__calender"><i className="uil uil-calendar-alt" /> {it.date}</div>
                                    <button className="button button--flex button--small button--link services__button" onClick={() => setOpenModal(idx)}>View More <i className="uil uil-arrow-right button__icon" /></button>

                                    <div className={`services__modal ${openModal === idx ? 'active-modal' : ''}`}>
                                        <div className="services__modal-content">
                                            <h4 className="services__modal-title">{it.title} Summary :</h4>
                                            <i className="uil uil-times services__modal-close" onClick={() => setOpenModal(-1)} />
                                            <ul className="services__modal-services grid">
                                                {it.bullets.map((b, bi) => (
                                                    <li className="services__modal-service" key={bi}><i className="uil uil-check-circle services__moda-icon" /><p>{b}</p></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder" />
                                    <span className="qualification__line" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
