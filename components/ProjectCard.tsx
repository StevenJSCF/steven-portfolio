// components/ProjectCard.tsx
import Image from 'next/image';

export default function ProjectCard() {
 return (
    <section className="bg-black py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-16 relative inline-block w-fit">
          Projects
          <span className="absolute -bottom-1 left-0 w-full h-[5px] bg-red-500"></span>
        </h2>

        {/* Main project block */}
        <div className="relative flex flex-col lg:flex-row items-center gap-10">
          {/* Background Box (BEHIND image and text) */}
          <div className="absolute inset-0 lg:left-0 lg:w-2/3 h-full bg-[#3700ff] rounded-xl -z-10" />

          {/* Left: Image */}
          <div className="lg:w-1/2 p-4">
            <Image
              src="/images/lifeinvader.png" // Replace this with your real image path
              alt="Lifeinvader App"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right: Text */}
          <div className="lg:w-1/2 p-4 z-10">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-purple-400">lifeinvader</span> Social Media App
            </h3>
            <p className="text-gray-200 mb-6 max-w-md">
              Full stack social media application built with React, Node.js, Express.js,
              MongoDB, Socket.io and AWS S3.
            </p>
            <div className="flex gap-4">
              <a
                href="https://your-live-link.com"
                className="px-6 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition"
              >
                LIVE APP
              </a>
              <a
                href="https://github.com/your-repo"
                className="px-6 py-2 border border-white text-white font-bold rounded hover:bg-white hover:text-black transition"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

