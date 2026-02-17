"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "../Theme";

const PROJECTS = [
  {
    title: "Dictionary",
    slug: "dictionary",
    category: "Python",
    blurb: "Converts text into encoded values using a CSV-driven mapping.",
    github: "https://github.com/CarsonWhitfield/My-Projects/tree/main/python_projects/Small%20Programs/Dictionary",
  },
  {
    title: "Random Letter form string",
    slug: "Random-Letter",
    category: "Python",
    blurb: "Random Letter Selector (Python, Menu-Driven).",
    github: "https://github.com/CarsonWhitfield/My-Projects/tree/main/python_projects/Small%20Programs/Random%20letter%20from%20string",
  },
  {
    title: "Monte Carlo Estimator",
    slug: "Monte-Carlo-Estimator",
    category: "Python",
    blurb: "Monte Carlo π Estimator Using Random Points (Python).",
    github: "https://github.com/CarsonWhitfield/My-Projects/tree/main/python_projects/Small%20Programs/calculate_pi%20",
  },
  {
    title: "Integer Range Filter ",
    slug: "Integer-Range-Filter",
    category: "Python",
    blurb: "This Python program allows users to filter a list of integers based on a specified numeric range.",
    github: "https://github.com/CarsonWhitfield/My-Projects/tree/main/python_projects/Small%20Programs/filter_list",
  },
  {
    title: "Coffee Shop Ordering System",
    slug: "Coffee-Shop-Ordering-System",
    category: "Python",
    blurb: "This Python program simulates a simple coffee shop ordering system.",
    github: "https://github.com/CarsonWhitfield/My-Projects/tree/main/python_projects/Small%20Programs/orderSystem",
  },
  {
    title: "U.S. State Population Range Filter",
    slug: "U.S.-State-Population-Range-Filter",
    category: "Python",
    blurb:
      "This Python program reads 2020 U.S. census population data from a text file and allows users to list states whose populations fall within a specified range (in millions). The results are formatted and displayed in a clean, readable report.",
    github: "https://github.com/CarsonWhitfield/My-Projects/tree/main/python_projects/Small%20Programs/population%20range",
  },
  {
    title: "Quadratic Equation Solver",
    slug: "Quadratic-Equation-Solver",
    category: "Python",
    blurb: "This Python program generates a random quadratic equation and computes its real roots using the quadratic formula.",
    github: "https://github.com/CarsonWhitfield/My-Projects/tree/main/python_projects/Small%20Programs/quadratic_equation",
  },
  {
    title: "Turtle Drawing Color Changer",
    slug: "Turtle-Drawing-Color-Changer",
    category: "Python",
    blurb: "This Python program uses the turtle graphics library to create a simple interactive drawing setup.",
    github: "https://github.com/CarsonWhitfield/My-Projects/tree/main/python_projects/Small%20Programs/turlte_functions",
  },
  {
    title: "Wordle-Style Game",
    slug: "Wordle-Style-Game",
    category: "Python",
    blurb: "This project is a Wordle-inspired command-line game written in Python.",
    github: "https://github.com/CarsonWhitfield/My-Projects/tree/main/python_projects/Small%20Programs/wordle",
  },

  {
    title: "Ticket Management system",
    slug: "Ticket-Management-system",
    category: "Java",
    blurb: "A Java-based movie ticket management system that determines ticket eligibility and pricing based on customer category.",
    github: "https://github.com/CarsonWhitfield/My-Projects/tree/main/Java_Projects/Small%20programs/Ticket%20Management%20system",
  },
  {
    title: "Bunny Object Management Demo",
    slug: "Bunny-Object-Management-Demo",
    category: "Java",
    blurb: "This Java program demonstrates object creation, array usage, and static class members through a simple Bunny model.",
    github: "https://github.com/CarsonWhitfield/My-Projects/tree/main/Java_Projects/Small%20programs/bunnies",
  },
  {
    title: "Java Swing Drawing Application",
    slug: "Java-Swing-Drawing-Application",
    category: "Java",
    blurb: "This project is a Java Swing–based drawing application that allows users to draw shapes and freehand strokes on a canvas using mouse input.",
    github: "https://github.com/CarsonWhitfield/My-Projects/tree/main/Java_Projects/Small%20programs/drawingapp",
  },
  {
    title: "Java Linked List Menu Application",
    slug: "Java-Linked-List-Menu-Application",
    category: "Java",
    blurb: "This project is a menu-driven Java application that implements a custom singly linked list from scratch.",
    github: "https://github.com/CarsonWhitfield/My-Projects/tree/main/Java_Projects/Small%20programs/driver",
  },
  {
    title: "grading calculator",
    slug: "grading-calculator",
    category: "Java",
    blurb: "This is a grading calculator allows you to check your grades.",
    github: "https://github.com/CarsonWhitfield/My-Projects/tree/main/Java_Projects/Small%20programs/grade%20calculator",
  },
  {
    title: "Paint",
    slug: "paint",
    category: "Java",
    blurb: "This is my own vertions of ms paint",
    github: "https://github.com/CarsonWhitfield/My-Projects/tree/main/Java_Projects/Small%20programs/paintprogram",
  },
  {
    title: "Java Min-Heap Implementation",
    slug: "java min-heap implementation",
    category: "Java",
    blurb: "This project implements a min-heap data structure in Java using a fixed-size integer array.",
    github: "https://github.com/CarsonWhitfield/My-Projects/tree/main/Java_Projects/Small%20programs/minheap",
  },
  {
    title: "Yahtzee Hand Simulator",
    slug: "Yahtzee-Hand-Simulator",
    category: "Java",
    blurb: "This Java program simulates 5,000 random Yahtzee-style dice rolls (five 6-sided dice per roll) and calculates how often specific hand types occur.",
    github: "https://github.com/CarsonWhitfield/My-Projects/tree/main/Java_Projects/Small%20programs/yahtzee",
  },
  {
    title: "CatScript",
    slug: "catscript",
    category: "Java",
    blurb: "This is a compiler writen in java.",
    github: "https://github.com/CarsonWhitfield/My-Projects/tree/main/Java_Projects/Bigger_Projects/CatScriptCompiler",
  },
  {
    title: "DataBase",
    slug: "database",
    category: "Java",
    blurb: "This is a data base system using java and SQL",
    github: "https://github.com/CarsonWhitfield/My-Projects/tree/main/Java_Projects/Bigger_Projects/Data_Base",
  },
  {
    title: "Little_Man_Stack_Machine",
    slug: "little_man_stack_machine",
    category: "C",
    blurb: "Little_Man_Stack_Machine written in c",
    github: "https://github.com/CarsonWhitfield/My-Projects/tree/main/c_projects/Bigger_Projects/Little_Man_Stack_Machine",
  },
] as const;

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "Python", label: "Python" },
  { id: "Java", label: "Java" },
  { id: "C", label: "C" },
] as const;

