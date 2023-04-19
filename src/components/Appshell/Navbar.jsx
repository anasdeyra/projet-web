import { useEffect } from "react";

const LINKS = [
  {
    href: "/",
    label: "Home",
  },
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
  useEffect(() => {
    let nav = document.getElementById('navbar');
    if (window.location.pathname.startsWith('/app')) {
      nav.classList.add('hidden');
    } else {
      nav.classList.remove('hidden');
    }
  }, []);
  
  return (
    <header id="navbar" className=" border-b border-b-neutral-700 px-16 py-6 z-50 ">
      <div className="flex justify-between items-center max-w-[1366px] mx-auto">
        <a href={"/"} className="font-bold text-2xl ">
          Spotify
        </a>
        <div className="flex gap-16 items-center">
          <ul className="flex gap-8">
            {LINKS.map((props, i) => (
              <Navlink {...props} key={i} />
            ))}
          </ul>
          <button className="bg-gradient-to-bl from-emerald-700 to-green-500 text-sm px-5 py-2 rounded-md transition-all active:scale-[0.98]">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}

function Navlink({ href, label }) {
  const isBold = window.location.pathname === href;
  return (
    <a
      className={` ${
        isBold ? "font-medium" : "text-neutral-100 hover:text-emerald-500"
      }`}
      href={href}
    >
      <li>{label}</li>
    </a>
  );
}
