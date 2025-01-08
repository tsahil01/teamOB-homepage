import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useState } from "react";

export function ThemeModeToggle() {
  const { setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  return (
        <Button variant="outline" size="icon" className="my-auto"
        onClick={() => {
          console.log(currentTheme);
          if (currentTheme === "dark") {
            setTheme("light");
            setCurrentTheme("light");
          } else {
            setTheme("dark");
            setCurrentTheme("dark");
          }
        }}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
  )
}
