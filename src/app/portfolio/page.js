"use client";
import { Hero } from "@/components/Hero";
import React from "react";
import { Gallery } from "@/components/Gallery";

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

export default function Page() {
  return (
    <main>
      <Hero title="Portfolio" />
      <Gallery images={images} />
    </main>
  );
}
