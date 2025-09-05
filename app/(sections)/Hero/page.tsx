"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import React from "react";

function HeroPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Greeting */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block mb-2">Hi There,</span>
                <span className="block mb-2">I&apos;m Steven Chiang</span>
                <span className="block">
                  I am a{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transition-all duration-500">
                    Software Engineer
                  </span>
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
              Passionate about building impactful software solutions and
              delivering great user experiences. I enjoy tackling complex
              challenges and turning ideas into reliable, easy-to-use
              applications.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-500 hover:border-gray-500 text-black border-0 transform hover:scale-105 transition-all duration-200"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                About Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-black hover:bg-gray-500 hover:border-gray-500 transform hover:scale-105 transition-all duration-200"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1tpNxcqfeFGwBuk7Qc3m4sqcCQUj7rZnV/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/StevenJSCF"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#24292f] hover:bg-[#1b1f23] rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-200 group"
              >
                <Github className="w-5 h-5 text-white group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/joshua-chiang-ab9224268/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#0077b5] hover:bg-[#005983] rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-200 group"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:text-white" />
              </a>
              <a
                href="mailto:joshua.chiang12@gmail.com"
                className="w-12 h-12 bg-[#ea4335] hover:bg-[#b31412] rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-200 group"
              >
                <Mail className="w-5 h-5 text-white group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center">
            <div className="relative group">
              {/* Image Container with visible white shadow */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full shadow-[0_0_36px_0_rgba(255,255,255,0.35)]">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/hero-image.jpg"
                    alt="Steven Chiang - Software Engineer"
                    className="w-full h-full object-cover"
                    width={384}
                    height={384}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroPage;
