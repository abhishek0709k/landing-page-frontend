import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle'; // this pulls in all necessary CSS
import './TestimonialSlider.css';

const TestimonialSlider = () => {
  useEffect(() => {
    new Swiper('.swiper', {
      loop: true,
      autoplay: { delay: 3000 },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1,
      spaceBetween: 20,
    });
  }, []);

  return (
    <div className="swiper testimonial-swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="testimonial-card">"Amazing platform for freelancers!"<br />- Aisha</div>
        </div>
        <div className="swiper-slide">
          <div className="testimonial-card">"Helped me find clients easily."<br />- Rahul</div>
        </div>
        <div className="swiper-slide">
          <div className="testimonial-card">"Highly recommend for new gig workers."<br />- Emily</div>
        </div>
      </div>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default TestimonialSlider;
