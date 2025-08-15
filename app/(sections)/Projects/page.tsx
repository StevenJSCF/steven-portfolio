"use client";

import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  title: string;
  technologies: string[];
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Chat PDF",
    technologies: ["Next.js", "OpenAI", "Clerk", "NeonDB", "AWS"],
    image: "/placeholder-s1v12.png",
    description: "AI-powered PDF chat application",
  },
  {
    id: "2",
    title: "Easy Cook",
    technologies: ["Next.js", "OpenAI", "Clerk", "MongoDB", "Stripe"],
    image: "/ai-human-chefs.png",
    description: "AI cooking assistant and recipe generator",
  },
  {
    id: "3",
    title: "Maze Ball Game",
    technologies: ["Android Studio", "SpringBoot", "MySQL", "Java"],
    image: "/placeholder-vrip0.png",
    description: "Mobile maze ball game with multiplayer features",
  },
  {
    id: "4",
    title: "Poker Analytics",
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    image: "/poker-analytics-dashboard.png",
    description: "Advanced poker statistics and analytics platform",
  },
  {
    id: "5",
    title: "E-Commerce Platform",
    technologies: ["Next.js", "Stripe", "Prisma", "Tailwind"],
    image: "/modern-ecommerce-interface.png",
    description: "Full-stack e-commerce solution with payment integration",
  },
];

export default function Projects() {
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

  return (
    <section id="projects" className="pt-24 pb-5 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Projects
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
                <p className="text-gray-300 text-sm text-center mb-4 flex-grow flex items-center justify-center min-h-[48px]">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 justify-center mt-auto">
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
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
