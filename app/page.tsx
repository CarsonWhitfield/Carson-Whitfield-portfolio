import Image from "next/image";
import { ThemeToggle } from "./Theme";

const basePath = process.env.NODE_ENV === "production"
  ? "/Carson-Whitfield-portfolio"
  : "";

export default function Home() {
  return (
    <div
      className="grid grid-rows-[40px_1fr_40px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-geist bg-cover bg-center"
      style={{
        backgroundImage: `url('${basePath}/Background/Background-light.png')`,
      }}
    >
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <div>
          <h1 className="text-7xl font-bold text-black dark:text-white text-center sm:text-left">
            Welcome to Carson Whitfield portfolio
          </h1>
          <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-prose text-center sm:text-left">
            “Be yourself; everyone else is already taken.” — Oscar Wilde
          </p>
        </div>
      </main>

      <footer className="row-start-3 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <a
            href={`${basePath}/page2`}
            className="block p-6 bg-zinc-700 hover:bg-zinc-600 transition rounded-lg text-white"
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
              This link will take you to a portal page that links to different projects I’ve done on GitHub.
            </p>
          </a>

          <a
            href="https://www.linkedin.com/feed/"
            className="block p-6 bg-zinc-700 hover:bg-zinc-600 transition rounded-lg text-white"
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
