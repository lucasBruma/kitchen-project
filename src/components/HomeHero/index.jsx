import { Typography } from "@mui/material";

export default function HomeHero() {
  const backgroundImageUrl = "url(homeKitchen.jpg)";
  const backgroundStyle = {
    backgroundImage: `${backgroundImageUrl}`,
    backgroundSize: "cover",
  };

  return (
    <main>
      <div
        className="relative flex h-[980px] flex-col items-start justify-center gap-12 text-white"
        style={backgroundStyle}
      >
        <div className="absolute inset-0 h-full bg-black opacity-60"></div>
        <div className="relative z-20 w-full px-56">
          <Typography variant="h2" sx={{ fontFamily: "inherit" }} className="!text-[5rem] !font-bold !leading-[5rem]">
            Explore can make <span className="block italic text-secondary-light">your dream kitchen</span>
          </Typography>
        </div>
        <button className="relative z-20 mx-56 rounded-xl bg-red-main px-5 py-3 font-medium duration-100 ease-in hover:bg-primary-main focus:outline-none focus:ring-4 sm:w-auto">
          SCHEDULE YOUR VIRTUAL OR IN-HOME CONSULTATION
        </button>
      </div>
    </main>
  );
}
