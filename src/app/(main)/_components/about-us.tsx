// import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const AboutUsComponent = () => {
  return (
    <div
      className="min-h-screen w-full py-12 flex items-center justify-center bg-secondary-light"
      id="home-about-us"
    >
      <div className="w-[90%] h-full flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={
              "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={0}
            height={0}
            alt="img"
            className="h-[450px] w-[600px] rounded-3xl object-cover"
            quality={100}
            unoptimized
            draggable={false}
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-center gap-8">
          <div className="flex flex-col items-start justify-center gap-4">
            <p className="tracking-widest uppercase text-black text-xs lg:text-sm font-bold">
              about us
            </p>
            <h2 className="text-4xl lg:text-5xl capitalize">
              about our organization
            </h2>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <p className="text-wrap leading-6 lg:leading-7 text-base lg:text-lg text-black">
              H & D Group is a multi-faceted organization committed to providing
              comprehensive solutions across various industries. With a legacy
              of trust and excellence, we specialize in:
            </p>
            <ul className="list-decimal pl-4">
              <li className="text-start text-wrap leading-6 lg:leading-7 text-base lg:text-lg text-black">
                <span className="font-bold">
                  Manpower and Placement Services:&nbsp;
                </span>
                Connecting talent with opportunity to drive growth and success.
              </li>
              <li className="text-start text-wrap leading-6 lg:leading-7 text-base lg:text-lg text-black">
                <span className="font-bold">Manpower Outsourcing:&nbsp;</span>
                Delivering efficient workforce solutions tailored to your
                business needs.
              </li>
              <li className="text-start text-wrap leading-6 lg:leading-7 text-base lg:text-lg text-black">
                <span className="font-bold">Finance Consultancy:&nbsp;</span>
                Offering expert financial guidance to help individuals and
                businesses achieve their goals.
              </li>
              <li className="text-start text-wrap leading-6 lg:leading-7 text-base lg:text-lg text-black">
                <span className="font-bold">Property Management:&nbsp;</span>
                Ensuring seamless management and value enhancement for your real
                estate assets.
              </li>
              <li className="text-start text-wrap leading-6 lg:leading-7 text-base lg:text-lg text-black">
                <span className="font-bold">Stock Broking:&nbsp;</span>
                Providing reliable and informed investment services to help you
                navigate the financial markets.
              </li>
            </ul>
          </div>
          {/* <Button className="px-4 py-5 lg:p-6 rounded-full text-sm lg:text-lg capitalize text-secondary-light bg-primary border border-secondary-light transform transition-all duration-300 hover:border-primary hover:bg-transparent hover:text-primary">
            discover more
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
