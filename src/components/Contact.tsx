import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    // ✅ Replace YOUR_ACCESS_KEY with your Web3Forms key
    const formDataToSend = {
      access_key: "3c4db466-615a-4c7c-ae1a-fa7974ead4fb",
      ...formData,
    };

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formDataToSend),
      },
    );

    const result = await response.json();

    if (result.success) {
      setStatus("Message sent successfully ✅");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Something went wrong ❌");
    }
  };

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/thirumani-akshitha/",
      color: "#0077B5",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Thirumani-Akshitha",
      color: "#333",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:thirumaniakshitha@gmail.com",
      color: "#EA4335",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-6 relative"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-5xl text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 80,
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="hidden"
                name="access_key"
                value="YOUR_ACCESS_KEY"
              />
              <div>
                <label
                  htmlFor="name"
                  className="block text-white/80 mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-[#1a0a2e]/50 border-[#A259FF]/30 text-white focus:border-[#A259FF] transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white/80 mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full bg-[#1a0a2e]/50 border-[#A259FF]/30 text-white focus:border-[#A259FF] transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white/80 mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full bg-[#1a0a2e]/50 border-[#A259FF]/30 text-white focus:border-[#A259FF] transition-colors duration-150 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#A259FF] to-[#C77DFF] hover:from-[#C77DFF] hover:to-[#B388EB] text-white transition-all duration-150 shadow-[0_0_20px_rgba(162,89,255,0.3)] hover:shadow-[0_0_30px_rgba(162,89,255,0.5)] cursor-pointer"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </Button>

              {status && (
                <p className="text-center text-sm text-white/70 mt-4">
                  {status}
                </p>
              )}
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 80,
            }}
          >
            <h3 className="text-white/90 mb-6">
              Connect with me
            </h3>
            <p className="text-white/60 mb-8">
              Feel free to reach out through any of these
              platforms. I'm always open to discussing new
              projects, creative ideas, or opportunities.
            </p>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#1a0a2e]/50 to-[#0A0028]/50 rounded-xl border border-[#A259FF]/20 hover:border-[#A259FF]/50 transition-all duration-150 group cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 0 30px rgba(162, 89, 255, 0.2)",
                    transition: { duration: 0.15 },
                  }}
                >
                  <div className="p-3 bg-[#A259FF]/10 rounded-lg group-hover:bg-[#A259FF]/20 transition-colors duration-150">
                    <link.icon
                      className="text-[#C77DFF]"
                      size={24}
                    />
                  </div>
                  <span className="text-white/80 group-hover:text-white transition-colors duration-150">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}