import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const ServiceListComponent = () => {
  return (
    <div className="min-h-screen w-full pt-[8rem] pb-12 flex items-center justify-center bg-secondary-light">
      <div className="w-[90%] flex flex-col items-start justify-center gap-12 lg:gap-16">
        <div className="flex flex-col items-start justify-center gap-2">
          <p className="uppercase tracking-widest text-black text-xs lg:text-sm font-bold">
            our services
          </p>
          <h2 className="text-4xl lg:text-5xl text-black">Services we can offer to you?</h2>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 flex-wrap">
          <div className="w-full lg:w-[400px] h-[275px] lg:h-[325px] bg-secondary rounded-2xl p-6 flex flex-col items-start justify-center gap-4">
            <div className=" w-full flex items-center justify-start">
              <Image
                src={
                  "https://cdn.pixabay.com/photo/2013/07/12/19/23/staff-154689_1280.png"
                }
                alt="img1"
                width={0}
                height={0}
                quality={100}
                unoptimized
                className="w-auto h-[40px] lg:h-[50px] object-cover"
              />
            </div>
            <h2 className="text-2xl lg:text-3xl capitalize">manpower and placement</h2>
            <p className="text-wrap text-black text-base lg:text-lg leading-6 lg:leading-7">
              We provide efficient recruitment solutions across industries, with
              thorough assessments and timely delivery of skilled personnel
              tailored to client needs.
            </p>
            <div className="group w-full flex flex-row items-center justify-start gap-2 cursor-pointer">
              <p className="text-base capitalize transform transition-all duration-300 group-hover:underline underline-offset-2">
                read more
              </p>
              <ArrowRight className="w-[20px] transform transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
          <div className="w-full lg:w-[400px] h-[275px] lg:h-[325px] bg-secondary rounded-2xl p-6 flex flex-col items-start justify-center gap-4">
            <div className="w-full flex items-center justify-start">
              <Image
                src={
                  "https://cdn.pixabay.com/photo/2013/07/12/19/23/staff-154689_1280.png"
                }
                alt="img1"
                width={0}
                height={0}
                quality={100}
                unoptimized
                className="w-auto h-[40px] lg:h-[50px] object-cover"
              />
            </div>
            <h2 className="text-2xl lg:text-3xl capitalize">manpower outsourcing</h2>
            <p className="text-wrap text-black text-base lg:text-lg leading-6 lg:leading-7">
              With 18+ years of expertise, we provide reliable, high-quality
              outsourcing solutions, driving success in the Middle East and
              Australia.
            </p>
            <div className="group w-full flex flex-row items-center justify-start gap-2 cursor-pointer">
              <p className="text-base capitalize transform transition-all duration-300 group-hover:underline underline-offset-2">
                read more
              </p>
              <ArrowRight className="w-[20px] transform transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
          <div className="w-full lg:w-[400px] h-[275px] lg:h-[325px] bg-secondary rounded-2xl p-6 flex flex-col items-start justify-center gap-4">
            <div className="w-full flex items-center justify-start">
              <Image
                src={
                  "https://cdn.pixabay.com/photo/2014/12/21/23/57/money-576443_1280.png"
                }
                alt="img1"
                width={0}
                height={0}
                quality={100}
                unoptimized
                className="w-auto h-[40px] lg:h-[50px] object-cover"
              />
            </div>
            <h2 className="text-2xl lg:text-3xl capitalize">finance consultancy</h2>
            <p className="text-wrap text-black text-base lg:text-lg leading-6 lg:leading-7">
              We are authorized dealers for mutual funds, SIPs, and FD bonds,
              partnering with leading AMCs to offer trusted investment options.
            </p>
            <div className="group w-full flex flex-row items-center justify-start gap-2 cursor-pointer">
              <p className="text-base capitalize transform transition-all duration-300 group-hover:underline underline-offset-2">
                read more
              </p>
              <ArrowRight className="w-[20px] transform transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
          <div className="w-full lg:w-[400px] h-[275px] lg:h-[325px] bg-secondary rounded-2xl p-6 flex flex-col items-start justify-center gap-4">
            <div className="w-full flex items-center justify-start">
              <Image
                src={
                  "https://cdn.pixabay.com/photo/2021/08/07/21/17/house-6529416_1280.png"
                }
                alt="img1"
                width={0}
                height={0}
                quality={100}
                unoptimized
                className="w-auto h-[40px] lg:h-[50px] object-cover"
              />
            </div>
            <h2 className="text-2xl lg:text-3xl capitalize">property management</h2>
            <p className="text-wrap text-black text-base lg:text-lg leading-6 lg:leading-7">
              We have more than 20years of experience in the Real estate
              industries like property buying/ selling and rental property.
            </p>
            <div className="group w-full flex flex-row items-center justify-start gap-2 cursor-pointer">
              <p className="text-base capitalize transform transition-all duration-300 group-hover:underline underline-offset-2">
                read more
              </p>
              <ArrowRight className="w-[20px] transform transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
          <div className="w-full lg:w-[400px] h-[275px] lg:h-[325px] bg-secondary rounded-2xl p-6 flex flex-col items-start justify-center gap-4">
            <div className="w-full flex items-center justify-start">
              <Image
                src={
                  "https://cdn.pixabay.com/photo/2020/09/27/10/01/money-5606272_1280.png"
                }
                alt="img1"
                width={0}
                height={0}
                quality={100}
                unoptimized
                className="w-auto h-[40px] lg:h-[50px] object-cover"
              />
            </div>
            <h2 className="text-2xl lg:text-3xl capitalize">stock brokers</h2>
            <p className="text-wrap text-black text-base lg:text-lg leading-6 lg:leading-7">
              Authorised person of Way2wealth Brokers Pvt. Ltd., we deals with
              Equity, Derivatives, and Commodities
            </p>
            <div className="group w-full flex flex-row items-center justify-start gap-2 cursor-pointer">
              <p className="text-base capitalize transform transition-all duration-300 group-hover:underline underline-offset-2">
                read more
              </p>
              <ArrowRight className="w-[20px] transform transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceListComponent;
