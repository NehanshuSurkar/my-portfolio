const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      skills: ["C++", "Python", "Dart"]
    },
    {
      category: "AI/ML",
      skills: ["Supervised Learning", "Unsupervised Learning", "Deep Learning", "Computer Vision"]
    },
    {
      category: "Frameworks & Tools",
      skills: ["Flutter", "Docker", "GitHub", "Google Colab", "Jupyter Notebook"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "Firebase"]
    },
    {
      category: "Soft Skills",
      skills: ["Team Work", "Communication", "Time Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          <span className="text-gradient">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="bg-dark/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-primary mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 bg-darker/80 text-gray-300 rounded-lg text-sm border border-gray-700 hover:border-primary/50 hover:text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
