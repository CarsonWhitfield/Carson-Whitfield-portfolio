import Image from "next/image";

export default function Home() {
  return (
    <div
      className="grid grid-rows-[40px_1fr_40px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-geist bg-cover bg-center"
      style={{ backgroundImage: "url('./Background image.png')" }}
    >
      {/* Main Content */}
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start -mt-140">
        <div>
          <h1 className="text-7xl font-bold text-white text-center sm:text-left">
            Welcome to my online portfolio
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-prose text-center sm:text-left">
            “Be yourself; everyone else is already taken.” —Oscar Wilde
          </p>
        </div>
      </main>

      {/* Footer Cards */}
      <footer className="row-start-3 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-white">
          {/* Card 1: GitHub */}
          <a
            href=".\page2"
            className="block p-6 bg-gray-300 hover:bg-zinc-800 transition rounded-lg text-black"
          >
            <div className="flex justify-center mb-4">
              <Image
                src="./Github_icon.png"
                alt="GitHub Icon"
                width={90}
                height={90}
              />
            </div>
            <p className="text-sm text-white text-center text-zinc-900">
              This link will take you to a portal page that links to different projects I’ve done on GitHub.
            </p>
          </a>

          {/* Card 2: Learn (icon instead of text) */}
          <a
            href="https://www.linkedin.com/feed/"
            className="block p-6 bg-gray-300 hover:bg-zinc-800 transition rounded-lg text-black"
          >
            <div className="flex justify-center mb-4">
              <Image
                src="./Linkedin_icon.png"
                alt="Linkedin Icon"
                width={90}
                height={90}
              />
            </div>
            <p className="text-sm text-center text-zinc-400 text-zinc-900">
              This link will take you to my Linkedin
            </p>
          </a>
        </div>
      </footer>
    </div>
  );
}
