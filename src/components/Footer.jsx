const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800 bg-dark">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left Side: Brand / Name */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white">Nehanshu Surkar</h2>
          <p className="text-gray-400 text-sm mt-1">
            AI/ML Engineer and Flutter Developer
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div className="flex gap-6">
          <a href="#home" className="text-gray-400 hover:text-primary transition-colors duration-300">
            Home
          </a>
          <a href="#education" className="text-gray-400 hover:text-primary transition-colors duration-300">
            Education
          </a>
          <a href="#projects" className="text-gray-400 hover:text-primary transition-colors duration-300">
            Projects
          </a>
          <a href="#contact" className="text-gray-400 hover:text-primary transition-colors duration-300">
            Contact
          </a>
        </div>

        {/* Right Side: Copyright */}
        <div className="text-gray-500 text-sm text-center md:text-right">
                                                            
        </div>
      </div>
    </footer>
  );
};

export default Footer;
