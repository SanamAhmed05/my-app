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
    slidesToShow: 5, // Desktop: ek row me 5
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1280, // lg
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024, // md
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // sm
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // xs
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 bg-white text-center mt-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Our Latest Projects
      </h2>

      {/* ✅ Responsive padding */}
      <div className="px-4 sm:px-6 md:px-10">
        <Slider {...settings}>
          {projects.map((img, index) => (
            <div key={index} className="px-2">
              <div className="rounded-2xl overflow-hidden bg-black shadow-md">
                <img
                  src={img}
                  alt={`Project ${index + 1}`}
                  className="object-cover h-48 sm:h-56 md:h-64 w-full"
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
