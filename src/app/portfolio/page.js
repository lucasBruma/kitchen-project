"use client";
import { Hero } from "@/components/Hero";
import React from "react";
import { Gallery } from "@/components/Gallery";

const images = [
  {
    src: "/gallery/1.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/2.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/3.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/4.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/5.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/6.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/7.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/8.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/9.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/10.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/11.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/12.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/13.jpeg",
    alt: "Portfolio image",
  },
  { src: "/gallery/14.jpeg", alt: "Portfolio image" },
  {
    src: "/gallery/15.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/16.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/17.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/18.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/19.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/20.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/21.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/22.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/23.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/24.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/25.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/26.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/27.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/28.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/29.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/30.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/31.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/32.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/33.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/34.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/35.jpeg",
    alt: "Portfolio image",
  },
  {
    src: "/gallery/36.jpeg",
    alt: "Portfolio image",
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
