import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Projects
            <div className="h-2 w-32 bg-gradient-to-r from-red-500 to-red-400 mx-auto mt-2"></div>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
            <CardContent className="p-6">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <ExternalLink className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                E-Commerce Platform
              </h3>
              <p className="text-gray-400 mb-4">
                A full-stack e-commerce solution built with React, Node.js, and
                MongoDB. Features include user authentication, payment
                processing, and admin dashboard.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-600 text-xs rounded">
                  React
                </span>
                <span className="px-2 py-1 bg-green-600 text-xs rounded">
                  Node.js
                </span>
                <span className="px-2 py-1 bg-yellow-600 text-xs rounded">
                  MongoDB
                </span>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Project Card 2 */}
          <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
            <CardContent className="p-6">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
                <ExternalLink className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Task Management App
              </h3>
              <p className="text-gray-400 mb-4">
                A collaborative task management application with real-time
                updates, drag-and-drop functionality, and team collaboration
                features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-600 text-xs rounded">
                  Next.js
                </span>
                <span className="px-2 py-1 bg-purple-600 text-xs rounded">
                  TypeScript
                </span>
                <span className="px-2 py-1 bg-red-600 text-xs rounded">
                  Redis
                </span>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Project Card 3 */}
          <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
            <CardContent className="p-6">
              <div className="aspect-video bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg mb-4 flex items-center justify-center">
                <ExternalLink className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Weather Dashboard
              </h3>
              <p className="text-gray-400 mb-4">
                A responsive weather dashboard that displays current conditions
                and forecasts with beautiful visualizations and location-based
                services.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-600 text-xs rounded">
                  React
                </span>
                <span className="px-2 py-1 bg-orange-600 text-xs rounded">
                  Chart.js
                </span>
                <span className="px-2 py-1 bg-indigo-600 text-xs rounded">
                  API
                </span>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
