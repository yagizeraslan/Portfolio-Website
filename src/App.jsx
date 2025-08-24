import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, ExternalLink, Code, Smartphone, Headset, Globe, Briefcase, Award, Book, Camera, Github, Menu, X, Star, Zap, Rocket, ChevronDown, ChevronRight, TelescopeIcon } from 'lucide-react';

const ModernPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState('XR');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [openSections, setOpenSections] = useState({
    skills: false,
    experience: false,
    education: false,
    achievements: false,
    hardware: false,
    contact: false,
  });
  const [openSkillCategories, setOpenSkillCategories] = useState({});

  // Mouse tracking for subtle parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Project data (keeping all original data)
  const projects = {
    XR: [
      {
        id: 1,
        title: 'Gates of Memory (XR Hack 2024 - 3rd Place 🥉)',
        description: 'Mixed Reality historical exploration experience with interactive portals to different time periods and 3D puzzle mechanics',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Gates_Of_Memory.webp',
        link: 'https://youtube.com/shorts/kAb0phNKmjU',
        tags: ['Unity', 'C#', 'Meta SDK', 'Quest 3'],
        featured: true
      },
      {
        id: 2,
        title: 'Bounce Beat (XR Hack 2024 - 1st Place 🥇)',
        description: 'A Mixed Reality music creation app where users create soundscapes by placing blocks in their environment that interact with a bouncing ball',
        image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Bounce_Beat.webp',
        link: 'https://youtu.be/pRoLIPdcv0U',
        tags: ['Unity', 'C#', 'Meta SDK', 'URP', 'Quest 3'],
        featured: true
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
        title: 'Egg VR',
        description: 'A multiplayer social VR experience where players become eggs and navigate oversized kitchen environments using unique hand-based locomotion inspired by Gorilla Tag. Players run, climb, and jump through air ducts and kitchen landscapes using only hand and arm movements',
        image: 'https://cdn.sidequestvr.com/file/583228/04_eggvrlogo.png?size=512',
        link: 'https://www.meta.com/experiences/egg-vr/7275543385800661/',
        tags: ['Unity', 'C#', 'Scriptable Objects', 'Meta SDK', 'DOTween']
      },
      {
        id: 5,
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
        title: 'Real-time Strategy Simulation',
        description: 'Multiplayer strategy game with dynamic resource management, WebSocket synchronization, and tactical decision-making mechanics',
        image: '/api/placeholder/480/320',
        link: 'https://crash-gamee.netlify.app/',
        tags: ['Unity', 'C#', 'WebGL', 'WebSocket', 'Javascript']
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
    Astronomy: [
      {
        id: 1,
        title: 'Titan ın Kum Tepeleri',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2015/11/PIA20016-SaturnMoon-Titan-20151113.jpg',
        link: 'https://www.uzaydanhaberler.com/2015/11/04/titanin-kum-tepeleri/',
      },
      {
        id: 2,
        title: 'Tayland Semasını Aydınlatan Meteor',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2015/11/tayland-meteor-1.jpg',
        link: 'https://www.uzaydanhaberler.com/2015/11/04/tayland-semasini-aydinlatan-meteor/',
      },
      {
        id: 3,
        title: 'Mars, Bir Zamanlar Dünya Gibi Miydi?',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2015/11/mars-1.jpg',
        link: 'https://www.uzaydanhaberler.com/2015/11/05/mars-bir-zamanlar-dunya-gibi-miydi/',
      },
      {
        id: 4,
        title: 'NASA, Mars Atmosferinin Seyrekliğini Açıkladı',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2015/11/sun-winds-hits-mars-1.jpg',
        link: 'https://www.uzaydanhaberler.com/2015/11/07/nasa-mars-atmosferinin-seyrekligini-acikladi/',
      },
      {
        id: 5,
        title: 'Güneş Sistemindeki En Uzak Gök Cismi Keşfedildi',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2015/11/dwarf-planet-eris-artist-impression-1.jpg',
        link: 'https://www.uzaydanhaberler.com/2015/11/12/gunes-sistemindeki-en-uzak-gok-cismi-kesfedildi/',
      },
      {
        id: 6,
        title: 'Titan ın Kum Tepeleri',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2015/12/2218.jpg',
        link: 'https://www.uzaydanhaberler.com/2015/12/04/gezegen-sistem-modeli-4-simulasyonu-kepler-orrery-iv/',
      },
      {
        id: 7,
        title: 'Yeni Ufuklar, Plüto’nun En Yüksek Çözünürlükteki Görüntülerini Yolladı',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2015/12/nh-plutosbadlands_0-1-1024x924-1.jpg',
        link: 'https://www.uzaydanhaberler.com/2015/12/05/new-horizons-plutonun-en-yuksek-cozunurlukteki-goruntulerini-yolladi/',
      },
      {
        id: 8,
        title: 'Kütleçekim Kuvveti İle Patlayan Bir Yıldızı Gözlemek',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2015/12/kuetlecekim-etkisinin-goesterimi.jpg',
        link: 'https://www.uzaydanhaberler.com/2015/12/20/kutlecekim-kuvveti-ile-supernova-gozlemek/',
      },
      {
        id: 9,
        title: 'Voyager Uyduları',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2016/01/Voyager_spacecraft-e1470990071668.jpg',
        link: 'https://www.uzaydanhaberler.com/2016/01/24/voyager-uydulari/',
      },
      {
        id: 10,
        title: 'Auroralar Nasıl Oluşur?',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2016/01/norvec-ten-aurora-manzarasi.jpg',
        link: 'https://www.uzaydanhaberler.com/2016/01/26/auroralar-nasil-olusur-15-saniyede-bilim/',
      },
      {
        id: 11,
        title: 'Çıplak Gözle Fotoğraflardaki Kadar Çok Yıldız Görebilir Miyiz?',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2016/01/IMG_8849-1-1024x683-1.jpg',
        link: 'https://www.uzaydanhaberler.com/2016/01/26/ciplak-gozle-fotograflardaki-kadar-cok-yildiz-gorebilir-miyiz/',
      },
      {
        id: 12,
        title: '90 Günlük Ömür Biçilen Opportunity Aracı Mars’daki 12. Yılını Kutladı',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2016/01/opportunity-maraton-vadisi-nde-kayaclari-kaziyor-nasa.jpg',
        link: 'https://www.uzaydanhaberler.com/2016/01/27/90-gunluk-omur-bicilen-opportunity-araci-marsdaki-12-yilini-kutladi/',
      },
      {
        id: 13,
        title: 'Challenger Faciası – 28 Ocak 1986',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2016/01/AP8601281739.jpg',
        link: 'https://www.uzaydanhaberler.com/2016/01/28/challenger-uzay-mekigi-faciasi-28-ocak-1986/',
      },
      {
        id: 14,
        title: 'Uzay Fotoğraflarında Yıldızları Neden Göremiyoruz?',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2016/02/maxresdefault-5-1.jpg',
        link: 'https://www.uzaydanhaberler.com/2016/02/09/uzay-fotograflarinda-yildizlari-neden-goremiyoruz/',
      },
      {
        id: 15,
        title: 'Curiosity Nasıl Selfie Çekiyor?',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2016/02/nasa-curiosity-rover-self-portrait-1.png',
        link: 'https://www.uzaydanhaberler.com/2016/02/14/curiosity-nasil-selfie-cekiyor/',
      },
      {
        id: 16,
        title: 'Yerçekimsiz Ortamda Kuruyemiş Konservesi Açılırsa Ne Olur?',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2016/02/kapak_görseli-1.jpg',
        link: 'https://www.uzaydanhaberler.com/2016/02/13/yercekimsiz-ortamda-kuruyemis-konservesi-acilirsa-ne-olur/',
      },
      {
        id: 17,
        title: 'Uzayla İlgili Söylenmiş 10 Yalan Bilgi',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2016/10/Asteroit-Kemeri.jpg',
        link: 'https://www.uzaydanhaberler.com/2016/10/08/uzayla-ilgili-soylenmis-10-yalan-bilgi/',
      },
      {
        id: 18,
        title: 'Ne Kadar Büyük Bir Meteor İnsanlığın Sonunu Getirir?',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2016/11/aua-meteorite.jpg',
        link: 'https://www.uzaydanhaberler.com/wp-content/uploads/2016/11/aua-meteorite.jpg',
      },
      {
        id: 19,
        title: 'Hubble Gözlenebilir 2 Trilyon Galaksi Keşfetti',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2016/10/p1639ay-goodss-160930.jpg',
        link: 'https://www.uzaydanhaberler.com/2016/10/13/hubble-gozlenebilir-2-trilyon-galaksi-kesfetti/',
      },
      {
        id: 20,
        title: 'Mars’taki Uçan Kaşık Sadece Tuhaf Bir Kaya',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2016/12/2-floating-spoon-on-mars.jpg',
        link: 'https://www.uzaydanhaberler.com/2016/12/27/marstaki-ucan-kasik-sadece-tuhaf-bir-kaya/',
      },
      {
        id: 21,
        title: '21 Haziran 2020 Halkalı Güneş Tutulması',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2020/06/1280px-Annular_solar_eclipse_2012.jpg',
        link: 'https://www.uzaydanhaberler.com/2020/06/20/21-haziran-2020-halkali-gunes-tutulmasi/',
      },
      {
        id: 22,
        title: 'Rosetta’nın Animasyon Videoları',
        image: 'https://api.allorigins.win/raw?url=https://img.youtube.com/vi/hV-e7CIrO5k/maxresdefault.jpg',
        link: 'https://www.uzaydanhaberler.com/2016/09/30/rosettanin-animasyon-videolari-turkce-altyazili/',
      },
      {
        id: 23,
        title: 'Karanlık Enerji Nedir ve Neden Evren Hızlanarak Genişliyor?',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2017/04/Astronomers-Use-Quasar-Light-to-Trace-the-Expansion-of-the-Universe.jpg',
        link: 'https://www.uzaydanhaberler.com/2017/04/28/karanlik-enerji-nedir-ve-neden-evren-hizlanarak-genisliyor/',
      },
      {
        id: 24,
        title: 'Karanlık Madde Nedir?',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2017/04/nasa-nature-dark-matter-1cbc8438-1068x1031.gif',
        link: 'https://www.uzaydanhaberler.com/2017/04/28/karanlik-madde-nedir/',
      },
      {
        id: 25,
        title: 'Dev, Aşırı Sıcak Yabancı Gezegen WASP-12b Asfalttan Daha Siyah',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2017/09/13-1.jpg',
        link: 'https://www.uzaydanhaberler.com/2017/09/20/dev-asiri-sicak-yabanci-gezegen-wasp-12b-asfalttan-daha-siyah/',
      },
      {
        id: 26,
        title: 'Samanyolu’nun İçinden Gizemli Radyo Sinyalleri Tespit Edildi',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2020/11/C1-SGR_1935_burst_illustration-16.jpg',
        link: 'https://www.uzaydanhaberler.com/2020/11/06/samanyolunun-icinden-gizemli-radyo-sinyalleri-tespit-edildi/',
      },
      {
        id: 27,
        title: 'Kara Delik, Yakınındaki Yıldızı Spagettiye Çevirip Yok Etti',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2020/10/wTrk66aE3QqYnRo6mAoqpS-scaled.jpg',
        link: 'https://www.uzaydanhaberler.com/2020/10/15/kara-delik-yakinindaki-yildizi-spagettiye-cevirip-yok-etti/',
      },
      {
        id: 28,
        title: '21 Aralık 2020 | Jüpiter ve Satürn’ün Büyük Buluşması',
        image: 'https://api.allorigins.win/raw?url=https://www.uzaydanhaberler.com/wp-content/uploads/2020/12/Saturn-Jupiter-Bulusmasi-cover.jpg',
        link: 'https://www.uzaydanhaberler.com/2020/12/20/21-aralik-2020-jupiter-ve-saturnun-buyuk-bulusmasi/',
      },
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
    { id: 'XR', name: 'XR', icon: <Headset size={18} />, gradient: 'from-purple-500 to-pink-500' },
    { id: 'VR', name: 'VR', icon: <Headset size={18} />, gradient: 'from-blue-500 to-cyan-500' },
    { id: 'Mobile', name: 'Mobile', icon: <Smartphone size={18} />, gradient: 'from-green-500 to-teal-500' },
    { id: 'Web', name: 'Web', icon: <Globe size={18} />, gradient: 'from-orange-500 to-red-500' },
    { id: 'GitHub', name: 'GitHub', icon: <Github size={18} />, gradient: 'from-gray-500 to-gray-700' },
    { id: 'Freelance', name: 'Freelance', icon: <Briefcase size={18} />, gradient: 'from-yellow-500 to-orange-500' },
    { id: 'Astronomy', name: 'Astronomy', icon: <TelescopeIcon size={18} />, gradient: 'from-white-500 to-black-500' },
    { id: 'Photography', name: 'Photography', icon: <Camera size={18} />, gradient: 'from-indigo-500 to-purple-500' },
  ];

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["C#", "JavaScript", "Python", "Java", "Visual Basic"]
    },
    {
      category: "XR/VR/AR Development",
      skills: [
        "Unity 3D/2D", "Meta SDK", "Mixed Reality", "SteamVR SDK", 
        "VR Interaction Framework (VRIF)", "ARCore/ARKit", "Hand Tracking", "Physics-based Interactions"
      ]
    },
    {
      category: "Web Development",
      skills: [
        "React.js", "Node.js", "Express.js", "HTML5", "CSS3", 
        "WebGL", "REST APIs", "WebSocket", "HTTPS/SSL"
      ]
    },
    {
      category: "Game Development",
      skills: [
        "Unity Engine", "Cross-platform Development", "Performance Optimization", 
        "Physics Systems", "Object Pooling", "Addressable Assets", "DOTween", "ProBuilder/ProGrids"
      ]
    },
    {
      category: "Mobile Development",
      skills: [
        "Android", "iOS", "Touch Controls", "Mobile UI/UX", "App Store Distribution"
      ]
    },
    {
      category: "AI & Machine Learning",
      skills: [
        "OpenAI API", "KlingAI API", "Google APIs", "Firebase", "Real-time AI Processing"
      ]
    },
    {
      category: "Database & Backend",
      skills: [
        "Firebase", "Google Firebase", "PlayerPrefs", "Scriptable Objects", "JWT Authentication"
      ]
    },
    {
      category: "Analytics & Monetization",
      skills: [
        "Google AdMob", "Amplitude Analytics", "Firebase Analytics", "User Data Collection", "A/B Testing"
      ]
    },
    {
      category: "Development Tools",
      skills: [
        "Git", "Unity Addressables", "Newtonsoft.Json", "Command Pattern", "Localization", "Custom jslib Plugins"
      ]
    },
    {
      category: "Project Management",
      skills: [
        "Team Leadership", "Agile Methodology", "Technical Documentation", "Cross-disciplinary Collaboration", "Academic Partnerships"
      ]
    },
    {
      category: "Educational Technology",
      skills: [
        "Curriculum Development", "Online Instruction", "Progress Tracking", "Project-based Learning", "Mentoring"
      ]
    },
    {
      category: "Industry Experience",
      skills: [
        "Medical Training", "Industrial Training", "Enterprise Solutions", "Commercial Gaming", "Educational Applications"
      ]
    }
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleSkillCategory = (category) => {
    setOpenSkillCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)]"></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl transition-transform duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: '10%',
            top: '20%',
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl transition-transform duration-1000"
          style={{
            transform: `translate(-${mousePosition.x * 0.02}px, -${mousePosition.y * 0.02}px)`,
            right: '10%',
            bottom: '20%',
          }}
        ></div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-6 left-6 z-50">
        <button
          onClick={toggleSidebar}
          className="bg-white/10 backdrop-blur-lg p-3 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar Overlay for Mobile */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Left Sidebar */}
        <div className={`
          fixed lg:relative lg:translate-x-0 lg:block
          w-80 h-full lg:h-auto z-40
          transform transition-all duration-500 ease-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20
        `}>
          <div className="bg-white/8 backdrop-blur-xl border-r border-white/20 h-full">
            <div className="p-8">
              {/* Profile Section */}
              <div className="text-center mb-10">
                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1">
                    <div className="w-full h-full rounded-full bg-slate-900 p-1">
                      <img 
                        src="https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Portfolio-1.jpg" 
                        alt="Yağız Eraslan" 
                        className="w-full h-full object-cover rounded-full" 
                      />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Zap size={14} className="text-white" />
                  </div>
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                  Yağız Eraslan
                </h1>
                <p className="text-gray-300 text-sm mb-4">Unity Developer | XR | Mobile | Web | Astronomer</p>
                <div className="flex justify-center gap-2">
                  <div className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-xs flex items-center gap-1">
                    <Star size={12} className="text-yellow-400" />
                    7+ Years
                  </div>
                  <div className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full text-xs">
                    Available
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  About Me
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Skilled Unity Developer with 7+ years of experience in Mobile and VR/AR development.
                  Proven ability to create and implement game functionality, optimize performance,
                  and deliver high-quality applications for platforms including Meta Store, Play Store and Steam.
                </p>
              </div>

              {/* Skills Section */}
              <div className="mb-4">
                <button
                  className="flex items-center w-full text-left gap-2 text-xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent focus:outline-none"
                  onClick={() => toggleSection('skills')}
                  aria-expanded={openSections.skills}
                >
                  <span className="mr-1">
                    {openSections.skills ? '▼' : '▶'}
                  </span>
                  {openSections.skills ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  Skills
                </button>
                {openSections.skills && (
                  <div className="space-y-6">
                    {skillCategories.map((cat) => (
                      <div key={cat.category}>
                        <button
                          className="flex items-center w-full text-left gap-2 text-base font-semibold mb-2 text-cyan-300 focus:outline-none"
                          onClick={() => toggleSkillCategory(cat.category)}
                          aria-expanded={!!openSkillCategories[cat.category]}
                        >
                          <span className="mr-1">
                            {openSkillCategories[cat.category] ? '▼' : '▶'}
                          </span>
                          {cat.category}
                        </button>
                        {openSkillCategories[cat.category] && (
                          <div className="flex flex-wrap gap-2 pl-6">
                            {cat.skills.map((skill) => (
                              <span
                                key={skill}
                                className="bg-white/10 border border-white/20 px-3 py-1 rounded-lg text-xs font-medium hover:bg-white/20 transition-all duration-300 cursor-default backdrop-blur-sm"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Experience Section */}
              <div className="mb-4">
                <button
                  className="flex items-center w-full text-left gap-2 text-xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent focus:outline-none"
                  onClick={() => toggleSection('experience')}
                  aria-expanded={openSections.experience}
                >
                  <span className="mr-1">
                    {openSections.experience ? '▼' : '▶'}
                  </span>
                  {openSections.experience ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  Experience
                </button>
                {openSections.experience && (
                  <div className="space-y-4">
                    {[
                      { role: "Virtual Reality Specialist - DCU Supplier", company: "Dublin City University", period: "2025, Jul - Present", current: true },
                      { role: "Freelance Software Developer", company: "UpWork", period: "2024, Jun - Present", current: true },
                      { role: "Community Mentor", company: "XR Bootcamp", period: "2024, Oct - 2024, Dec" },
                      { role: "Unity Developer", company: "IRONHEAD Games", period: "2024, Aug - 2024, Sep" },
                      { role: "Virtual Reality Team Leader", company: "Global Future Designs and Solutions Inc.", period: "2023 Sep, - 2024, Jul" },
                      { role: "Virtual Reality Developer", company: "Global Future Designs and Solutions Inc.", period: "2021, Feb - 2023, Sep" },
                      { role: "Coding Instructor", company: "PRONOVA Digital Imaging Technologies", period: "2019, Jun - 2020, Mar" },
                      { role: "STEM Instructor", company: "PRONOVA Digital Imaging Technologies", period: "2017, Apr - 2019, Dec" },
                      { role: "Astronomical Observer", company: "Ankara University Kreiken Observatory", period: "2014, Feb - 2016, Oct" },
                      { role: "Web Editor", company: "Ankara University Kreiken Observatory", period: "2015, Mar - 2016, Jul" },
                    ].map((exp, index) => (
                      <div key={index} className={`p-3 rounded-lg border ${exp.current ? 'bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/30' : 'bg-white/5 border-white/10'} backdrop-blur-sm`}>
                        <p className="font-semibold text-sm">{exp.role}</p>
                        <p className="text-gray-300 text-xs">{exp.company}</p>
                        <p className="text-gray-400 text-xs">{exp.period}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Education Section */}
              <div className="mb-4">
                <button
                  className="flex items-center w-full text-left gap-2 text-xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent focus:outline-none"
                  onClick={() => toggleSection('education')}
                  aria-expanded={openSections.education}
                >
                  <span className="mr-1">
                    {openSections.education ? '▼' : '▶'}
                  </span>
                  {openSections.education ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  Education
                </button>
                {openSections.education && (
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                    <p className="font-semibold text-sm">Bachelor of Sciences</p>
                    <p className="text-gray-300 text-xs">Astronomy and Space Sciences</p>
                    <p className="text-gray-400 text-xs">Ankara University, 2012-2016</p>
                  </div>
                )}
              </div>

              {/* Achievements Section */}
              <div className="mb-4">
                <button
                  className="flex items-center w-full text-left gap-2 text-xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent focus:outline-none"
                  onClick={() => toggleSection('achievements')}
                  aria-expanded={openSections.achievements}
                >
                  <span className="mr-1">
                    {openSections.achievements ? '▼' : '▶'}
                  </span>
                  {openSections.achievements ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  Achievements
                </button>
                {openSections.achievements && (
                  <div className="space-y-2">
                    {[
                      "XR AI Hack Istanbul 2024 - 1st Place Winner (Meta-sponsored)",
                      "XR Akademi Hackathon 2024 - 3rd Place Winner (Meta-funded)"
                    ].map((cert, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                        <Award size={16} className="text-yellow-400 flex-shrink-0" />
                        <span className="text-xs text-gray-300">{cert}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Hardware Section */}
              <div className="mb-4">
                <button
                  className="flex items-center w-full text-left gap-2 text-xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent focus:outline-none"
                  onClick={() => toggleSection('hardware')}
                  aria-expanded={openSections.hardware}
                >
                  <span className="mr-1">
                    {openSections.hardware ? '▼' : '▶'}
                  </span>
                  {openSections.hardware ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  Hardware
                </button>
                {openSections.hardware && (
                  <div className="space-y-2">
                    {[
                      "Meta Quest 3 & 3S",
                      "Meta Quest 2 & Pro",
                      "Pico 4",
                      "HTC Vive Pro",
                      "HTC Vive Cosmos"
                    ].map((hardware, index) => (
                      <div key={index} className="flex items-center gap-3 text-xs text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></div>
                        <span>{hardware}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Section */}
              <div className="mb-4">
                <button
                  className="flex items-center w-full text-left gap-2 text-xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent focus:outline-none"
                  onClick={() => toggleSection('contact')}
                  aria-expanded={openSections.contact}
                >
                  <span className="mr-1">
                    {openSections.contact ? '▼' : '▶'}
                  </span>
                  {openSections.contact ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  Contact
                </button>
                {openSections.contact && (
                  <div className="space-y-3">
                    <a 
                      href="mailto:yagizeraslan@gmail.com" 
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group"
                    >
                      <Mail size={16} className="text-cyan-400" />
                      <span className="text-xs text-gray-300 group-hover:text-white transition-colors">yagizeraslan@gmail.com</span>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/yagizeraslan" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group"
                    >
                      <Linkedin size={16} className="text-blue-400" />
                      <span className="text-xs text-gray-300 group-hover:text-white transition-colors">linkedin.com/in/yagizeraslan</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 flex flex-col lg:ml-0 ml-0 relative">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-transparent backdrop-blur-sm border-b border-white/20 p-8 mt-20 lg:mt-0">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="text-cyan-400" size={32} />
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                  Digital Experiences
                </h1>
              </div>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                Crafting immersive XR worlds, mobile experiences, and cutting-edge web applications 
                that push the boundaries of interactive technology.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="bg-white/5 backdrop-blur-xl border-b border-white/10 p-6 sticky top-0 z-30">
            <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`group relative px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-3 whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r ' + category.gradient + ' text-white shadow-lg scale-105'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
                  }`}
                >
                  <div className={`p-1 rounded-lg ${activeCategory === category.id ? 'bg-white/20' : 'bg-white/10'}`}>
                    {category.icon}
                  </div>
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                  {activeCategory === category.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="flex-1 p-6 lg:p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                {categories.find(c => c.id === activeCategory)?.name}
              </h2>
              <p className="text-gray-400">
                {projects[activeCategory].length} {projects[activeCategory].length === 1 ? 'project' : 'projects'} showcasing expertise in {activeCategory.toLowerCase()} development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
              {projects[activeCategory].map((project, index) => {
                // Minimalist Astronomy Card
                if (activeCategory === 'Astronomy') {
                  return (
                    <div
                      key={project.id}
                      className="group relative bg-white/5 backdrop-blur-xl rounded-xl overflow-hidden border border-white/20 hover:border-cyan-400/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/40 flex flex-col items-center"
                      style={{
                        width: '100%',
                        maxWidth: '320px',
                        margin: '0 auto',
                        animationDelay: `${index * 100}ms`,
                        animation: 'fadeInUp 0.6s ease-out forwards',
                      }}
                    >
                      <div className="relative w-full" style={{ aspectRatio: '4/3', background: '#222' }}>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          style={{ aspectRatio: '4/3' }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/api/placeholder/480/320';
                          }}
                        />
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-2 right-2 bg-white/20 backdrop-blur-lg p-2 rounded-full opacity-80 hover:bg-white/30 hover:scale-110 transition-all duration-300"
                          >
                            <ExternalLink size={14} className="text-white" />
                          </a>
                        )}
                      </div>
                      <div className="p-3 w-full flex flex-col items-center">
                        <h3 className="text-base font-semibold text-white text-center line-clamp-2 group-hover:text-cyan-300 transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  );
                }
                // Default Card for other categories
                return (
                  <div 
                    key={project.id} 
                    className="group relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 hover:border-cyan-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/40"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: 'fadeInUp 0.6s ease-out forwards',
                    }}
                  >
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star size={12} />
                        Featured
                      </div>
                    )}

                    {/* Image Container */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/api/placeholder/480/320';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {/* Link Button */}
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="absolute top-4 right-4 bg-white/20 backdrop-blur-lg p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 hover:scale-110"
                        >
                          <ExternalLink size={16} className="text-white" />
                        </a>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span 
                            key={tag} 
                            className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-200 px-3 py-1 rounded-lg text-xs font-medium backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="bg-white/10 border border-white/20 text-gray-300 px-3 py-1 rounded-lg text-xs font-medium">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
                    <div className="absolute inset-0 shadow-[0_0_50px_rgba(34,211,238,0.4)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        
        .scrollbar-track-transparent::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scrollbar-thumb-white\\/20::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
        }
        
        .scrollbar-thumb-white\\/20::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
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

export default ModernPortfolio;