import React, { useState } from 'react';
import { Mail, Linkedin, ExternalLink, Code, Smartphone, Headset, Globe, Briefcase, Award, Book, Camera, Github, Menu, X } from 'lucide-react';

const PortfolioWebsite = () => {
  const [activeCategory, setActiveCategory] = useState('XR');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Project data based on Yağız Eraslan's portfolio
  const projects = {
    XR: [
      {
        id: 1,
        title: 'Gates of Memory (XR Hack 2024 - 3rd Place 🥉)',
        description: 'Mixed Reality historical exploration experience with interactive portals to different time periods and 3D puzzle mechanics',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Gates_Of_Memory.webp',
        link: 'https://youtube.com/shorts/kAb0phNKmjU',
        tags: ['Unity', 'C#', 'Meta SDK', 'Quest 3']
      },
      {
        id: 2,
        title: 'Bounce Beat (XR Hack 2024 - 1st Place 🥇)',
        description: 'A Mixed Reality music creation app where users create soundscapes by placing blocks in their environment that interact with a bouncing ball',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Bounce_Beat.webp',
        link: 'https://youtu.be/pRoLIPdcv0U',
        tags: ['Unity', 'C#', 'Meta SDK', 'URP', 'Quest 3']
      }
    ],
    VR: [
      {
        id: 1,
        title: 'Wizard of OZ VR Experience',
        description: 'Immersive co-location VR experience with multi-user synchronization and physical platform motion integration. Features five distinct environments with synchronized virtual and physical movement, complete 10-minute guided experience.',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Wizard_Of_OZ.webp',
        tags: ['Unity', 'C#', 'Addressables', 'Meta SDK', 'Photon Fusion', 'DOTween']
      },
      {
        id: 2,
        title: 'VR Dinosaur Museum',
        description: 'Educational VR application with detailed dinosaur exhibits and hand-tracked interactions. Features scientifically accurate dinosaur models, intuitive hand tracking controls, and synchronized physical platform movement.',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/VR_Dinosaur.webp',
        tags: ['Unity', 'C#', 'Addressables', 'Meta SDK', 'DOTween']
      },
      {
        id: 3,
        title: 'Horizon of Horus',
        description: 'VR action-tower defense game set in Ancient Egypt. Players embody the god Horus using magical crossbow with four unique ammo types and eight different traps. Published on Steam with three visually stunning levels.',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Horizon_of_Horus.webp',
        link: 'https://www.youtube.com/watch?v=t7MiJnIG2Ns',
        tags: ['Unity', 'C#', 'Addressable', 'SteamVR', 'DOTween']
      },
      {
        id: 4,
        title: 'Blind Fastener Training',
        description: 'VR training simulation for Turkish Aerospace Industries. High-fidelity 3D models and realistic physics for blind fastener applications. Achieved 40% increase in training effectiveness with real-time feedback.',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Blind_Fastener.webp',
        link: 'https://youtu.be/J9FennyZy2U',
        tags: ['Unity', 'C#', 'Addressable', 'SteamVR', 'VRIF', 'DOTween']
      },
      {
        id: 5,
        title: 'Konya Municipality VR Meeting Room',
        description: 'Virtual meeting room application for Konya Municipality. Features user authentication, avatar selection, interactive presentations, video viewing, and 3D model interactions in collaborative virtual environment.',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Private_Meeting_Room.webp',
        link: 'https://youtu.be/URz37_2mwKw',
        tags: ['Unity', 'C#', 'Photon PUN2', 'Addressable', 'VRIF', 'DOTween', 'Ultimate LOD System']
      },
      {
        id: 6,
        title: 'Fire Intervention Training',
        description: 'VR fire safety training module with realistic fire scenarios, extinguisher handling, and evacuation procedures. Features 6-language localization and license-checking authorization. 40% increase in knowledge retention.',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Fire_Intervention_Training.webp',
        link: 'https://youtu.be/bybM1otTefU',
        tags: ['Unity', 'C#', 'Localization', 'Addressable', 'SteamVR', 'VRIF', 'Firebase', 'DOTween']
      },
      {
        id: 7,
        title: 'Covid Hunters',
        description: 'COVID-19 awareness game for Ministry of Health of Turkey. Players shoot viruses using vaccine-shaped gun in futuristic laboratory. Showcased at Teknofest 2021, promoting Turkovac vaccine awareness.',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Covid_Hunter.webp',
        link: 'https://youtu.be/enBkX3wo-vI',
        tags: ['Unity', 'C#', 'Addressable', 'SteamVR', 'DOTween']
      },
      {
        id: 8,
        title: 'Transformer Maintenance',
        description: 'VR training simulator for TEİAŞ electrical transformer maintenance. Step-by-step procedures guide technicians through repair and maintenance tasks. 35% improvement in engagement, 25% reduced training times.',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Transformer_Maintenance.webp',
        link: 'https://youtu.be/-5HtqdKr0wE',
        tags: ['Unity', 'C#', 'Localization', 'Addressable', 'SteamVR', 'VRIF', 'Firebase', 'DOTween']
      },
      {
        id: 9,
        title: 'Otokar Showroom',
        description: 'Immersive VR experience for Otokar military vehicles. Features high-detail 3D models, customizable camouflage patterns, interactive components, and 360-degree interior exploration using HDRP for ultra-realistic visuals.',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Otokar_Showroom.webp',
        link: 'https://youtu.be/X8JfgrqgC1c',
        tags: ['Unity HDRP', 'C#', 'Localization', 'Addressable', 'SteamVR', 'VRIF', 'DOTween']
      },
      {
        id: 10,
        title: 'Forklift Driving Training',
        description: 'VR forklift operation training with realistic physics, load handling, navigation in confined spaces, and emergency scenarios. Six-language support with secure login system. 35% improvement in trainee performance.',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Forklift_Driving_Training.webp',
        link: 'https://youtu.be/bwM_x6Csd7s',
        tags: ['Unity', 'C#', 'Localization', 'Addressable', 'SteamVR', 'VRIF', 'Firebase', 'DOTween']
      }
    ],
    Mobile: [
      {
        id: 1,
        title: 'Eclipsed Echo',
        description: '2D card-matching mobile game with various grid layouts, performance scoring, and optimized card management',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Card_Matching_Game.webp',
        link: 'https://youtu.be/VQnK9CIzq_U',
        tags: ['Unity', 'C#', 'Addressable', 'Object Pooling', 'Android/iOS']
      },
      {
        id: 2,
        title: 'Hidden Objects: Secret Mansion',
        description: 'Hidden-object puzzle game with dynamic asset loading, memory optimization, and monetization integration',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Hidden_Objects.webp',
        link: 'https://youtu.be/iv8MLJ20FXA',
        tags: ['Unity', 'C#', 'Addressable', 'Firebase', 'Google AdMob']
      },
      {
        id: 3,
        title: 'Block Puzzle',
        description: 'Block Blast clone with strategic block-breaking mechanics and optimized performance for mobile platforms',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Block_Blast.webp',
        link: 'https://youtu.be/r-Te_ol74F4',
        tags: ['Unity', 'C#', 'Google AdMob', 'Firebase', 'Android/iOS']
      },
      {
        id: 4,
        title: 'Altered Ball',
        description: 'Aerox clone with physics-based ball control using dual joysticks and custom-designed levels',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Altered_Ball.webp',
        link: 'https://youtu.be/V_s6SWGwY90',
        tags: ['Unity', 'C#', 'ProBuilder', 'ProGrids', 'Android/iOS']
      }
    ],
    Web: [
      {
        id: 1,
        title: 'A.I. Photo Booth - Studio',
        description: 'Real-time AI-powered photo booth for ArtXSpace Miami installations. Combines camera capture with KlingAI for personalized anime-style portraits. Features three artistic styles (Miami, Hip-Hop, Celebrity) with responsive mobile-optimized design.',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/AI_PhotoBooth.webp',
        tags: ['React.js', 'Node.js', 'Express.js', 'KlingAI API', 'HTML5 Canvas', 'JWT', 'HTTPS']
      },
      {
        id: 2,
        title: 'A.I. Powered Education Platform',
        description: 'Advanced WebGL educational platform with customizable lessons, AI-generated quizzes, and voice guidance',
        image: '/api/placeholder/480/320',
        tags: ['Unity', 'C#', 'WebGL', 'OpenAI API', 'Google TTS/STT']
      },
      {
        id: 3,
        title: 'Ceyizify Shopping',
        description: 'WebGL prototype for interactive 3D dowry item visualization and customizable listing',
        image: '/api/placeholder/480/320',
        link: 'https://ceyizify-3d-prototip.netlify.app/',
        tags: ['Unity', 'C#', 'WebGL', 'Addressable']
      },
      {
        id: 4,
        title: 'YouTube Channel Analyzer',
        description: 'Analytics tool for YouTube channel metrics with quota management and content categorization',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/YouTube_Analyzer.webp',
        link: 'https://youtube-analyzer-app.netlify.app/',
        tags: ['Unity', 'C#', 'WebGL', 'YouTube Data API']
      },
      {
        id: 5,
        title: 'Memes Soundboard',
        description: 'Interactive WebGL app with emoji buttons triggering popular meme sound effects',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Memes_Soundboard.webp',
        link: 'https://memes-soundboard.netlify.app/',
        tags: ['Unity', 'C#', 'WebGL', 'Addressable']
      },
      {
        id: 6,
        title: 'Crash Game',
        description: 'Real-time multiplayer betting game with WebSocket communication and mobile-friendly controls',
        image: '/api/placeholder/480/320',
        link: 'https://crash-gamee.netlify.app/',
        tags: ['Unity', 'C#', 'WebGL', 'WebSocket', 'Custom jslib']
      }
    ],
    GitHub: [
      {
        id: 1,
        title: 'DeepSeek-Unity',
        description: 'A clean, modular Unity integration for DeepSeek\'s powerful LLMs — chat, reasoning, and task automation made easy',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/DeepSeek_AI_API.jpg',
        link: 'https://github.com/yagizeraslan/DeepSeek-Unity',
        tags: ['Unity', 'C#', 'AI Integration', 'LLM', 'API', 'Open Source']
      },
      {
        id: 2,
        title: 'Claude-Unity',
        description: 'A clean, modular Unity integration for Claude\'s powerful LLMs — chat, reasoning, and task automation made easy',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Claude_AI_API.jpg',
        link: 'https://github.com/yagizeraslan/Claude-Unity',
        tags: ['Unity', 'C#', 'AI Integration', 'LLM', 'API', 'Open Source']
      }
    ],
    Freelance: [
      {
        id: 1,
        title: 'Unity C# Programming Lessons',
        description: 'Comprehensive online training in Unity and C# game development from beginner to advanced levels',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Freelancer_Services/Unity_C%23_Online_Learning.jpg',
        tags: ['Unity', 'C#', 'Game Development', 'Programming Fundamentals']
      },
      {
        id: 2,
        title: 'Mobile/Web Game Development',
        description: 'Full-cycle development of mobile and web games and applications for iOS and Android platforms',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Freelancer_Services/Unity_Mobile_Game_Development.jpg',
        tags: ['Unity', 'C#', 'Cross-Platform', 'UI/UX', 'Optimization']
      },
      {
        id: 3,
        title: 'VR/AR/MR Application Development',
        description: 'Immersive XR application development with extensive experience across multiple VR platforms',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Freelancer_Services/Unity_AR_VR_MR_App_Development.jpg',
        tags: ['Unity', 'C#', 'XR Development', 'Quest', 'SteamVR']
      },
      {
        id: 4,
        title: 'Unity Technical Consulting',
        description: 'Expert technical guidance for Unity projects including architecture, optimization, and problem-solving',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Freelancer_Services/Unity_Technical_Consultancy.jpg',
        tags: ['Code Review', 'Performance Optimization', 'Architecture', 'Best Practices']
      },
      {
        id: 5,
        title: 'Game Design Document Creation',
        description: 'Detailed game analysis and documentation for clone development or original game concept planning',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Freelancer_Services/Game_Design_Document_Preparation.jpg',
        tags: ['Game Analysis', 'Mechanics Documentation', 'Technical Requirements', 'Feature Planning']
      }
    ],
    Photography: [
      {
        id: 1,
        title: 'Nature Photography',
        description: 'Landscape and wildlife photography showcasing the beauty of nature.',
        image: '/api/placeholder/480/320',
        tags: ['Landscape', 'Wildlife', 'Nature']
      },
      {
        id: 2,
        title: 'Portrait Photography',
        description: 'Professional portrait photography for individuals and groups.',
        image: '/api/placeholder/480/320',
        tags: ['Portraits', 'Studio', 'Outdoor']
      },
      {
        id: 3,
        title: 'Night Photography',
        description: 'Capturing the beauty of the night sky and urban landscapes at night.',
        image: '/api/placeholder/480/320',
        tags: ['Night Sky', 'Urban', 'Long Exposure']
      },
      {
        id: 4,
        title: 'Macro Photography',
        description: 'Close-up photography revealing the intricate details of small subjects.',
        image: '/api/placeholder/480/320',
        tags: ['Close-Up', 'Details', 'Small Subjects']
      }
    ],
  };

  // Category navigation items
  const categories = [
    { id: 'XR', name: 'XR Projects', icon: <Headset size={18} /> },
    { id: 'VR', name: 'VR Projects', icon: <Headset size={18} /> },
    { id: 'Mobile', name: 'Mobile Projects', icon: <Smartphone size={18} /> },
    { id: 'Web', name: 'Web Projects', icon: <Globe size={18} /> },
    { id: 'GitHub', name: 'GitHub Projects', icon: <Github size={18} /> },
    { id: 'Freelance', name: 'Freelance Services', icon: <Briefcase size={18} /> },
    { id: 'Photography', name: 'Photography', icon: <Camera size={18} /> },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="bg-white p-2 rounded-md shadow-md hover:bg-gray-50 transition-colors"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar Overlay for Mobile */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Left Sidebar */}
        <div className={`
          fixed lg:relative lg:translate-x-0 lg:block
          w-80 bg-white shadow-md z-40 h-full lg:h-auto
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto
        `}>
          <div className="p-6">
            <div className="flex flex-col items-center mb-8">
              <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 overflow-hidden">
                <img 
                  src="https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Portfolio-1.jpg" 
                  alt="Yağız Eraslan" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h1 className="text-2xl font-bold">Yağız Eraslan</h1>
              <p className="text-gray-600 text-center mt-1">Unity Developer | XR | Mobile | Web</p>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">About Me</h2>
              <p className="text-gray-600 text-sm">
                Skilled Unity Developer with 7+ years of experience in Mobile and VR/AR development.
                Proven ability to create and implement game functionality, optimize performance,
                and deliver high-quality applications for platforms including Meta Store, Play Store and Steam.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {['Unity', 'C#', 'XR Development', 'VR/AR/MR', 'Mobile Development', 'WebGL', 'React.js', 'Node.js', 'AI Integration', 'Addressables', 'Photon Fusion', 'SteamVR', 'Meta SDK', 'Firebase', 'Git', 'Performance Optimization', 'Training Simulations', 'B2B Solutions'].map((skill) => (
                  <span key={skill} className="bg-gray-200 px-2 py-1 rounded-md text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">Experience</h2>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Freelance Software Developer</p>
                  <p className="text-gray-600 text-sm">UpWork, 2024-Present</p>
                </div>
                <div>
                  <p className="font-medium">Unity Team Leader</p>
                  <p className="text-gray-600 text-sm">Global Future Designs and Solutions Inc., 2023-2024</p>
                </div>
                <div>
                  <p className="font-medium">Unity Developer</p>
                  <p className="text-gray-600 text-sm">Global Future Designs and Solutions Inc., 2021-2023</p>
                </div>
                <div>
                  <p className="font-medium">Coding Instructor</p>
                  <p className="text-gray-600 text-sm">PRONOVA Digital Imaging Technologies, 2019-2020</p>
                </div>
                <div>
                  <p className="font-medium">STEM Instructor</p>
                  <p className="text-gray-600 text-sm">PRONOVA Digital Imaging Technologies, 2017-2019</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">Education</h2>
              <div>
                <p className="font-medium">Bachelor of Sciences, Astronomy and Space Sciences</p>
                <p className="text-gray-600 text-sm">Ankara University, Science Faculty, 2012-2016</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">Hardware</h2>
              <p className="text-gray-600 text-sm">
                Development experience with Meta Quest 2/3, Pico 4, HTC Vive Pro, and HTC Vive Cosmos headsets
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">Certifications</h2>
              <div className="space-y-1">
                <div className="text-gray-600 text-sm flex items-start gap-2">
                  <Award size={14} className="mt-0.5 flex-shrink-0" /> 
                  <span>XR AI Hack İstanbul 2024 Winner</span>
                </div>
                <div className="text-gray-600 text-sm flex items-start gap-2">
                  <Award size={14} className="mt-0.5 flex-shrink-0" /> 
                  <span>Unity: 3D Level Design - LinkedIn (2020)</span>
                </div>
                <div className="text-gray-600 text-sm flex items-start gap-2">
                  <Award size={14} className="mt-0.5 flex-shrink-0" /> 
                  <span>Unity Scripting and Publishing - LinkedIn (2020)</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3">Contact</h2>
              <div className="flex flex-col gap-3">
                <a 
                  href="mailto:yagizeraslan@gmail.com" 
                  className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2"
                >
                  <Mail size={16} className="flex-shrink-0" />
                  <span className="text-sm break-all">yagizeraslan@gmail.com</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/yagizeraslan" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2"
                >
                  <Linkedin size={16} className="flex-shrink-0" />
                  <span className="text-sm break-all">linkedin.com/in/yagizeraslan</span>
                </a>
                <div className="text-gray-700 flex items-center gap-2">
                  <Book size={16} className="flex-shrink-0" />
                  <span className="text-sm">+90 536 957 2042</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 flex flex-col lg:ml-0 ml-0">
          {/* Navigation */}
          <div className="bg-white p-4 shadow-sm mt-16 lg:mt-0">
            <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 whitespace-nowrap transition-colors flex-shrink-0 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50">
            <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">
              {categories.find(c => c.id === activeCategory)?.name}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 justify-items-center max-w-none">
              {projects[activeCategory].map((project) => (
                <div 
                  key={project.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-200 flex flex-col w-full max-w-sm"
                >
                  {/* Image container with consistent aspect ratio */}
                  <div className="w-full aspect-[3/2] overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/api/placeholder/480/320';
                      }}
                    />
                  </div>

                  {/* Content area with consistent spacing */}
                  <div className="p-4 flex flex-col flex-grow min-h-[200px]">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold leading-tight line-clamp-2 flex-1 pr-2">
                        {project.title}
                      </h3>
                      {(project.link || project.repoUrl) && (
                        <a 
                          href={project.link || project.repoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-blue-600 hover:text-blue-800 transition-colors flex-shrink-0 p-1 hover:bg-blue-50 rounded"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span 
                          key={tag} 
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default PortfolioWebsite;