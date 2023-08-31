"use client";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";

const Container = styled.div`
  background: linear-gradient(90deg, rgb(185, 44, 46, 0.8) 0%, rgb(0, 0, 0, 0.9) 100%);
`;

export default function PaymentHome() {
  return (
    <Container>
      <div className="flex w-full justify-evenly gap-8 py-12 text-white md:px-32 md:py-24 xl:px-56">
        <div className="flex w-[50%] max-w-[550px] flex-col gap-2">
          <div className="flex flex-col gap-2">
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
          <Image src="/exploreCard.png" alt="explore card" width={300} height={176} />
        </div>
      </div>
    </Container>
  );
}
