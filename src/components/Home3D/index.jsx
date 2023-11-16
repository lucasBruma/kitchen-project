import Link from "next/link";

export default function Home3D() {
  return (
    <main>
      <div className="relative flex flex-col items-start justify-center gap-8 px-6 py-16 text-white sm:px-32 xl:px-56">
        <div className="absolute inset-0 z-20 h-full">
          <div className="absolute inset-0 z-30 h-full bg-black" />
        </div>
        {/* className="relative flex h-[980px] flex-col items-start justify-center gap-8 px-6 text-white md:px-32 xl:px-56" */}
        <div className="relative z-20 flex w-full flex-wrap justify-start gap-3 lg:flex-row xl:flex-nowrap xl:justify-between">
          <div>
            <img src="/naturesi.jpg" alt="Houzz 2020" className="h-full w-full min-w-[250px] xl:w-[330px]" />
          </div>
          <Link
            href="https://www.houzz.com/professionals/kitchen-and-bath-remodelers/explorekitchens-com-pfvwus-pf~562836551?"
            target="blank"
          >
            <img src="/houzz.jpg" alt="Houzz 2020" className="h-full w-full min-w-[250px] xl:w-[330px]" />
          </Link>
          <div>
            <img src="/nkba.jpg" alt="Houzz 2020" className="h-full w-full min-w-[250px] xl:w-[330px]" />
          </div>
          <div>
            <img src="/mcc-badge-4.jpg" alt="Houzz 2020" className="h-full w-full min-w-[250px] xl:w-[330px]" />
          </div>
        </div>
      </div>
    </main>
  );
}
