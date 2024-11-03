/* eslint-disable prettier/prettier */

"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import HeaderSection from "@/root/_app/components/molecules/HeaderSection";
import { Card } from "@/root/_app/components/ui/card";
import { Label } from "@/root/_app/components/ui/label";

export default function NewestEvent() {
  return (
    <div className="mx-auto px-5 md:px-20">
      <HeaderSection
        title="Newest Happening"
        desc="From the latest dining destination to exhilarating events, there’s always a new moment to discover."
        actionLabel="View All Events"
      />
      <div className="w-full md:flex mt-10">
        <Card className="rounded-3xl overflow-hidden md:flex w-full justify-evenly gap-5 items-center shrink-0">
          <Image
            src="/assets/images/newest-event.png"
            alt="newest event"
            width={100}
            height={100}
            layout="responsive"
            className="rounded-none"
          />
          <div className="gap-y-4 flex flex-col px-16 py-5 h-full justify-center">
            <Label className="text-2xl font-semibold">
              Pertamina Grand Prix of Indonesia
            </Label>
            <Label className="text-base text-[#57534E] inline-block overflow-hidden text-ellipsis break-words">
              MotoGP is a premier motorcycle racing championship that features highly skilled riders from around the world competing on purpose-built racing motorcycles. It is considered the pinnacle of motorcycle road racing and attracts a large global audience...
            </Label>
            <Label className="cursor-pointer flex items-center text-base text-[#FB8B24] mt-5">
              Explore More
              <span>
                <ChevronRight size={16} />
              </span>
            </Label>
          </div>
        </Card>
      </div>
    </div>
  );
}
