import { motion } from 'motion/react';

export function BackgroundEffects() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 5,
  }));

  const codeSymbols = ['<', '>', '{', '}', '(', ')', ';', '[', ']', '/', '*'];
  const floatingSymbols = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 30 + 30,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0028] via-[#15002B] to-[#0A0028]"></div>

      {/* Particles */}
{/* Particles */}
{particles.map((particle) => (
  <motion.div
    key={particle.id}
    className="absolute rounded-full"
    style={{
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      width: particle.size,
      height: particle.size,
      backgroundColor: "rgba(162, 89, 255, 0.7)", // Bright violet dots ✨
    }}
    animate={{
      y: [0, -100, 0],
      opacity: [0.4, 0.9, 0.4],
    }}
    transition={{
      duration: particle.duration,
      delay: particle.delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
))}


      {/* Floating code symbols */}
      {floatingSymbols.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-[#A259FF]/10"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
          }}
          animate={{
            y: [0, -200, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.05, 0.15, 0.05],
            rotate: [0, 360],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {item.symbol}
        </motion.div>
      ))}

      {/* Glowing orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-[#A259FF]/5 blur-3xl"
        style={{ left: '10%', top: '20%' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-[#C77DFF]/5 blur-3xl"
        style={{ right: '10%', bottom: '20%' }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
