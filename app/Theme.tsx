"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { FaMoon, FaSun } from "react-icons/fa"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Button
      size="icon"
      className="relative rounded-full bg-indigo-500 text-white hover:bg-indigo-600 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500"
      onClick={() => {
        if (theme === "dark") {
          setTheme("light")
        } else {
          setTheme("dark")
        }
      }}
    >
      <FaSun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <FaMoon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}