"use client";
import { Hero } from "@/components/Hero";
import React from "react";
import styled from "@emotion/styled";
import { Intro } from "./Intro";
import { Faqs } from "./Faqs";

const Container = styled.div`
  background: linear-gradient(90deg, rgba(56, 55, 65, 0.3) -80%, rgba(250, 250, 250, 0) 100%);
`;

export const CabinetRefacing = () => {
  return (
    <main>
      <Hero title="Cabinet Refacing" />
      <Container>
        <div className="w-full px-6 text-primary-main md:px-32 xl:px-56" sx={{ fontFamily: "inherit" }}>
          <div className="py-12 md:py-24">
            {/* <Link href="/contact">
              <button className="relative z-20 mt-6 flex w-fit flex-row items-center rounded-xl bg-red-main p-5 px-5 py-3 font-medium text-white shadow-md shadow-black duration-200 ease-in hover:bg-primary-main">
                CONTACT US
              </button>
            </Link> */}

            <Intro />
            {/* Section TITTLE 2 */}
            <div className="p-5 pb-12 text-start md:pb-20">
              <h2 className="text-4xl font-bold">What Are the Benefits of Cabinet Refacing?</h2>
            </div>
            {/* Section TITTLE 3 */}
            <div className="p-5 pb-12 text-start md:pb-20">
              <h2 className="text-4xl font-bold">How Much Does Cabinet Refacing Cost?</h2>
            </div>
            {/* Section TITTLE 4 */}
            <div className="p-5 pb-12 text-start md:pb-20">
              <h2 className="text-4xl font-bold">Who Should You Trust to Perform Cabinet Refacing?</h2>
            </div>
            <Faqs />
          </div>
        </div>
      </Container>
    </main>
  );
};
