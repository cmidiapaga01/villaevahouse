import React, { useEffect } from 'react';
import "./Carrousel.css";
import test1 from "../../assets/images/testimonial1.jpg";
import test2 from "../../assets/images/testimonial2.jpg";
import test3 from "../../assets/images/testimonial3.jpg";

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const Testimonials = () => {
    useEffect(() => {
        const swiperTestimonial = new Swiper('.testimonial__container', {
            spaceBetween: 24,
            loop: true,
            grabCursor: true,
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                },
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        return () => {
            // Destrua a instância do Swiper ao desmontar o componente
            swiperTestimonial.destroy();
        };
    }, []);
    return (
        <section className="testimonial section">
            <span className="section__subtitle">My Clients Say</span>
            <h2 className="section__title">Testimonials</h2>

            <div className="testimonial__container container swiper">
                <div className="swiper-wrapper">
                    <div className="testimonial__card swiper-slide">
                        <img src={test1} alt="" className="testimonial__img" />

                        <h3 className="testimonial__name">John Doe</h3>
                        <p className="testimonial__description">
                            Your designs have transformed our website,
                            making it visually appealing and user-friendly.
                        </p>
                    </div>
                    <div className="testimonial__card swiper-slide">
                        <img src={test2} alt="" className="testimonial__img" />

                        <h3 className="testimonial__name">Pula Vusy</h3>
                        <p className="testimonial__description">
                            The attention to detail in your UI/UX work has
                            greatly enhanced our app's usability and overall user experience.
                        </p>
                    </div>
                    <div className="testimonial__card swiper-slide">
                        <img src={test3} alt="" className="testimonial__img" />

                        <h3 className="testimonial__name">Sara Cill</h3>
                        <p className="testimonial__description">
                            Your expertise in frontend shines
                            through in the seamless functionality and responsiveness of our website.
                        </p>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    );
}

export default Testimonials;
