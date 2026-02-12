import { useState, useEffect, useRef, useCallback } from "react";
import { Mail, Linkedin, ExternalLink, Smartphone, Headset, Globe, Briefcase, Award, Camera, Menu, X, Star, Zap, Rocket, ChevronDown, ChevronRight, Github, ArrowUpRight, Play, MapPin, GraduationCap, Building2, ArrowDown } from 'lucide-react';

// Hook for tracking mouse position as percentage
function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
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
  return mousePosition;
}

// Hook for tracking scroll progress (0-100)
function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return progress;
}

// Particle Network Background Component
function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5; // 0.5-2.5px
        this.speedX = (Math.random() - 0.5) * 0.5; // ±0.5px/frame
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1; // 0.1-0.6
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 38, 38, ${this.opacity})`;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 15000));
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) { // 100px connection distance
            ctx.beginPath();
            ctx.strokeStyle = `rgba(220, 38, 38, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    init();
    animate();

    const handleResize = () => {
      resizeCanvas();
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1 }}
    />
  );
}

// Scroll Progress Bar Component
function ScrollProgressBar({ progress }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: `${progress}%`,
      height: '4px',
      background: 'linear-gradient(90deg, #ef4444, #ff0040)',
      zIndex: 200,
      transition: 'width 0.1s ease-out',
    }} />
  );
}

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useReveal(0.3);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [visible, end, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

function Section({ children, className = '', id = '' }) {
  const [ref, visible] = useReveal(0.08);
  return (
    <section ref={ref} id={id} className={className}
      style={{ transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
        opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)' }}>
      {children}
    </section>
  );
}

function GridBG() {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.3 }}>
      <div style={{
        width: '100%',
        height: '100%',
        backgroundImage: `
          linear-gradient(rgba(220, 38, 38, 0.18) 1px, transparent 1px),
          linear-gradient(90deg, rgba(220, 38, 38, 0.18) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }} />
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #050505;
  --bg-card: rgba(255,255,255,0.025);
  --bg-card-hover: rgba(255,255,255,0.05);
  --border: rgba(255,255,255,0.06);
  --border-hover: rgba(255,255,255,0.12);
  --text: #e8e8e8;
  --text-muted: #8a8a8a;
  --text-dim: #555;
  --accent: #ef4444;
  --accent-bright: #ff3333;
  --accent-2: #ff8a80;
  --accent-glow: rgba(239,68,68,0.12);
  --font: 'Outfit', system-ui, sans-serif;
  --mono: 'JetBrains Mono', monospace;
  --radius: 12px;
  --radius-sm: 8px;
  --radius-lg: 20px;
}

body { font-family: var(--font); background: var(--bg); color: var(--text); -webkit-font-smoothing: antialiased; overflow-x: hidden; }

.orb { position: absolute; border-radius: 50%; filter: blur(130px); will-change: transform; transition: transform 0.3s ease-out; }
.orb-1 { width: 650px; height: 650px; background: rgba(239,68,68,0.07); top: -12%; left: -12%; }
.orb-2 { width: 500px; height: 500px; background: rgba(220,38,38,0.05); bottom: 15%; right: -10%; }
.orb-3 { width: 400px; height: 400px; background: rgba(255,138,128,0.04); top: 45%; left: 25%; }

.nav-bar { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: rgba(5,5,5,0.8); backdrop-filter: blur(24px) saturate(1.6); border-bottom: 1px solid var(--border); }
.nav-inner { max-width: 1280px; margin: 0 auto; padding: 0 24px; height: 64px; display: flex; align-items: center; justify-content: space-between; }
.nav-logo { font-weight: 800; font-size: 22px; letter-spacing: -1px; background: none; border: none; color: var(--text); cursor: pointer; font-family: var(--font); }
.logo-accent { color: var(--accent); }
.nav-links-desktop { display: flex; gap: 4px; }
.nav-link { position: relative; background: none; border: none; color: #a3a3a3; font-family: var(--font); font-size: 14px; font-weight: 500; padding: 8px 16px; border-radius: var(--radius-sm); cursor: pointer; transition: color 0.3s ease, transform 0.3s ease; }
.nav-link::after { content: ''; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 0; height: 2px; background: linear-gradient(90deg, #dc2626, #ff0040); transition: width 0.3s ease; }
.nav-link:hover { color: #ffffff; transform: scale(1.05); }
.nav-link:hover::after { width: 75%; }
.nav-mobile-toggle { display: none; background: none; border: 1px solid var(--border); color: var(--text); padding: 8px; border-radius: var(--radius-sm); cursor: pointer; }
.nav-mobile-dropdown { display: none; flex-direction: column; padding: 8px 24px 16px; border-top: 1px solid var(--border); }
.nav-mobile-link { background: none; border: none; color: var(--text-muted); font-family: var(--font); font-size: 15px; padding: 12px 0; text-align: left; cursor: pointer; border-bottom: 1px solid var(--border); }
.nav-mobile-link:hover { color: var(--accent); }
@media (max-width: 768px) { .nav-links-desktop { display: none; } .nav-mobile-toggle { display: block; } .nav-mobile-dropdown { display: flex; } }

.hero-section { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 120px 24px 80px; position: relative; text-align: center; }
.hero-content { max-width: 860px; width: 100%; }
.hero-visible { opacity: 1 !important; transform: translateY(0) !important; }
.hero-hidden { opacity: 0; transform: translateY(30px); }
.hero-badge, .hero-title, .hero-subtitle, .hero-stats, .hero-actions, .hero-scroll-indicator { transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1); }
.hero-badge { display: inline-flex; align-items: center; gap: 10px; padding: 8px 20px; border-radius: 100px; background: rgba(239,68,68,0.06); border: 1px solid rgba(239,68,68,0.18); color: var(--accent-2); font-size: 13px; font-weight: 500; margin-bottom: 32px; }
.badge-dot { width: 7px; height: 7px; border-radius: 50%; background: #ef4444; box-shadow: 0 0 10px #ef4444, 0 0 4px #ef4444; animation: pulse-dot 2s ease-in-out infinite; }
@keyframes pulse-dot { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.4; transform:scale(0.7); } }
.hero-title { font-size: clamp(36px,7vw,72px); font-weight: 800; line-height: 1.05; letter-spacing: -0.03em; margin-bottom: 28px; }
.hero-name-line { display: block; background: linear-gradient(135deg, #ffffff, #999); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.hero-role-line { display: block; font-size: clamp(24px,4.5vw,48px); font-weight: 600; color: var(--text-muted); -webkit-text-fill-color: var(--text-muted); }
.hero-role-accent { background: linear-gradient(135deg, #ff3333, #ff8a80); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.hero-subtitle { font-size: clamp(15px,2vw,18px); line-height: 1.7; color: var(--text-muted); max-width: 640px; margin: 0 auto 48px; }
.hero-stats { display: flex; justify-content: center; align-items: center; gap: 24px; flex-wrap: wrap; margin-bottom: 48px; }
.stat-item { text-align: center; }
.stat-number { display: block; font-size: 32px; font-weight: 700; background: linear-gradient(135deg, #fff 20%, var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.stat-label { font-size: 12px; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.1em; font-weight: 500; }
.stat-divider { width: 1px; height: 40px; background: rgba(239,68,68,0.15); }
@media (max-width: 640px) { .stat-divider { display: none; } .hero-stats { gap: 16px; } .stat-item { flex: 0 0 45%; } }
.hero-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
.btn-primary { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; border-radius: var(--radius); background: linear-gradient(135deg, #ef4444, #dc2626); color: #fff; font-weight: 600; font-size: 15px; border: none; cursor: pointer; font-family: var(--font); transition: all 0.3s; box-shadow: 0 0 30px rgba(239,68,68,0.2), 0 4px 20px rgba(0,0,0,0.4); }
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 0 50px rgba(239,68,68,0.35), 0 8px 30px rgba(0,0,0,0.5); }
.btn-secondary { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; border-radius: var(--radius); background: transparent; color: var(--text); font-weight: 600; font-size: 15px; border: 1px solid var(--border-hover); cursor: pointer; font-family: var(--font); transition: all 0.3s; text-decoration: none; }
.btn-secondary:hover { background: rgba(239,68,68,0.06); border-color: var(--accent); color: var(--accent); }
.hero-scroll-indicator { position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); }
.scroll-line { width: 1px; height: 48px; background: linear-gradient(to bottom, var(--accent), transparent); animation: scroll-pulse 2s ease-in-out infinite; }
@keyframes scroll-pulse { 0%,100% { opacity:0.3; height:48px; } 50% { opacity:1; height:64px; } }

.section-container { padding: 120px 24px; position: relative; z-index: 1; }
.section-dark { background: rgba(255,255,255,0.008); }
.section-inner { max-width: 1200px; margin: 0 auto; }
.section-header { text-align: center; margin-bottom: 64px; }
.section-tag { display: inline-block; font-size: 12px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent); margin-bottom: 16px; padding: 6px 16px; border-radius: 100px; background: rgba(239,68,68,0.06); border: 1px solid rgba(239,68,68,0.12); }
.section-title { font-size: clamp(28px,4vw,44px); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 16px; background: linear-gradient(135deg, #fff 30%, #666); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.section-desc { font-size: 16px; color: var(--text-muted); max-width: 520px; margin: 0 auto; line-height: 1.6; }

.featured-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%,460px),1fr)); gap: 32px; }
.featured-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; transition: all 0.4s cubic-bezier(0.16,1,0.3,1); animation: fadeUp 0.6s ease-out both; }
.featured-card:hover { border-color: rgba(239,68,68,0.25); transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(239,68,68,0.06); }
.featured-image-wrap { position: relative; aspect-ratio: 16/10; overflow: hidden; }
.featured-image { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; }
.featured-card:hover .featured-image { transform: scale(1.05); }
.featured-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(5,5,5,0.85), transparent 60%); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s; }
.featured-card:hover .featured-overlay { opacity: 1; }
.featured-play-btn { width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, #ef4444, #dc2626); display: flex; align-items: center; justify-content: center; transition: transform 0.3s; box-shadow: 0 0 30px rgba(239,68,68,0.5); text-decoration: none; color: white; }
.featured-play-btn:hover { transform: scale(1.1); }
.featured-award-badge { position: absolute; top: 16px; left: 16px; z-index: 2; display: flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 100px; background: linear-gradient(135deg, #f59e0b, #ef4444); color: #000; font-size: 12px; font-weight: 700; }
.featured-body { padding: 28px; }
.featured-title { font-size: 22px; font-weight: 700; margin-bottom: 4px; color: #fff; }
.featured-subtitle { font-size: 14px; color: var(--accent-2); font-weight: 500; margin-bottom: 12px; }
.featured-desc { font-size: 14px; color: var(--text-muted); line-height: 1.65; margin-bottom: 20px; }

.tag-row { display: flex; flex-wrap: wrap; gap: 6px; }
.tag { padding: 5px 12px; border-radius: 6px; font-size: 12px; font-weight: 500; background: rgba(239,68,68,0.06); border: 1px solid rgba(239,68,68,0.12); color: var(--accent-2); }
.tag-sm { padding: 4px 10px; font-size: 11px; }
.tag-more { background: rgba(255,255,255,0.03); border-color: var(--border); color: var(--text-dim); }

.filter-bar { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; margin-bottom: 48px; }
.filter-btn { display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; border-radius: 100px; font-size: 13px; font-weight: 500; font-family: var(--font); background: var(--bg-card); border: 1px solid var(--border); color: var(--text-muted); cursor: pointer; transition: all 0.25s; }
.filter-btn:hover { border-color: var(--border-hover); color: var(--text); background: var(--bg-card-hover); }
.filter-active { background: rgba(239,68,68,0.08) !important; border-color: rgba(239,68,68,0.3) !important; color: var(--accent) !important; }
.filter-count { font-size: 11px; padding: 2px 7px; border-radius: 100px; background: rgba(255,255,255,0.05); color: var(--text-dim); font-family: var(--mono); }
.filter-active .filter-count { background: rgba(239,68,68,0.12); color: var(--accent); }

.projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%,320px),1fr)); gap: 24px; }
.project-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; transition: all 0.35s cubic-bezier(0.16,1,0.3,1); animation: fadeUp 0.5s ease-out both; }
.project-card:hover { border-color: rgba(239,68,68,0.2); transform: translateY(-3px); box-shadow: 0 16px 48px rgba(0,0,0,0.4), 0 0 20px rgba(239,68,68,0.04); }
.project-image-wrap { position: relative; aspect-ratio: 16/10; overflow: hidden; background: #0a0a0a; }
.project-image { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.project-card:hover .project-image { transform: scale(1.06); }
.project-image-overlay { position: absolute; inset: 0; background: linear-gradient(to top, var(--bg), transparent 50%); opacity: 0.6; }
.project-ext-link { position: absolute; top: 12px; right: 12px; width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.12); display: flex; align-items: center; justify-content: center; color: #fff; opacity: 0; transition: all 0.3s; text-decoration: none; }
.project-card:hover .project-ext-link { opacity: 1; }
.project-ext-link:hover { background: var(--accent); color: #fff; border-color: var(--accent); box-shadow: 0 0 15px rgba(239,68,68,0.4); }
.project-featured-badge { position: absolute; top: 12px; left: 12px; display: flex; align-items: center; gap: 4px; padding: 4px 10px; border-radius: 100px; background: rgba(245,158,11,0.9); color: #000; font-size: 10px; font-weight: 700; text-transform: uppercase; }
.project-body { padding: 20px; }
.project-title { font-size: 16px; font-weight: 600; margin-bottom: 8px; color: #fff; }
.project-desc { font-size: 13px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }

.skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%,340px),1fr)); gap: 24px; }
.skill-group { padding: 28px; border-radius: var(--radius); background: var(--bg-card); border: 1px solid var(--border); transition: all 0.3s; animation: fadeUp 0.5s ease-out both; }
.skill-group:hover { border-color: rgba(239,68,68,0.15); }
.skill-group-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent); margin-bottom: 16px; }
.skill-chips { display: flex; flex-wrap: wrap; gap: 8px; }
.skill-chip { padding: 6px 14px; border-radius: 6px; font-size: 13px; background: rgba(255,255,255,0.03); border: 1px solid var(--border); color: var(--text); transition: all 0.2s; }
.skill-chip:hover { background: rgba(239,68,68,0.08); border-color: rgba(239,68,68,0.2); color: var(--accent-2); }

.timeline { max-width: 700px; margin: 0 auto 48px; display: flex; flex-direction: column; }
.timeline-item { display: flex; gap: 20px; animation: fadeUp 0.5s ease-out both; }
.timeline-dot-col { display: flex; flex-direction: column; align-items: center; padding-top: 20px; min-width: 20px; }
.timeline-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; background: rgba(255,255,255,0.1); border: 2px solid var(--bg); box-shadow: 0 0 0 2px rgba(255,255,255,0.08); }
.dot-active { background: var(--accent); box-shadow: 0 0 0 2px rgba(239,68,68,0.25), 0 0 14px rgba(239,68,68,0.4); }
.timeline-line { width: 1px; flex: 1; background: rgba(255,255,255,0.06); min-height: 20px; }
.timeline-card { flex: 1; padding: 16px 20px; border-radius: var(--radius-sm); background: var(--bg-card); border: 1px solid var(--border); margin-bottom: 12px; transition: all 0.2s; }
.timeline-card:hover { border-color: var(--border-hover); }
.timeline-current { border-color: rgba(239,68,68,0.12); background: rgba(239,68,68,0.03); }
.timeline-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; flex-wrap: wrap; }
.timeline-role { font-size: 14px; font-weight: 600; color: #fff; }
.timeline-company { font-size: 13px; color: var(--text-muted); }
.timeline-period { font-size: 12px; color: var(--text-dim); font-family: var(--mono); white-space: nowrap; }
.current-badge { display: inline-block; margin-top: 8px; padding: 3px 10px; border-radius: 100px; font-size: 11px; font-weight: 600; background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.2); color: var(--accent); }

.education-card { max-width: 700px; margin: 0 auto; display: flex; align-items: center; gap: 20px; padding: 24px 28px; border-radius: var(--radius); background: rgba(239,68,68,0.03); border: 1px solid rgba(239,68,68,0.08); }
.edu-icon { color: var(--accent); flex-shrink: 0; }
.edu-title { font-size: 15px; font-weight: 600; color: #fff; margin-bottom: 4px; }
.edu-sub { font-size: 13px; color: var(--text-muted); }

.contact-section { border-top: 1px solid var(--border); }
.contact-inner { text-align: center; }
.contact-links { display: flex; flex-direction: column; gap: 12px; max-width: 480px; margin: 0 auto; }
.contact-card { display: flex; align-items: center; gap: 16px; padding: 20px 24px; border-radius: var(--radius); background: var(--bg-card); border: 1px solid var(--border); text-decoration: none; color: var(--text); transition: all 0.3s; }
.contact-card:hover { border-color: rgba(239,68,68,0.3); background: rgba(239,68,68,0.04); transform: translateX(4px); }
.contact-card svg:first-child { color: var(--accent); flex-shrink: 0; }
.contact-card div { flex: 1; text-align: left; }
.contact-card-label { display: block; font-size: 11px; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; }
.contact-card-value { display: block; font-size: 14px; font-weight: 500; margin-top: 2px; }
.contact-arrow { color: var(--text-dim); transition: all 0.3s; }
.contact-card:hover .contact-arrow { color: var(--accent); transform: translate(2px, -2px); }

.site-footer { text-align: center; padding: 32px 24px; font-size: 13px; color: var(--text-dim); border-top: 1px solid var(--border); display: flex; justify-content: center; gap: 8px; }
.footer-sep { opacity: 0.3; }

@keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(239,68,68,0.15); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: rgba(239,68,68,0.3); }

@media (max-width: 768px) {
  .section-container { padding: 80px 16px !important; }
  .section-header { margin-bottom: 40px !important; }
  .hero-section { padding: 100px 20px 60px !important; }
  .education-card { flex-direction: column; text-align: center; gap: 12px; padding: 20px; }
  .filter-bar { gap: 6px; }
  .filter-btn { padding: 8px 14px; font-size: 12px; }
}
`;

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('XR');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);

  // New effects hooks
  const mousePosition = useMousePosition();
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    setTimeout(() => setHeroLoaded(true), 100);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); };

  const projects = {
    XR: [
      { id: 1, title: 'Bounce Beat', subtitle: 'XR Hack 2024 — 1st Place', description: 'A Mixed Reality music creation app where users create soundscapes by placing blocks in their environment that interact with a bouncing ball.', image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Bounce_Beat.webp', link: 'https://youtu.be/pRoLIPdcv0U', tags: ['Unity', 'C#', 'Meta SDK', 'URP', 'Quest 3'], featured: true, award: '1st Place — Meta-sponsored' },
      { id: 2, title: 'Gates of Memory', subtitle: 'XR Hack 2024 — 3rd Place', description: 'Mixed Reality historical exploration with interactive portals to different time periods and 3D puzzle mechanics.', image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Gates_Of_Memory.webp', link: 'https://youtube.com/shorts/kAb0phNKmjU', tags: ['Unity', 'C#', 'Meta SDK', 'Quest 3'], featured: true, award: '3rd Place — Meta-funded' },
    ],
    VR: [
      { id: 1, title: 'Wizard of OZ VR', description: 'Immersive co-location VR with multi-user sync and physical platform motion.', image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Wizard_Of_OZ.webp', tags: ['Unity', 'Photon Fusion', 'Meta SDK'] },
      { id: 2, title: 'VR Dinosaur Museum', description: 'Educational VR with detailed dinosaur exhibits and hand-tracked interactions.', image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/VR_Dinosaur.webp', tags: ['Unity', 'Meta SDK', 'Hand Tracking'] },
      { id: 3, title: 'Horizon of Horus', description: 'VR action-tower defense in Ancient Egypt. Published on Steam.', image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Horizon_of_Horus.webp', link: 'https://www.youtube.com/watch?v=t7MiJnIG2Ns', tags: ['Unity', 'SteamVR'] },
      { id: 4, title: 'Egg VR', description: 'Multiplayer social VR in oversized kitchen environments.', image: 'https://cdn.sidequestvr.com/file/583228/04_eggvrlogo.png?size=512', link: 'https://www.meta.com/experiences/egg-vr/7275543385800661/', tags: ['Unity', 'Meta SDK'] },
      { id: 5, title: 'Blind Fastener Training', description: 'VR training for Turkish Aerospace. 40% effectiveness increase.', image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Blind_Fastener.webp', link: 'https://youtu.be/J9FennyZy2U', tags: ['Unity', 'SteamVR', 'VRIF'] },
      { id: 6, title: 'Fire Intervention Training', description: 'VR fire safety with 6-language support. 40% retention boost.', image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Fire_Intervention_Training.webp', link: 'https://youtu.be/bybM1otTefU', tags: ['Unity', 'SteamVR', 'Firebase'] },
      { id: 7, title: 'Otokar Showroom', description: 'HDRP military vehicle showcase with customizable camouflage.', image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Otokar_Showroom.webp', link: 'https://youtu.be/X8JfgrqgC1c', tags: ['Unity HDRP', 'SteamVR'] },
      { id: 8, title: 'Forklift Training', description: 'VR forklift operation with realistic physics. 35% improvement.', image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Forklift_Driving_Training.webp', link: 'https://youtu.be/bwM_x6Csd7s', tags: ['Unity', 'SteamVR', 'Firebase'] },
    ],
    Mobile: [
      { id: 1, title: 'Eclipsed Echo', description: '2D card-matching with various grid layouts.', image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Card_Matching_Game.webp', link: 'https://youtu.be/VQnK9CIzq_U', tags: ['Unity', 'C#', 'Android/iOS'] },
      { id: 2, title: 'Hidden Objects', description: 'Hidden-object puzzle with dynamic loading.', image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Hidden_Objects.webp', link: 'https://youtu.be/iv8MLJ20FXA', tags: ['Unity', 'Firebase', 'AdMob'] },
      { id: 3, title: 'Block Puzzle', description: 'Block Blast clone with strategic mechanics.', image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Block_Blast.webp', link: 'https://youtu.be/r-Te_ol74F4', tags: ['Unity', 'AdMob', 'Firebase'] },
      { id: 4, title: 'Altered Ball', description: 'Physics-based ball control with dual joysticks.', image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Altered_Ball.webp', link: 'https://youtu.be/V_s6SWGwY90', tags: ['Unity', 'ProBuilder'] },
    ],
    Web: [
      { id: 1, title: 'AI Photo Booth', description: 'Real-time AI photo booth for ArtXSpace Miami.', image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/AI_PhotoBooth.webp', tags: ['React', 'Node.js', 'KlingAI'] },
      { id: 2, title: 'YouTube Analyzer', description: 'Analytics tool for YouTube channel metrics.', image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/YouTube_Analyzer.webp', link: 'https://youtube-analyzer-app.netlify.app/', tags: ['Unity', 'WebGL', 'YouTube API'] },
      { id: 3, title: 'Memes Soundboard', description: 'Interactive WebGL meme sound effects app.', image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Memes_Soundboard.webp', link: 'https://memes-soundboard.netlify.app/', tags: ['Unity', 'WebGL'] },
    ],
    GitHub: [
      { id: 1, title: 'DeepSeek-Unity', description: 'Modular Unity integration for DeepSeek LLMs.', image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/DeepSeek_AI_API.jpg', link: 'https://github.com/yagizeraslan/DeepSeek-Unity', tags: ['Unity', 'C#', 'AI', 'Open Source'] },
      { id: 2, title: 'Claude-Unity', description: 'Modular Unity integration for Claude LLMs.', image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Claude_AI_API.jpg', link: 'https://github.com/yagizeraslan/Claude-Unity', tags: ['Unity', 'C#', 'AI', 'Open Source'] },
      { id: 3, title: 'Qwen-Unity', description: 'Modular Unity integration for Qwen LLMs.', image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Qwen_AI_API.jpg', link: 'https://github.com/yagizeraslan/Qwen-Unity', tags: ['Unity', 'C#', 'AI', 'Open Source'] },
      { id: 4, title: 'Grok-Unity', description: 'Modular Unity integration for Grok LLMs.', image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Grok_AI_API.jpg', link: 'https://github.com/yagizeraslan/Grok-Unity', tags: ['Unity', 'C#', 'AI', 'Open Source'] },
      { id: 5, title: 'Gemini-Unity', description: 'Modular Unity integration for Gemini LLMs.', image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Project_Thumbnails/Gemini_AI_API.jpg', link: 'https://github.com/yagizeraslan/Gemini-Unity', tags: ['Unity', 'C#', 'AI', 'Open Source'] },
    ],
    Freelance: [
      { id: 1, title: 'Unity C# Lessons', description: 'Comprehensive online training.', image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Freelancer_Services/Unity_C%23_Online_Learning.jpg', tags: ['Unity', 'C#', 'Teaching'] },
      { id: 2, title: 'Mobile/Web Dev', description: 'Full-cycle game development.', image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Freelancer_Services/Unity_Mobile_Game_Development.jpg', tags: ['Unity', 'Cross-Platform'] },
      { id: 3, title: 'XR Development', description: 'Immersive XR applications.', image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Freelancer_Services/Unity_AR_VR_MR_App_Development.jpg', tags: ['Unity', 'XR', 'Quest'] },
      { id: 4, title: 'Technical Consulting', description: 'Expert Unity guidance.', image: 'https://raw.githubusercontent.com/yagizeraslan/MyPortfolio/refs/heads/main/Freelancer_Services/Unity_Technical_Consultancy.jpg', tags: ['Architecture', 'Optimization'] },
    ],
  };

  const categories = [
    { id: 'XR', name: 'Mixed Reality', icon: <Headset size={16} /> },
    { id: 'VR', name: 'Virtual Reality', icon: <Headset size={16} /> },
    { id: 'Mobile', name: 'Mobile', icon: <Smartphone size={16} /> },
    { id: 'Web', name: 'Web', icon: <Globe size={16} /> },
    { id: 'GitHub', name: 'Open Source', icon: <Github size={16} /> },
    { id: 'Freelance', name: 'Freelance', icon: <Briefcase size={16} /> },
  ];

  const experience = [
    { role: "Virtual Reality Specialist", company: "Dublin City University", period: "Jul 2025 — Present", current: true },
    { role: "Freelance Software Developer", company: "UpWork", period: "Jun 2024 — Present", current: true },
    { role: "Community Mentor", company: "XR Bootcamp", period: "Oct — Dec 2024" },
    { role: "Unity Developer", company: "IRONHEAD Games", period: "Aug — Sep 2024" },
    { role: "VR Team Leader", company: "Global Future Designs", period: "Sep 2023 — Jul 2024" },
    { role: "VR Developer", company: "Global Future Designs", period: "Feb 2021 — Sep 2023" },
    { role: "Coding Instructor", company: "PRONOVA Digital", period: "Jun 2019 — Mar 2020" },
    { role: "STEM Instructor", company: "PRONOVA Digital", period: "Apr 2017 — Dec 2019" },
    { role: "Astronomical Observer", company: "Ankara University Observatory", period: "Feb 2014 — Oct 2016" },
  ];

  const skillGroups = [
    { label: "Languages", skills: ["C#", "JavaScript", "Python", "Java"] },
    { label: "XR / Immersive", skills: ["Unity 3D", "Meta SDK", "SteamVR", "VRIF", "ARCore", "Hand Tracking"] },
    { label: "Web", skills: ["React.js", "Node.js", "Express.js", "WebGL", "WebSocket", "REST APIs"] },
    { label: "AI & Backend", skills: ["OpenAI API", "KlingAI", "Firebase", "JWT", "Google APIs"] },
    { label: "Tools", skills: ["Git", "Addressables", "DOTween", "Localization", "ProBuilder", "Photon"] },
    { label: "Platforms", skills: ["Meta Quest 3/3S", "Quest 2/Pro", "Pico 4", "HTC Vive Pro", "HTC Vive Cosmos"] },
  ];

  const navItems = [ { label: 'Work', id: 'featured' }, { label: 'Projects', id: 'projects' }, { label: 'Skills', id: 'skills' }, { label: 'Journey', id: 'experience' }, { label: 'Contact', id: 'contact' } ];

  return (
    <div style={{ background: '#050505', color: '#e8e8e8', minHeight: '100vh', fontFamily: "'Outfit', system-ui, sans-serif", overflowX: 'hidden', position: 'relative', WebkitFontSmoothing: 'antialiased' }}>
      <style>{CSS}</style>

      {/* Scroll Progress Bar */}
      <ScrollProgressBar progress={scrollProgress} />

      {/* Grid Pattern Background */}
      <GridBG />

      {/* Particle Network */}
      <ParticleBackground />

      {/* Mouse Glow Effect */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          opacity: 0.3,
          pointerEvents: 'none',
          zIndex: 1,
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(220, 38, 38, 0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Floating Orbs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div className="orb orb-1" style={{ transform: `translateY(${scrollY * 0.05}px)` }} />
        <div className="orb orb-2" style={{ transform: `translateY(${scrollY * -0.03}px)` }} />
        <div className="orb orb-3" style={{ transform: `translateY(${scrollY * 0.04}px)` }} />
      </div>

      <nav className="nav-bar">
        <div className="nav-inner">
          <button onClick={() => scrollTo('hero')} className="nav-logo"><span className="logo-accent">Y</span>E</button>
          <div className="nav-links-desktop">{navItems.map(n => <button key={n.id} onClick={() => scrollTo(n.id)} className="nav-link">{n.label}</button>)}</div>
          <button className="nav-mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
        {mobileMenuOpen && <div className="nav-mobile-dropdown">{navItems.map(n => <button key={n.id} onClick={() => scrollTo(n.id)} className="nav-mobile-link">{n.label}</button>)}</div>}
      </nav>

      <header id="hero" className="hero-section">
        <div className="hero-content">
          <div className={`hero-badge ${heroLoaded ? 'hero-visible' : 'hero-hidden'}`} style={{ transitionDelay: '200ms' }}><div className="badge-dot" /> Available for work · Dublin, Ireland</div>
          <h1 className={`hero-title ${heroLoaded ? 'hero-visible' : 'hero-hidden'}`} style={{ transitionDelay: '400ms' }}>
            <span className="hero-name-line">Yağız Eraslan</span>
            <span className="hero-role-line"><span className="hero-role-accent">Unity</span> Developer & <span className="hero-role-accent">XR</span> Specialist</span>
          </h1>
          <p className={`hero-subtitle ${heroLoaded ? 'hero-visible' : 'hero-hidden'}`} style={{ transitionDelay: '600ms' }}>From studying the cosmos at Ankara University Observatory to building award-winning virtual reality experiences — 7+ years crafting immersive technology for enterprise, education, and entertainment.</p>
          <div className={`hero-stats ${heroLoaded ? 'hero-visible' : 'hero-hidden'}`} style={{ transitionDelay: '800ms' }}>
            <div className="stat-item"><span className="stat-number"><Counter end={7} suffix="+" /></span><span className="stat-label">Years Experience</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-number"><Counter end={30} suffix="+" /></span><span className="stat-label">Projects Shipped</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-number"><Counter end={2} /></span><span className="stat-label">Hackathon Wins</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-number"><Counter end={5} /></span><span className="stat-label">Open Source Packages</span></div>
          </div>
          <div className={`hero-actions ${heroLoaded ? 'hero-visible' : 'hero-hidden'}`} style={{ transitionDelay: '1000ms' }}>
            <button onClick={() => scrollTo('projects')} className="btn-primary">View Projects <ArrowDown size={16} /></button>
            <a href="mailto:yagizeraslan@gmail.com" className="btn-secondary">Get in Touch <Mail size={16} /></a>
          </div>
        </div>
        <div className={`hero-scroll-indicator ${heroLoaded ? 'hero-visible' : 'hero-hidden'}`} style={{ transitionDelay: '1400ms' }}><div className="scroll-line" /></div>
      </header>

      <Section id="featured" className="section-container">
        <div className="section-inner">
          <div className="section-header"><span className="section-tag">Featured Work</span><h2 className="section-title">Award-Winning Projects</h2><p className="section-desc">Hackathon victories at Meta-sponsored XR events in Istanbul, 2024</p></div>
          <div className="featured-grid">
            {projects.XR.filter(p => p.featured).map((project, i) => (
              <div key={project.id} className="featured-card" style={{ animationDelay: `${i * 200}ms` }}>
                <div className="featured-image-wrap">
                  <img src={project.image} alt={project.title} className="featured-image" />
                  <div className="featured-overlay">{project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="featured-play-btn"><Play size={28} fill="white" /></a>}</div>
                  <div className="featured-award-badge"><Award size={14} />{project.award}</div>
                </div>
                <div className="featured-body">
                  <h3 className="featured-title">{project.title}</h3><p className="featured-subtitle">{project.subtitle}</p><p className="featured-desc">{project.description}</p>
                  <div className="tag-row">{project.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="projects" className="section-container section-dark">
        <div className="section-inner">
          <div className="section-header"><span className="section-tag">Portfolio</span><h2 className="section-title">All Projects</h2></div>
          <div className="filter-bar">{categories.map(cat => (<button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`filter-btn ${activeCategory === cat.id ? 'filter-active' : ''}`}>{cat.icon}<span>{cat.name}</span><span className="filter-count">{projects[cat.id].length}</span></button>))}</div>
          <div className="projects-grid">
            {projects[activeCategory].map((project, index) => (
              <div key={`${activeCategory}-${project.id}`} className="project-card" style={{ animationDelay: `${index * 60}ms` }}>
                <div className="project-image-wrap">
                  <img src={project.image} alt={project.title} className="project-image" onError={(e) => { e.target.onerror = null; e.target.style.background = 'linear-gradient(135deg, #1a0505, #0a0505)'; }} />
                  <div className="project-image-overlay" />
                  {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-ext-link"><ArrowUpRight size={16} /></a>}
                  {project.featured && <div className="project-featured-badge"><Star size={10} /> Featured</div>}
                </div>
                <div className="project-body"><h3 className="project-title">{project.title}</h3><p className="project-desc">{project.description}</p><div className="tag-row">{project.tags.slice(0, 4).map(t => <span key={t} className="tag tag-sm">{t}</span>)}{project.tags.length > 4 && <span className="tag tag-sm tag-more">+{project.tags.length - 4}</span>}</div></div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="skills" className="section-container">
        <div className="section-inner">
          <div className="section-header"><span className="section-tag">Expertise</span><h2 className="section-title">Skills & Technologies</h2></div>
          <div className="skills-grid">{skillGroups.map(g => (<div key={g.label} className="skill-group"><h3 className="skill-group-label">{g.label}</h3><div className="skill-chips">{g.skills.map(s => <span key={s} className="skill-chip">{s}</span>)}</div></div>))}</div>
        </div>
      </Section>

      <Section id="experience" className="section-container section-dark">
        <div className="section-inner">
          <div className="section-header"><span className="section-tag">Career</span><h2 className="section-title">Professional Journey</h2></div>
          <div className="timeline">
            {experience.map((exp, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot-col"><div className={`timeline-dot ${exp.current ? 'dot-active' : ''}`} />{i < experience.length - 1 && <div className="timeline-line" />}</div>
                <div className={`timeline-card ${exp.current ? 'timeline-current' : ''}`}>
                  <div className="timeline-top"><div><h3 className="timeline-role">{exp.role}</h3><p className="timeline-company">{exp.company}</p></div><span className="timeline-period">{exp.period}</span></div>
                  {exp.current && <span className="current-badge">Current</span>}
                </div>
              </div>
            ))}
          </div>
          <div className="education-card"><GraduationCap size={24} className="edu-icon" /><div><h3 className="edu-title">Bachelor of Sciences — Astronomy & Space Sciences</h3><p className="edu-sub">Ankara University · 2012 — 2016</p></div></div>
        </div>
      </Section>

      <Section id="contact" className="section-container contact-section">
        <div className="section-inner contact-inner">
          <div className="section-header"><span className="section-tag">Connect</span><h2 className="section-title">Let's Build Something</h2><p className="section-desc">Currently available for VR/AR projects, consulting, and collaboration.</p></div>
          <div className="contact-links">
            <a href="mailto:yagizeraslan@gmail.com" className="contact-card"><Mail size={24} /><div><span className="contact-card-label">Email</span><span className="contact-card-value">yagizeraslan@gmail.com</span></div><ArrowUpRight size={18} className="contact-arrow" /></a>
            <a href="https://www.linkedin.com/in/yagizeraslan" target="_blank" rel="noopener noreferrer" className="contact-card"><Linkedin size={24} /><div><span className="contact-card-label">LinkedIn</span><span className="contact-card-value">in/yagizeraslan</span></div><ArrowUpRight size={18} className="contact-arrow" /></a>
            <a href="https://github.com/yagizeraslan" target="_blank" rel="noopener noreferrer" className="contact-card"><Github size={24} /><div><span className="contact-card-label">GitHub</span><span className="contact-card-value">yagizeraslan</span></div><ArrowUpRight size={18} className="contact-arrow" /></a>
          </div>
        </div>
      </Section>

      <footer className="site-footer"><span>© 2025 Yağız Eraslan</span><span className="footer-sep">·</span><span>Built with React</span></footer>
    </div>
  );
}
