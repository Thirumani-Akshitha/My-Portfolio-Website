import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useInView } from "motion/react";
import { GraduationCap, Briefcase } from "lucide-react";

export function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
  });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // ---- Your timeline entries ----
  const timeline = [
    {
      type: "education",
      title: "Secondary School",
      organization: "St Anns's High School, Hyderabad",
      year: "2020",
      description:
        "Completed schooling with strong academic performance with 9.8 CGPA.",
    },
    {
      type: "education",
      title: "Intermediate Education (MPC)",
      organization: "Narayana Junior College, Hyderabad",
      year: "2020 – 2022",
      description: "CGPA: 9.27",
    },
    {
      type: "education",
      title:
        "Bachelor of Technology in Artificial Intelligence & Data Science",
      organization:
        "St. Peter’s Engineering College, Hyderabad",
      year: "2022 – 2026",
      description:
        "Currently pursuing final year in AI & DS, with CGPA: 8.89",
    },
    {
      type: "experience",
      title: "Associate – Cosmic365.ai",
      organization: "Remote Internship",
      year: "Feb 2024 - June 2024.",
      description:
        "Checked and verified website links for accuracy, collected and organized logos, and wrote short summaries to make the content clear and well presented. Contributed to improving the overall look and clarity of the website.",
    },
    {
      type: "experience",
      title:
        "Executive Member – SPECANCIENS (Alumni Association)",
      organization: "St. Peter’s Engineering College",
      year: "2023 – Present",
      description:
        "Contributing to alumni engagement, organizing events, and managing creative initiatives.",
    },
    {
      type: "experience",
      title: "Web Development Projects",
      organization: "Personal & Academic Projects",
      description:
        "Developed intelligent web projects like ‘NutriCradle’ (AI-powered baby food planner) and Personal projects using React, Node.js, Express, and PostgreSQL.",
    },
  ];

  // Glowing line animation height
  const timelineHeight = useTransform(
    scrollYProgress,
    [0, 0.8],
    ["0%", "100%"],
  );

  return (
    <section
      id="timeline"
      className="py-20 px-6 relative"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-5xl text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          Education & Experience
        </motion.h2>

        <div className="relative">
          {/* Static vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#A259FF]/20" />

          {/* Animated glowing scroll line */}
          <motion.div
            className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-[#A259FF] to-[#C77DFF] shadow-[0_0_15px_rgba(162,89,255,0.8)]"
            style={{
              height: timelineHeight,
              transformOrigin: "top",
            }}
          />

          {/* Timeline cards */}
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className={`flex items-center mb-12 ${
                index % 2 === 0
                  ? "flex-row"
                  : "flex-row-reverse"
              }`}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
                scale: 0.8,
              }}
              animate={
                isInView ? { opacity: 1, x: 0, scale: 1 } : {}
              }
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.15,
                type: "spring",
                stiffness: 80,
              }}
            >
              {/* Content box */}
              <div className="w-5/12">
                <motion.div
                  className={`bg-gradient-to-br ${
                    index % 2 === 0
                      ? "from-[#1a0a2e]/60 to-[#0A0028]/60"
                      : "from-[#15002B]/60 to-[#1a0a2e]/60"
                  } backdrop-blur-sm p-6 rounded-xl border border-[#A259FF]/20 hover:border-[#A259FF]/50 transition-all duration-150 cursor-pointer`}
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 0 30px rgba(162, 89, 255, 0.3), 0 0 60px rgba(199, 125, 255, 0.2)",
                    transition: { duration: 0.15 },
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    {item.type === "education" ? (
                      <GraduationCap
                        className="text-[#C77DFF]"
                        size={24}
                      />
                    ) : (
                      <Briefcase
                        className="text-[#B388EB]"
                        size={24}
                      />
                    )}
                    <span className="text-[#A259FF]">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-white/90 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#C77DFF] mb-2">
                    {item.organization}
                  </p>
                  <p className="text-white/60">
                    {item.description}
                  </p>
                </motion.div>
              </div>

              {/* Center glowing dot */}
              <div className="w-2/12 flex justify-center">
                <motion.div
                  className="w-4 h-4 rounded-full bg-gradient-to-r from-[#A259FF] to-[#C77DFF] purple-glow cursor-pointer"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: 0.3 + index * 0.15,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.5,
                    boxShadow:
                      "0 0 20px rgba(162, 89, 255, 0.8), 0 0 40px rgba(199, 125, 255, 0.6)",
                    transition: { duration: 0.15 },
                  }}
                />
              </div>

              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}