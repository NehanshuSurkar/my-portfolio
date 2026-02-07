

import { useState, useEffect } from "react";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark/95 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative flex items-center h-16">

          {/* LEFT - Logo */}
          <a href="#home" className="text-2xl font-bold text-gradient">
            NS
          </a>

          {/* CENTER - Menu */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

        {/* RIGHT - Social Icons */}
<div className="hidden md:flex ml-auto space-x-4">
  {/* GitHub */}
  <a
    href="https://github.com/NehanshuSurkar"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:scale-110"
  >
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 .5C5.73.5.5 5.74.5 12.03c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.55-3.87-1.55-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.19a10.9 10.9 0 012.9-.39c.99 0 1.99.13 2.9.39 2.2-1.5 3.17-1.19 3.17-1.19.63 1.6.23 2.78.11 3.07.74.81 1.19 1.85 1.19 3.11 0 4.43-2.7 5.4-5.28 5.69.41.36.77 1.07.77 2.16v3.2c0 .31.21.68.8.56A11.53 11.53 0 0023.5 12C23.5 5.74 18.27.5 12 .5z"/>
    </svg>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/nehanshu-surkar-3b5bb4266"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:scale-110"
  >
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.5H9.48V9h3.4v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.11 20.45H3.56V9h3.55v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z"/>
    </svg>
  </a>
</div>


          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden ml-auto text-gray-300 hover:text-primary"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-md border-b border-gray-800">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-gray-300 hover:text-primary transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Social Icons */}
            {/* <div className="flex space-x-4 pt-3">
              <a href="https://github.com/NehanshuSurkar" target="_blank">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/nehanshu-surkar" target="_blank">
                <Linkedin size={20} />
              </a>
            </div> */}
            <div className="flex space-x-4 pt-3">
  {/* GitHub */}
  <a
    href="https://github.com/NehanshuSurkar"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:scale-110"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .5C5.73.5.5 5.74.5 12.03c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.55-3.87-1.55-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.19a10.9 10.9 0 012.9-.39c.99 0 1.99.13 2.9.39 2.2-1.5 3.17-1.19 3.17-1.19.63 1.6.23 2.78.11 3.07.74.81 1.19 1.85 1.19 3.11 0 4.43-2.7 5.4-5.28 5.69.41.36.77 1.07.77 2.16v3.2c0 .31.21.68.8.56A11.53 11.53 0 0023.5 12C23.5 5.74 18.27.5 12 .5z"/>
    </svg>
  </a>

  {/* LinkedIn */}
  {/* <a
    href="https://www.linkedin.com/in/nehanshu-surkar-3b5bb4266"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-[#0A66C2] transition"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z"/>
      <path d="M7.09 20.45H3.56V9h3.53v11.45zM5.33 7.43a2.05 2.05 0 110-4.1 2.05 2.05 0 010 4.1zM20.45 20.45h-3.55v-5.4c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.5H9.48V9h3.4v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31z"/>
    </svg>
  </a> */}
              <a
  href="https://www.linkedin.com/in/nehanshu-surkar-3b5bb4266"
  target="_blank"
  rel="noopener noreferrer"
  className="transition hover:scale-110"
>
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
  >
    {/* Blue background */}
    <rect width="24" height="24" rx="4" fill="currentColor" />

    {/* White logo */}
    <path
      fill="black"
      d="M7.09 20.45H3.56V9h3.53v11.45zM5.33 7.43a2.05 2.05 0 110-4.1 2.05 2.05 0 010 4.1zM20.45 20.45h-3.55v-5.4c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.5H9.48V9h3.4v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31z"
    />
  </svg>
</a>

</div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
