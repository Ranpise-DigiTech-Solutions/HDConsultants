import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const OurVisionComponent = () => {
  return (
    <div className="min-h-screen py-12 w-full flex items-center justify-center bg-secondary">
      <div className="w-[90%] h-full flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="flex-1 flex flex-col items-start justify-center gap-8">
          <div className="w-full flex flex-col items-start justify-center gap-4">
            <p className="w-full text-nowrap tracking-widest uppercase text-xs lg:text-sm text-black font-bold">
              our vision
            </p>
            <h2 className="text-4xl lg:text-5xl text-black text-wrap">
              Your Trusted Partner in HR Solutions
            </h2>
          </div>
          <p className="text-base lg:text-lg text-wrap text-black leading-6 lg:leading-7">
            H&D Group, led by Mr. Shylesh Kiran, is a global HR solutions
            provider committed to empowering individuals and businesses. We
            specialize in recruitment, training, and deployment, ensuring the
            perfect fit for every client. With years of experience, we offer
            personalized services tailored to your unique needs.
          </p>
          <div className="flex flex-col items-start justify-center gap-4">
            <div className="flex flex-row items-start justify-center gap-3">
              <div className="px-[6px] lg:px-[5px] py-[2px] lg:py-[2px] bg-primary rounded-full">
                <Check className="text-secondary-light w-[16px] lg:w-[18px] lg:p-0" />
              </div>
              <p className="text-base lg:text-lg text-wrap text-black leading-6 lg:leading-7">
                <span className="font-bold">Our mission&nbsp;</span>
                is to provide diverse employment opportunities worldwide by fostering strong relationships with employers, positioning ourselves as a reliable, honest, and committed staffing agency

              </p>
            </div>
            <div className="flex flex-row items-start justify-center gap-3">
              <div className="px-[6px] lg:px-[5px] py-[2px] lg:py-[2px] bg-primary rounded-full">
                <Check className="text-secondary-light w-[16px] lg:w-[18px] lg:p-0" />
              </div>
              <p className="text-base lg:text-lg text-wrap text-black leading-6 lg:leading-7">
                <span className="font-bold">Our vision&nbsp;</span>
                is to elevate the industrial sector by delivering exceptional Human Resource Staffing Solutions worldwide, fostering growth, innovation, and excellence in every industry we serve.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            alt="img"
            src={
              "https://images.unsplash.com/photo-1571624436279-b272aff752b5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            className="h-[450px] w-[600px] object-cover rounded-2xl"
            height={0}
            width={0}
            quality={100}
            unoptimized
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default OurVisionComponent;
