"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample images array (replace with your own images)
const projects = [
  "/project1.png",
  "/project2.png",
  "/project3.png",
  "/project4.png",
  "/project5.png",
];

const ProjectCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5, // ek row me 5 dikhenge
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 bg-white text-center mt-4">
      <h2 className="text-3xl font-bold mb-6">Are Latest Projects</h2>
      <div className="px-10">
        <Slider {...settings}>
          {projects.map((img, index) => (
            <div key={index} className="px-2">
              <div className="rounded-2xl bg-gray-800 h-64 flex items-center justify-center">
                <img
                  src={img}
                  alt={`Project ${index + 1}`}
                  className="object-cover h-full w-full rounded-2xl"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectCarousel;
