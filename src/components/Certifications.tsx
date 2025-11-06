import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award, Eye } from "lucide-react";

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
  });
  const [hoveredCard, setHoveredCard] = useState<number | null>(
    null,
  );

  const certifications = [
    {
      title: "ServiceNow Certified System Administrator (CSA)",
      organization: "ServiceNow",
      year: "2025",
      certUrl:
        "https://drive.google.com/file/d/1K7ZWQb_EAF_BaBsqS4HbeNJr1qq-3DZ5/view?usp=drive_link",
    },
    {
      title: "Programming in JAVA",
      organization: "NPTEL",
      year: "2024",
      certUrl: "#",
    },
  ];

  return (
    <section
      id="certifications"
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
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="relative bg-gradient-to-br from-[#1a0a2e]/50 to-[#0A0028]/50 backdrop-blur-sm p-8 rounded-2xl border-2 border-[#A259FF]/30 hover:border-[#A259FF]/70 transition-all duration-150 group cursor-pointer overflow-hidden"
              initial={{ opacity: 0, scale: 0.5, rotateY: -25 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1, rotateY: 0 }
                  : {}
              }
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow:
                  "0 0 40px rgba(162, 89, 255, 0.5), 0 0 80px rgba(199, 125, 255, 0.3)",
                transition: { duration: 0.15 },
              }}
              style={{ perspective: 1000 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glowing border animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#A259FF] via-[#C77DFF] to-[#B388EB] opacity-0 group-hover:opacity-20 transition-opacity duration-150 rounded-2xl"
                animate={{
                  background: [
                    "linear-gradient(0deg, #A259FF, #C77DFF, #B388EB)",
                    "linear-gradient(360deg, #A259FF, #C77DFF, #B388EB)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="relative z-10">
                <div className="mb-6 inline-block p-4 bg-[#A259FF]/10 rounded-xl group-hover:bg-[#A259FF]/20 transition-colors duration-150">
                  <Award className="text-[#C77DFF]" size={32} />
                </div>
                <h3 className="text-white/90 mb-3">
                  {cert.title}
                </h3>
                <p className="text-[#B388EB] mb-2">
                  {cert.organization}
                </p>
                <p className="text-white/50 mb-4">
                  {cert.year}
                </p>

                {/* Only View button (Download removed) */}
                <motion.div
                  className="flex gap-4 mt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredCard === index ? 1 : 0,
                    y: hoveredCard === index ? 0 : 10,
                  }}
                  transition={{ duration: 0.15 }}
                >
                  <button
                    className="flex items-center gap-2 px-4 py-2 bg-[#A259FF]/20 hover:bg-[#A259FF]/40 rounded-lg border border-[#A259FF]/40 hover:border-[#A259FF]/60 text-[#C77DFF] hover:text-white transition-all duration-150 cursor-pointer"
                    onClick={() =>
                      window.open(cert.certUrl, "_blank")
                    }
                  >
                    <Eye size={16} />
                    <span className="text-sm">View</span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}