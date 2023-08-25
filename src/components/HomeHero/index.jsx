import { Typography } from "@mui/material";
import Image from "next/image";

export default function HomeHero() {
  const backgroundImageUrl = "url(homeKitchen.jpg)";
  const backgroundStyle = {
    backgroundImage: `${backgroundImageUrl}`,
    backgroundSize: "cover",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  return (
    <main>
      <div
        className="relative flex h-[980px] flex-col items-start justify-center gap-8 px-6 text-white md:px-32 xl:px-56"
        style={backgroundStyle}
      >
        <div className="absolute inset-0 h-full bg-black opacity-60"></div>
        <div className="relative z-20 flex w-full flex-col gap-4">
          <Typography variant="h2" sx={{ fontFamily: "inherit" }} className="!text-[5rem] !font-bold !leading-[5rem]">
            Explore can make <span className="block italic text-secondary-light">your dream kitchen</span>
          </Typography>
          <Typography variant="h5" sx={{ fontFamily: "inherit" }} className="">
            Kitchen Remodeling in McLean, VA
          </Typography>
          <button className="relative z-20 w-fit rounded-xl bg-red-main px-5 py-3 font-medium shadow-md shadow-black duration-200 ease-in hover:bg-primary-main">
            SCHEDULE YOUR VIRTUAL OR IN-HOME CONSULTATION
          </button>
        </div>
        <div className="relative z-20 flex flex-row gap-3">
          <Image src="/houzz2020.jpeg" width={100} height={100} alt="Houzz 2020" />
          <Image src="/houzz2021.jpeg" width={100} height={100} alt="Houzz 2021" />
        </div>
      </div>
    </main>
  );
}
