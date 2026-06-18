const Projects = () => {
  const projects = [

    {
      title: "FaceSync.ai - Offline Facial Recognition & Liveness Detection System",
        github: "https://github.com/NehanshuSurkar/FaceSync-AI.git",
        demo:"https://www.youtube.com/shorts/X7WgPwnBWAo",

description:
"FaceSync.ai is an AI-powered offline-first facial authentication and attendance management system designed for remote and zero-network environments. The project uses MobileFaceNet and TensorFlow Lite for on-device face recognition, combined with ML Kit-based liveness detection to prevent spoofing attacks through photographs or recorded videos. The system supports offline attendance logging using SQLite and automatically synchronizes records to the cloud via Supabase when internet connectivity is restored, followed by secure local data purging.",

technologies: [
"React Native",
"TypeScript",
"TensorFlow Lite",
"MobileFaceNet",
"Google ML Kit",
"SQLite",
"Supabase",
"Vision Camera",
"Android"
],

highlights: [
"Developed a fully offline facial recognition system using MobileFaceNet and TensorFlow Lite",
"Implemented randomized liveness detection using smile and head-movement verification to prevent spoofing attacks",
"Built an offline-first attendance logging system with local SQLite storage",
"Integrated automatic cloud synchronization and sync-purge workflow using Supabase",
"Added low-light assistance mode using screen-flash illumination for improved face capture in dark environments",
"Optimized the solution for mid-range mobile devices with fast on-device inference and lightweight deployment"
]

    },
    {

  title: "SurveillanceGuard - AI-Based CCTV Anomaly Detection System",
  github: "https://github.com/NehanshuSurkar/anomaly-detection.git",
  description:
    "SurveillanceGuard is an AI-powered video anomaly detection system designed for real-time CCTV surveillance monitoring. The project uses a hybrid ConvLSTM Autoencoder architecture to learn normal activity patterns and automatically detect suspicious events such as fights, road accidents, and thefts without requiring labeled anomaly data during training. The system also generates automated JSON and PDF incident reports with severity levels and confidence scores.",
  technologies: [
    "Python",
    "PyTorch",
    "ConvLSTM",
    "Autoencoder",
    "CNN",
    "Deep Learning",
    
    "UCF-Crime Dataset"
  ],
  highlights: [
    "Developed a hybrid ConvLSTM Autoencoder for unsupervised video anomaly detection",
    "Implemented adaptive statistical thresholding for scene-independent anomaly detection",
    "Trained the model on normal CCTV footage and detected unseen anomalous activities",
    "Achieved 95.34% AUC-ROC on the UCF-Crime surveillance dataset",
    "Integrated automated JSON and PDF report generation with timestamps and severity levels",
    "Built a real-time surveillance pipeline for detecting fights, accidents, and robbery events"
  ]
},
    {
  title: "AfterCall - AI Post-Call Summary App",

   github: "https://github.com/NehanshuSurkar/AfterCall.git",
   demo: "https://drive.google.com/file/d/12X29w5kvnWQzSH72_rbcJu0qhnKsfCdU/view?usp=sharing",
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
  title: "FishScan.AI - Fish Disease Detection System",
   github: "https://github.com/PushkarOnGit/Fish-Disease-Detection.git",
   demo: "https://drive.google.com/file/d/1pseENSomc9o4Oph_oRnqhXi0nLSCaGrm/view?usp=sharing",
  description:
    "A deep learning-based fish disease detection system developed using the ResNet50 transfer learning model. The system analyzes fish images to identify infected regions and classify disease conditions, helping improve early disease diagnosis in aquaculture and fish farming environments.",
  technologies: [
    "Python",
    "ResNet50",
    "TensorFlow",
    "Keras",
    "OpenCV",
    "Deep Learning",
   "Flutter",
    "Dart",
    "REST APIs",
  ],
  highlights: [
    "Implemented fish disease classification using the ResNet50 transfer learning model",
    "Built an automated fish disease detection pipeline using deep learning",
    "Applied image preprocessing and augmentation techniques for better model performance",
    "Fine-tuned the pretrained ResNet50 architecture for accurate disease prediction",
    "Developed an AI-based solution for early fish disease detection in aquaculture"

  ]
},
    {
  title: "Sonik - Music Streaming App",
   github: "https://github.com/NehanshuSurkar/Sonik.git",
   demo:"https://drive.google.com/file/d/1D9FL60pA3mugRWpoFT2jpMcnfxpBRcyp/view?usp=sharing",
 
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
      github: "https://github.com/NehanshuSurkar/SPEX.AI_mobile_app.git",
      demo: "https://drive.google.com/file/d/16AzUBm_NM6NxcS1Npd9l0d_fUj6dIFNM/view?usp=sharing",
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
        github: "https://github.com/PushkarOnGit/GymManagementApp.git",
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
className="bg-dark/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >

                <div className="flex-grow">
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

              {/* <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Highlights</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex gap-2 text-gray-300 text-sm">
                      <span className="text-secondary mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  )
                  )
                  }
                </ul>
              </div> */}
              <div>
  <h4 className="text-sm font-semibold text-gray-400 mb-3">
    Key Highlights
  </h4>

  <ul className="space-y-2">
    {project.highlights.map((highlight, highlightIndex) => (
      <li key={highlightIndex} className="flex gap-2 text-gray-300 text-sm">
        <span className="text-secondary mt-1">▹</span>
        <span>{highlight}</span>
      </li>
    ))}
  </ul>
    </div>

  {/* Project Links */}
  <div className="mt-6 flex gap-3">
    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition"
      >
        GitHub
      </a>
    )}

    {project.demo && (
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition"
      >
        Live Demo
      </a>
    )}
  </div>
</div>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


