import { Typography } from "@mui/material";
import Image from "next/image";

export default function Home3D() {
  return (
    <main>
      <div className="relative flex h-[400px] flex-col items-start justify-center gap-8 px-1 text-white md:px-32 ">
        <div className="absolute inset-0 z-20 h-full">
          <div className="absolute inset-0 z-30 h-full bg-black opacity-60" />
          <Image src="/bg-texture-dark-2.jpg" width={1000} height={100} alt="Texture" className="h-full w-full" />
        </div>
        <div className="relative z-30 flex w-full flex-col gap-4">
          
            <div className="relative z-20 w-fit rounded-xl bg-red-main px-10 py-3 font-medium shadow-md shadow-black duration-200 ease-in hover:bg-primary-main">
                <h2 class="text-center text-2xl  p-2">FREE 3D KITCHEN DESIGN</h2>
                <p>
                Kitchen Remodeling in McLean Virginia begins with a new design. Our Design Specialist will use the pictures and measurements you send us of your existing kitchen to create your Free 3D design. 
                </p>
            </div>
        </div> { /* className="relative flex h-[980px] flex-col items-start justify-center gap-8 px-6 text-white md:px-32 xl:px-56" */}
        <div className="relative z-20 flex flex-row gap-3 "> 
        <div><Image  src="/naturesi.png" width={501} height={327} alt="Houzz 2020" /></div>
        <div><Image src="/houzz.png" width={501} height={327} alt="Houzz 2020" /></div>
        <div><Image src="/nkba.png" width={501} height={327} alt="Houzz 2020" /></div>
        <div><Image src="/mcc-badge-4.png" width={501} height={327} alt="Houzz 2020" /></div>
         
          
          
        </div>
      </div>
    </main>
  );
}