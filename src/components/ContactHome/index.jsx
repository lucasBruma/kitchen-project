import { Typography } from "@mui/material";
import React from "react";
import { Form } from "../Form";
import Image from "next/image";

export const ContactHome = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-12 bg-white p-12 text-primary-main md:flex-row md:px-32 md:py-24 xl:px-56">
      <div className="flex w-full flex-col items-center justify-between gap-12 rounded-lg p-12 shadow-lg md:flex-row md:items-start">
        <div className="flex flex-col gap-4 md:w-[50%]">
          <h1 className="text-5xl font-semibold">Get In Touch</h1>
          <p className="my-5 text-base font-semibold">
            Fill up the form & our Team will get back to you within 12 hours.
          </p>
          <Form />
        </div>
        <div className="flex flex-col gap-6 md:w-[42%]">
          <img src="/vienna.webp" alt="Vienna business association" />
          <div className="flex flex-col gap-6">
            <Typography variant="h4" component="h5">
              Remodeling Your Kitchen Begins With Picking the Perfect Cabinets and Countertops
            </Typography>
            <p>
              Kitchen Remodeling McLean Virginia. Explore Kitchens in McLean, VA, specializes in providing kitchen
              remodeling services for Fairfax and the entire Northern Virginia area. Use our kitchen visualizer to view
              our extensive collection of new cabinets, countertops, tile backsplash, and flooring selections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
