"use client";

/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

export default function Navbar() {
  return (
    <header className="flex h-14 w-full items-center justify-between border-b px-4 lg:h-[60px] lg:px-8 sticky top-0 z-50 bg-white">
      <div className="flex items-center gap-4">
        <Image
          src="/assets/images/brand.png"
          alt="Brand Logo"
          height={280}
          width={300}
        />
      </div>
      <div className="hidden lg:flex items-center justify-center gap-5">
        <Link href="/">Home</Link>
        <Link href="/">Hotels</Link>
        <Link href="/">Food & Beverage</Link>
        <Link href="/">Events</Link>
        <Link href="/">Attractions</Link>
        <Link href="/">Promotions</Link>
      </div>
      <div className="flex lg:hidden items-center gap-5">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Label className="text-lg">Menu</Label>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/">Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/">Hotels</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/">Food & Beverage</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/">Events</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/">Attractions</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/">Promotions</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <Image
          src="/assets/icons/cart.svg"
          alt="Cart"
          width={30}
          height={30}
          className="object-contain"
        />
        <div className="flex border-[1px] border-slate-400 rounded-md bg-white items-center px-2 ring-offset-background focus-within:ring-1 focus-within:ring-ring">
          <Input
            placeholder="Search"
            icon={<FaSearch className="text-slate-400" size={10} />}
            className="h-8 border-none focus-visible:outline-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:border-transparent focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 "
          />
        </div>
        <div className="flex justify-evenly">
          <div className="bg-orange-200 px-2 py-1 flex items-center rounded-s-sm border-[1px] border-orange-400">
            <Label className="text-xs">EN</Label>
          </div>
          <div className="bg-slate-300 px-2 py-1 flex items-center rounded-e-sm">
            <Label className="text-xs">ID</Label>
          </div>
        </div>
      </div>
    </header>
  );
}
