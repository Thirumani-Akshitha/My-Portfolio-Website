import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
  });

  const projects = [
    {
      title: "NutriCradle",
      description:
        "AI Powered Baby Food Planner With Chatbot And Smart Feeding Alerts.",
      image:
        "https://github.com/Thirumani-Akshitha/NutriCradle/blob/main/bg.jpg?raw=true",
      tags: ["HTML", "Tailwind CSS", "JavaScript", "FireBase"],
      github:
        "https://github.com/Thirumani-Akshitha/NutriCradle/tree/main",
      live: "https://nutricradle.netlify.app/",
    },
    {
      title: "Secrets",
      description:
        "A secure full-stack authentication app where users can register, log in, and anonymously share their secrets.",
      image:
        "https://img.freepik.com/free-vector/abstract-background-design_1040-645.jpg?semt=ais_hybrid&w=740&q=80",
      tags: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Passport.js",
        "EJS",
      ],
      github:
        "https://github.com/Thirumani-Akshitha/Secrets/tree/main",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 relative"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#1a0a2e]/50 to-[#0A0028]/50 backdrop-blur-sm rounded-2xl border border-[#A259FF]/20 hover:border-[#A259FF]/50 transition-all duration-150 overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 80, rotateX: -15 }}
              animate={
                isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}
              }
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow:
                  "0 20px 60px rgba(162, 89, 255, 0.4), 0 0 80px rgba(199, 125, 255, 0.2)",
                transition: { duration: 0.15 },
              }}
            >
              <div className="relative overflow-hidden h-48">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0028] to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-white/90 mb-3 group-hover:text-white transition-colors duration-150">
                  {project.title}
                </h3>
                <p className="text-white/60 mb-4 group-hover:text-white/80 transition-colors duration-150">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#A259FF]/10 text-[#C77DFF] rounded-full border border-[#A259FF]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    className="flex items-center gap-2 text-[#B388EB] hover:text-[#C77DFF] transition-colors duration-150 cursor-pointer"
                    onClick={() =>
                      window.open(project.github, "_blank")
                    }
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </button>
                  <button
                    className="flex items-center gap-2 text-[#B388EB] hover:text-[#C77DFF] transition-colors duration-150 cursor-pointer"
                    onClick={() =>
                      window.open(project.live, "_blank")
                    }
                  >
                    <ExternalLink size={18} />
                    <span>Live</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}