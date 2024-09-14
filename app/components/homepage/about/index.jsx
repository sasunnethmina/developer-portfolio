// @flow strict


"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { useEffect, useState } from "react";

function AboutSection() {
  const [blobs, setBlobs] = useState([]);

  useEffect(() => {
    // Generate an array of blob properties
    const newBlobs = Array.from({ length: 6 }, () => ({
      size: `${Math.random() * 60 + 30}px`,
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 10 + 10}s`,
    }));
    setBlobs(newBlobs);
  }, []);

  return (
    <div id="about" className="my-12 lg:my-16 relative overflow-hidden">
      {/* Floating Blobs */}
      {blobs.map((blob, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-gradient-to-r from-[#16f2b3] to-[#00bfa5] opacity-50 animate-floating"
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
            animationDelay: blob.delay,
            animationDuration: blob.duration,
          }}
        ></div>
      ))}

      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Sasun Nethmina"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
