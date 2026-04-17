import { useState } from "react";
import {
  FaEnvelope,
  FaBriefcase,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaLocationDot,FaXTwitter } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import photo5 from "../assets/photo5.png";
import DesktopNavbar from "../components/DesktopNavBar";
import ChatBot from "../components/chatbot";
export default function Home() {
  const [currentPage, setCurrentPage] = useState("About");
  const [isOpen, setIsOpen] = useState(false);

  const renderContent = () => {
    switch (currentPage) {
      case "About":
        return (
          <div className="p-10 text-neutral-100">
            <About />
          </div>
        );
      case "Experience":
        return (
          <div className="p-10 text-neutral-100">
            <Experience />
          </div>
        );
      case "Projects":
        return (
          <div className="p-10 text-neutral-100">
            <Projects />
          </div>
        );
      case "Blogs":
        return (
          <div className="p-10 text-neutral-100">
            <Blogs />
          </div>
        );
      case "Contact":
        return (
          <div className="p-10 text-neutral-100">
            <Contact />
          </div>
        );
      default:
        return null;
    }
  };

  function InfoItem({ icon, label, value }) {
    return (
      <div className="flex gap-4">
        <div className="w-10 h-10 bg-neutral-200 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        <div className="text-neutral-100">
          <p className="text-xs text-neutral-400">{label}</p>
          <h2 className="text-sm">{value}</h2>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* <ChatBot /> */}
      <div className="bg-neutral-900 w-screen min-h-screen p-6 pt-16 lg:px-72">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:items-start">
          <aside
            className="
        bg-neutral-800
        row-span-1 col-span-1
        p-6 lg:p-10
        w-full lg:w-fit
        h-fit
        rounded-4xl shadow-lg
        
        flex flex-col gap-6
        justify-self-center lg:justify-self-end
        lg:sticky lg:top-16
        lg:h-fit
      "
          >
            {/* HEADER (always visible) */}
            <div className="flex items-center justify-between w-full lg:flex-col lg:gap-4">
              <div className="flex items-center gap-4 lg:flex-col">
                <img
                  src={photo5}
                  className="bg-neutral-700 border-t border-l border-neutral-500 h-20 w-20 lg:h-36 lg:w-36 rounded-3xl shadow-[5px_5px_rgba(250,204,21,0.9),10px_10px_rgba(250,204,21,0.1)]"
                />
                <h1 className="font-bold text-neutral-100 text-lg lg:text-2xl">
                  Sk Jony
                </h1>
              </div>

              {/* Toggle button (mobile only) */}
              {/* <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-neutral-100 text-2xl font-bold"
            >
              {isOpen ? "▲" : "▼"}
            </button> */}

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden border px-2 rounded-xl border-yellow-600 shadow-2xl shadow-yellow-500"
              >
                <span className="text-yellow-500 text-sm transition-all transition-duration-300">
                  {isOpen ? "Close Details" : "Show Details"}
                </span>
              </button>
            </div>

            {/* COLLAPSIBLE CONTENT */}
            <div
              className={`
          transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-150 opacity-100" : "max-h-0 opacity-0"}
          lg:max-h-none lg:opacity-100
        `}
            >
              {/* Social Icons */}

              <div className="flex gap-6 mt-4 text-neutral-100 text-xl justify-center">
                {/* LinkedIn */}
                <div className="relative group">
                  <a
                    href="https://www.linkedin.com/in/sk-akibuzzaman-jony/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-400 transition-colors duration-300"
                  >
                    <FaLinkedin />
                  </a>
                  <span
                    className="absolute -top-9 left-1/2 -translate-x-1/2 
                     opacity-0 group-hover:opacity-100 
                     bg-black text-white text-sm px-2 py-1 rounded 
                     transition duration-300 whitespace-nowrap"
                  >
                    LinkedIn
                  </span>
                </div>

                {/* Twitter/X */}
                <div className="relative group">
                  <a
                    href="https://x.com/skajony2002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-400 transition-colors duration-300"
                  >
                    <FaXTwitter />
                  </a>
                  <span
                    className="absolute -top-9 left-1/2 -translate-x-1/2 
                     opacity-0 group-hover:opacity-100 
                     bg-black text-white text-sm px-2 py-1 rounded 
                     transition duration-300 whitespace-nowrap"
                  >
                    X
                  </span>
                </div>

                {/* GitHub */}
                <div className="relative group">
                  <a
                    href="https://github.com/Sk-Akibuzzaman-Jony"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-400 transition-colors duration-300"
                  >
                    <FaGithub />
                  </a>
                  <span
                    className="absolute -top-9 left-1/2 -translate-x-1/2 
                     opacity-0 group-hover:opacity-100 
                     bg-black text-white text-sm px-2 py-1 rounded 
                     transition duration-300 whitespace-nowrap"
                  >
                    GitHub
                  </span>
                </div>

                {/* LeetCode */}
                <div className="relative group">
                  <a
                    href="https://leetcode.com/u/SkJony/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-400 transition-colors duration-300"
                  >
                    <SiLeetcode />
                  </a>
                  <span
                    className="absolute -top-9 left-1/2 -translate-x-1/2 
                     opacity-0 group-hover:opacity-100 
                     bg-black text-white text-sm px-2 py-1 rounded 
                     transition duration-300 whitespace-nowrap"
                  >
                    LeetCode
                  </span>
                </div>
              </div>

              <hr className="w-52 h-1 my-6 bg-yellow-400 border-0 rounded-4xl mx-auto" />

              {/* Details */}
              <div className="flex flex-col gap-7">
                <InfoItem
                  icon={<FaEnvelope />}
                  label="Email"
                  value="skajony2002@gmail.com"
                />
                <InfoItem
                  icon={<FaBriefcase />}
                  label="Work"
                  value="Tata Consultancy Services"
                />
                <InfoItem
                  icon={<FaLocationDot />}
                  label="Location"
                  value="Bangalore, India"
                />
                <InfoItem
                  icon={<IoIosCall />}
                  label="Mobile"
                  value="+91-9123973485"
                />
              </div>
            </div>
          </aside>
          <main className="bg-neutral-800 md:w-[53vw]  rounded-4xl shadow-lg row-span-3 col-span-1  lg:row-span-1 lg:col-span-3">
            {/* RIGHT SIDE CONTENT */}
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <div className="">
              <DesktopNavbar
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />

              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
