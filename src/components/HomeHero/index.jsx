import { Typography } from "@mui/material";
import Image from "next/image";

export default function HomeHero() {
  return (
    <main>
      <div className="relative flex h-[980px] flex-col items-start justify-center gap-8 px-6 text-white md:px-32 xl:px-56">
        <div className="absolute inset-0 z-20 h-full">
          <div className="absolute inset-0 z-30 h-full bg-black opacity-60" />
          <Image src="/homeKitchen.jpg" width={1000} height={1000} alt="Kitchen" className="h-full w-full" />
        </div>
        <div className="relative z-30 flex w-full flex-col gap-4">
          <Typography
            variant="h2"
            sx={{ fontFamily: "inherit" }}
            className="!font-bold !leading-[5rem] sm:!text-[5rem]"
          >
            Explore can make <span className="block italic text-secondary-light">your dream kitchen</span>
          </Typography>
          <Typography variant="h5" sx={{ fontFamily: "inherit" }} className="">
            Kitchen Remodeling in McLean, VA
          </Typography>
        </div>
        <div className="relative z-20 flex flex-row gap-3">
          <Image src="/houzz2020.jpeg" width={100} height={100} alt="Houzz 2020" />
          <Image src="/houzz2021.jpeg" width={100} height={100} alt="Houzz 2021" />
        </div>
      </div>
    </main>
  );
}
