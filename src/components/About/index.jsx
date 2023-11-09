"use client";
import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { theme } from "@/styles/theme/app.theme";
import { DownSm, SmAndUp } from "../BreakpointsComponents";

const AboutText = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 2rem;
  width: 100%;

  ${theme.breakpoints.down("md")} {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  ${theme.breakpoints.down("sm")} {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const HeroBackground = styled.div`
  background: linear-gradient(180deg, #652533 0%, #000000 100%);
`;

const text1 = `Hi, I'm Jason Kidwell, founder, and CEO of Explore Kitchens in McLean, VA.`;

const text2 = `Here at Explore, Explore First is more than just a slogan, a catchphrase, or a marketing ploy. It’s the philosophy I’ve used to build this company from the ground up with you at the center of every single decision. I’ve explored the market and found the absolute best wholesalers to be my exclusive suppliers. I’ve explored the available contractors to engage the very best installers, and I’ve explored design options to bring the best state of the art kitchen design tools, because I understand that taking care of the customer means they, in turn, take care of me.`;

const text3 = `It’s a lesson I learned at ten when a neighbor offered to pay me an extra $10 a week to pooper scoop his yard before I cut the grass. It didn’t take long to realize that my extra time weed whacking and blowing the driveways of the ten customers I had in my McLean Virginia neighborhood was paying off. Plus, I was no longer wading through poop to do it! How many of you know what I’m talking about?`;

const text4 = `It drove me to reinvest my profits into a new mower and upgraded equipment, even when my Dad reminded me that was my fun money. When I started serving some of those same neighbors as a caddy at the local country club at sixteen at Washington Golf and Country Club in Arlington, VA, I carried that idea with me. While other caddies were worried about the cash tips, I was focusing on providing the absolute best service, which often led to “tips” in life advice.`;

const text5 = `Next, I went on the road selling home improvement products to residential homeowners, I explored every community first, to find out what those families wanted and needed, catering my consulting to meet their specific needs. When I say explore first, here’s what I mean.`;

const text6 = `After years of selling home improvement products on the road, where the bottom line was the main, and sometimes only focus, I realized, homeowners need someone who’s on their side. They need a trusted friend they can talk to about the things they don’t quite like about their house. They need genuine advice about the options available, and fair pricing that gives them the best value for their budget.`;

const text7 = `That’s where Explore Kitchens comes in. I’ve put together a “dream team” of regionally operated wholesalers whose products I am committed to offer, exclusively. These brands represent some of the best values in quality and price for mid-range luxury kitchen remodels and upgrades. Plus, they’ve agreed to give us some great values on price, product, and delivery.`;

export const About = () => {
  return (
    <div className="bg-background-main relative flex w-full flex-col items-center justify-center">
      <HeroBackground className="flex h-[584px] w-full justify-center md:h-[776px]" />
      <div className="xs:h-[2000px] relative flex h-[2300px] w-full max-w-[1500px] items-center justify-center sm:h-[1600px] md:h-[1400px] lg:h-[3500px]">
        <div className="absolute top-[-450px] mx-auto flex w-full flex-col items-center justify-center px-[20px] md:top-[-575px] md:px-[60px] lg:px-[70px]">
          <div className="flex flex-col items-start gap-4 md:gap-10">
            <Typography
              variant="aboutTitle"
              component="h1"
              className="text-left text-white sm:!my-4 md:!my-0 lg:!text-[56px]"
            >
              About me
            </Typography>
            <div className="min-h-[400px] overflow-hidden xl:min-h-[600px]">
              <DownSm>
                <img src="/about.jpeg" alt="About me image" />
              </DownSm>
              <SmAndUp>
                <img src="/about.jpeg" alt="About me image" />
              </SmAndUp>
            </div>
          </div>
          <div className="mb-[5rem] mt-[5rem] flex w-[90%] flex-col gap-4 text-black sm:gap-8">
            <Typography variant="h2" component="h2">
              Explore First
            </Typography>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex w-full flex-col items-start gap-4 sm:w-1/2">
                <AboutText className="!font-bold">{text1}</AboutText>
                <AboutText>{text2}</AboutText>
                <AboutText>{text3}</AboutText>
                <AboutText>{text4}</AboutText>
              </div>
              <div className="flex w-full flex-col justify-start gap-4 sm:w-1/2">
                <AboutText>{text5}</AboutText>
                <AboutText>{text6}</AboutText>
                <AboutText>{text7}</AboutText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
