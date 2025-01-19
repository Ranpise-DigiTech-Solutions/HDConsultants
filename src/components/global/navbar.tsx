"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
// import { scrollToSection } from "@/lib/utils";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSheet } from "@/app/providers/sheet-provider";

const NavbarComponent = () => {

  const { isSheetOpen, closeSheet, toggleSheet } = useSheet();

  return (
    <div className="min-h-fit w-full bg-primary flex items-center justify-center py-4 fixed z-50">
      <div className="w-[90%] h-full flex flex-row items-center justify-center gap-12">
        <div className="flex-1 flex flex-row items-center justify-start">
          <div className="flex flex-row items-center justify-center gap-2 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <Link href={"/"}>
              <Image
                src={
                  "/images/logo-nobg.png"
                }
                alt="logo"
                width={0}
                height={0}
                draggable="false"
                unoptimized
                quality={100}
                className="w-auto h-[55px] lg:h-[65px] object-cover rounded-2xl"
              />
            </Link>
            <p className="text-xl lg:text-2xl text-light-blue font-bold">
              H & D Consultants
            </p>
          </div>
        </div>
        <nav className="h-full hidden lg:flex items-center justify-center">
          <ul className="w-fit h-full flex flex-row items-center justify-center gap-8">
            <li className="capitalize text-xl text-white transform transition-all duration-300 hover:text-orange cursor-pointer">
              <Link href={"/"}>home</Link>
            </li>
            <li className="capitalize text-xl text-white flex-shrink-0 transform transition-all duration-300 hover:text-orange cursor-pointer">
              <Link href={"/#home-about-us"}>about us</Link>
            </li>
            <li className="capitalize text-xl text-white transform transition-all duration-300 hover:text-orange cursor-pointer">
              <Link href={"/services"}>
                services
              </Link>
            </li>
            <li className="capitalize text-xl text-white flex-shrink-0 transform transition-all duration-300 hover:text-orange cursor-pointer">
              <Link href={"/#home-our-team"}>our team</Link>
            </li>
          </ul>
        </nav>
        <div className="flex-1 hidden lg:flex items-center justify-end">
          <Link href={"/contact"}>
            <Button className="px-6 py-5 text-lg capitalize rounded-full border border-primary bg-light-blue text-primary transform transition-all duration-300 hover:bg-transparent hover:text-light-blue hover:border-light-blue">
              get in touch
            </Button>
          </Link>
        </div>
        <div className="lg:hidden block z-1000">
          <Sheet open={isSheetOpen} onOpenChange={toggleSheet}>
            <SheetTrigger asChild>
              <Menu className="text-orange w-[2rem] h-[2rem] cursor-pointer" />
            </SheetTrigger>
            <SheetContent className="w-full bg-secondary-light z-1000">
              <SheetHeader className="hidden">
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when youre done.
                </SheetDescription>
              </SheetHeader>
              <div>
                <div className="flex flex-row items-center justify-start gap-2 ">
                  <Image
                    src={
                      "/images/logo-nobg.png"
                    }
                    alt="logo"
                    width={0}
                    height={0}
                    draggable="false"
                    unoptimized
                    quality={100}
                    className="w-auto h-[55px] lg:h-[65px] object-cover rounded-2xl"
                  />
                  <p className="text-xl font-bold text-primary text-wrap pr-4">
                    H & G Consultants
                  </p>
                </div>
              </div>
              <div className="py-16 px-6 flex flex-col items-start justify-center gap-12">
                <Link
                  href={"/"}
                  className="text-xl capitalize text-primary font-semibold"
                  onClick={closeSheet}
                >
                  home
                </Link>
                <Link
                  href={"/#home-about-us"}
                  className="text-xl capitalize text-primary font-semibold"
                  onClick={closeSheet}
                >
                  about us
                </Link>
                <Link
                  href={"/services"}
                  className="text-xl capitalize text-primary font-semibold"
                  onClick={closeSheet}
                >
                  services
                </Link>
                <Link
                  href={"/#home-our-team"}
                  className="text-xl capitalize text-primary font-semibold"
                  onClick={closeSheet}
                >
                  our team
                </Link>
              </div>
              <div className="w-full py-4 flex items-center justify-center">
                <Link href={"/contact"}>
                  <Button
                    type="submit"
                    className="text-secondary-light rounded-full text-lg p-6 capitalize"
                    onClick={closeSheet}
                  >
                    get in touch
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
