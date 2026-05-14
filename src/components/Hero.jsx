const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-float mb-8">
          <div className="flex justify-center mb-8">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56">
              <div className="relative w-full h-full rounded-full border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                <img
                  src="/my-photo.jpg"
                  alt="Nehanshu Surkar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-gradient">Nehanshu Surkar</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4">
            AI/ML Engineer & Flutter Developer
          </p>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            B.Tech CSE (AI & ML) student passionate about building intelligent solutions
            and scalable mobile applications
          </p>
        </div>

    
        <div className="flex flex-wrap justify-center gap-4 mb-12">
  {/* View Projects now has gradient style */}
  <a
    href="#projects"
    className="px-8 py-3 border-2 border-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1"
  >
    View Projects
  </a>

  {/* Get In Touch now has bordered style */}
  <a
    href="#contact"
    className="px-8 py-3 border-2 border-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1"
  >
    Get In Touch
  </a>
</div>

{/* New Download Resume button below */}
<div className="flex justify-center">
  <a
    href="/Nehanshu_Surkar_CV.pdf" 
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1"
  >
   Resume
  </a>
</div>
      </div>
    </section>
  );
};

export default Hero;


