import { Typography } from "@mui/material";
import React from "react";

export const Hero = ({ title, subtitle }) => {
  const backgroundImageUrl = "url(kitchen.png)";
  const backgroundStyle = {
    backgroundImage: `${backgroundImageUrl}`,
    backgroundPosition: "center", // Adjust the background image position
    backgroundSize: "cover", // Adjust how the background image covers the container
  };

  return (
    <div
      className="justify-cente relative flex w-full select-none flex-col items-center pb-16 pt-48 text-center text-white"
      style={backgroundStyle}
    >
      <div className="absolute inset-0 bg-primary-main opacity-80"></div>
      <Typography component="h1" variant="h2" className="relative z-10">
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="h5" component="h2" className="relative z-10 !mt-3">
          {subtitle}
        </Typography>
      )}
    </div>
  );
};
