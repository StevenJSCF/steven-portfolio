import React from "react";
import Image from "next/image";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
export default function AboutPage() {
  return (
    <section id="about" className="pt-24 pb-5 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About
            <div className="h-2 w-24 bg-gradient-to-r from-red-500 to-red-400 mx-auto mt-2"></div>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image and Description */}
          <div className="flex flex-col items-center">
            {/* Profile Icon */}
            <div className="mb-8 md:mb-6">
              <div className="relative w-44 h-44 md:w-56 md:h-56 mx-auto flex items-center justify-center">
                <div className="w-full h-full rounded-full shadow-[0_0_36px_0_rgba(255,255,255,0.35)] overflow-hidden flex items-center justify-center">
                  <Image
                    src="/images/about-pic.png"
                    alt="Profile Picture"
                    className="w-full h-full object-cover"
                    width={224}
                    height={224}
                  />
                </div>
              </div>
            </div>
            {/* About Text */}
            <div className="max-w-2xl text-center">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                Fully committed to the philosophy of life-long learning, I'm a
                full stack developer with a deep passion for JavaScript, React
                and all things web development. The unique combination of
                creativity, logic, technology and never running out of new
                things to discover, drives my excitement and passion for web
                development. When I'm not at my computer I like to spend my time
                reading, keeping fit and playing guitar.
              </p>
            </div>
          </div>
          {/* Right: Skills Section - Card with icons and grid */}
          <div className="flex flex-col items-center md:items-start w-full">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 md:gap-x-12 md:gap-y-10">
              <div className="flex flex-col items-center">
                <SiJavascript className="text-yellow-400 text-3xl mb-1" />
                <span className="text-sm text-gray-200">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTypescript className="text-blue-400 text-3xl mb-1" />
                <span className="text-sm text-gray-200">TypeScript</span>
              </div>
              <div className="flex flex-col items-center">
                <SiReact className="text-cyan-400 text-3xl mb-1" />
                <span className="text-sm text-gray-200">React</span>
              </div>
              <div className="flex flex-col items-center">
                <SiNextdotjs className="text-white text-3xl mb-1" />
                <span className="text-sm text-gray-200">Next.js</span>
              </div>
              <div className="flex flex-col items-center">
                <SiNodedotjs className="text-green-500 text-3xl mb-1" />
                <span className="text-sm text-gray-200">Node.js</span>
              </div>
              <div className="flex flex-col items-center">
                <SiExpress className="text-gray-300 text-3xl mb-1" />
                <span className="text-sm text-gray-200">Express</span>
              </div>
              <div className="flex flex-col items-center">
                <SiHtml5 className="text-orange-500 text-3xl mb-1" />
                <span className="text-sm text-gray-200">HTML5</span>
              </div>
              <div className="flex flex-col items-center">
                <SiCss3 className="text-blue-500 text-3xl mb-1" />
                <span className="text-sm text-gray-200">CSS3</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTailwindcss className="text-cyan-300 text-3xl mb-1" />
                <span className="text-sm text-gray-200">Tailwind</span>
              </div>
              <div className="flex flex-col items-center">
                <SiMongodb className="text-green-400 text-3xl mb-1" />
                <span className="text-sm text-gray-200">MongoDB</span>
              </div>
              <div className="flex flex-col items-center">
                <SiMysql className="text-blue-400 text-3xl mb-1" />
                <span className="text-sm text-gray-200">SQL</span>
              </div>
              <div className="flex flex-col items-center">
                <SiGithub className="text-white text-3xl mb-1" />
                <span className="text-sm text-gray-200">Git & GitHub</span>
              </div>
              <div className="flex flex-col items-center">
                <FaJava className="text-white text-3xl mb-1" />
                <span className="text-sm text-gray-200">Java</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
