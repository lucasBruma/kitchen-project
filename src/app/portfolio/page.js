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
];

export default function Page() {
  return (
    <main>
      <Hero title="Portfolio" />
      <Gallery images={images} />
    </main>
  );
}
