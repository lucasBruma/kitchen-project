import { Typography } from "@mui/material";
import Link from "next/link";
import { SiCodereview } from "react-icons/si";
import { AiOutlineCheck } from "react-icons/ai";

export default function RemodelingHome() {
  return (
    <section>
      <div className="flex w-full flex-col items-center justify-between gap-12 py-12 text-primary-main md:px-32 md:py-24 xl:px-56">
        <h2 className="text-[3rem]">EXPLORE KITCHEN REMODELING</h2>
        <div className="flex w-full justify-between gap-16">
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-[140px] w-[140px] items-center justify-center gap-0 rounded-[50%] shadow-xl">
              <Typography variant="h2">90</Typography>
            </div>
            <Typography variant="h6" className="max-w-[320px] text-center">
              Submit a 90-second application on our enhancify site
            </Typography>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-[140px] w-[140px] items-center justify-center gap-0 rounded-[50%] shadow-xl">
              <SiCodereview className="text-[4rem]" />
            </div>
            <Typography variant="h6" className="max-w-[320px] text-center">
              Review offers, and select the one that&apos;s right for your kitchen remodel
            </Typography>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-[140px] w-[140px] items-center justify-center gap-0 rounded-[50%] shadow-xl">
              <AiOutlineCheck className="text-[4rem]" />
            </div>
            <Typography variant="h6" className="max-w-[320px] text-center">
              Submit a 90-second application on our enhancify site
            </Typography>
          </div>
        </div>
        <Link href="https://www.enhancify.com/explore-kitchens-financing-offers" target="blank">
          <button className="relative z-20 w-fit rounded-xl bg-red-main px-5 py-3 font-medium text-white shadow-md shadow-black duration-200 ease-in hover:bg-primary-main">
            GET STARTED TODAY
          </button>
        </Link>
      </div>
    </section>
  );
}
