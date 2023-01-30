import React from "react";
import "./Testimonial.scss";
import AVATAR1 from "../../images/image4.jpg";
import AVATAR2 from "../../images/image5.webp";
import AVATAR3 from "../../images/image6.jpg";
import AVATAR4 from "../../images/image7.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Testimonial = () => {
  const data = [
    {
      avatar: AVATAR1,
      name: "Lumala Brian",
      review:
        "We thank Brian Bravol for the wonderful job in helping us develop our program. He was professional, excellent and hard working. Thanks to him, we were able to achieve our goal on time, and we look forward to continue working with him in the future",
    },
    {
      avatar: AVATAR2,
      name: "Jethro Godwin",
      review:
        "Brian has delivered great results and has convinced me of the value of outsourcing. In the beginning of the relationship between us, there were times when it was difficult to communicate but if you can just get through the first week or so everything starts to come together",
    },
    {
      avatar: AVATAR3,
      name: "Amanya Gilbert",
      review:
        "We would like to express our satisfaction on the cooperation regarding the development of our web application. Brian and the development team did a very professional job. We are satisfied with the solution given to us and with the communication flow through the project. I would like to recommend Brian and his development team. We look forward to working with him in future projects.",
    },
    {
      avatar: AVATAR4,
      name: "Ayebazibwe Darius",
      review:
        "I wanted to take a moment to thank you for the services your team has provided. Your team has been a pleasure to work with, professional and timely. The only delay in work that we have experienced has been due to our own lack of organization managing our projects, not yours. Brian well done and I hope we can continue to grow together.",
    },
  ];
  return (
    <section id="testimonial">
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name"> {name} </h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
