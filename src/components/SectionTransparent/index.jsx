import { Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

export const SectionTransparent = ({ title }) => {
  return (
    <div className="relative flex w-full select-none flex-col items-center justify-center px-32 py-24 text-center text-white md:px-56">
      <div className="absolute inset-0 z-20 h-full">
        <div className="absolute inset-0 z-30 h-full bg-primary-main opacity-80" />
        <Image src="/kitchen.png" width={1000} height={500} alt="Kitchen" className="h-full w-full object-cover" />
      </div>
      <Typography
        sx={{ fontFamily: "inherit" }}
        component="h1"
        variant="h6"
        className="relative z-40 !font-normal !italic"
      >
        {title}
      </Typography>
    </div>
  );
};
