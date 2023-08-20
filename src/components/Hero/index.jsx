import { Typography } from "@mui/material";
import React from "react";

export const Hero = ({ title, subtitle }) => {
  const backgroundImageUrl = "url(kitchen.png)";
  const backgroundStyle = {
    backgroundImage: `${backgroundImageUrl}`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div
      className="relative flex w-full select-none flex-col items-center justify-center pb-16 pt-36 text-center text-white xl:pt-48"
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
