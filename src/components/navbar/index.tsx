"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // lightweight icons

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-black text-white fixed top-0 z-50 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Satya Sai Vatte</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm md:text-base">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`hover:text-yellow-400 transition ${
                  pathname === item.href ? "text-yellow-400" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-3 bg-black">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)} // close menu on click
                className={`block py-2 px-2 rounded hover:bg-gray-800 ${
                  pathname === item.href ? "text-yellow-400" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
