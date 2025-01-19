import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const ContactFormComponent = () => {
  return (
    <div className="min-h-screen w-full pt-[8rem] py-12 flex items-center justify-center bg-secondary-light">
      <div className="w-[90%] h-fit flex flex-col lg:flex-row items-center justify-center gap-[5rem]">
        <div className="w-full lg:flex-1 h-fit flex flex-col items-start justify-center gap-6">
          <div className="flex flex-col items-start justify-center gap-4">
            <p className="uppercase tracking-widest text-black text-xs lg:text-sm font-bold">
              contact us
            </p>
            <h2 className="text-4xl lg:text-5xl capitalize text-black text-nowrap">
              get in touch
            </h2>
          </div>
          <p className="text-wrap leading-6 lg:leading-7 text-black text-base lg:text-lg">
            Get in touch with us for any inquiries or assistance. Our team is
            here to provide you with prompt, reliable support and help you find
            the solutions you need. We look forward to connecting with you!
          </p>
          <div className="flex flex-col items-start justify-center gap-5">
            <div className="flex flex-row items-start justify-center gap-4">
              <div className="rounded-full bg-orange text-secondary-light p-1 lg:p-2">
                <MapPin className="w-[18px] lg:w-[24px]" />
              </div>
              <p className="text-base lg:text-lg text-black text-wrap leading-6">
                H & D Consultants, Shop No. T19 & T19B, Door No. 25-1-65/151 &
                25-1-65/152,Third Floor, Kankanady Gate, Kankanady Bypass Road,
                Kankanady, Mangaluru, Karnataka 575002
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="rounded-full bg-orange text-secondary-light p-1 lg:p-2">
                <Phone className="w-[18px] lg:w-[24px]" />
              </div>
              <p className="text-base lg:text-lg text-black text-wrap lg:text-nowrap leading-6">
                +91{" "}
                <a href="tel:+918867286230">8867286230{" / "}</a>
                <a href="tel:+917483798215">7483798215{" / "}</a>
                <a href="tel:+918655676366">8655676366 </a>
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="rounded-full bg-orange text-secondary-light p-1 lg:p-2">
                <Mail className="w-[18px] lg:w-[24px]" />
              </div>
              <p className="text-base lg:text-lg text-black text-wrap lg:text-nowrap leading-6">
                <a href="mailto:shylesh@hd-group.in">
                  shylesh@hd-group.in{" | "}
                </a>
                <a href="mailto:hannamangalore@outlook.com">
                  hannamangalore@outlook.com
                </a>
                <br />
                {" | "}
                <a href="mailto:fs30.shyleshkiran@way2wealth.com">
                  fs30.shyleshkiran@way2wealth.com{" | "}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[45%] h-full flex flex-col items-center justify-center gap-6 bg-transparent rounded-2xl overflow-hidden">
          {/* <div className="w-full flex items-center justify-start gap-4">
            <input
              title="name"
              type="text"
              name="Name"
              placeholder="Full Name *"
              className="flex-1 rounded-full px-4 py-3 border-2 border-dark-grey focus:border-orange focus:outline-none"
            />
            <div className="hidden lg:block flex-1 px-4 py-3 border-2 border-white"></div>
          </div>
          <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4">
            <input
              title="email"
              type="email"
              name="Email"
              placeholder="Email Address *"
              className="w-full lg:flex-1 rounded-full px-4 py-3 border-2 border-dark-grey focus:border-orange focus:outline-none"
            />
            <input
              title="phone"
              type="number"
              name="phone"
              placeholder="Phone Number *"
              className="w-full lg:flex-1 rounded-full px-4 py-3 border-2 border-dark-grey focus:border-orange focus:outline-none"
            />
          </div>
          <div className="w-full flex items-center justify-center gap-4">
            <textarea
              title="message"
              name="Message"
              placeholder="Your message..."
              className="flex-1 min-h-[200px] rounded-2xl text-start px-4 py-3 border-2 border-dark-grey focus:border-orange focus:outline-none"
            />
          </div>
          <Button className="w-full text-lg capitalize py-6 text-white mt-4 rounded-full border border-white transform transition-all duration-300 hover:text-primary hover:border-primary hover:bg-transparent">
            submit
          </Button> */}
          <Image
            src={"/images/contact-us-bg.jpg"}
            alt="img"
            width={0}
            height={0}
            quality={100}
            unoptimized
            draggable="false"
            className="w-full h-auto lg:w-[550px] lg:h-[450px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactFormComponent;
