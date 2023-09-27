import { Typography } from "@mui/material";
import React from "react";

export const SectionTransparent = ({ title }) => {
  return (
    <div className="relative flex w-full select-none flex-col items-center justify-center px-6 py-24 text-center text-white sm:px-32 md:px-56">
      <div className="absolute inset-0 z-20 h-full">
        <div className="absolute inset-0 z-30 h-full bg-primary-main opacity-80" />
        <img src="/kitchen.png" alt="Kitchen" className="h-full w-full object-cover" />
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
