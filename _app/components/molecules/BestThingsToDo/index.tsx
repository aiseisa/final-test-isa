/* eslint-disable prettier/prettier */
import Image from "next/image";
import { Label } from "@/root/_app/components/ui/label";

export default function BestThingsToDo() {
  const data = [
    {
      id: 1,
      title: "Imagine Dragon",
      image: "/assets/images/recommend-1.png",
    },
    {
      id: 2,
      title: "Tyga",
      image: "/assets/images/recommend-2.png",
    },
    {
      id: 3,
      title: "David Guetta",
      image: "/assets/images/recommend-3.png",
    },
    {
      id: 4,
      title: "Jhon Mayer",
      image: "/assets/images/recommend-4.png",
    },
  ];
  return (
    <div className="mx-auto px-5 md:px-20 bg-[#FAFAF9]">
      <div className="w-full rounded-3xl p-6 flex flex-col self-center justify-center items-center gap-3">
        <Label className="text-3xl font-semibold">Best of the Best Things to Do</Label>
        <Label className="text-[#57534E] text-base">
          The Travelers’ Choice Awards Best of the Best title celebrates the
          highest level of excellence in travel
        </Label>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
          {data.map((item) => (
            <div key={item.id} className="w-full relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                className="object-cover rounded-none w-full"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
