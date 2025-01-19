"use client";

import ScrollToTopButton from "@/components/global/scroll-to-top-button";
import AboutUsComponent from "./_components/about-us";
import GetStartedComponent from "./_components/get-started";
import OurServicesComponent from "./_components/our-services";
import OurTeamComponent from "./_components/our-team";
import OurVisionComponent from "./_components/our-vision";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center justify-start gap-0">
        <GetStartedComponent />
        <AboutUsComponent />
        <OurVisionComponent />
        <OurServicesComponent />
        <OurTeamComponent />
      </div>
      <ScrollToTopButton />
    </>
  );
}
