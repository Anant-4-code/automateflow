import { motion } from 'motion/react';
import { ArrowUpRight, Play, Clock, Globe } from 'lucide-react';
import FadingVideo from './FadingVideo';
import BlurText from './BlurText';

export default function Hero() {
  const partners = ['Aeon', 'Vela', 'Apex', 'Orbit', 'Zeno'];

  const fadeInVariant = {
    initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
    animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen bg-black flex flex-col">
      {/* Background Video */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: '120%', height: '120%' }}
      />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 pt-24">
          {/* Badge */}
          <motion.div
            initial={fadeInVariant.initial}
            animate={fadeInVariant.animate}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="liquid-glass rounded-full flex items-center gap-2 px-1.5 py-1.5 mb-6"
          >
            <span className="bg-white text-black px-3 py-1 text-xs font-semibold rounded-full">
              New
            </span>
            <span className="text-sm text-white/90 pr-3 font-body">
              Maiden Crewed Voyage to Mars Arrives 2026
            </span>
          </motion.div>

          {/* Headline */}
          <div style={{ letterSpacing: '-4px' }}>
            <BlurText
              text="Venture Past Our Sky Across the Universe"
              className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl text-center"
            />
          </div>

          {/* Subheading */}
          <motion.p
            initial={fadeInVariant.initial}
            animate={fadeInVariant.animate}
            transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
            className="mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight text-center"
          >
            Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough
            engineering bring deep-space exploration within reach—secure and extraordinary.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={fadeInVariant.initial}
            animate={fadeInVariant.animate}
            transition={{ duration: 0.6, delay: 1.1, ease: 'easeOut' }}
            className="flex items-center gap-6 mt-6"
          >
            <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-2 hover:bg-white/10 transition-colors">
              Start Your Voyage
              <ArrowUpRight className="h-5 w-5" />
            </button>
            <button className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors font-body">
              View Liftoff
              <Play className="h-4 w-4 fill-current" />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={fadeInVariant.initial}
            animate={fadeInVariant.animate}
            transition={{ duration: 0.6, delay: 1.3, ease: 'easeOut' }}
            className="flex items-stretch gap-4 mt-8"
          >
            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] flex flex-col">
              <Clock className="h-7 w-7 text-white stroke-[1.5] mb-auto" />
              <div className="font-heading italic text-white text-4xl tracking-[-1px] leading-none mt-3">
                34.5 Min
              </div>
              <div className="text-xs text-white font-body font-light mt-2">
                Average Videos Watch Time
              </div>
            </div>
            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] flex flex-col">
              <Globe className="h-7 w-7 text-white stroke-[1.5] mb-auto" />
              <div className="font-heading italic text-white text-4xl tracking-[-1px] leading-none mt-3">
                2.8B+
              </div>
              <div className="text-xs text-white font-body font-light mt-2">
                Users Across the Globe
              </div>
            </div>
          </motion.div>
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4, ease: 'easeOut' }}
          className="flex flex-col items-center gap-4 pb-8"
        >
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white">
            Collaborating with top aerospace pioneers globally
          </div>
          <div className="flex items-center gap-12 md:gap-16">
            {partners.map((partner, i) => (
              <span
                key={i}
                className="font-heading italic text-white text-2xl md:text-3xl tracking-tight"
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
