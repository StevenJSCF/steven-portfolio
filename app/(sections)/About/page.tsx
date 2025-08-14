import React from "react";
import { User } from "lucide-react";

export default function AboutPage() {
  return (
    <section id="about" className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About
            <div className="h-2 w-24 bg-gradient-to-r from-red-500 to-red-400 mx-auto mt-2"></div>
          </h1>
        </div>

        <div className="flex flex-col items-center">
          {/* Profile Icon */}
          <div className="mb-12">
            <div className="w-32 h-32 rounded-full border-4 border-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <User className="w-16 h-16 text-gray-400" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="max-w-2xl text-center">
            <p className="text-lg text-gray-300 leading-relaxed">
              Fully committed to the philosophy of life-long learning, I'm a
              full stack developer with a deep passion for JavaScript, React and
              all things web development. The unique combination of creativity,
              logic, technology and never running out of new things to discover,
              drives my excitement and passion for web development. When I'm not
              at my computer I like to spend my time reading, keeping fit and
              playing guitar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

