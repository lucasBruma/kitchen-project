import Image from "next/image";
import Link from "next/link";

export default function VisualizerHome() {
  return (
    <section>
      <div className="flex w-full flex-col items-center justify-between gap-12 py-12 text-center text-primary-main sm:text-start md:px-32 md:py-24 xl:px-56">
        <h2 className="text-[3rem]">KITCHEN VISUALIZER</h2>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Image
            src="/explore-kitchen-friends.jpg"
            width={300}
            height={300}
            alt="Explore kitchen friends"
            className="rounded-[50%] border-2 border-white object-cover shadow-xl sm:w-[40%]"
          />
          <div className="flex flex-col items-center gap-4 sm:w-[45%] sm:items-start">
            <h3 className="text-2xl font-bold">
              <span className="block">Kitchen Remodeling Designs </span>From the Comfort of Your Home
            </h3>
            <p className="text-lg">
              Your kitchen is the heart of your home. That’s why we give you the controls to explore our huge catalog of
              kitchen design products. Create combinations of countertop, cabinets, and tile, appliances, and kitchen
              lighting.
            </p>
            <Link
              href="https://clickandtile.exploregraniteandquartz.digitaltilecatalog.com/en/rooms"
              className="relative z-20 w-fit rounded-xl bg-red-main px-5 py-3 font-medium text-white shadow-md shadow-black duration-200 ease-in hover:bg-primary-main"
            >
              LAUNCH THE VISUALIZER
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
