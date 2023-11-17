"use client";
import { Hero } from "@/components/Hero";
import React from "react";
import styled from "@emotion/styled";


const Container = styled.div`
  background: linear-gradient(90deg, rgba(56, 55, 65, 0.3) -80%, rgba(250, 250, 250, 0) 100%);
`;

export const OurProcess = () => {
  return (
    <main>
      <Hero title="OUR PROCESS" />
      
    </main>
  );
};