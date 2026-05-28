import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Play, Zap, TrendingUp, Building, DollarSign } from 'lucide-react';
import BlurText from './BlurText';
import FloatingLines from './FloatingLines';

interface AutomateFlowHeroProps {
  theme?: string;
}

export default function AutomateFlowHero({ theme = 'dark' }: AutomateFlowHeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) - 0.5;
    const y = (clientY / window.innerHeight) - 0.5;
    setMousePos({ x, y });

    // Update mouse coords for spotlight/glow interaction in outcome cards
    const cards = document.querySelectorAll('.enterprise-outcome-card');
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardX = clientX - rect.left;
      const cardY = clientY - rect.top;
      (card as HTMLElement).style.setProperty('--mouse-x', `${cardX}px`);
      (card as HTMLElement).style.setProperty('--mouse-y', `${cardY}px`);
    });
  };

  const fadeInVariant = {
    initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
    animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
  };

  const partners = ['WhatsApp', 'Gmail', 'Razorpay', 'Stripe', 'Google'];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-background text-foreground transition-colors flex flex-col justify-center items-center px-4 pt-24 pb-16"
      onMouseMove={handleMouseMove}
      style={{
        background: theme === 'dark'
          ? undefined
          : 'radial-gradient(circle at top, rgba(56,178,172,0.08), transparent 45%), linear-gradient(180deg, #F7F8FA 0%, #EEF2F3 100%)'
      }}
    >
      {/* Motion Background Effect Layer — extends beyond section bottom so waves flow into next section */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '160%',
          overflow: 'visible',
          pointerEvents: 'none',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          msUserSelect: 'none',
          MozUserSelect: 'none',
          WebkitUserDrag: 'none',
          touchAction: 'none',
          zIndex: 0,
          opacity: 0.85,
          filter: theme === 'dark'
            ? undefined
            : 'drop-shadow(0 0 2px rgba(44,122,123,0.15)) drop-shadow(0 0 12px rgba(56,178,172,0.08))',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.3) 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.3) 85%, transparent 100%)',
        }}
      >
        {theme === 'dark' ? (
          <FloatingLines
            linesGradient={[
              '#0f766e',
              '#14b8a6',
              '#2dd4bf',
              '#10b981',
              '#042f2e',
            ]}
            enabledWaves={['top', 'middle', 'bottom']}
            lineCount={[14, 18, 22]}
            lineDistance={[7, 5, 4]}
            animationSpeed={0.35}
            bendRadius={12}
            bendStrength={-0.55}
            mouseDamping={0.08}
            interactive={true}
            parallax={true}
            parallaxStrength={0.18}
            mixBlendMode="screen"
          />
        ) : (
          <FloatingLines
            linesGradient={[
              '#4FD1C5',
              '#38B2AC',
              '#319795',
              '#2C7A7B',
              '#285E61',
            ]}
            enabledWaves={['top', 'middle', 'bottom']}
            lineCount={[10, 14, 18]}
            lineDistance={[8, 6, 5]}
            animationSpeed={0.28}
            bendRadius={10}
            bendStrength={-0.45}
            mouseDamping={0.08}
            interactive={true}
            parallax={true}
            parallaxStrength={0.14}
            mixBlendMode="normal"
          />
        )}
      </div>

      {/* Cinematic Environmental Atmosphere */}
      <div className="hero-cinematic-spotlight" style={{ opacity: theme === 'dark' ? 0.4 : 0.25 }} />
      <div className="cinematic-vignette" style={{ opacity: 0.4 }} />
      <div className="cinematic-light-beam" style={{ top: '-10%', left: '15%', opacity: 0.08 }} />

      {/* Bottom atmospheric blend — fades hero seamlessly into next section */}
      <div className="hero-bottom-blend" />

      {/* Foreground Vertical Fluid Glass Refraction Border Element */}
      <div
        className="vertical-fluid-glass-refraction"
        style={{
          transform: `translate3d(${mousePos.x * -12}px, 0, 0)`,
        }}
      />


      {/* Content */}
      <div
        className="relative z-[2] flex flex-col items-center text-center max-w-4xl px-8 py-10 rounded-[2rem]"
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)'
            : 'radial-gradient(circle at center, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 50%, transparent 100%)'
        }}
      >
        {/* Announcement Badge */}
        <motion.div
          initial={fadeInVariant.initial}
          animate={fadeInVariant.animate}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="liquid-glass rounded-full flex items-center gap-2 px-1.5 py-1.5 mb-6"
        >
          <span className="bg-foreground text-background px-3 py-1 text-xs font-bold rounded-full transition-colors duration-500"
            style={{ letterSpacing: '0.04em' }}>
            NEW
          </span>
          <span className="text-sm text-foreground/85 pr-3 font-body transition-colors duration-500 font-medium">
            AI Autopilot — Your Operations on Intelligent Cruise Control
          </span>
        </motion.div>

        {/* Main Headline */}
        <div className="mb-4" style={{ letterSpacing: '-4px' }}>
          <BlurText
            text="Your AI-Powered Business Autopilot"
            className="text-5xl md:text-6xl lg:text-7xl font-heading text-foreground leading-[0.85] mb-2 transition-colors duration-500"
          />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading leading-tight mt-6"
            style={{ color: 'rgba(99,200,180,0.9)', letterSpacing: '-1.5px' }}>
            Centralized CRM & Intelligent Workflows for High-Growth Enterprises
          </h2>
        </div>

        {/* Subheading */}
        <motion.p
          initial={fadeInVariant.initial}
          animate={fadeInVariant.animate}
          transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
          className="text-sm md:text-base text-foreground/65 max-w-2xl font-body font-light leading-relaxed mb-8 transition-colors duration-500"
        >
          One unified AI operating system replacing multiple disconnected platforms to capture leads, orchestrate WhatsApp engagement, and automate your entire customer journey.
        </motion.p>


        {/* CTA Buttons */}
        <motion.div
          initial={fadeInVariant.initial}
          animate={fadeInVariant.animate}
          transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' }}
          className="flex flex-wrap items-center gap-5 justify-center mb-6"
        >
          <a
            href="https://calendly.com/sanyam-chhoriya/automate-flow-ai-demo?month=2026-05"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass-strong shimmer-hover rounded-full px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2 transition-colors duration-500"
            style={{ textDecoration: 'none' }}
          >
            Start Free Trial
            <ArrowUpRight className="h-4 w-4 text-slate-900 dark:text-white transition-colors duration-500" />
          </a>
          <a
            href="https://calendly.com/sanyam-chhoriya/automate-flow-ai-demo?month=2026-05"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-foreground/75 hover:text-foreground transition-colors duration-500 font-body liquid-glass px-5 py-3 rounded-full"
          >
            <Play className="h-3.5 w-3.5 fill-current text-foreground transition-colors duration-500" />
            Book Live Demo
          </a>
        </motion.div>

        {/* Trust Chips */}
        <motion.div
          initial={fadeInVariant.initial}
          animate={fadeInVariant.animate}
          transition={{ duration: 0.6, delay: 1.1, ease: 'easeOut' }}
          className="flex flex-wrap items-center gap-2.5 justify-center mb-8 max-w-4xl"
        >
          {[
            'No Credit Card Required',
            '7-Day Free Trial',
            'AI-Powered Workflows',
            'WhatsApp Integrated API'
          ].map((text) => (
            <span
              key={text}
              className="liquid-glass rounded-full px-3.5 py-1.5 text-[11px] text-foreground/60 font-body transition-colors duration-500 font-medium"
            >
              <span style={{ color: 'rgba(99,200,180,0.9)' }}>✦</span> {text}
            </span>
          ))}
        </motion.div>

        {/* Stat Cards */}
        <motion.div
          initial={fadeInVariant.initial}
          animate={fadeInVariant.animate}
          transition={{ duration: 0.6, delay: 1.3, ease: 'easeOut' }}
          className="flex flex-wrap items-stretch gap-6 justify-center mt-5 mb-8 max-w-6xl w-full"
        >
          {/* Card 1 */}
          <div className="enterprise-outcome-card">
            <div className="p-2 rounded-lg bg-[rgba(99,200,180,0.1)] border border-[rgba(99,200,180,0.15)] mb-6 z-10 transition-colors">
              <TrendingUp className="h-5 w-5 text-[#63ffd7]" />
            </div>
            <div className="font-heading text-foreground text-2xl md:text-3xl tracking-tight leading-snug mb-3 z-10 transition-colors duration-500 text-left">
              Save ₹1Lakh+/Month
            </div>
          </div>

          {/* Card 2 */}
          <div className="enterprise-outcome-card">
            <div className="p-2 rounded-lg bg-[rgba(99,200,180,0.1)] border border-[rgba(99,200,180,0.15)] mb-6 z-10 transition-colors">
              <Building className="h-5 w-5 text-[#63ffd7]" />
            </div>
            <div className="font-heading text-foreground text-2xl md:text-3xl tracking-tight leading-snug mb-3 z-10 transition-colors duration-500 text-left">
              Serving Businesses & Government Teams
            </div>
          </div>

          {/* Card 3 */}
          <div className="enterprise-outcome-card">
            <div className="p-2 rounded-lg bg-[rgba(99,200,180,0.1)] border border-[rgba(99,200,180,0.15)] mb-6 z-10 transition-colors">
              <DollarSign className="h-5 w-5 text-[#63ffd7]" />
            </div>
            <div className="font-heading text-foreground text-2xl md:text-3xl tracking-tight leading-snug mb-3 z-10 transition-colors duration-500 text-left">
              Save Time. Do More. Generate More Revenue.
            </div>
          </div>
        </motion.div>

        {/* Integrations Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4, ease: 'easeOut' }}
          className="flex flex-col items-center gap-3"
        >
          <div className="liquid-glass rounded-full px-3.5 py-1 text-[11px] font-semibold text-foreground/55 uppercase transition-colors"
            style={{ letterSpacing: '0.06em' }}>
            INTEGRATED SYSTEM CAPABILITIES
          </div>
          <div className="flex flex-wrap items-center gap-8 md:gap-12 justify-center">
            {partners.map((partner) => (
              <span
                key={partner}
                className="font-heading text-xl md:text-2xl text-foreground/35 transition-colors duration-500"
                style={{ letterSpacing: '-1px' }}
              >
                {partner}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
