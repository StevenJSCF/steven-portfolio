import { User, Mail, Github, Linkedin, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Projects from './(sections)/Projects/page'
import ProjectCard from '@/components/ProjectCard'
import HeroPage from './(sections)/Hero/page'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Steven Chiang
            </div>
            <div className="flex space-x-8">
              <a href="#home" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                Projects
              </a>  
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
 
    
      

      {/* Hero Section */}
      <HeroPage />

      {/* About Section */}
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
                Fully committed to the philosophy of life-long learning, I'm a full stack developer with a deep passion 
                for JavaScript, React and all things web development. The unique combination of creativity, logic, 
                technology and never running out of new things to discover, drives my excitement and passion for web 
                development. When I'm not at my computer I like to spend my time reading, keeping fit and playing guitar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />
      {/* Skills Section */}


      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Contact
              <div className="h-2 w-28 bg-gradient-to-r from-red-500 to-red-400 mx-auto mt-2"></div>
            </h2>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-300 mb-8">
              Let's work together! Feel free to reach out for collaborations or just a friendly hello.
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="mailto:hello@example.com" 
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>hello@example.com</span>
              </a>
            </div>

            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
