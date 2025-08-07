'use client'
import { Button } from '@/components/ui/button'
import { ChevronDown, Coffee, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import React from 'react'
import { useState, useEffect } from 'react'

function HeroPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)

  const roles = [
    "Software Engineer",
    "Full Stack Developer", 
    "Iowa State University Graduate",
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div>
            {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Greeting */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="block mb-2">Hi There,</span>
                <span className="block mb-2">I'm Steven Chiang</span>
                <span className="block">
                  I am a{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transition-all duration-500">
                    {roles[currentRole]}
                  </span>
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Passionate about creating innovative solutions and building exceptional user experiences. 
              I specialize in modern web technologies and love turning complex problems into simple, beautiful designs.
            </p>


            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-700 hover:border-gray-500 text-black border-0 transform hover:scale-105 transition-all duration-200"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                About Me
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-600 text-black hover:bg-gray-700 hover:border-gray-500 transform hover:scale-105 transition-all duration-200"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-200 group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-200 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-200 group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative group">
              {/* Gradient Ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 animate-pulse"></div>
              
              {/* Image Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-gray-600 transition-all duration-300 transform group-hover:scale-105">
                  <img 
                    src="/images/hero-image.jpg" 
                    alt="Steven Chiang - Software Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>
    </div>
  )
}

export default HeroPage
