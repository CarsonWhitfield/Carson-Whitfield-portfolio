import Image from "next/image";
import { ThemeToggle } from "./Theme";

const basePath =
  process.env.NODE_ENV === "production"
    ? "/Carson-Whitfield-portfolio"
    : "";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col justify-between p-8 sm:p-20 bg-cover bg-center"
      style={{
        backgroundImage: `url('${basePath}/Background/Background-light.png')`,
      }}
    >
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <main className="flex-1 flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-7xl font-bold text-black dark:text-white text-left">
            Welcome to Carson Whitfield portfolio
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-prose">
            “Be yourself; everyone else is already taken.” — Oscar Wilde
          </p>
        </div>
      </main>

      <footer className="w-full mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
          <a
            href={`${basePath}/page2`}
            className="block p-6 rounded-lg bg-zinc-700 text-white hover:bg-zinc-600 transition"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={`${basePath}/Github_icon.png`}
                alt="GitHub Icon"
                width={90}
                height={90}
                unoptimized
              />
            </div>
            <p className="text-sm text-center">
              This link will take you to a portal page that links to different
              projects I’ve done on GitHub.
            </p>
          </a>

          <a
            href="https://www.linkedin.com/feed/"
            className="block p-6 rounded-lg bg-zinc-700 text-white hover:bg-zinc-600 transition"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={`${basePath}/icons/Linkedin_icon.png`}
                alt="Linkedin Icon"
                width={90}
                height={90}
                unoptimized
              />
            </div>
            <p className="text-sm text-center">
              This link will take you to my Linkedin
            </p>
          </a>
        </div>
      </footer>
    </div>
  );
}