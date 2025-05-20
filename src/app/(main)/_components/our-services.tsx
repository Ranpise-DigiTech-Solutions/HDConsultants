import Image from "next/image";
import React from "react";

const OurServicesComponent = () => {
  return (
    <div
      className="bg-secondary-light min-h-screen w-full py-16 flex items-center justify-center"
      id="home-our-services"
    >
      <div className="w-[90%] h-full flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="uppercase tracking-widest text-black text-xs lg:text-sm text-nowrap font-bold">
            our services
          </p>
          <h2 className="text-4xl lg:text-5xl text-wrap lg:text-nowrap text-black capitalize leading-[3rem] lg:leading-[3.25rem] text-center">
            explore our <br /> comprehensive services
          </h2>
        </div>
        <div className="w-full flex flex-row items-center justify-center flex-wrap gap-12">
          
          <div className="group relative h-[450px] w-[350px] rounded-2xl flex items-end justify-end overflow-hidden cursor-not-allowed">
            <Image
              quality={100}
              unoptimized
              fill
              objectFit="cover"
              src={
                "https://cdn.prod.website-files.com/6645b9ebc60bab424a1883c5/664d89e5cb22f4385463d844_pexels-cottonbro-5989941%20(2)%20(1).jpg"
              }
              alt="img1"
              className="transform transition-transform duration-1000 group-hover:scale-125"
              draggable="false"
            />
            <div className="absolute inset-0 bg-black opacity-35 z-10 transform transition-all duration-1000 group-hover:opacity-50"></div>
            <p className="w-[60%] text-center text-2xl text-white capitalize z-20 p-4 font-semibold">
              Manpower outsourcing
            </p>
          </div>
          <div className="group relative h-[450px] w-[350px] rounded-2xl flex items-end justify-end overflow-hidden cursor-not-allowed">
            <Image
              quality={100}
              unoptimized
              fill
              objectFit="cover"
              src={
                "https://plus.unsplash.com/premium_photo-1661443781814-333019eaad2d?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="img1"
              className="transform transition-transform duration-1000 group-hover:scale-125"
              draggable="false"
            />
            <div className="absolute inset-0 bg-black opacity-35 z-10 transform transition-all duration-1000 group-hover:opacity-50"></div>
            <p className="w-[60%] text-center text-2xl text-white capitalize z-20 p-4 font-semibold">
              finance consultancy
            </p>
          </div>
          <div className="group relative h-[450px] w-[350px] rounded-2xl flex items-end justify-end overflow-hidden cursor-not-allowed">
            <Image
              quality={100}
              unoptimized
              fill
              objectFit="cover"
              src={
                "https://images.unsplash.com/photo-1623911380012-0b6db3fcad54?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="img1"
              className="transform transition-transform duration-1000 group-hover:scale-125"
              draggable="false"
            />
            <div className="absolute inset-0 bg-black opacity-35 z-10 transform transition-all duration-1000 group-hover:opacity-50"></div>
            <p className="w-[60%] text-center text-2xl text-white capitalize z-20 p-4 font-semibold">
              property management
            </p>
          </div>
          <div className="group relative h-[450px] w-[350px] rounded-2xl flex items-end justify-end overflow-hidden cursor-not-allowed">
            <Image
              quality={100}
              unoptimized
              fill
              objectFit="cover"
              src={
                "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="img1"
              className="transform transition-transform duration-1000 group-hover:scale-125"
              draggable="false"
            />
            <div className="absolute inset-0 bg-black opacity-35 z-10 transform transition-all duration-1000 group-hover:opacity-50"></div>
            <p className="w-[60%] text-center text-2xl text-white capitalize z-20 p-4 font-semibold">
              stock brokers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServicesComponent;
