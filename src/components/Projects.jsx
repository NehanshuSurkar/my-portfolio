const Projects = () => {
  const projects = [
    {
  title: "AfterCall – AI Post-Call Summary App",
  description:
    "AfterCall is a privacy-first mobile app built during the Dreamflow Buildathon that helps users remember important conversations. Users can record or upload call audio after a conversation, which is converted into text and summarized into key points and action items. The app also generates natural voice recaps using ElevenLabs, enabling hands-free review of call summaries.",
  technologies: [
    "Flutter",
    "Dreamflow",
    "AI Speech-to-Text",
    "Text Summarization",
    "ElevenLabs API"
  ],
  highlights: [
    "Built a privacy-first post-call workflow (no live call recording)",
    "Implemented audio recording and upload-based processing",
    "Generated structured summaries with key points and action items",
    "Integrated ElevenLabs for natural AI voice summaries",
    "Designed and shipped a complete app within buildathon timelines"
  ]
},

    {
  title: "RythmX - Music Streaming App",
  description: "A full-featured music streaming application built with Flutter that allows users to search, stream, and manage playlists. Features include high-quality audio streaming, playback queue management, and a modern UI with gradient themes. Integrated with Saavn API for extensive music library access.",
  technologies: ["Flutter", "Dart", "Just Audio", "REST APIs", "State Management", "Custom UI"],
  highlights: [
    "Built complete music player with play/pause, seek, and queue management",
    "Implemented high-quality audio streaming with 320kbps support",
    "Designed modern gradient-based UI with smooth animations",
    "Added playback queue with add/remove/reorder functionality",
    "Integrated search functionality with real-time API calls",
    "Implemented responsive design for multiple screen sizes",
    "Added progress tracking and playback controls"
  ]
},
    {
      title: "SPEX.AI - RAG-Based AI Chatbot",
      description: "A website-specific AI chatbot built during a hackathon, featuring RAG-based backend services for accurate, context-aware responses.",
      technologies: ["Flutter", "REST API", "RAG", "Web Crawling", "Vector Search", "LLMs"],
      highlights: [
        "Developed Flutter-based chatbot interface",
        "Integrated REST API for real-time AI responses",
        "Worked with RAG-based backend services for accurate querying"
      
      ]
    },
    {
      title: "FitLife - Gym Management App",
      description: "A comprehensive Flutter-based gym management application with production-ready features including attendance tracking, diet planning, subscription management, and analytics.",
      technologies: ["Flutter", "REST APIs", "State Management"],
      highlights: [
        "Built production-ready app features",
        "Collaborated with backend teams to implement RESTful APIs",
        "Ensured seamless data flow across the ecosystem"
      
      ]
    },
    {
      title: "AlCuRithm",
      description: "This is an ISO-compliant industrial Life Cycle Assessment (LCA) module specifically designed for Aluminium and Copper in the Indian context (SIH/JNARDDC), featuring kWh as the primary energy unit, t·km for transport, and mandatory alloy inputs. It performs cradle-to-grave impact assessments across six categories (GWP, Acidification, etc.) with integrated circular economy metrics (MCI, CMUR), includes India-specific emission factors, supports multiple end-of-life accounting methods, and outputs detailed, formatted reports—serving as a robust tool for environmental analysis and sustainable material strategy in the metals industry.",
      technologies: ["ML", "Flutter", "Dart", "Python", "PostgreSQL", "Flask" ],
      highlights: [
        "Developed AI based LCA tool",
        "Works for copper and aluminium",
      ]
    },
    {
      title: "Revv-AI",
      description: "RevvAI is a Flutter-based mobile application designed to help 11th and 12th grade students prepare for the JEE through AI-powered personalized revision. The app enables students to manage Physics, Chemistry, and Mathematics topics, generates adaptive study materials, quizzes, and real-life examples using OpenAI GPT-3.5, and tracks performance with analytics that highlight strengths and weaknesses. It features a smart revision scheduler, a chat-based AI assistant for doubt-solving, and progress monitoring—all integrated with Firebase for data synchronization.",
      technologies: ["Flutter", "Dart", "Firebase"],
      highlights: [
        "Developed AI based Revision app",
        "Worked on Flutter fundamentals",
      ]
    }
    
    
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-dark/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Highlights</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex gap-2 text-gray-300 text-sm">
                      <span className="text-secondary mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


