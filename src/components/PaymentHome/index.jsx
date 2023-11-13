"use client";
import { Typography } from "@mui/material";
import Link from "next/link";
import styled from "@emotion/styled";

const Container = styled.div`
  background: linear-gradient(90deg, rgb(0, 0, 0, 0.8) 0%, rgb(185, 44, 46, 0.9) 100%);
`;

export default function PaymentHome() {
  return (
    <Container>
      <div className="flex w-full flex-col items-center justify-between gap-8 py-12 text-white sm:flex-row sm:items-start md:px-32 md:py-24 xl:px-56">
        <div className="flex max-w-[550px] flex-col items-center gap-2 px-6 sm:w-[50%] sm:items-start sm:px-0">
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h2 className="text-[3rem]">Easy Payment Plan</h2>
            <p>
              With our make-it-easy payment plans, you could have Explore Kitchens make your dream kitchen for just
              $300/month! Contact us for more information about financing your project.
            </p>
          </div>
          <Link href="https://www.enhancify.com/explore-kitchens-financing-offers" target="blank">
            <button className="relative z-20 mt-6 w-fit rounded-xl bg-red-main px-5 py-3 font-medium text-white shadow-md shadow-black duration-200 ease-in hover:bg-primary-main">
              APPLY NOW FOR EZ PAYMENTS
            </button>
          </Link>
        </div>{" "}
        <div>
          <img src="/exploreCard.png" alt="explore card" />
        </div>
      </div>
    </Container>
  );
}
