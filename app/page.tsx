
import Projects from "./(sections)/Projects/page";
import HeroPage from "./(sections)/Hero/page";
import NavBar from "@/components/NavBar";
import AboutPage from "./(sections)/About/page";
import ContactPage from "./(sections)/Contact/page";
import EducationPage from "./(sections)/Education/page";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <NavBar />
      {/* Hero Section */}
      <HeroPage />  
      {/* About Section */}
      <AboutPage />
      {/* Education Section */}
      <EducationPage />
      {/* Projects Section */}
      <Projects />
      {/* Contact Section */}
      <ContactPage />

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Joshua Chiang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
