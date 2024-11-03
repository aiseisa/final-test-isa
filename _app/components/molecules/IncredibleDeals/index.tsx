/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */

import Image from "next/image";
import { Label } from "@/root/_app/components/ui/label";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import HeaderSection from "../HeaderSection";

export default function BestThingsToDo() {
  const data = [
    {
      title: "Gili Islands Full Day Snorkling",
      desc: "Embark on a captivating full-day snorkeling experience to the enchanting Gili Islands with the esteemed PADI 5* Centerg",
      image: "/assets/images/promotions-1.png",
    },
    {
      title: "FIM Asian Road Racing Championship",
      desc: "The Asia Road Racing Championship is the only regional level motorcycle racing series in Asia. It representant the next step for riders graduating from their respective national championships",
      image: "/assets/images/promotions-2.png",
    },
    {
      title: "Ultimate Romantic Dinner",
      desc: "The bliss of being in love is best enjoyed at Tugu Lombok, where every suite is inspired with romantic tales and legends from ancient kingdoms.",
      image: "/assets/images/promotions-3.png",
    },
    {
      title: "Lombok Golf Kosaido",
      desc: "Lombok Kosaido Golf Club is a 18-hole championship course, designed by Peter Thompson, Michael Wolveridge & Perrett.",
      image: "/assets/images/promotions-4.png",
    }
  ];

  return (
    <div className="mx-auto px-5 md:px-20">
      <HeaderSection
        title="Incridible Deals"
        desc="Select from an array of staycation, dining and attraction promotions."
        actionLabel="View All Promotions"
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
              <CarouselItem key={index} className="basis-1/1 md:basis-1/2 lg:basis-1/4">
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
                  <p className="text-sm text-[#57534E] text-ellipsis max-h-10 break-words">
                    {item.desc}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}