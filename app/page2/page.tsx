import Image from "next/image";

const projects = [
{
    name: "Java projects",
    url: "https://github.com/CarsonWhitfield/My-Projects/tree/main/Java_Projects",
    description: "Java-based applications including desktop tools and algorithms.",
    icon: "./java.png",
},
{
    name: "Python projects",
    url: "https://github.com/CarsonWhitfield/My-Projects/tree/main/python_projects",
    description: "Scripts and tools for automation, analysis, and cybersecurity.",
    icon: "./python.png",
},
{
    name: "C, C#, and C++",
    url: "https://github.com/CarsonWhitfield/My-Projects/tree/main/c_projects",
    description: "System-level utilities and programs written in C-family languages.",
    icon: "./C_icon.png",
},
];

export default function Page2() {
return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-10 text-white">
    <h1 className="text-4xl font-extrabold mb-10 text-center tracking-tight">
        My GitHub Projects
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
        <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-800 hover:bg-zinc-700 hover:scale-105 transition-transform duration-300 ease-in-out rounded-2xl shadow-lg p-6 flex flex-col items-start gap-4"
        >
            <div className="flex items-center gap-3">
                <Image
                    src={project.icon}
                    alt={`${project.name} icon`}
                    width={32}
                    height={32}
                />
            <h2 className="text-2xl font-semibold">{project.name}</h2>
            </div>
            <p className="text-zinc-400 leading-relaxed text-sm">
                {project.description}
            </p>
            </a>
        ))}
        </div>
    </div>
    );
}
