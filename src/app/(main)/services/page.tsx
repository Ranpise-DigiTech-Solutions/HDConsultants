import React from "react";
import ServiceListComponent from "./_components/service-list";

const ServicesPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start gap-0">
      <ServiceListComponent />
    </div>
  );
};

export default ServicesPage;
