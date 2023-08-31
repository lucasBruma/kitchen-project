import Image from "next/image";
import Link from "next/link";

export default function RemodelingHome() {
  return (
    <section>
      <div className="flex w-full items-center justify-between gap-2 py-12 text-primary-main md:px-32 md:py-24 xl:px-[300px]">
        <h2 className="text-[3rem]">EXPLORE KITCHEN REMODELING</h2>

        <Link href="https://www.enhancify.com/explore-kitchens-financing-offers" target="blank">
          <button className="relative z-20 w-fit rounded-xl bg-red-main px-5 py-3 font-medium text-white shadow-md shadow-black duration-200 ease-in hover:bg-primary-main">
            GET STARTED TODAY
          </button>
        </Link>
      </div>
    </section>
  );
}
