"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "../../Theme";


const PROJECTS = [
  { title: "OSI Model", slug: "osi-model-lab", category: "CCNA", blurb: "OSI Model lab done in Packet Tracer." },
  { title: "TCP/IP Suite", slug: "tcp-ip-suite", category: "CCNA", blurb: "TCP/IP Suite lab done in Packet Tracer." },
] as const;

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "CCNA", label: "CCNA" },
  { id: "security", label: "Security" },
] as const;

type CategoryId = typeof CATEGORIES[number]["id"];

export default function ProjectsHomePage() {
  const [activeTab, setActiveTab] = useState<CategoryId>("all");
  const filtered = useMemo(() => (activeTab === "all" ? PROJECTS : PROJECTS.filter(p => p.category === activeTab)), [activeTab]);

  return (
  <div className="relative min-h-screen w-full">
  {/* Light mode background */}
  <Image
    src="/Background/Background-IT.png"
    alt="Background Light"
    fill
    priority
    sizes="100vw"
    className="object-cover object-center -z-10 pointer-events-none dark:hidden"
  />

  {/* Dark mode background */}
  <Image
    src="/Background/Background-IT-light.png"
    alt="Background Dark"
    fill
    priority
    sizes="100vw"
    className="object-cover object-center -z-10 pointer-events-none hidden dark:block"
  />
      {/* Button for dark and light mode */}
      <div className="fixed top-4 right-30 z-50">
        <ThemeToggle />
      </div>

      <NavBar projects={PROJECTS} />

      <main className="m-auto w-full px-4 lg:px-8 pb-24 pt-20">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight dark:text-black text-white">My IT Projects</h1>
          <p className="mt-1 text-white/80 dark:text-black/80">Browse by category or use the dropdown above.</p>
        </header>

        <div className="mb-6 flex items-center gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-black/60 p-2 shadow-sm backdrop-blur">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={
                "rounded-xl px-4 py-2 text-sm font-medium transition " +
                (activeTab === cat.id ? "bg-white text-gray-900 shadow" : "text-white/80 hover:bg-white/10")
              }
              aria-pressed={activeTab === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(p => (
            <article key={p.slug} className="group rounded-2xl border border-white/10 bg-black/60 p-4 shadow-sm backdrop-blur">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wide text-white/70">{p.category}</span>
              </div>

              <h3 className="text-lg font-semibold text-white">
                <Link href={`/page2/page3/Projects/${p.slug}`} className="hover:underline">
                  {p.title}
                </Link>
              </h3>

              <p className="mt-1 text-sm text-white/80">{p.blurb}</p>

              <div className="mt-4">
                <Link
                  href={`/page2/page3/Projects/${p.slug}`}
                  className="inline-block rounded-xl border border-white/20 px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
                >
                  Open project
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

function NavBar({ projects }: { projects: typeof PROJECTS }) {
  return (
    <nav className="sticky top-0 z-40 w-full bg-gradient-to-r dark:from-indigo-300/30 from-indigo-600/90 dark:via-sky-300/90 via-sky-600/90 dark:to-cyan-300/90 to-cyan-600/90 dark:text-black text-white backdrop-blur">
      <div className="flex w-full items-center justify-between px-4 lg:px-8 py-3">
        <Link href="/" className="text-xl font-bold hover:opacity-90">CW Portfolio</Link>
        <ProjectsDropdown  projects={projects} />
      </div>
    </nav>
  );
}

function ProjectsDropdown({ projects }: { projects: typeof PROJECTS }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const groups = useMemo(() => {
  return projects.reduce((acc: Record<string, Array<typeof projects[number]>>, p) => {
    (acc[p.category] ||= []).push(p);
    return acc;
  }, {});
}, [projects]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDoc); document.removeEventListener("keydown", onKey); };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        className="rounded-lg px-3 py-2 text-sm text-white dark:text-black hover:bg-white/10"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        Projects ▾
      </button>

      {open && (
        <div role="menu" className="absolute right-0 mt-2 w-72 overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-xl">
          {Object.entries(groups).map(([cat, items]) => (
            <div key={cat} className="mb-2 last:mb-0">
              <div className="px-2 pb-1 pt-1 text-xs font-semibold uppercase tracking-wide text-gray-500">{cat}</div>
              {items.map(item => (
                <Link key={item.slug} href={`/projects/${item.slug}`} className="block rounded-xl px-2 py-2 text-sm hover:bg-gray-50" onClick={() => setOpen(false)}>
                  <div className="font-medium text-gray-900">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.blurb}</div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

