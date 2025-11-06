import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['home', 'about', 'certifications', 'projects', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/40 backdrop-blur-md border-b border-[#A259FF]/30'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Title on left */}
        <motion.div
          className="gradient-text text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          My Portfolio
        </motion.div>

        {/* Navigation links on right */}
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`text-white/90 hover:text-white transition-all duration-150 relative group cursor-pointer ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-[#C77DFF]'
                    : ''
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#A259FF] to-[#C77DFF] transition-all duration-150 ${
                    activeSection === item.href.replace('#', '')
                      ? 'w-full shadow-[0_0_10px_rgba(162,89,255,0.8)]'
                      : 'w-0 group-hover:w-full shadow-[0_0_10px_rgba(162,89,255,0.5)]'
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
