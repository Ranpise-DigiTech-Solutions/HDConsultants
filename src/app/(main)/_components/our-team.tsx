"use client";

import React from "react";
import Image from "next/image";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import PinterestIcon from "@mui/icons-material/Pinterest";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const OurTeamComponent = () => {
  return (
    <div
      className="bg-secondary min-h-screen w-full flex items-center justify-center py-12"
      id="home-our-team"
    >
      <div className="w-[90%] h-full flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="uppercase tracking-widest text-black text-xs lg:text-sm text-nowrap font-bold">
            our team
          </p>
          <h2 className="text-4xl lg:text-5xl text-nowrap text-black capitalize leading-[3rem] lg:leading-[3.25rem] text-center">
            meet our <br /> leadership team
          </h2>
        </div>
        <div className="w-full flex flex-row items-center justify-center flex-wrap gap-12">
          <TooltipProvider>
            <Tooltip>
              <div className="h-[500px] w-[300px] rounded-2xl flex flex-col items-center justify-center gap-0 overflow-hidden cursor-pointer">
                <TooltipTrigger asChild>
                  <div className="relative w-full h-[70%] flex items-center justify-center overflow-clip">
                    <Image
                      quality={100}
                      unoptimized
                      fill
                      objectFit="cover"
                      src={"/images/ceo-nobg.png"}
                      alt="img1"
                      className="bg-slate-400 transform transition-transform duration-1000 hover:scale-110 rounded-2xl"
                      draggable="false"
                    />
                  </div>
                </TooltipTrigger>
                <div className="w-full flex-1 p-4 flex flex-col items-center justify-center gap-6">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-center text-2xl lg:text-3xl text-black capitalize z-20">
                      Shylesh Kiran
                    </p>
                    <p className="lg:text-base text-sm">Founder & CEO</p>
                  </div>
                  <div className="w-full flex flex-row flex-wrap items-center justify-center gap-3 lg:gap-4">
                    <Link
                      href={
                        "https://www.facebook.com/profile.php?id=100091420968584&mibextid=ZbWKwL"
                      }
                      className="group bg-transparent rounded-[5px] p-1 border border-black cursor-pointer transform transition-all duration-500 hover:bg-primary hover:border-primary"
                    >
                      <FacebookOutlinedIcon
                        className="text-black transform transition-all duration-500 group-hover:text-light-blue"
                        fontSize="medium"
                      />
                    </Link>
                    {/* <div className="group bg-transparent rounded-[5px] p-1 border border-black cursor-pointer transform transition-all duration-500 hover:bg-primary hover:border-primary">
                      <WhatsAppIcon
                        className="text-black transform transition-all duration-500 group-hover:text-light-blue"
                        fontSize="medium"
                      />
                    </div> */}
                    {/* <div className="group bg-transparent rounded-[5px] p-1 border border-black cursor-pointer transform transition-all duration-500 hover:bg-primary hover:border-primary">
                      <XIcon
                        className="text-black transform transition-all duration-500 group-hover:text-light-blue"
                        fontSize="medium"
                      />
                    </div>
                    <div className="group bg-transparent  rounded-[5px] p-1 border border-black cursor-pointer transform transition-all duration-500 hover:bg-primary hover:border-primary">
                      <PinterestIcon
                        className="text-black transform transition-all duration-500 group-hover:text-light-blue"
                        fontSize="medium"
                      />
                    </div> */}
                    <Link
                      className="group bg-transparent rounded-[5px] p-1 border border-black cursor-pointer transform transition-all duration-500 hover:bg-primary hover:border-primary"
                      href={
                        "https://www.instagram.com/hdmangalore/profilecard/?igsh=MW44c2QwZ3BsMDU0Nw%3D%3D"
                      }
                    >
                      <InstagramIcon
                        className="text-black transform transition-all duration-500 group-hover:text-light-blue"
                        fontSize="medium"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <TooltipContent className="bg-secondary-light w-[400px] h-[200px] overflow-y-auto right-10">
                <p>
                  Mr. Shylesh Kiran is a visionary and dynamic entrepreneur who
                  has successfully carved a niche for himself in the competitive
                  business world. With an exceptional ability to identify
                  emerging market trends and a passion for innovation, he has
                  founded and grown multiple businesses across India and the
                  Middle East. His entrepreneurial journey is a testament to his
                  relentless pursuit of excellence and his ability to transform
                  ideas into thriving enterprises.
                </p>{" "}
                <br />
                <p>
                  Driven by a strong belief in creating value through strategic
                  planning, operational efficiency, and customer-centricity, Mr.
                  Kiran has built diverse business ventures spanning industries
                  such as manpower solutions, finance consultancy, property
                  management, and stock broking. Under his leadership, these
                  businesses have not only achieved remarkable growth but have
                  also earned the trust of clients and stakeholders alike.
                </p>{" "}
                <br />
                <p>
                  Mr. Kiran&apos;s ventures are marked by their focus on
                  quality, ethical practices, and a commitment to delivering
                  superior results. His ability to adapt to ever-changing
                  business landscapes and his keen eye for opportunities have
                  been instrumental in expanding his footprint across
                  international markets.
                </p>{" "}
                <br />
                <p>
                  Beyond business, Mr. Shylesh Kiran is a leader who inspires
                  innovation and teamwork within his organizations. He is
                  dedicated to empowering his teams, fostering a culture of
                  continuous learning, and contributing to the broader community
                  through impactful initiatives.
                </p>{" "}
                <br />
                <p>
                  With an unwavering commitment to success and a vision to
                  redefine industry standards, Mr. Shylesh Kiran continues to
                  inspire others and pave the way for a future defined by
                  innovation, growth, and excellence.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default OurTeamComponent;
