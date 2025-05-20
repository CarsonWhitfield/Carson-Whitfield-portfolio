import Image from "next/image";

const projects = [
{
    name: "Portfolio Website",
    url: "https://github.com/yourusername/portfolio",
    description: "A personal site built with Next.js and Tailwind CSS.",
},
{
    name: "Cybersecurity Toolkit",
    url: "https://github.com/yourusername/cybersecurity-toolkit",
    description: "Tools and scripts for security testing and automation.",
},
{
    name: "Java Projects",
    url: "https://github.com/yourusername/java-projects",
    description: "A collection of Java-based applications and algorithms.",
},
];

export default function Page2() {
return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-10 text-white">
    <h1 className="text-4xl font-bold mb-10 text-center">My GitHub Projects</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
        <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-800 hover:bg-zinc-700 transition rounded-2xl shadow-lg p-6 flex flex-col items-start gap-4"
        >
            <div className="flex items-center gap-3">
            <Image
                src="./Github_icon.png" // <-- place icon in public folder
                alt="GitHub Icon"
                width={32}
                height={32}
            />
            <h2 className="text-2xl font-semibold">{project.name}</h2>
            </div>
            <p className="text-zinc-300">{project.description}</p>
        </a>
        ))}
    </div>
    </div>
);
}

