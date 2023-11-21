"use client";
import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background: linear-gradient(90deg, rgb(0, 0, 0, 0.8) 0%, rgb(185, 44, 46, 0.9) 100%);
`;

export const ProcessIntro = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-between gap-8 py-12 text-white sm:items-center md:px-10 md:py-24 lg:flex-row xl:px-56">
        <div className="sm:px-0p-5 flex max-w-[500px] flex-col items-center gap-2 px-6 sm:w-[100%] sm:items-start">
          <h2 className="text-[2rem] font-bold text-red-main ">INITIAL SITE VISIT</h2>
          <p className="text-black">
            After your initial contact with Explore, one of our principals will schedule a meeting with you at your home
            or office. This is a time to get acquainted, learn about each other, and discuss design options and cost
            implications for your project. Please have a copy of your plat on hand and your wish list, and a general
            idea of this meeting s budget. We will provide information about Explore, including references, reprints of
            publications, and other pertinent information to help you with your selection process. If you choose to move
            forward with Explore, we will prepare a contract for your review and approval. Explore uses the American
            Institute of Architects Contract Document Series.
          </p>
        </div>

        <div className="">
          <img src="/process.jpg" alt="explore card" />
        </div>
      </div>
    </>
  );
};
