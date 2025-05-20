"use client";

import React from "react";
// import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import PinterestIcon from "@mui/icons-material/Pinterest";
// import YouTubeIcon from "@mui/icons-material/YouTube";

const FooterComponent = () => {
  return (
    <div className="min-h-min w-full flex items-center justify-center pt-[4rem] pb-[2rem] bg-primary">
      <div className="w-[90%] h-fit flex flex-col items-center justify-center gap-8">
        <div className="w-full h-fit flex flex-col items-center justify-center lg:gap-[100px]">
          {/* <div className="w-full lg:w-[75%] flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
            <div className="flex flex-col items-start justify-center gap-4 lg:gap-2">
              <h2 className="w-full lg:w-a text-2xl lg:text-4xl text-white text-nowrap font-semibold text-center lg:text-start">
                Sign up to our newsletter
              </h2>
              <p className=" text-white-80 text-base lg:text-lg leading-6 lg:leading-7 text-center">
                Stay up to date with our latest news, announcements, and
                articles.
              </p>
            </div>
            <div className=" flex flex-col lg:flex-row flex-nowrap items-center justify-center py-2 lg:p-0 gap-4 lg:gap-2">
              <input
                title="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="w-[275px] h-auto rounded-xl px-6 py-2 bg-primary-light border border-white-40 text-white-80 focus:outline-none focus:border-white-80 transform transition-all duration-300 text-start text-base lg:text-xl placeholder:lg:text-xl placeholder:text-base"
              />
              <Button className="capitalize bg-light-blue border border-primary text-primary text-base lg:text-lg rounded-xl transform transition-all duration-300 hover:bg-transparent hover:text-light-blue hover:border-light-blue lg:px-4 lg:py-5 p-3">
                submit
              </Button>
            </div>
          </div> */}
          <div className="flex-1 w-full py-[3rem] flex flex-col lg:flex-row items-center lg:items-start justify-center lg:gap-6 gap-12 flex-wrap">
            <div className="w-full lg:w-[400px] flex flex-col items-center lg:items-start justify-center gap-6">
              <div className="flex flex-row items-center justify-center gap-2 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                <Link href={"/"}>
                  <Image
                    src={"/images/logo-nobg.png"}
                    alt="logo"
                    width={0}
                    height={0}
                    draggable="false"
                    unoptimized
                    quality={100}
                    className="w-auto h-[55px] lg:h-[75px] object-cover rounded-2xl"
                  />
                </Link>
                <p className="text-xl lg:text-2xl text-light-blue font-semibold">
                  H & D Consultants
                </p>
              </div>
              <p className="text-wrap text-base lg:text-lg leading-6 lg:leading-7 text-white-80 text-center lg:text-start">
                H & D Group Mangalore is a trusted name offering diverse
                services, including manpower outsourcing, finance
                consultancy, property management, and stock broking.
              </p>
              <div className="flex flex-row items-center justify-center gap-4">
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=100091420968584&mibextid=ZbWKwL"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-light-blue rounded-[5px] p-1 border border-primary cursor-pointer transform transition-all duration-300 hover:bg-transparent hover:border-light-blue"
                >
                  <FacebookOutlinedIcon
                    className="text-primary transform transition-all duration-300 group-hover:text-light-blue"
                    fontSize="medium"
                  />
                </Link>
                {/* <div className="group bg-light-blue rounded-[5px] p-1 border border-primary cursor-pointer transform transition-all duration-300 hover:bg-transparent hover:border-light-blue">
                  <WhatsAppIcon
                    className="text-primary transform transition-all duration-300 group-hover:text-light-blue"
                    fontSize="medium"
                  />
                </div> */}
                {/* <div className="group bg-light-blue rounded-[5px] p-1 border border-primary cursor-pointer transform transition-all duration-300 hover:bg-transparent hover:border-light-blue">
                  <XIcon
                    className="text-primary transform transition-all duration-300 group-hover:text-light-blue"
                    fontSize="medium"
                  />
                </div> */}
                {/* <div className="group bg-light-blue  rounded-[5px] p-1 border border-primary cursor-pointer transform transition-all duration-300 hover:bg-transparent hover:border-light-blue">
                  <PinterestIcon
                    className="text-primary transform transition-all duration-300 group-hover:text-light-blue"
                    fontSize="medium"
                  />
                </div> */}
                <Link
                  href={
                    "https://www.instagram.com/hdmangalore/profilecard/?igsh=MW44c2QwZ3BsMDU0Nw%3D%3D"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-light-blue rounded-[5px] p-1 border border-primary cursor-pointer transform transition-all duration-300 hover:bg-transparent hover:border-light-blue"
                >
                  <InstagramIcon
                    className="text-primary transform transition-all duration-300 group-hover:text-light-blue"
                    fontSize="medium"
                  />
                </Link>
                {/* <div className="group bg-light-blue rounded-[5px] p-1 border border-primary cursor-pointer transform transition-all duration-300 hover:bg-transparent hover:border-light-blue">
                  <YouTubeIcon
                    className="text-primary transform transition-all duration-300 group-hover:text-light-blue"
                    fontSize="medium"
                  />
                </div> */}
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center lg:items-start justify-center gap-6">
                <h3 className="text-lg lg:text-xl text-white capitalize font-semibold">
                  pages
                </h3>
                <ul className="flex flex-col items-center lg:items-start justify-center gap-4">
                  <Link href={"/"}>
                    <li className="capitalize text-white-80 text-base lg:text-lg transform transition-all duration-300 hover:text-orange cursor-pointer text-nowrap">
                      home
                    </li>
                  </Link>
                  <Link href={"/#home-about-us"}>
                    <li className="capitalize text-white-80 text-base lg:text-lg transform transition-all duration-300 hover:text-orange cursor-pointer text-nowrap">
                      about us
                    </li>
                  </Link>
                  <Link href={"/#home-our-services"}>
                    <li className="capitalize text-white-80 text-base lg:text-lg transform transition-all duration-300 hover:text-orange cursor-pointer text-nowrap">
                      services
                    </li>
                  </Link>
                  <Link href={"/#home-our-team"}>
                    <li className="capitalize text-white-80 text-base lg:text-lg transform transition-all duration-300 hover:text-orange cursor-pointer text-nowrap">
                      our team
                    </li>
                  </Link>
                  <Link href={"/contact"}>
                    <li className="capitalize text-white-80 text-base lg:text-lg transform transition-all duration-300 hover:text-orange cursor-pointer text-nowrap">
                      contact us
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center lg:items-start justify-center gap-6">
                <h3 className="text-lg lg:text-xl text-white capitalize font-semibold">
                  services
                </h3>
                <ul className="flex flex-col items-center lg:items-start justify-center gap-4">
                  
                  <li className="capitalize text-white-80 text-base lg:text-lg transform transition-all duration-300 hover:text-orange text-nowrap">
                    manpower outsourcing
                  </li>
                  <li className="capitalize text-white-80 text-base lg:text-lg transform transition-all duration-300 hover:text-orange text-nowrap">
                    finance consultancy
                  </li>
                  <li className="capitalize text-white-80 text-base lg:text-lg transform transition-all duration-300 hover:text-orange text-nowrap">
                    property management
                  </li>
                  <li className="capitalize text-white-80 text-base lg:text-lg transform transition-all duration-300 hover:text-orange text-nowrap">
                    stock brokers
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center lg:items-start justify-center gap-6">
                <h3 className="text-xl text-white capitalize font-semibold">
                  address
                </h3>
                <div className="text-white-80 text-center lg:text-start flex flex-col items-center lg:items-start justify-center leading-7 gap-4">
                  {/* <p className="">
                    H & D Consultants
                    <br />
                    Shop No. T19 & T19B
                    <br />
                    Door No. 25-1-65/151 & 25-1-65/152
                    <br />
                    Third Floor, Kankanady Gate,
                    <br />
                    Kankanady Bypass Road, Kankanady,
                    <br />
                    Mangaluru, Karnataka, 575002
                  </p>
                  <p className="text-wrap">
                    +91 8867286230 / 7483798215
                  </p>
                  <p>
                  shylesh@hd-group.in |&nbsp; hannamangalore@outlook.com
                  </p> */}
                  <div className="p-[0.9px] lg:p-[0.5px] bg-light-blue">
                    <Image
                      src={"/images/business-card-nobg.png"}
                      alt="business-card"
                      width={0}
                      height={0}
                      quality={100}
                      unoptimized
                      draggable="false"
                      className="w-full h-auto bg-slate-800 pb-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto py-[1px] lg:p-0 lg:h-[0.5px] bg-white-40"></div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-white-80 text-base text-center lg:text-start">
            &copy;2024 H & D Group Mangaluru. All rights reserved | Terms of
            Service | Privacy Policy
          </div>
          <div className="flex-1 text-white-80 text-base text-center lg:text-end">
            Powered by &nbsp;&quot;
            <Link
              href={"https://nexainnov.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:text-orange hover:underline hover:underline-offset-2 cursor-pointer z-1000"
            >
              NexaInnov Solutions
            </Link>
            &quot;
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
