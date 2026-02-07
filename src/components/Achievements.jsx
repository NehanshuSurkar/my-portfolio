const Achievements = () => {
  const achievements = [
    {
      title: "Runner-up, Campus Innovate Hackathon",
      organization: "G.H. Raisoni College of Engineering and Management, Nagpur",
      icon: "🏆"
    },
    {
      title: "Participant, Smart India Hackathon (SIH)",
      organization: "2024 and 2025",
      icon: "💡"
    }
  ];

  const certifications = [
    {
      title: "Networking Devices and Initial Configuration",
      organization: "Cisco",
      icon: "🌐"
    },
    {
      title: "Career Readiness / Technical Training Program",
      organization: "TCS iON",
      icon: "📜"
    },
    {
      title: "NLP Workshop",
      organization: "NVIDIA",
      icon: "🤖"
    },
    {
      title: "Fundamentals of Deep Learning",
      organization: "NVIDIA",
      icon: "🧠"
    },
    {
      title: "AI for Predictive Maintenance",
      organization: "NVIDIA",
      icon: "⚙️"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          Achievements & <span className="text-gradient">Certifications</span>
        </h2>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary mb-6">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-dark/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{achievement.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-400">{achievement.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-secondary mb-6">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-dark/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{cert.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
                <p className="text-gray-400 text-sm">{cert.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
