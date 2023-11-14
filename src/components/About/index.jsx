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
      <div className="relative flex  w-full max-w-[1500px] items-center justify-center">
        <div className="relative top-[-300px] mx-auto flex w-full flex-col items-center justify-center px-[20px] md:top-[-525px] md:px-[60px] lg:px-[70px]">
          <div className="flex flex-col items-start gap-4 md:gap-10">
            <Typography variant="h3" component="h1" className="text-left text-white sm:!my-4 md:!my-0 lg:!text-[56px]">
              About me
            </Typography>
            <div className="min-h-[400px] overflow-hidden xl:min-h-[600px]">
              <DownSm>
                <img src="/owner-explore.jpg" alt="About me image - small" />
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
          <div className="flex w-[90%] flex-col gap-4 text-black sm:gap-8">
            <Typography variant="h2" component="h2">
              How We Chose Our Wholesalers
            </Typography>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex w-full flex-col items-start gap-4 sm:w-1/2">
                <AboutText className="!font-bold">{text1}</AboutText>
                <AboutText>
                  It started with my own parents as the model customer. I looked for brands I knew I would trust someone
                  installing in their home and I made personal connections at the top of every single company. Those
                  that responded to me as a customer, in the way I want my customers treated, made my research list.
                </AboutText>
                <AboutText>
                  While it has never been my job to do install work, I’ve always believed that knowing the product is
                  the absolute best way to meet your customers’ needs. So, I studied their brands and asked tough
                  questions about quality, supply, and delivery. I dug into their warranties, and customer reviews. When
                  I had completed my exploration, I had a shortlist. I wanted suppliers that took our partnership
                  personally, so I met with their CEOs, presidents, and regional sales directors.
                </AboutText>
                <AboutText>Thirty wholesalers were narrowed down to eight.</AboutText>
                <AboutText>
                  I wanted people who went above and beyond to get my business, like the company that put up my parents,
                  their dog, and myself in a hotel, to make a visit to their headquarters possible. I knew that people
                  like that would take my customers as seriously as they were taking me, and I think the results will
                  speak for themselves.
                </AboutText>
                <AboutText>
                  From there I needed contractors, installers I knew I could trust. So, at each of these wholesalers, I
                  asked for the contacts of the absolute best they had, and I took them through the same kind of
                  process. I even went so far as to engage an old high school sports rival as my general contractor,
                  because if you can’t trust a guy you used to meet at the old McDonalds in high school, who can you
                  trust? I needed to know that every team member would be an extension of my own passion to keep the
                  customer and our relationship front and center at all times and no personal grudge would stand in the
                  way.
                </AboutText>
              </div>
              <div className="flex w-full flex-col justify-start gap-4 sm:w-1/2">
                <AboutText>
                  If you’d prefer, you can come to our office at 1660 International Dr. Suite 600, McLean, VA 22102
                  between 8:30 a.m.-5:30 p.m. M-F and 9 a.m.-4 p.m on Saturday for a free consultation by appointment.
                </AboutText>
                <AboutText>
                  But, if it’s more convenient, I’ll be making house calls myself to measure and consult on-site for any
                  cabinet, tile, granite, or quartz kitchen remodel, kitchen renovation project you need help with. I’ve
                  done it in thousands of homes across the country and some of those customers are still my friends to
                  this day. Our proprietary digital design system allows us to bring the most accurate available
                  measurements to our installers before they even set foot in your home to ensure the products we
                  deliver will be right the first time.
                </AboutText>
                <AboutText>
                  We’re laying out this site to give you as much information as possible to explore before you make your
                  decision. We’re including information about each of our wholesalers and over the next couple of
                  months, you’ll be able to explore a page for each one. We want you to do your due diligence because
                  we’re convinced that you’ll reach the same conclusion we have, that Explore Kitchens, is the single
                  best value in product quality, service, and installation in our region.
                </AboutText>
                <AboutText>
                  Explore first, figure out what you want. We’ve created a playground of great ideas and products, and
                  we promise, you won’t have to wade through any crap to get to the good stuff.
                </AboutText>
              </div>
            </div>
            <div className="flex w-full flex-col justify-start gap-1 sm:w-1/2">
              <AboutText>Jason Kidwell</AboutText>
              <AboutText>Founder and CEO</AboutText>
              <AboutText>Explore Kitchens</AboutText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
