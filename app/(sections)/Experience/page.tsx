"use client";

import { useState, useRef } from "react";
import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Github, ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  technologies: string[];
  image: string;
  description: ReactNode;
  github: string;
  website: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "BAF BAF",
    technologies: ["React", "Next.js", "TypeScript", "PostGreSQL", "AWS", "Figma", "Docker"],
    image: "/images/bafbaf.png",
    description: (
      <div className="space-y-1">
        <p className="m-0">
          Developing an e-commerce platform for BAF BAF, a Venezuelan pet food brand under Grupo Proalca. The site allows customers to browse products, learn about nutritional benefits, and make online purchases. 
          Collaborated with a UX/UI designer to deliver an engaging shopping experience focused on performance, usability, and brand consistency.
        </p>
        <span className="block mt-1 text-xs italic text-red-400">
          (Currently work in progress)
        </span>
      </div>
    ),
    github: "https://github.com/lazydog007/bafbaf",
    website: "https://bafbaf.com/",
  },
    {
    id: "2",
    title: "Grupo Proalca",
    technologies: ["React", "Next.js", "TypeScript", "Figma", "Docker"],
    image: "/images/grupo-proalca.png",
    description: (
      <div className="space-y-1">
        <p className="m-0">
          Developing a modern, multi-brand website for Grupo Proalca, a Venezuelan 
          agro-industrial company with over 20 years of experience producing high-quality food products. 
          The platform highlights Proalca’s subsidiaries showcasing their catalogs and company mission. Worked collaboratively with a UX/UI designer 
          to create a clean, accessible interface focused on performance and usability.
        </p>
        <span className="block mt-1 text-xs italic text-red-400">
          (Currently work in progress)
        </span>
      </div>
    ),
    github: "https://github.com/lazydog007/grupoproalca-website",
    website: "https://grupo-proalca.com/",
  },
  {
    id: "3",
    title: "Private Account & Inventory Management",
    technologies: ["React", "Next.js", "TypeScript", "PostGreSQL", "AWS", "Docker"],
    image: "/images/private-accounting.png",
    description:
      "Full-stack web app built with a small team for a local business to manage sales, expenses, and inventory in real time. I worked on database design, REST API development, and the responsive dashboard for daily business tracking and analytics.",
    github: "https://github.com/lazydog007/private-accounting",
    website: "https://proyectogris.com/",
  },
  {
    id: "4",
    title: "True Force Technologies",
    technologies: [
      "React Native",
      "Expo",
      "JavaScript",
      "Swift",
      "Android Studios",
      "STM32",
    ],
    image: "/images/true-force-tech.png",
    description:
      "Mobile app developed in a 6-person team for True Force Technologies, a smart gym startup. Integrated BLE communication with an STM32 microcontroller to display live strength and performance metrics. Built with React Native and Swift for real-time athlete tracking.",
    github: "",
    website: "https://www.trueforcetechnologies.com/",
  },
];

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToProject = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 320; // Card width + gap
      const scrollPosition = index * cardWidth;
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const nextProject = () => {
    if (currentIndex < projects.length - 1) {
      scrollToProject(currentIndex + 1);
    }
  };

  const prevProject = () => {
    if (currentIndex > 0) {
      scrollToProject(currentIndex - 1);
    }
  };

  return (
    <section id="projects" className="pt-24 pb-5 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Experience
            <div className="h-2 w-24 bg-gradient-to-r from-red-500 to-red-400 mx-auto mt-2"></div>
          </h1>
        </div>
      </div>

      {/* Projects Container - Full Width */}
      <div className="w-full overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="flex-shrink-0 w-80 bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 cursor-pointer"
              onClick={() => scrollToProject(index)}
            >
              <div className="p-6 h-full flex flex-col">
                {/* Project Title */}
                <h3 className="text-xl font-semibold text-white mb-4 text-center min-h-[60px] flex items-center justify-center">
                  {project.title}
                </h3>

                {/* Project Image */}
                <div className="relative aspect-[4/3] mb-4 rounded-lg overflow-hidden bg-gray-800">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Description */}
                <p className="text-white text-sm text-center mb-4 flex-grow flex items-center justify-center min-h-[48px]">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 justify-center mt-auto mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-gray-700 text-gray-200 hover:bg-gray-600 text-xs px-2 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* GitHub & Website Buttons - Centered */}
                <div className="flex justify-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#24292f] hover:bg-[#1b1f23] rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-200 group"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5 text-white group-hover:text-white" />
                    </a>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-700 hover:bg-blue-900 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-200 group"
                      aria-label="Visit Website"
                    >
                      <ArrowUpRight className="w-4 h-4 text-white ml-1 group-hover:text-white" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={prevProject}
          className="bg-gray-800 border border-gray-700 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition-all duration-200"
          aria-label="Previous Project"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextProject}
          className="bg-gray-800 border border-gray-700 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition-all duration-200"
          aria-label="Next Project"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
