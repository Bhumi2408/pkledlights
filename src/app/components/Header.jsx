import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About us", href: "#about" },
  { label: "Design", href: "#design" },
  { label: "Projects", href: "#projects" },
  { label: "Collections", href: "#collections" },
  { label: "Contacts", href: "#contact" },
];

export default function Header() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="flex justify-between items-center px-32 py-5">
        <div>
          <Image
            src="/images/logo.png"
            width={200}
            height={20}
            className="bg-white/60 p-1 rounded-xl"
          />
        </div>
        <div>
          <div className="flex gap-5">
            {navLinks.map((items, index) => (
              <div key={index}>
                <Link
                  href={items.href}
                  className="text-white underline transition-all duration-300 hover:text-primary"
                >
                  {items.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
