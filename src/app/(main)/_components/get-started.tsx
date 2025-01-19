import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GetStartedComponent = () => {
  return (
    <div className="min-h-screen w-full pt-[6rem] py-[2rem] flex items-center justify-center bg-primary">
      <div className="w-[90%] h-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-6">
        <div className="lg:flex-1 hidden lg:flex flex-row items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center gap-6">
            <Image
              src={
                "https://cdn.prod.website-files.com/6645b9ebc60bab424a1883aa/6645d2fdfd50f5064c03a5de_jason-goodman-nF0nQuqBsrI-unsplash%20(1).webp"
              }
              alt="img1"
              width={0}
              height={0}
              quality={100}
              unoptimized
              draggable={false}
              className="h-[180px] w-[180px] object-cover rounded-2xl"
            />
            <Image
              src={
                "https://cdn.pixabay.com/photo/2024/06/09/14/44/ai-generated-8818860_960_720.jpg"
              }
              alt="img1"
              width={0}
              height={0}
              quality={100}
              unoptimized
              draggable={false}
              className="h-[180px] w-[180px] object-cover rounded-2xl"
            />
            {/* <video
              autoPlay
              loop
              src="https://cdn.prod.website-files.com/6645b9ebc60bab424a1883aa%2F664ca06452ff7f052b580f16_4433138%20hd%201920%201080%2025fps-transcode.mp4"
              className="w-[180px] h-[180px] object-cover rounded-2xl"
            /> */}
          </div>
          <div className="flex flex-col items-center justify-center gap-16">
            {/* <video
              autoPlay
              loop
              src="https://cdn.prod.website-files.com/6645b9ebc60bab424a1883aa%2F664744b72d0ae1257fc8aff1_4426907%20hd%201280%20720%2050fps-transcode.mp4"
              className="w-[180px] h-[180px] object-cover rounded-2xl"
            /> */}
            <Image
              src={
                "https://plus.unsplash.com/premium_photo-1661326247701-df5ad0c5d244?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="img2"
              width={0}
              height={0}
              quality={100}
              unoptimized
              draggable={false}
              className="h-[180px] w-[180px] object-cover rounded-2xl"
            />
            <Image
              src={
                "https://plus.unsplash.com/premium_photo-1664476794112-15afc6de2e0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="img2"
              width={0}
              height={0}
              quality={100}
              unoptimized
              draggable={false}
              className="h-[180px] w-[180px] object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          <p className="text-light-blue text-sm lg:text-base uppercase text-nowrap">
            welcome to H&D Consultants
          </p>
          <div className="text-4xl md:text-5xl lg:text-6xl flex flex-col items-center justify-center lg:gap-2">
            <p className="text-nowrap text-white">Empowering business</p>
            <p className="text-nowrap text-orange">with Expert Advice</p>
          </div>
          <p className="text-wrap text-center text-white-80 text-base lg:text-lg leading-6 lg:leading-7">
            H&D Group, led by visionary entrepreneur Mr. Shylesh Kiran, offers
            diverse services, including manpower placement and outsourcing,
            finance consultancy, property management, and stock broking. With
            years of experience and a commitment to excellence, we empower both
            clients and candidates to achieve success.
          </p>
          <div className="flex flex-row items-center justify-center gap-6">
            <Link href={"/contact"}>
              <Button className="text-base lg:text-lg capitalize rounded-full px-6 py-5 lg:p-6 bg-light-blue border border-primary text-primary transform transition-all duration-300 hover:text-light-blue hover:bg-transparent hover:border-light-blue cursor-pointer">
                free consultation
              </Button>
            </Link>
            <div className="group flex flex-row items-center justify-center gap-1 transform transition-all duration-300 hover:opacity-75 cursor-pointer">
              <p
                onClick={() => scrollToSection("home-our-services")}
                className="capitalize text-base lg:text-lg text-orange"
              >
                our services
              </p>
              <ArrowRight className="w-[18px] lg:w-[20px] h-auto text-orange transform transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
        <div className="flex-1 hidden lg:flex flex-row items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center gap-16">
            {/* <video
              autoPlay
              loop
              src="https://cdn.prod.website-files.com/6645b9ebc60bab424a1883aa%2F664c9f38c93072a52746f427_6585548%20uhd%203840%202160%2030fps-transcode.mp4"
              className="w-[180px] h-[180px] object-cover rounded-2xl"
            /> */}
            <Image
              src={
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="img1"
              width={0}
              height={0}
              quality={100}
              unoptimized
              draggable={false}
              className="h-[180px] w-[180px] object-cover rounded-2xl"
            />
            <Image
              src={
                "https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="img1"
              width={0}
              height={0}
              quality={100}
              unoptimized
              draggable={false}
              className="h-[180px] w-[180px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <Image
              src={
                "https://images.unsplash.com/photo-1554260570-e9689a3418b8?q=80&w=1782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="img2"
              width={0}
              height={0}
              quality={100}
              unoptimized
              draggable={false}
              className="h-[180px] w-[180px] object-cover rounded-2xl"
            />
            <Image
              src={
                "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="img2"
              width={0}
              height={0}
              quality={100}
              unoptimized
              draggable={false}
              className="h-[180px] w-[180px] object-cover rounded-2xl"
            />
            {/* <video
              autoPlay
              loop
              src="https://cdn.prod.website-files.com/65e470f7ba24ce4690c16bb1/65e6e0b21d299d3d922378ec_video (540p)-transcode.mp4"
              className="w-[180px] h-[180px] object-cover rounded-2xl"
            /> */}
          </div>
        </div>
        <div className="w-full flex lg:hidden flex-row items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center gap-6">
            {/* <video
              autoPlay
              loop
              src="https://cdn.prod.website-files.com/6645b9ebc60bab424a1883aa%2F664c9f38c93072a52746f427_6585548%20uhd%203840%202160%2030fps-transcode.mp4"
              className="w-[200px] h-[175px] object-cover rounded-2xl"
            /> */}
            <Image
              src={
                "https://cdn.prod.website-files.com/6645b9ebc60bab424a1883aa/6645d2fdfd50f5064c03a5de_jason-goodman-nF0nQuqBsrI-unsplash%20(1).webp"
              }
              alt="img1"
              width={0}
              height={0}
              quality={100}
              unoptimized
              draggable={false}
              className="w-[200px] h-[175px] object-cover rounded-2xl"
            />
            <Image
              src={
                "https://cdn.pixabay.com/photo/2024/06/09/14/44/ai-generated-8818860_960_720.jpg"
              }
              alt="img1"
              width={0}
              height={0}
              quality={100}
              unoptimized
              draggable={false}
              className="w-[200px] h-[175px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <Image
              src={
                "https://plus.unsplash.com/premium_photo-1661326247701-df5ad0c5d244?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="img2"
              width={0}
              height={0}
              quality={100}
              unoptimized
              draggable={false}
              className="w-[200px] h-[175px] object-cover rounded-2xl"
            />
            <Image
              src={
                "https://plus.unsplash.com/premium_photo-1664476794112-15afc6de2e0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="img2"
              width={0}
              height={0}
              quality={100}
              unoptimized
              draggable={false}
              className="w-[200px] h-[175px] object-cover rounded-2xl"
            />
            {/* <video
              autoPlay
              loop
              src="https://cdn.prod.website-files.com/65e470f7ba24ce4690c16bb1/65e6e0b21d299d3d922378ec_video (540p)-transcode.mp4"
              className="w-[200px] h-[175px] object-cover rounded-2xl"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedComponent;
