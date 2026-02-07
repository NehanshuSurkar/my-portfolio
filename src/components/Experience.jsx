const Experience = () => {
  const experiences = [
    {
      role: "Flutter Developer Intern",
      company: "Shaibya Solutions",
      duration: "July 2025",
      responsibilities: [
        "Built Gym Management App with attendance, diet plans, subscriptions, and analytics",
        "Gained experience in API integration and state management",
        "Developed production-ready features with focus on user experience"
      ]
    },
    {
      role: "Flutter Developer Intern",
      company: "AUSAM Innovations",
      duration: "January 2024",
      responsibilities: [
        "Completed a 4-month internship on a real-world revision application for 11th and 12th standard students",
        "Developed user-friendly and responsive UI using Flutter framework",
        "Integrated mobile auth, cloud storage, and backend APIs"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          Work <span className="text-gradient">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-dark/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-800 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <p className="text-xl text-primary">{exp.company}</p>
                </div>
                <span className="mt-2 sm:mt-0 px-4 py-2 bg-secondary/10 text-secondary rounded-lg border border-secondary/30 inline-block">
                  {exp.duration}
                </span>
              </div>

              <ul className="space-y-3 mt-6">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="flex gap-3 text-gray-300">
                    <span className="text-primary mt-1">▹</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
