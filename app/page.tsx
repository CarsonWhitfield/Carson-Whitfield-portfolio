import Image from "next/image";
import { ThemeToggle } from "./Theme";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between p-8 sm:p-20 overflow-hidden">
      
      {/*  BACKGROUND WRAPPER */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Background/Background-light.png"
          alt="Light background"
          fill
          priority
          unoptimized
          className="object-cover object-center dark:hidden"
        />
        <Image
          src="/Background/Background_image.png"
          alt="Dark background"
          fill
          priority
          unoptimized
          className="hidden object-cover object-center dark:block"
        />
      </div>

      {/* Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-7xl font-bold text-black dark:text-white text-left">
            Welcome to Carson Whitfield portfolio
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-prose">
            “Be yourself; everyone else is already taken.” — Oscar Wilde
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full mt-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
          
          <a
            href="/page2"
            className="block p-6 rounded-lg bg-zinc-700 text-white hover:bg-zinc-600 transition"
          >
            <div className="flex justify-center mb-4">
              <Image
                src="/Github_icon.png"
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
            href="https://www.linkedin.com/in/YOUR-LINKEDIN/"
            className="block p-6 rounded-lg bg-zinc-700 text-white hover:bg-zinc-600 transition"
          >
            <div className="flex justify-center mb-4">
              <Image
                src="/icons/Linkedin_icon.png"
                alt="LinkedIn Icon"
                width={90}
                height={90}
                unoptimized
              />
            </div>
            <p className="text-sm text-center">
              This link will take you to my LinkedIn
            </p>
          </a>

        </div>
      </footer>
    </div>
  );
}