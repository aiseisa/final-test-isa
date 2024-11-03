/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */

"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Label } from "@/ui/label";
import { ChevronRight } from "lucide-react";
import HeaderSection from "../HeaderSection";

export default function Accomodation() {
  const data = [
    {
      id: 1,
      image: "/assets/images/accomodation-1.png",
      title: "Equarius Villa",
      desc: "Enjoy a relaxing staycation with us.",
    },
    {
      id: 2,
      image: "/assets/images/accomodation-2.png",
      title: "Johny Walker Hotel",
      desc: "Indulge in a variety of dining options.",
    },
    {
      id: 3,
      image: "/assets/images/accomodation-3.png",
      title: "Crockfords Villa",
      desc: "Explore the city's top attractions.",
    },
  ];

  return (
    <div className="mx-auto px-5 md:px-20">
      <HeaderSection
        title="Accommodation Play Your Way"
        desc="Select from an array of staycation, dining and attraction promotions."
        actionLabel="View All Accomodation"
      />
      <div className="mt-10 w-full flex justify-center items-center">
        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          className="w-full"
        >
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem key={index} className="basis-1/1 md:basis-1/2 lg:basis-1/3">
                <div className="overflow-hidden flex flex-col gap-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    layout="responsive"
                    className="object-cover rounded-none"
                  />
                  <Label className="text-base">{item.title}</Label>
                  <Label className="cursor-pointer flex items-center text-sm text-orange-300">
                    Explore More{" "}
                    <span>
                      <ChevronRight size={16} />
                    </span>
                  </Label>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
