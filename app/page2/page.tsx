import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../Theme";
import { Button } from "@/components/ui/button"

const projects = [
  {
    name: "CS Projects",
    url: "./../CS_projects",
    description: "System-level utilities and programs written in C-family languages.",
    icon: "./icons/C_icon-light.png",
  },
  { 
    name: "IT Projects",
    url: "./../IT_projects/page3",
    description: "Networking and infrastructure labs, including OSI Model, TCP/IP Suite, STP, OSPF, and more",
    icon: "./icons/IT-icon.png", 
  },
];

export default function Page2() {
  return (
    <div
      className="min-h-screen p-8 pb-20 sm:p-20 font-geist bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start bg-[url('/Background/Background_page2.png')] dark:bg-[url('/Background/Background-pag2-light.png')]"
    >

       {/* Button for dark and light mode */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-7xl text-white">
      <h1 className="pt-10 pb-6 text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r dark:from-cyan-200 from-cyan-400 dark:to-gray-800 to-blue-500 drop-shadow-lg mb-10 text-center tracking-tight">
      My GitHub Projects
      </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-800 dark:bg-zinc-300 bg-opacity-90 hover:bg-zinc-700 dark:hover:bg-zinc-700 hover:scale-105 transition-transform duration-300 ease-in-out rounded-2xl shadow-lg p-6 flex flex-col items-start gap-4"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={project.icon}
                  alt={`${project.name} icon`}
                  width={32}
                  height={32}
                />
                <h2 className="text-zinc-100 dark:text-zinc-800 text-2xl font-semibold">{project.name}</h2>
              </div>
              <p className="text-zinc-400 dark:text-zinc-800 leading-relaxed text-sm">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
      <div className="mt-12">
      <Link
        href="./"
        className="bg-zinc-800 dark:bg-zinc-300 bg-opacity-90 hover:bg-zinc-700 dark:hover:bg-zinc-700 hover:scale-105 transition-transform duration-300 ease-in-out rounded-2xl shadow-lg p-6 flex flex-col items-start gap-4 text-gray-200 dark:text-gray-900 font-medium"
      >
        ← Back to Home
      </Link>
    </div>
    </div>
  );
}
