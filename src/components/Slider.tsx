"use client";
import { Carousel } from "flowbite-react";
import SectionHeading from "./SectionHeading";

export function CarouselSlider() {
  return (
    <>
      <SectionHeading subtitle="We believe art is a powerful form of expression and communication, and our gallery aims to foster a deeper appreciation for the creative process. Whether you're an avid art collector, a casual admirer, or simply looking for inspiration, our gallery offers something for everyone.">
        Gallery Moments
      </SectionHeading>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel className="h-[400px]">
          <img src="https://i.ibb.co/LgSQk60/3.jpg" alt="..." />
          <img src="https://i.ibb.co/MkSvgHT/4.jpg" alt="..." />
          <img src="https://i.ibb.co/4NCkMp9/2.jpg" alt="..." />
        </Carousel>
      </div>
    </>
  );
}
