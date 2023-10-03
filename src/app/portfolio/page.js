"use client";
import { Hero } from "@/components/Hero";
import Link from "next/link";
import React from "react";
import styled from "@emotion/styled";

const images = [
  {
    src: "https://exploregranitecountertops.com/wp-content/uploads/2023/02/1-1024x683-1.jpg",
    alt: "Granite Countertops",
  },
  {
    src: "https://exploregranitecountertops.com/wp-content/uploads/2023/02/2-1024x683-1.jpg",
    alt: "Granite Countertops",
  },
  {
    src: "https://exploregranitecountertops.com/wp-content/uploads/2023/02/3-1024x683-1.jpeg",
    alt: "Granite Countertops",
  },
  {
    src: "https://exploregranitecountertops.com/wp-content/uploads/2023/02/1-1024x683-1.jpg",
    alt: "Granite Countertops",
  },
  {
    src: "https://exploregranitecountertops.com/wp-content/uploads/2023/02/2-1024x683-1.jpg",
    alt: "Granite Countertops",
  },
  {
    src: "https://exploregranitecountertops.com/wp-content/uploads/2023/02/3-1024x683-1.jpeg",
    alt: "Granite Countertops",
  },
  {
    src: "https://exploregranitecountertops.com/wp-content/uploads/2023/02/1-1024x683-1.jpg",
    alt: "Granite Countertops",
  },
  {
    src: "https://exploregranitecountertops.com/wp-content/uploads/2023/02/2-1024x683-1.jpg",
    alt: "Granite Countertops",
  },
  {
    src: "https://exploregranitecountertops.com/wp-content/uploads/2023/02/3-1024x683-1.jpeg",
    alt: "Granite Countertops",
  },
];

const ImageShadow = styled.div`
  background: rgb(0, 0, 0);
  background: linear-gradient(to top, rgba(109, 56, 64, 1) 0%, rgba(255, 255, 255, 0) 40%);
`;

export default function Page() {
  return (
    <main>
      <Hero title="Portfolio" />
      <div className="grid w-full grid-cols-1 gap-4 px-6 py-12 md:grid-cols-2 md:px-32 lg:grid-cols-3 lg:gap-8 xl:px-56">
        {images.map((image) => (
          <Link
            href=""
            className="group relative overflow-hidden rounded-md border-2 border-white duration-300 ease-in hover:shadow-lg hover:shadow-gray-400"
            key={image.src}
          >
            <img src={image.src} alt={image.alt} className="object-cover duration-300 ease-in group-hover:!scale-110" />
            <ImageShadow className="absolute inset-0 h-full w-full" />
          </Link>
        ))}
      </div>
    </main>
  );
}
