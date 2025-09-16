import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Briefcase,
  Download,
  FileText,
  GraduationCap,
  Linkedin,
  Mail,
  Minimize2,
  Phone,
  Square,
  User,
  X,
} from "lucide-react";
import React, { useState } from "react";

const Windows95Portfolio = () => {
  const [openWindows, setOpenWindows] = useState([]);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const openWindow = (windowType) => {
    if (!openWindows.includes(windowType)) {
      setOpenWindows([...openWindows, windowType]);
    }
    setStartMenuOpen(false);
  };

  const closeWindow = (windowType) => {
    setOpenWindows(openWindows.filter((w) => w !== windowType));
  };

  const downloadCV = () => {
    // Create a downloadable CV file
    const cvContent = `
EGIDE TUMUKUNDE
Software Engineer
Kigali, Rwanda
Email: tumugide@gmail.com
Phone: (+250)786451217
LinkedIn: www.linkedin.com/in/tumugide

SUMMARY
Passionate software engineer with 4+ years of experience in modern web application development,
mobile applications, and AI integration. My diverse skill set and adaptability have allowed me
to deliver successful projects that breathe life into innovative ideas.

SKILLS
- Backend Development: TypeScript, PHP, C#, Java
- Mobile Development: Java/Kotlin, TypeScript
- Web Development: JavaScript, React, Laravel
- AI Integration & Prompt Engineering
- Server Management & DevOps

EXPERIENCE
- Sonarwa Life Assurance Company Limited - Back-end Developer (Oct 2024 - Present)
- OSOPOX - Co-Founder and Technical Lead (Oct 2021 - Present)
- CalmGeek - Software Engineer (Jun 2022 - Oct 2024)
- Irembo - Software Engineer (Mar 2024 - Sep 2024)
- Andela - Android Development Mentor (Jun 2022 - Dec 2022)

EDUCATION
- Rwanda Polytechnic - Advanced Diploma in Information Technology (2018-2021)
- GITWE Adventist Secondary School - Computer Science and Management (2014-2017)
    `;

    const blob = new Blob([cvContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Egide_Tumukunde_CV.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const DesktopIcon = ({ icon: Icon, label, onClick, doubleClick }) => (
    <motion.div
      className="flex flex-col items-center p-2 m-2 cursor-pointer select-none"
      onClick={onClick}
      onDoubleClick={doubleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="bg-gray-300 border-2 border-gray-400 border-t-white border-l-white p-3 mb-1">
        <Icon size={32} className="text-gray-800" />
      </div>
      <span className="text-white text-xs bg-blue-800 px-1 rounded shadow">
        {label}
      </span>
    </motion.div>
  );

  const Window = ({ title, children, onClose, windowType }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-10 bg-gray-300 border-2 border-gray-400 border-t-white border-l-white shadow-lg z-10"
      style={{ maxWidth: "800px", maxHeight: "600px", margin: "auto" }}
    >
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-1 flex justify-between items-center">
        <span className="text-sm font-bold ml-2">{title}</span>
        <div className="flex">
          <button className="bg-gray-300 border border-gray-400 border-t-white border-l-white text-black w-6 h-5 text-xs flex items-center justify-center mr-1">
            <Minimize2 size={10} />
          </button>
          <button className="bg-gray-300 border border-gray-400 border-t-white border-l-white text-black w-6 h-5 text-xs flex items-center justify-center mr-1">
            <Square size={10} />
          </button>
          <motion.button
            whileHover={{ bg: "#ff4444" }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-300 border border-gray-400 border-t-white border-l-white text-black w-6 h-5 text-xs flex items-center justify-center"
            onClick={() => onClose(windowType)}
          >
            <X size={10} />
          </motion.button>
        </div>
      </div>
      <div
        className="p-4 h-full overflow-y-auto bg-gray-300"
        style={{ height: "calc(100% - 24px)" }}
      >
        {children}
      </div>
    </motion.div>
  );

  const AboutContent = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-400 pb-2">
        About Me
      </h2>
      <div className="bg-white border-2 border-gray-400 border-t-gray-500 border-l-gray-500 p-4">
        <p className="mb-4">
          Passionate software engineer with 4+ years of experience in modern web
          application development, mobile applications, and AI integration.
        </p>
        <p className="mb-4">
          My diverse skill set and adaptability have allowed me to deliver
          successful projects that breathe life into innovative ideas.
        </p>
        <p>
          As a young tech lead, I'm eager to share my expertise and collaborate
          with like-minded individuals to help your organization drive progress.
        </p>
      </div>

      <h3 className="text-lg font-bold text-gray-800">Top Skills</h3>
      <div className="grid grid-cols-2 gap-2">
        {[
          "TypeScript",
          "PHP",
          "C#",
          "Java",
          "React",
          "Laravel",
          "Mobile Dev",
          "AI Integration",
        ].map((skill) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-200 border-2 border-gray-400 border-t-white border-l-white p-2 text-center"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );

  const ExperienceContent = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-400 pb-2">
        Work Experience
      </h2>

      {[
        {
          company: "Sonarwa Life Assurance Company Limited",
          role: "Back-end Developer",
          period: "October 2024 - Present",
          description:
            "Developing and maintaining solutions for Rwanda's leading insurance company.",
        },
        {
          company: "OSOPOX",
          role: "Co-Founder and Technical Lead",
          period: "October 2021 - Present (4 years)",
          description:
            "Leading development of products for small businesses and AI startup for mental health.",
        },
        {
          company: "CalmGeek",
          role: "Software Engineer",
          period: "June 2022 - October 2024",
          description:
            "Full-stack development, system optimization, and client solutions.",
        },
        {
          company: "Irembo",
          role: "Software Engineer",
          period: "March 2024 - September 2024",
          description:
            "Digitization of government services, onboarded 15+ services, AI-driven projects.",
        },
      ].map((job, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white border-2 border-gray-400 border-t-gray-500 border-l-gray-500 p-4"
        >
          <h3 className="font-bold text-blue-800">{job.company}</h3>
          <p className="font-semibold text-gray-700">{job.role}</p>
          <p className="text-sm text-gray-600 mb-2">{job.period}</p>
          <p className="text-gray-800">{job.description}</p>
        </motion.div>
      ))}
    </div>
  );

  const EducationContent = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-400 pb-2">
        Education
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border-2 border-gray-400 border-t-gray-500 border-l-gray-500 p-4"
      >
        <h3 className="font-bold text-blue-800">
          Rwanda Polytechnic - IPRC Karongi
        </h3>
        <p className="font-semibold text-gray-700">
          Advanced Diploma (A1), Information Technology
        </p>
        <p className="text-sm text-gray-600">2018 - 2021</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white border-2 border-gray-400 border-t-gray-500 border-l-gray-500 p-4"
      >
        <h3 className="font-bold text-blue-800">
          GITWE Adventist Secondary School
        </h3>
        <p className="font-semibold text-gray-700">
          High School Diploma, Computer Science and Management
        </p>
        <p className="text-sm text-gray-600">2014 - 2017</p>
      </motion.div>

      <h3 className="text-lg font-bold text-gray-800 mt-6">Certifications</h3>
      <div className="space-y-2">
        {[
          "Speak English Professionally",
          "Managing Network Security",
          "JavaScript Algorithms and Data Structures",
          "Technical Support Fundamentals",
          "Responsive Web Design",
        ].map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-yellow-100 border-2 border-gray-400 border-t-white border-l-white p-2"
          >
            <Award size={16} className="inline mr-2" />
            {cert}
          </motion.div>
        ))}
      </div>
    </div>
  );

  const ContactContent = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-400 pb-2">
        Contact Information
      </h2>

      <div className="grid grid-cols-1 gap-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white border-2 border-gray-400 border-t-gray-500 border-l-gray-500 p-4 flex items-center"
        >
          <Mail className="text-blue-600 mr-3" size={24} />
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-blue-800">tumugide@gmail.com</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white border-2 border-gray-400 border-t-gray-500 border-l-gray-500 p-4 flex items-center"
        >
          <Phone className="text-green-600 mr-3" size={24} />
          <div>
            <p className="font-semibold">Mobile</p>
            <p className="text-blue-800">(+250)786451217</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white border-2 border-gray-400 border-t-gray-500 border-l-gray-500 p-4 flex items-center"
        >
          <Linkedin className="text-blue-600 mr-3" size={24} />
          <div>
            <p className="font-semibold">LinkedIn</p>
            <p className="text-blue-800">www.linkedin.com/in/tumugide</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white border-2 border-gray-400 border-t-gray-500 border-l-gray-500 p-4"
        >
          <p className="font-semibold mb-2">Location</p>
          <p className="text-gray-800">Kigali, Rwanda</p>
        </motion.div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={downloadCV}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 border-2 border-gray-400 border-t-white border-l-white flex items-center justify-center"
      >
        <Download className="mr-2" size={20} />
        Download Complete CV
      </motion.button>
    </div>
  );

  return (
    <div className="h-screen bg-gradient-to-br from-teal-400 to-blue-500 relative overflow-hidden">
      {/* Desktop Icons */}
      <div className="absolute top-4 left-4 space-y-2">
        <DesktopIcon icon={FileText} label="Resume.txt" onClick={downloadCV} />
        <DesktopIcon
          icon={User}
          label="About Me"
          onClick={() => openWindow("about")}
        />
        <DesktopIcon
          icon={Briefcase}
          label="Experience"
          onClick={() => openWindow("experience")}
        />
        <DesktopIcon
          icon={GraduationCap}
          label="Education"
          onClick={() => openWindow("education")}
        />
        <DesktopIcon
          icon={Mail}
          label="Contact"
          onClick={() => openWindow("contact")}
        />
      </div>

      {/* Windows */}
      <AnimatePresence>
        {openWindows.includes("about") && (
          <Window
            title="About Me - Egide Tumukunde"
            onClose={closeWindow}
            windowType="about"
          >
            <AboutContent />
          </Window>
        )}
        {openWindows.includes("experience") && (
          <Window
            title="Work Experience"
            onClose={closeWindow}
            windowType="experience"
          >
            <ExperienceContent />
          </Window>
        )}
        {openWindows.includes("education") && (
          <Window
            title="Education & Certifications"
            onClose={closeWindow}
            windowType="education"
          >
            <EducationContent />
          </Window>
        )}
        {openWindows.includes("contact") && (
          <Window
            title="Contact Information"
            onClose={closeWindow}
            windowType="contact"
          >
            <ContactContent />
          </Window>
        )}
      </AnimatePresence>

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-400 border-t-2 border-white h-10 flex items-center px-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-300 border-2 border-gray-400 border-t-white border-l-white px-4 py-1 text-sm font-bold flex items-center mr-2"
          onClick={() => setStartMenuOpen(!startMenuOpen)}
        >
          <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-yellow-500 mr-2"></div>
          Start
        </motion.button>

        {/* Running applications */}
        <div className="flex-1 flex space-x-1">
          {openWindows.map((window) => (
            <motion.button
              key={window}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-300 border-2 border-gray-400 border-t-gray-500 border-l-gray-500 px-3 py-1 text-xs"
            >
              {window.charAt(0).toUpperCase() + window.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Clock */}
        <div className="bg-gray-300 border-2 border-gray-400 border-t-gray-500 border-l-gray-500 px-2 py-1 text-xs">
          {currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>

      {/* Click anywhere to close start menu */}
      {startMenuOpen && (
        <div
          className="absolute inset-0 z-10"
          onClick={() => setStartMenuOpen(false)}
        />
      )}

      {/* Start Menu */}
      <AnimatePresence>
        {startMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute bottom-10 left-2 bg-gray-300 border-2 border-gray-400 border-t-white border-l-white w-64 shadow-lg z-20"
          >
            <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-2 text-sm font-bold">
              Egide Tumukunde
            </div>
            <div className="p-2 space-y-1">
              <motion.button
                whileHover={{ backgroundColor: "#0066cc", color: "white" }}
                className="w-full text-left px-2 py-1 text-sm flex items-center rounded"
                onClick={() => openWindow("about")}
              >
                <User size={16} className="mr-2" /> About Me
              </motion.button>
              <motion.button
                whileHover={{ backgroundColor: "#0066cc", color: "white" }}
                className="w-full text-left px-2 py-1 text-sm flex items-center rounded"
                onClick={() => openWindow("experience")}
              >
                <Briefcase size={16} className="mr-2" /> Experience
              </motion.button>
              <motion.button
                whileHover={{ backgroundColor: "#0066cc", color: "white" }}
                className="w-full text-left px-2 py-1 text-sm flex items-center rounded"
                onClick={() => openWindow("education")}
              >
                <GraduationCap size={16} className="mr-2" /> Education
              </motion.button>
              <motion.button
                whileHover={{ backgroundColor: "#0066cc", color: "white" }}
                className="w-full text-left px-2 py-1 text-sm flex items-center rounded"
                onClick={() => openWindow("contact")}
              >
                <Mail size={16} className="mr-2" /> Contact
              </motion.button>
              <hr className="border-gray-400 my-1" />
              <motion.button
                whileHover={{ backgroundColor: "#0066cc", color: "white" }}
                className="w-full text-left px-2 py-1 text-sm flex items-center rounded"
                onClick={downloadCV}
              >
                <Download size={16} className="mr-2" /> Download CV
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Windows95Portfolio;