type CategoryId = typeof CATEGORIES[number]["id"];

// ✅ One helper so cards + dropdown always match your dynamic route
const projectHref = (slug: string) => `/page2/page3/Projects/${slug}`;

export default function ProjectsHomePage() {
  const [activeTab, setActiveTab] = useState<CategoryId>("all");
  const filtered = useMemo(
    () => (activeTab === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === activeTab)),
    [activeTab]
  );

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
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <NavBar projects={PROJECTS} />

      <main className="m-auto w-full px-4 lg:px-8 pb-24 pt-20">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight dark:text-black text-white">My Computer Science Projects</h1>
          <p className="mt-1 text-white/80 dark:text-black/80">Browse by category or use the dropdown above.</p>
        </header>

        <div className="mb-6 flex items-center gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-black/60 p-2 shadow-sm backdrop-blur">
          {CATEGORIES.map((cat) => (
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
  {filtered.map((p) => (
    <article
      key={p.slug}
      className="group rounded-2xl border border-white/10 bg-black/60 p-4 shadow-sm backdrop-blur"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs uppercase tracking-wide text-white/70">
          {p.category}
        </span>

        {/* ✅ Only clickable element */}
        {p.github && (
          <button
            type="button"
            onClick={() =>
              window.open(p.github, "_blank", "noopener,noreferrer")
            }
            className="rounded-xl border border-white/20 px-2 py-1 text-xs font-medium text-white hover:bg-white/10 transition"
          >
            GitHub ↗
          </button>
        )}
      </div>

      <h3 className="text-lg font-semibold text-white">
        {p.title}
      </h3>

      <p className="mt-1 text-sm text-white/80">
        {p.blurb}
      </p>
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
        <Link href="/" className="text-xl font-bold hover:opacity-90">
          CW Portfolio
        </Link>
        <ProjectsDropdown projects={projects} />
      </div>
    </nav>
  );
}

function ProjectsDropdown({ projects }: { projects: typeof PROJECTS }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const groups = useMemo(() => {
    return projects.reduce((acc: Record<string, Array<(typeof projects)[number]>>, p) => {
      (acc[p.category] ||= []).push(p);
      return acc;
    }, {});
  }, [projects]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        className="rounded-lg px-3 py-2 text-sm text-white dark:text-black hover:bg-white/10"
        onClick={() => setOpen((v) => !v)}
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

              {items.map((item) => (
                <Link
                  key={item.slug}
                  href={projectHref(item.slug)} // ✅ matches slug to your route
                  className="block rounded-xl px-2 py-2 text-sm hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
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