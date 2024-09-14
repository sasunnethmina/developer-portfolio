// @flow strict

"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { useState, useEffect } from "react";

function HeroSection() {
  const [greeting, setGreeting] = useState("");
  const [blobs, setBlobs] = useState([]);

  useEffect(() => {
    // Set greeting based on time of day
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }

    // Generate blobs for Hero section, similar to About section
    const newBlobs = Array.from({ length: 5 }, () => ({
      size: `${Math.random() * 60 + 30}px`,
      top: `${Math.random() * 60 + 10}%`, // Keep blobs lower to connect with About
      left: `${Math.random() * 80 + 10}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 15 + 15}s`, // Slower movement
    }));
    setBlobs(newBlobs);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12 overflow-hidden">
      {/* Floating Blobs connected to About */}
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

      
     <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10 opacity-90 transition-opacity duration-1000"
      />

<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-y-8 items-start">
        {/* Left Section */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10 space-y-6 transition-all duration-300">
          <p className="text-white text-lg italic">{greeting}</p>
          <h1 className="text-3xl md:text-5xl lg:text-[2.8rem] font-extrabold leading-tight text-white animate-fade-in">
            Hello, <br />
            This is <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600">{personalData.name}</span>
            {`, I'm a Professional `}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#16f2b3] to-[#00bfa5]">
              {personalData.designation}
            </span>
            .
          </h1>

          {/* Social Links */}
          <div className="my-12 flex items-center gap-5">
            <Link href={personalData.github} target="_blank">
              <BsGithub
                size={35}
                className="text-pink-500 transform transition-transform duration-300 hover:scale-125 hover:text-[#16f2b3]"
              />
            </Link>
            <Link href={personalData.linkedIn} target="_blank">
              <BsLinkedin
                size={35}
                className="text-pink-500 transform transition-transform duration-300 hover:scale-125 hover:text-[#16f2b3]"
              />
            </Link>
            <Link href={personalData.twitter} target="_blank">
              <FaTwitterSquare
                size={35}
                className="text-pink-500 transform transition-transform duration-300 hover:scale-125 hover:text-[#16f2b3]"
              />
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Link href="#contact">
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#ff007a] to-[#b300ff] hover:shadow-neon hover:shadow-pink-500 text-white font-semibold tracking-wide flex items-center gap-2 transition-all duration-300">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>
            <Link href={personalData.resume} target="_blank">
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#ff007a] to-[#b300ff] hover:shadow-neon hover:shadow-violet-500 text-white font-semibold tracking-wide flex items-center gap-2 transition-all duration-300">
                <span>Get Resume</span>
                <MdDownload size={16} />
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section - Code Snippet */}
        <div className="order-1 lg:order-2 bg-gradient-to-r from-[#0d1224] to-[#0a0d37] relative rounded-xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
          <div className="flex space-x-2 mb-4">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-200"></div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 p-6">
            <code className="font-mono text-sm lg:text-lg animate-blink">
              <div>
                <span className="text-pink-500">const</span>{" "}
                <span className="text-white">coder</span>{" "}
                <span className="text-pink-500">=</span>{" "}
                <span className="text-gray-400">{"{"}</span>
              </div>
              <div>
                <span className="ml-6 text-white">name:</span>{" "}
                <span className="text-amber-300">{`'Sasun Nethmina'`}</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-6 text-white">skills:</span>{" "}
                <span className="text-gray-400">[</span>
                <span className="text-amber-300">{`'React', 'NextJS', 'Redux', 'Express', 'NestJS', 'MySql', 'MongoDB', 'Docker', 'AWS'`}</span>
                <span className="text-gray-400">],</span>
              </div>
              <div>
                <span className="ml-6 text-white">hardWorker:</span>{" "}
                <span className="text-orange-400">true</span>,
              </div>
              <div>
                <span className="ml-6 text-white">quickLearner:</span>{" "}
                <span className="text-orange-400">true</span>,
              </div>
              <div>
                <span className="ml-6 text-white">problemSolver:</span>{" "}
                <span className="text-orange-400">true</span>,
              </div>
              <div>
                <span className="ml-6 text-green-400">hireable</span>:{" "}
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{"() {"}</span>
              </div>
              <div>
                <span className="ml-10 text-orange-400">return</span>{" "}
                <span className="text-green-300">{`'Absolutely!'`}</span>
                <span className="text-gray-400">;</span>
              </div>
              <div>
                <span className="ml-6 text-gray-400">{"}"}</span>
              </div>
              <div>
                <span className="text-gray-400">{"};"}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
