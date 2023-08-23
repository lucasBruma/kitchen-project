import { Typography } from "@mui/material";
import React from "react";

export const Hero = ({ title }) => {
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
      <Typography sx={{ fontFamily: "inherit" }} component="h1" variant="h2" className="relative z-10 !font-semibold">
        {title}
      </Typography>
    </div>
  );
};
