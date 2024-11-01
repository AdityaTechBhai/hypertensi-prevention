import React from "react";
import HeroTitle from "./hero/heroTitle"
import HeroDesc from "./hero/heroDesc"
import HeroImg from "./hero/heroImg";
import Sponsor from "./ui/sponsor";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="bg-[#f3fbff] hero-section mx-auto max-w-6xl py-10 pb-14 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse items-center justify-between gap-8 lg:flex-row">
        {/* Left Column */}
        <div className="flex max-w-xl flex-col space-y-10 text-center lg:text-left">
          <HeroTitle />
          <HeroDesc />
          <Button className="mx-auto lg:mx-0 inline-flex w-fit items-center justify-center rounded-xl bg-gradient-to-r from-[#A7E2FF] to-[#0095DE] px-6 py-8 font-manrope text-lg font-bold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:from-[#0095DE] hover:to-[#A7E2FF] hover:shadow-lg cursor-pointer">
            Book an Appointment
            <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 18"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.20024 0C1.64107 0 1.09064 0.201675 0.673187 0.582022C0.253197 0.964914 0 1.50229 0 2.08123C0 2.66018 0.253102 3.19747 0.673092 3.58036L6.28019 8.69064C6.46671 8.86063 6.46671 9.15417 6.28019 9.32415L0.667601 14.4394L0.662199 14.4445C0.25322 14.8305 0.0108525 15.3649 0.0163097 15.9373C0.0217669 16.5096 0.274136 17.0393 0.689456 17.4178C1.10224 17.794 1.64528 17.9956 2.19829 17.9999C2.75128 18.0043 3.29734 17.8114 3.71635 17.4426L3.72191 17.4377L11.327 10.5064C11.747 10.1235 12 9.58634 12 9.0074C12 8.42845 11.7469 7.89116 11.3269 7.50827L3.72729 0.582022C3.30984 0.201675 2.7594 0 2.20024 0Z"
                    fill="currentColor"
                  />
                </svg>
          </Button>
          <div className="w-full flex justify-center lg:justify-start">
            <Sponsor />
          </div>
        </div>
        {/* Right Column - Hero Image */}
        <div className="relative w-full max-w-xl lg:w-1/2">
          <HeroImg />
          {/* Stats Card */}
          <div className="absolute right-4 top-4 rounded-xl bg-white p-4 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {/* User avatars here */}
              </div>
              <div>
                <p className="font-bold">2400+</p>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
