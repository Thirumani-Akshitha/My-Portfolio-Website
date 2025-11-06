import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Code2,
  Sparkles,
  Cpu,
  Database,
  Terminal,
  Globe,
  Brackets,
  Braces,
  FileCode,
  GitBranch,
  Layers,
  Boxes,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
export function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = [
    "Full Stack Web Developer",
    "prompting enthusiast",
    "FrontEnd Designer",
    "AI Tools Explorer",
  ];
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typedText.length < currentWord.length) {
            setTypedText(
              currentWord.slice(0, typedText.length + 1),
            );
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (typedText.length > 0) {
            setTypedText(
              currentWord.slice(0, typedText.length - 1),
            );
          } else {
            setIsDeleting(false);
            setCurrentWordIndex(
              (prev) => (prev + 1) % words.length,
            );
          }
        }
      },
      isDeleting ? 50 : 100,
    );
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentWordIndex]);
  const floatingIcons = [
    { Icon: Code2, x: "8%", y: "15%", delay: 0, size: 56 },
    {
      Icon: Terminal,
      x: "88%",
      y: "12%",
      delay: 0.5,
      size: 48,
    },
    { Icon: Brackets, x: "12%", y: "65%", delay: 1, size: 52 },
    {
      Icon: Database,
      x: "85%",
      y: "70%",
      delay: 1.5,
      size: 50,
    },
    { Icon: GitBranch, x: "5%", y: "40%", delay: 2, size: 44 },
    { Icon: Globe, x: "92%", y: "45%", delay: 2.5, size: 54 },
    {
      Icon: FileCode,
      x: "15%",
      y: "85%",
      delay: 0.8,
      size: 46,
    },
    { Icon: Layers, x: "85%", y: "30%", delay: 1.8, size: 48 },
    { Icon: Braces, x: "7%", y: "75%", delay: 1.2, size: 42 },
    { Icon: Boxes, x: "90%", y: "85%", delay: 2.2, size: 50 },
    { Icon: Cpu, x: "18%", y: "25%", delay: 0.3, size: 40 },
    {
      Icon: Sparkles,
      x: "82%",
      y: "55%",
      delay: 1.6,
      size: 38,
    },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {" "}
      {/* Geometric shapes */}{" "}
      <motion.div
        className="absolute w-64 h-64 border-2 border-[#A259FF]/30 rounded-lg"
        style={{
          left: "20%",
          top: "30%",
          transform: "rotate(45deg)",
        }}
        animate={{ rotate: [45, 65, 45], scale: [1, 1.1, 1] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />{" "}
      <motion.div
        className="absolute w-48 h-48 border-2 border-[#C77DFF]/30 rounded-full"
        style={{ right: "15%", bottom: "25%" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />{" "}
      <motion.div
        className="absolute w-32 h-32 border-2 border-[#B388EB]/30"
        style={{
          left: "70%",
          top: "15%",
          transform: "rotate(30deg)",
        }}
        animate={{ rotate: [30, -30, 30] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />{" "}
      {/* Floating background icons */}{" "}
      {floatingIcons.map(
        ({ Icon, x, y, delay, size }, index) => (
          <motion.div
            key={index}
            className="absolute text-[#A259FF]/40"
            style={{ left: x, top: y }}
            animate={{
              y: [0, -25, 0],
              x: [0, Math.sin(index) * 15, 0],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5 + index * 0.5,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {" "}
            <Icon size={size} strokeWidth={1.5} />{" "}
          </motion.div>
        ),
      )}{" "}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {" "}
        {/* Left side - Text */}{" "}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {" "}
          <motion.h1
            className="text-5xl md:text-7xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {" "}
            <span className="neon-text">
              {" "}
              Thirumani Akshitha{" "}
            </span>{" "}
          </motion.h1>{" "}
          {/* Typing Animation */}{" "}
          <motion.p
            className="text-xl text-white/70 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {" "}
            I am a{" "}
          </motion.p>{" "}
          <motion.div
            className="text-xl md:text-2xl text-white/80 mb-6 h-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {" "}
            <span className="text-[#C77DFF]">
              {typedText}
            </span>{" "}
            <span className="animate-pulse text-[#A259FF]">
              {" "}
              |{" "}
            </span>{" "}
          </motion.div>{" "}
          <motion.p
            className="text-white/70 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {" "}
            Always Curious to Explore New Things{" "}
          </motion.p>{" "}
          {/* Glowing Contact Button */}{" "}
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#A259FF] to-[#C77DFF] rounded-full neon-glow-button cursor-pointer transition-all duration-150 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{
              boxShadow:
                "0 0 30px rgba(162, 89, 255, 0.6), 0 0 60px rgba(199, 125, 255, 0.4)",
              transition: { duration: 0.15 },
            }}
          >
            {" "}
            <span className="text-white">
              Open to Work
            </span>{" "}
          </motion.a>{" "}
        </motion.div>{" "}
        {/* Right side - Image */}{" "}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {" "}
          <motion.div
            className="relative animate-float"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.15 },
            }}
          >
            {" "}
            {/* Purple glow aura */}{" "}
            <div className="absolute inset-0 rounded-full purple-glow-soft blur-3xl"></div>{" "}
            {/* Image with cutout effect */}{" "}
            <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden">
              {" "}
              <ImageWithFallback
                src="https://avatars.githubusercontent.com/u/205949349?v=4"
                alt="Akshitha Thirumani"
                className="w-full h-full object-cover"
                style={{
                  mixBlendMode: "lighten",
                  filter:
                    "drop-shadow(0 0 30px rgba(162, 89, 255, 0.4))",
                }}
              />{" "}
            </div>{" "}
            {/* Shimmering ring effect */}{" "}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#A259FF]/30"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>{" "}
          </motion.div>{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}