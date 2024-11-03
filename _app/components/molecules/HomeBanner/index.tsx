/* eslint-disable prettier/prettier */

"use client";

import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/root/_app/components/ui/select";
import { SelectContent } from "@radix-ui/react-select";
import Image from "next/image";
import { Card, CardContent } from "@/root/_app/components/ui/card";
import { Button } from "@/root/_app/components/ui/button";
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import React from "react";
import { cn } from "@/helpers/utils";

export default function HomeBanner() {
  const [date, setDate] = React.useState<Date>()

  return (
    <div className="relative w-full lg:flex">
      <Image
        src="/assets/images/banner-home.png"
        layout="responsive"
        alt="hero banner"
        height={150}
        width={200}
        className="object-cover"
      />
      <div className="lg:h-[120px] w-full lg:absolute lg:-bottom-12 flex flex-col items-center justify-center">
        <Card className="w-10/12 bg-white border-none shadow-none rounded-md">
          <CardContent className="py-0">
            <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-3">
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Booking Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Premium">Premium</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Attractions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Swimming Pool">Swimming Pool</SelectItem>
                    <SelectItem value="Museum">Museum</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-4">
                <div className="w-full">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {date ? format(date, "PPP") : <span>Visiting date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                </div>
                <Button className="bg-[#FB8B24] text-slate-950">Book Now</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
