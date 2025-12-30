"use client";

import { MoonIcon, SunDimIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center justify-center rounded-full p-2
                 transition-colors duration-300 cursor-pointer"
    >
      {isDark ? (
        <SunDimIcon className="size-6" />
      ) : (
        <MoonIcon className="size-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
