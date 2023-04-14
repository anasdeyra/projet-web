import { Link } from "react-router-dom";

const LINKS = [
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/about-us",
    label: "About Us",
  },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  return (
    <header className="border-b-[1px] border-b-neutral-700 px-16 py-6 flex justify-between items-center">
      <a href={"/"} className="font-bold text-2xl">
        Spotify
      </a>
      <ul className="flex gap-8">
        {LINKS.map(({ href, label }, i) => (
          <a key={i} href={href}>
            <li>{label}</li>
          </a>
        ))}
      </ul>
      <button className="bg-green-500 px-5 py-2 rounded-md transition-all active:scale-[0.98]">
        Sign in
      </button>
    </header>
  );
}
