

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          Get In <span className="text-gradient">Touch</span>
        </h2>

        {/* Main Card */}
        <div className="bg-dark/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-800">
          <p className="text-center text-gray-300 text-lg mb-10">
            I'm always open to new opportunities, collaborations, and interesting projects.
            Feel free to reach out!
          </p>

          {/* CONTACT ROWS */}
          <div className="space-y-6">

            {/* Email */}
            {/* <div className="flex items-center gap-4 bg-darker/70 rounded-full px-6 py-4"> */}
            <div className="group flex items-center gap-4 bg-darker/70 rounded-full px-6 py-4
            transition-all duration-300
            hover:-translate-y-1 hover:bg-darker
            hover:shadow-lg hover:shadow-primary/20">

              

              <div className="w-12 h-12 flex items-center justify-center rounded-full
            bg-primary/20 text-primary
            transition-all duration-300
            group-hover:bg-primary group-hover:text-white">

                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-white text-sm sm:text-base break-all">
                nehanshsurkar77@gmail.com
              </span>
            </div>

            {/* Phone */}
            <div className="group flex items-center gap-4 bg-darker/70 rounded-full px-6 py-4
            transition-all duration-300
            hover:-translate-y-1 hover:bg-darker
            hover:shadow-lg hover:shadow-primary/20">

              <div className="w-12 h-12 flex items-center justify-center rounded-full
            bg-primary/20 text-primary
            transition-all duration-300
            group-hover:bg-primary group-hover:text-white">

                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-white text-sm sm:text-base">
                +91 74200 85639
              </span>
            </div>

            {/* Address */}
            <div className="group flex items-center gap-4 bg-darker/70 rounded-full px-6 py-4
            transition-all duration-300
            hover:-translate-y-1 hover:bg-darker
            hover:shadow-lg hover:shadow-primary/20">

              <div className="w-12 h-12 flex items-center justify-center rounded-full
            bg-primary/20 text-primary
            transition-all duration-300
            group-hover:bg-primary group-hover:text-white">

                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M19.5 10c0 7-7.5 11-7.5 11S4.5 17 4.5 10a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <span className="text-white text-sm sm:text-base">
                Plot No. 53, Uday Nagar, Ring Road, Nagpur, India - 440024
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 h-px bg-gray-700/50" />

          {/* SOCIAL BUTTONS */}
          <div className="flex justify-center gap-6">
            {/* GitHub */}
            <a
              href="https://github.com/NehanshuSurkar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full
           bg-darker/80 text-white
           transition-all duration-300
           hover:-translate-y-1 hover:scale-105
           hover:shadow-lg hover:shadow-black/40"

            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.74.5 12.03c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.55-3.87-1.55-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.19a10.9 10.9 0 012.9-.39c.99 0 1.99.13 2.9.39 2.2-1.5 3.17-1.19 3.17-1.19.63 1.6.23 2.78.11 3.07.74.81 1.19 1.85 1.19 3.11 0 4.43-2.7 5.4-5.28 5.69.41.36.77 1.07.77 2.16v3.2c0 .31.21.68.8.56A11.53 11.53 0 0023.5 12C23.5 5.74 18.27.5 12 .5z" />
              </svg>
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nehanshu-surkar-3b5bb4266"
              target="_blank"
              rel="noopener noreferrer"
             className="flex items-center gap-2 px-6 py-3 rounded-full
           bg-[#0A66C2] text-white
           transition-all duration-300
           hover:-translate-y-1 hover:scale-105
           hover:bg-[#004182]
           hover:shadow-lg hover:shadow-[#0A66C2]/50"


            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
