import React from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { projects } from '../data/projects'

export default function Projects() {
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Most recent work</span>

            <div className="portfolio__container container">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                >
                    {projects.map((p) => (
                        <SwiperSlide key={p.title}>
                            <div className="portfolio__content grid swiper-slide">
                                <img src={p.img} alt={`${p.title} screenshot`} className="portfolio__img" />

                                <div className="portfolio__data">
                                    <h3 className="portfolio__title">{p.title}</h3>
                                    <p className="portfolio__description">{p.description}</p>
                                    <a href={p.github} className="button button--flex button--small portfolio__button" target="_blank" rel="noreferrer">GitHub Repository<i className="uil uil-external-link-alt button__icon" /></a>
                                    {p.live && (
                                        <a href={p.live} className="button button--flex button--small portfolio__button" target="_blank" rel="noreferrer">See Live<i className="uil uil-external-link-alt button__icon" /></a>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
