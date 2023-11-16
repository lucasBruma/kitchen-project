"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

SwiperCore.use([Navigation]);
import { Typography } from "@mui/material";

import styled from "@emotion/styled";

export const services = [
  {
    description:
      "Sometimes the perfect house is not perfect at first, but completing a significant renovation canmake all the difference. We use only the finest materials and have the skills to create beautifulfinished products. Find your dream home in the one you already own!",
    name: "Home Remodeling",
    image: "/homeRemodeling.jpg",
  },
  {
    description:
      "At Explore Remodeling, we understand what it takes to make a kitchen spectacular. Ourdedicated team of general contractors and design professionals work one-on-one with eachclient, listening first to understand your needs best and providing expert advice and guidance to transform your dream kitchen into reality.",
    name: "Kitchen Remodeling",
    image: "/kitchenRemodeling.jpg",
  },
  {
    description:
      "At Explore, we provide professional project management, making it possible for you to addsquare footage to your home in an aesthetically pleasing way and can even enhance your property value.",
    name: "Home Additions",
    image: "/homeAdditions.jpg",
  },
  {
    description:
      "When your property is perfect, but your home is not quite right, a teardown and rebuild is onesolution to consider. Explore walks you through the entire process, providing professional oversight and helping you to achieve your goals while saving time and money.",
    name: "Teardown and Rebuild",
    image: "/teardownRebuild.jpg",
  },
];

const Container = styled.div`
  .swiper .swiper-pagination-bullet {
    background-color: #d9d9d9; /* Set the background color */
    opacity: 0.5; /* Set the opacity */
    width: 15px;
    height: 15px;
  }

  .swiper .swiper-pagination-bullet-active {
    background-color: gray !important;
  }
`;

export default function ServicesHome() {
  return (
    <section>
      <div className="flex w-full flex-col items-center justify-between gap-12 py-12 text-primary-main md:px-32 md:py-24 xl:px-56">
        <div className="flex flex-col items-center gap-6 px-8">
          <h2 className="text-center text-[3rem] ">OUR SERVICES</h2>
          <Typography variant="h6" component="h5" className="!text-center !font-normal lg:w-[80%]">
            Sometimes the perfect house is not perfect at first, but completing a significant renovation can make all
            the difference. Find your dream home in the one you already own
          </Typography>
        </div>
        <Container className="flex w-full select-none flex-row justify-between gap-16 md:gap-32 lg:items-end">
          <Swiper
            className="swiper"
            pagination
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={20}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 0.5,
            }}
            speed={1200}
            grabCursor
            navigation={true}
            loop={true}
            autoplay={true}
          >
            {services.map((service) => {
              return (
                <SwiperSlide key={service.name}>
                  <div className="relative flex cursor-pointer flex-col items-center gap-12 bg-white p-20 pt-3 duration-300 ease-out md:p-16 md:pt-6 xl:flex-row">
                    <img src={service.image} alt={service.name} className="max-h-[500px] xl:max-w-[50%]" />
                    <div className="flex flex-col gap-6">
                      <Typography variant="h3" component="h3" className="!max-w-[400px] !font-bold uppercase">
                        {service.name}
                      </Typography>
                      <Typography variant="body1" component="p" className="!font-medium">
                        {service.description}
                      </Typography>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Container>
      </div>
    </section>
  );
}
