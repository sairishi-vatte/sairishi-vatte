"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/useTheme";
import { NAV_LINKS, SITE_NAME } from "@/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;

      for (const item of NAV_LINKS) {
        const el = document?.querySelector(item.href);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          // Need to update
          if (scrollPos >= top) {
            setActiveSection(item.href.slice(1));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="text-xl font-bold text-gray-900 dark:text-white">
          {SITE_NAME}
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`
                text-sm font-medium transition-colors
                ${
                  activeSection === item.href.slice(1)
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                }
              `}
            >
              {item.name}
            </a>
          ))}
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="ml-4 text-gray-700 dark:text-gray-200"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="text-gray-700 dark:text-gray-200"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-zinc-900 px-4 pb-4 shadow">
          <ul className="flex flex-col space-y-2">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`
                    block py-2 text-base font-medium transition-colors
                    ${
                      activeSection === item.href.slice(1)
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                    }
                  `}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
