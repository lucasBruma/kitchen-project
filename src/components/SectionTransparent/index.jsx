import { Typography } from "@mui/material";
import React from "react";

export const SectionTransparent = ({ title }) => {
  const backgroundImageUrl = "url(kitchen.png)";
  const backgroundStyle = {
    backgroundImage: `${backgroundImageUrl}`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div
      className="relative flex w-full select-none flex-col items-center justify-center px-32 py-24 text-center text-white md:px-80"
      style={backgroundStyle}
    >
      <div className="absolute inset-0 bg-primary-main opacity-80"></div>
      <Typography
        sx={{ fontFamily: "inherit" }}
        component="h1"
        variant="h6"
        className="relative z-10 !font-normal !italic"
      >
        {title}
      </Typography>
    </div>
  );
};
