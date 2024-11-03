/* eslint-disable prettier/prettier */
import { Button } from "@/root/_app/components/ui/button";
import { Label } from "@/root/_app/components/ui/label";

interface HeaderSectionProps {
  title: string;
  desc: string;
  actionLabel: string;
}

export default function HeaderSection({ title, desc, actionLabel }: HeaderSectionProps) {
  return (
    <div className="md:flex items-end justify-between">
        <div>
          <Label className="block text-2xl font-semibold">{title}</Label>
          <Label className="pt-4 block text-base text-[#57534E]">
            {desc}
          </Label>
        </div>
        <Button className="mt-3 md:mt-0 bg-[#FEE8D3] text-sm text-default">
          {actionLabel}
        </Button>
      </div>
  );
}
