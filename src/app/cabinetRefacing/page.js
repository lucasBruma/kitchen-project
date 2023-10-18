"use client";
import { Hero } from "@/components/Hero";
import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

export const metadata = {
  title: "Portfolio - Explore Kitchens",
  description: "Portfolio - Explore Kitchens - Kitchen Remodeling Northern Virginia",
};

const Container = styled.div`
  background: linear-gradient(90deg, rgba(56, 55, 65, 0.3) -80%, rgba(250, 250, 250, 0) 100%);
`;

export default function Page() {
  return (
    <main>
    <Hero title="Cabinet Refacing"/>
    <Container>
      <div className="w-full px-6 text-primary-main md:px-32 xl:px-56" sx={{ fontFamily: "inherit" }}>
        <div className="py-12 md:py-24">

              <Link href="/contact">
                <button className="relative z-20 flex flex-row items-center mt-6 w-fit rounded-xl bg-red-main px-5 py-3 font-medium text-white shadow-md shadow-black duration-200 ease-in hover:bg-primary-main p-5">
                  CONTACT US
                </button>
              </Link>

          {/* Section TITTLE 1 */}
          <div className="pb-12 text-start md:pb-20 p-5">
            <h2 className="text-4xl font-bold">What Is Cabinet Refacing?.</h2>
          </div>
          {/* Section TITTLE 2 */}
          <div className="pb-12 text-start md:pb-20 p-5">
            <h2 className="text-4xl font-bold">What Are the Benefits of Cabinet Refacing?.</h2>
          </div>
          {/* Section TITTLE 3 */}
          <div className="pb-12 text-start md:pb-20 p-5">
            <h2 className="text-4xl font-bold">How Much Does Cabinet Refacing Cost?.</h2>
          </div>
          {/* Section TITTLE 4 */}
          <div className="pb-12 text-start md:pb-20 p-5">
            <h2 className="text-4xl font-bold">Who Should You Trust to Perform Cabinet Refacing?.</h2>
          </div>

        </div>
      </div>
    </Container>
          
    </main>
  );
}
