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
    <header className="border-b border-b-neutral-700 px-16 py-6 flex justify-between items-center">
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
    </header>
  );
}

function Navlink({ href, label }) {
  return (
    <a className="hover:text-emerald-500" href={href}>
      <li>{label}</li>
    </a>
  );
}
