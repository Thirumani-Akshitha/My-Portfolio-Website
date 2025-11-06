import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { User, Code, Heart, Lightbulb } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
  });

  const cards = [
    {
      icon: User,
      title: "Who I Am",
      description:
        "I’m Thirumani Akshitha, a final-year B.Tech student in AI & DS branch at St. Peter’s Engineering College. Passionate about learning, building, and creating meaningful AI-driven web solutions.",
    },
    {
      icon: Code,
      title: "What I Do",
      description:
        "I design and develop full-stack web applications using JavaScript FullStack web development — blending logic and creativity to deliver responsive, user-focused projects.",
    },
    {
      icon: Heart,
      title: "My Passion",
      description:
        "I love exploring AI-powered tools and building intelligent, secure, and aesthetic digital experiences. I believe in constant learning, innovation, and bringing ideas to life through code.",
    },
    {
      icon: Lightbulb,
      title: "Interests",
      description:
        "Beyond coding, I enjoy discovering new technologies, designing in Figma and Canva, and contributing to creative communities like SPECANCIENS.",
    },
  ];

  return (
    <section
      id="about"
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
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#1a0a2e]/50 to-[#0A0028]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#A259FF]/20 hover:border-[#A259FF]/50 transition-all duration-150 group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={
                isInView ? { opacity: 1, scale: 1, y: 0 } : {}
              }
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(162, 89, 255, 0.3)",
                transition: { duration: 0.15 },
              }}
            >
              <div className="mb-6 inline-block p-4 bg-[#A259FF]/10 rounded-xl group-hover:bg-[#A259FF]/20 transition-colors duration-150">
                <card.icon
                  className="text-[#C77DFF]"
                  size={32}
                />
              </div>
              <h3 className="text-white/90 mb-3">
                {card.title}
              </h3>
              <p className="text-white/60">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}