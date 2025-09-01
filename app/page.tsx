"use client";
import React from "react";
import { useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi";

function ExperienceCard({ title, company, date, items, image }: { title: string; company: string; date: string; items: string[]; image?: string }) {
  return (
    <div className="p-6 bg-indigo-800 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 flex flex-col items-start gap-4">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-1">{company} | {date}</p>
      <ul className="list-disc list-inside text-gray-300 text-sm">
        {items && items.map(item => <li key={item}>{item}</li>)}
      </ul>
      {/* Render img if provided */}
      {image && (
        <div className="w-full flex justify-center mt-4">
          <img
            src={image}
            alt={`logo`}
            className="w-64 h-32 object-contain"
          />
        </div>
      )}
    </div>
  );
}

function ProjectCard({ title, description, items, image, children}: { title: string; description: string; items?: string[]; image?: string; children?: React.ReactNode }) {
  return (
    <div className="p-6 bg-indigo-800 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
      <ul className="list-disc list-inside text-gray-300 text-sm">
        {items && items.map(item => <li key={item}>{item}</li>)}
      </ul>
      {children}
      {/* Render img if provided */}
      {image && (
        <div className="w-full flex justify-center mt-4">
          <img
            src={image}
            alt={`img`}
            className="w-76 h-64 object-contain"
          />
        </div>
      )}
    </div>
  );
}

export default function Home() {
   const [scrolled, setScrolled] = useState(false);
   useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); 
  }, []);
  
  return (
    <main className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen scroll-smooth">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "bg-black shadow-lg py-2" : "bg-black/70 backdrop-blur-md py-4"
        }`}
      >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">


        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8 text-white">
          <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-orange-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-orange-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-orange-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
        </nav>
      </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 animate-fade-slide-up relative">
        <h1 className="text-6xl font-bold">
          Hi, I’m <span className="text-orange-400">Keela</span>
        </h1>
      <p className="mt-4 text-xl text-gray-300 max-w-3xl">
          Software & UI Developer • Journey to ML/AI Engineer
        </p>

      <div className="flex justify-center mt-14">
          <img id="girl" src="/images/girl.png" alt="girl" width="300" height="200"/>
      </div>

        {/* Scroll Down Arrow */}
        <a href="#about" className="absolute bottom-10 flex items-center space-x-2 animate-bounce">
            <svg
              className="w-8 h-8 text-orange-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <span className="text-orange-400 font-medium uppercase tracking-wide">
              Scroll Down
            </span>
          </a>
        </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 text-center text-white">
        <h2 className="text-4xl font-semibold mb-6">About Me</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          I’m Keela, a 21 year old Computer Science graduate from the University of York with hands-on experience in
          front-end development, UI design, and Software Engineering. I’ve worked on real-world projects
          using TypeScript, C#, and Java, and I’m especially passionate about creating human-centered,
          secure, and innovative systems.
        </p>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
          My interests span from crafting clean, intuitive interfaces to exploring the future of
          machine learning and AI. I thrive on solving problems that have a real-world impact and am
          continuously growing my skillset in both development and research.
        </p>
        <div className="flex justify-center mt-14">
          <img id="world" src="/images/world.svg" alt="world" width="300" height="200"/>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 text-white animate-fade-slide-up">
        <h2 className="text-4xl font-semibold mb-10 text-center">Skills</h2>
        <div className="max-w-4xl mx-auto grid gap-10">

          {/* Software Development */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Software Development</h3>
            <div className="flex flex-wrap gap-3">
              {["TypeScript", "Python", "C#", "Java", "HTML", "CSS", "JavaScript"].map(skill => (
                <span key={skill} className="bg-indigo-800 px-3 py-1 rounded-full text-sm text-white hover:bg-orange-400 transition-colors">{skill}</span>
              ))}
            </div>
          </div>

          {/* Frameworks & Tools */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Frameworks & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {["React", "Tailwind", "PyTorch", "Scikit-learn", "Pandas", "GitHub", "Azure DevOps", "SQL"].map(skill => (
                <span key={skill} className="bg-orange-700 px-3 py-1 rounded-full text-sm text-white hover:bg-orange-400 transition-colors">{skill}</span>
              ))}
            </div>
          </div>

          {/* Specialisms */}
          <p className="mt-8 text-center text-gray-300 max-w-2xl mx-auto">
            Specialisms: API development, user interface design, debugging, machine learning (image classification)
          </p>
          <div className="flex justify-center mt-14">
          <img id="world" src="/images/wield.png" alt="wield" width="400" height="400"/>
        </div>
        </div>
      </section>

    {/* Experience Section */}
    <section id="experience" className="px-6 py-20 text-white animate-fade-slide-up">
      <h2 className="text-4xl font-semibold mb-10 text-center">Experience</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <ExperienceCard
          title="Junior Software Engineer"
          company="MINDLINK"
          date="June 2024 - September 2024"
          items={[
            "Developed and tested front-end features using TypeScript and Azure DevOps, including friendly certificate labelling, alert system enhancements, and UX improvements",
            "Gained exposure to federated business strategies while contributing to encrypted communication and security-focused systems",
            "Performed end-to-end, integration, manual, and unit testing in an agile team environment",
            "Presented progress updates in team meetings and participated in agile workshops"
          ]}
          image="/images/mindlink.svg"
        />

        <ExperienceCard
          title="Junior Software Engineer"
          company="MINDLINK"
          date="June 2023 - September 2023"
          items={[
            "Utilised Java and C# to integrate with Zoho API",
            "Developed a user-friendly Feedback Form GUI, enabling data transmission to local server",
            "Gained exposure to TypeScript and UI principles"
          ]}
          image="/images/ui.svg"
        />

        <ExperienceCard
          title="Junior Software Engineer"
          company="MINDLINK"
          date="August 2022 - September 2022"
          items={[
            "Programmed an API chatbot using Python for provisioning channels & agents",
            "Learned about IPs, SSL certification, Git, and Jira and worked alongside a mentor"
          ]}
          image="/images/chat.svg"
        />

        <ExperienceCard
          title="GCSE/A-Level Maths Tutor"
          company="Freelance"
          date="October 2021 - June 2022"
          items={[
            "Provided local one-to-one maths tuition and acted as teaching assistant at Trinity Catholic High School"
          ]}
          image="/images/tutor.svg"
        />

        <ExperienceCard
          title="Junior Software Engineer"
          company="CP Automation Ltd"
          date="August 2021"
          items={[
            "Completed a training course and assisted implementing a form using HTML and CSS"
          ]}
        />
      </div>
    </section>

    {/* Projects Section */}
    <section id="projects" className="px-6 py-20 bg-gradient-to-b from-black to-gray-900 text-white animate-fade-slide-up">
      <h2 className="text-4xl font-semibold mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        <div>
          <ProjectCard
            title="Food Waste App Prototype"
            description="Created wireframes and a Figma prototype for a food waste app during my HCI module (first year)."
            image="/images/foodapp.png"
          />
        </div>

        <div>
          <ProjectCard
            title="University RPG Simulation Project"
            description="Designed architecture, tilemap system, unit tests, risk assessments, and UML diagrams for a student life simulation game. Practiced Entity-Component System, sequence/state diagrams, and collaborative project delivery."
          image="/images/eng.png"
          />
        </div>

      <ProjectCard
        title="Dissertation: Enhanced osMUD UI"
        description="Developed an improved user interface for managing and visualising MUD policies, incorporating a PCAP visualiser and user-centred HCI design. Conducted surveys and iterative testing to improve usability for non-technical users."
      >
        <a
          href="/Dissertation_28THAPRIL.pdf" // PDF
          download
          className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors mt-4"
        >
          <FiDownload className= "mr-2" />
          Download PDF
        </a>
      </ProjectCard>
      </div>
    </section>
    
    {/* Contact Section */}
    <section id="contact" className="px-6 py-10 text-center bg-gradient-to-b from-gray-900 to-black animate-fade-slide-up">
      <h2 className="text-4xl font-semibold mb-8">Contact Me</h2>
      <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
        Interested? You can reach me via email or LinkedIn.
      </p>
      <div className="flex gap-6 justify-center">
        <a href="mailto:keelaynta@gmail.com" className="text-orange-400 hover:underline">Email</a>
        <a href="https://www.linkedin.com/in/keela-ta-154425231/" target="_blank" className="text-orange-400 hover:underline">LinkedIn</a>
      </div>
    </section>

    {/* Footer */}
    <footer className="text-center text-gray-400 text-sm py-6 mt-12 border-t border-gray-700">
      Portfolio coded by me using <span className="font-semibold text-white">React</span>, <span className="font-semibold text-white">TailwindCSS</span>, and <span className="font-semibold text-white">TypeScript</span>
      - © 2025 Keela. All rights reserved.
    </footer>
  </main>
  )
}
