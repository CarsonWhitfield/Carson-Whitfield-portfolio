"use client"

import { Button } from "@/components/ui/button"
import { FaMoon, FaSun } from "react-icons/fa"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
  <Button
  size="icon"
  className="rounded-full relative bg-indigo-500 text-white hover:bg-indigo-600 dark:bg-yellow-400 dark:hover:bg-yellow-500"
  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
>
  <FaSun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
  <FaMoon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
</Button>
  )
}
