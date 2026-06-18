const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="bg-dark/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-800 hover:border-primary/50 transition-all duration-300">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a passionate B.Tech CSE (AI & ML) student at Shri Ramdeobaba College of Engineering
            and Management, Nagpur, graduating in 2027. With a strong foundation in artificial intelligence,
            machine learning, and mobile app development, I thrive on creating innovative solutions that
            bridge the gap between cutting-edge AI technology and practical applications.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            My journey in tech began with a diploma in AI/ML from Government Polytechnic Nagpur, where
            I achieved 90.05%. This solid foundation has enabled me to work on diverse projects ranging
            from AI-powered chatbots to production-ready mobile applications.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            I'm experienced in implementing machine learning models, deep learning techniques, and
            building scalable Flutter applications. My goal is to leverage AI/ML to create impactful
            solutions that make a real difference in people's lives.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-darker/80 rounded-xl border border-gray-800">
              <div className="text-4xl font-bold text-gradient mb-2">8.09</div>
              <div className="text-gray-400">Current CGPA</div>
            </div>
            <div className="text-center p-6 bg-darker/80 rounded-xl border border-gray-800">
              <div className="text-4xl font-bold text-gradient mb-2">90.05%</div>
              <div className="text-gray-400">Diploma Percentage</div>
            </div>
            <div className="text-center p-6 bg-darker/80 rounded-xl border border-gray-800">
              <div className="text-4xl font-bold text-gradient mb-2">2027</div>
              <div className="text-gray-400">Graduation Year</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
