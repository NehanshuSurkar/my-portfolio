
const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in CSE (AI & ML)",
      institution: "Shri Ramdeobaba College of Engineering and Management, Nagpur",
      location: "Nagpur",
      duration: "2024 - 2027",
      score: "CGPA: 8.09",
  
    },
    {
      degree: "Diploma in Artificial Intelligence and Machine Learning",
      institution: "Government Polytechnic College, Sadar",
      location: "Nagpur",
      duration: "2021 - 2024",
      score: "Percentage: 90.05%",
  
    },
    {
      degree: "Secondary School Education",
      institution: "Prerna Convent",
      location: "Nagpur",
      duration: "Till 2021",
      score: "",

    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          <span className="text-gradient">Education</span>
        </h2>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-dark/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
               
                


                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-primary mb-2">{edu.institution}</p>
                  <p className="text-gray-400 mb-2">{edu.location}</p>

                  <div className="flex flex-wrap gap-4 mt-4">
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/30">
                      {edu.duration}
                    </span>
                    {edu.score && (
                      <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-lg border border-secondary/30">
                        {edu.score}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
