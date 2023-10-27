import React from "react";
import { Typography } from "@mui/material";

const steps = [
  {
    title: "Remove the doors and drawer fronts from your kitchen cabinets",
  },
  {
    title: "Add a new veneer to your kitchen cabinets",
  },
  {
    title: "Install new doors and drawer fronts on your kitchen cabinets",
  },
  {
    title:
      "Consider putting new hardware such as soft close concealed hinges on the doors and new slides for your drawer boxes.",
  },
  {
    title: "Think about adding accessories like lighting, crown molding, etc., to your kitchen cabinets",
  },
];

export const Intro = () => {
  return (
    <>
      <div className="flex flex-col gap-14 py-12 text-start md:py-20">
        <Typography variant="h2" component="h2" className="!px-4 text-center !text-3xl text-black/40 lg:!text-5xl">
          Before you consider cabinet replacement,{" "}
          <span className="mt-3 block font-bold uppercase text-black lg:mt-6">explore cabinet refacing!</span>
        </Typography>
        <div className="flex flex-col items-center justify-around gap-8 px-8 lg:flex-row lg:gap-0">
          <img src="/owner-explore.jpg" className="aspect-auto w-[350px]" alt="explore kitchens owner" />
          <div className="flex flex-col gap-8 text-lg lg:w-1/2">
            <div className="text-black">
              {" "}
              When you replace kitchen cabinets, you&apos;ll obviously remove cabinets from your kitchen&apos;s walls,
              throw them out, and put new ones in their place.{" "}
              <span className="font-bold">But for cabinet refacing, you&apos;ll follow these steps:</span>
            </div>
            <div className="flex flex-col gap-6">
              {steps.map((step, index) => (
                <div className="relative" key={index}>
                  <div className="flex items-center gap-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-main text-white">
                      {index + 1}
                    </div>
                    <p className="w-[90%] text-black/80">{step.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
