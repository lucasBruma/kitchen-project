"use client";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

export default function TestimonialsHome() {
  return (
    <div className="w-full px-6 text-black md:px-32 xl:px-56" sx={{ fontFamily: "inherit" }}>
      <div className="py-12 md:py-24">
        {/* Section header */}
        <div className="pb-12 text-start md:pb-20">
          <h2 className="text-4xl font-bold">Testimonials From Actual Customers.</h2>
        </div>

        {/* Items */}
        <div className="mx-auto grid max-w-sm items-start gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-16">
          {/* 1st item */}
          <div className="relative flex flex-col items-start rounded-xl bg-white/90 shadow-xl">
            <figure className="overflow'hidden">
              <blockquote className="text-black-400 p-5 text-start text-lg">
                {/* QUOTE 'ICON*/}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-quote"
                    viewBox="0 0 16 16"
                    className="text-red "
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                  </svg>
                </div>
                <p className="font'bold text'lg">
                  Jason was very knowledgeable and organized. I couldn’t have asked for a better outcome or experience.
                  <br />
                  <br />– Maria V.
                </p>
              </blockquote>
            </figure>
          </div>

          {/* 2nd item */}
          <div className="relative flex flex-col items-start rounded-xl bg-white/90 shadow-xl">
            <figure className="overflow'hidden">
              <blockquote className="text-black-400 p-5 text-start text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-quote"
                  viewBox="0 0 16 16 "
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
                <p>
                  I thoroughly enjoyed working with Jason. He is responsive and extremely courteous. He found a
                  countertop for our powder room that is perfect!
                  <br />
                  <br />– Ann R. (Vienna, VA)
                </p>
              </blockquote>
            </figure>
          </div>

          {/* 3rd item */}
          <div className="relative flex flex-col items-start rounded-xl bg-white/90 shadow-xl">
            <figure className="overflow'hidden">
              <blockquote className="text-black-400 p-5 text-start text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-quote"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
                <p>
                  Jason took his time and shared his expertise and knowledgeable of his product offerings. He was very
                  patient with me and the questions I had. His follow up was exceptional. He is the definition of
                  excellent customer service. The installation happened prior to the estimated installation date, the
                  crew was professional and took great care with all aspects of the product installation, and the end
                  product is exceptionally beautiful. I would highly recommend Explore to anyone contemplating a
                  purchase of granite and/or quartz.
                  <br />
                  <br />– Susan R. (McLean, VA)
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
