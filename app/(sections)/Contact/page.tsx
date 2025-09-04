"use client";

import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact
            <div className="h-2 w-28 bg-gradient-to-r from-red-500 to-red-400 mx-auto mt-2"></div>
          </h2>
        </div>
        <div className="text-center">
          <p className="text-xl text-gray-300 mb-8">
            Let's work together! Feel free to reach out for collaborations or
            just a friendly hello.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:hello@example.com"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>joshua.chiang12@gmail.com</span>
            </a>
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-black hover:bg-gray-700"
              onClick={() =>
                window.open("https://github.com/StevenJSCF", "_blank")
              }
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-black hover:bg-gray-700"
              onClick={() =>
                window.open("https://www.linkedin.com/in/joshua-chiang-ab9224268/", "_blank")
              }
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
