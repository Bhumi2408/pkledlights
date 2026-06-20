"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About us", href: "/#about" },
  { label: "Features", href: "/#features" },
  { label: "Services", href: "/#services" },
  { label: "Collections", href: "/#collections" },
  { label: "Blogs", href: "/blogs" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contacts", href: "/#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="flex items-center justify-between px-5 py-5 md:px-10 xl:px-32">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Led light manufacturer in Delhi"
            width={200}
            height={60}
            className="w-[140px] rounded-xl bg-white/60 p-1 md:w-[180px]"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <div className="flex gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white underline transition-all duration-300 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-black/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-white/10 py-4 text-white transition hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}