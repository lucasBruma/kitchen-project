"use client";
import { Hero } from "@/components/Hero";
import React from "react";
import styled from "@emotion/styled";
import { Intro } from "./Intro";
import { Faqs } from "./Faqs";
import WhyUs from "./WhyUs";

const Container = styled.div`
  background: linear-gradient(90deg, rgba(56, 55, 65, 0.3) -80%, rgba(250, 250, 250, 0) 100%);
`;

export const CabinetRefacing = () => {
  return (
    <main>
      <Hero title="Cabinet Refacing" />
      <Container>
        <Intro />
        <WhyUs />
        <Faqs />
      </Container>
    </main>
  );
};
