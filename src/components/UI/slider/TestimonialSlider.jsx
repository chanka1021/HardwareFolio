import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
        "I stumbled upon this website and it's a hidden gem! The prices are unbelievably low, and I was skeptical at first, but when I received my order, I was blown away. Not only were the components top-notch, but they also included a bonus unicorn sticker that made my PC look extra magical!"
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Jhon Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        "I've been a loyal customer of this website for years, and I can confidently say it's the best in the business. The customer service is exceptional - they respond within seconds and even send virtual high-fives for your purchase. Plus, they have a secret feature where your computer components are blessed by a tech guru, ensuring smooth performance and zero compatibility issues!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Mitchell Marsh</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        "If you're tired of boring, mainstream HarwareFolio shopping experiences, this website is your answer! I recently bought a motherboard from them, and instead of receiving a regular package, it arrived in a customized treasure chest. Inside, I found not only the motherboard but also a personalized thank-you note and a small bag of confetti to celebrate my new build. This site truly knows how to make your shopping journey unforgettable!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Steven Crock</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
