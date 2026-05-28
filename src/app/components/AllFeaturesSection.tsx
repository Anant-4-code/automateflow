import { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import BorderGlow from './ui/BorderGlow';

const featureCategories = [
  {
    id: 'crm',
    icon: '◈',
    label: 'CRM & Contacts',
    description: 'Centralize client information, deal history, and pipeline milestones.',
    features: [
      'Unlimited contact profiles',
      'Advanced segmentation tags',
      'Unified activity timeline',
      'Native iOS & Android app',
    ],
  },
  {
    id: 'communication',
    icon: '◉',
    label: 'Communication',
    description: 'Engage clients across WhatsApp, SMS, email, and social DMs.',
    features: [
      'Official WhatsApp API',
      'Unified Shared Inbox',
      'Bulk email & SMS campaigns',
      'Missed-call auto text-back',
    ],
  },
  {
    id: 'website',
    icon: '◇',
    label: 'Website & Funnels',
    description: 'Launch high-converting landing pages, funnels, and client portals.',
    features: [
      'Drag-and-drop page builder',
      'High-converting sales funnels',
      'Secure surveys & lead forms',
      'Premium hosting included',
    ],
  },
  {
    id: 'automation',
    icon: '⚡',
    label: 'Automation',
    description: 'Orchestrate custom engagement workflows and follow-up rules.',
    features: [
      'Visual trigger-flow builder',
      'Multi-channel sequence drip',
      'Auto lead assignment rules',
      'Pipeline status auto-updates',
    ],
  },
  {
    id: 'appointments',
    icon: '◻',
    label: 'Appointments',
    description: 'Synchronize client bookings, meeting links, and buffers.',
    features: [
      'Unlimited custom calendars',
      'Google & Outlook 2-way sync',
      'SMS & WhatsApp reminders',
      'Paid calendar slot bookings',
    ],
  },
  {
    id: 'pipeline',
    icon: '▦',
    label: 'Pipeline & Sales',
    description: 'Track pipeline deal velocity, opportunity health, and rep quotas.',
    features: [
      'Unlimited visual pipelines',
      'Drag-and-drop opportunity cards',
      'Custom lead scoring matrix',
      'Automated deal progression',
    ],
  },
  {
    id: 'payments',
    icon: '₹',
    label: 'Payments',
    description: 'Invoicing, subscription billing, and automated payment recoveries.',
    features: [
      'Automated invoices & quotes',
      'Stripe & Razorpay portals',
      'Recurring subscription layers',
      'Smart payment recovery loops',
    ],
  },
  {
    id: 'courses',
    icon: '◎',
    label: 'Courses',
    description: 'Host learning programs, community channels, and gated products.',
    features: [
      'Gated digital course portal',
      'Client membership profiles',
      'Interactive group feeds',
      'Secure file distribution',
    ],
  },
  {
    id: 'reputation',
    icon: '★',
    label: 'Reputation',
    description: 'Generate Google Reviews automatically to boost map rankings.',
    features: [
      'Auto Google review triggers',
      'Review collection widgets',
      'Performance feedback metrics',
      'Central review tracking',
    ],
  },
  {
    id: 'ai',
    icon: '✦',
    label: 'AI Features',
    description: 'Infuse conversational AI agents to book meetings and resolve queries.',
    features: [
      '24/7 AI chat answering',
      'Interactive booking bots',
      'Smart lead scoring logic',
      'Autonomous client nurturing',
    ],
  },
  {
    id: 'analytics',
    icon: '◆',
    label: 'Analytics',
    description: 'Track campaign ROI, pipeline conversions, and team efficiency.',
    features: [
      'Interactive reporting boards',
      'Marketing ROI attribution',
      'Deal conversion reports',
      'Live team metrics feed',
    ],
  },
  {
    id: 'integrations',
    icon: '⊕',
    label: 'Integrations',
    description: 'Connect payment nodes, CRM APIs, and marketing networks.',
    features: [
      'Stripe, Razorpay, Zapier',
      'Meta & Google pixel tools',
      'Webhooks & developer APIs',
      'Global infrastructure nodes',
    ],
  },
];

interface AllFeaturesSectionProps {
  theme?: string;
}

export default function AllFeaturesSection({ theme = 'dark' }: AllFeaturesSectionProps) {
  const [activeCategory, setActiveCategory] = useState(featureCategories[0].id);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseEnter = (id: string) => {
    setHoveredId(id);
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveCategory(id);
    }, 120); // 120ms elegant debounce
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="relative py-24 px-4 md:px-8 grid-pattern overflow-hidden transition-colors duration-500" 
      style={{ 
        background: theme === 'dark'
          ? 'var(--section-bg-features)'
          : 'radial-gradient(circle at top, rgba(56,178,172,0.08), transparent 45%), linear-gradient(180deg, #F7F8FA 0%, #EEF2F3 100%)'
      }}
    >
      {/* Cinematic Mood Lighting */}
      <div className="features-holo-backdrop" style={{ opacity: theme === 'dark' ? 1 : 0.4 }} />
      <div className="features-holo-scanner" style={{ opacity: theme === 'dark' ? 0.45 : 0.2 }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Kicker */}
        <p
          className="font-body font-semibold text-xs uppercase mb-6"
          style={{ 
            color: theme === 'dark' ? 'rgba(99,200,180,0.7)' : 'rgba(44,122,123,0.9)', 
            letterSpacing: '0.14em' 
          }}
        >
          // Everything You Need
        </p>

        {/* Heading */}
        <h2
          className="font-heading text-5xl md:text-7xl max-w-3xl mb-16"
          style={{ letterSpacing: '-3px', lineHeight: '0.9' }}
        >
          <span className="text-foreground transition-colors duration-500">12 tools.</span>
          <br />
          <span className="text-foreground/25 transition-colors duration-500">One platform.</span>
        </h2>

        {/* DESKTOP: Premium Horizontal Accordion Showcase (Inspired by Reference Design) */}
        <BorderGlow
          edgeSensitivity={55}
          glowRadius={30}
          glowIntensity={0.7}
          coneSpread={18}
          animated={false}
          colors={['#00ffd0', '#00c8ff', '#7df9ff']}
          className="hidden lg:flex rounded-[2.5rem]"
        >
          <div className="flex flex-row h-[620px] w-full border border-border/80 rounded-[2.5rem] overflow-hidden bg-[var(--card)] backdrop-blur-[20px] shadow-2xl relative">
            {featureCategories.map((category, index) => {
              const isActive = activeCategory === category.id;

              return (
                <motion.div
                  key={category.id}
                  onMouseEnter={() => handleMouseEnter(category.id)}
                  onMouseLeave={handleMouseLeave}
                  className="relative h-full flex flex-col justify-between overflow-hidden cursor-pointer"
                  style={{
                    borderRight: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                  animate={{
                    width: isActive ? '580px' : '65px',
                    backgroundColor: isActive
                      ? (theme === 'dark' ? 'rgba(99, 200, 180, 0.03)' : 'rgba(56, 178, 172, 0.03)')
                      : 'transparent'
                  }}
                  transition={{ type: 'spring', stiffness: 220, damping: 28 }}
                >
                  {/* ── Collapsed view (Vertical text label) ── */}
                  <AnimatePresence>
                    {!isActive && (
                      <motion.div
                        className="absolute inset-0 flex flex-col items-center py-8 z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="font-heading text-2xl text-foreground/30 mb-8 select-none">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div 
                          className="font-body text-xs tracking-[0.15em] font-semibold text-foreground/45 uppercase whitespace-nowrap"
                          style={{
                            writingMode: 'vertical-rl',
                            transform: 'rotate(180deg)'
                          }}
                        >
                          {category.label}
                        </div>
                        <span className="text-foreground/30 text-lg mt-auto select-none">
                          {category.icon}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* ── Expanded view (Rich Product Showcase Card) ── */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        className="w-full h-full flex flex-col p-8 select-none"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {/* Top Header */}
                        <div className="flex justify-between items-start mb-6">
                          <div className="flex items-center gap-4">
                            <div className="text-4xl text-[rgba(99,200,180,0.95)] dark:text-foreground">
                              {category.icon}
                            </div>
                            <div>
                              <span className="font-heading text-xl text-foreground/35 select-none block leading-none mb-1">
                                TOOL {String(index + 1).padStart(2, '0')}
                              </span>
                              <h3 className="font-heading text-3xl md:text-4xl text-foreground tracking-tight leading-none">
                                {category.label}
                              </h3>
                            </div>
                          </div>
                        </div>

                        {/* Tool description */}
                        <p className="font-body text-xs text-foreground/60 leading-relaxed mb-6">
                          {category.description}
                        </p>

                        {/* BorderGlow wrapped feature grid */}
                        <BorderGlow
                          edgeSensitivity={55}
                          glowRadius={30}
                          glowIntensity={0.7}
                          coneSpread={18}
                          animated={false}
                          colors={['#00ffd0', '#00c8ff', '#7df9ff']}
                          className="flex-1 rounded-2xl"
                        >
                          <div
                            className="p-6 rounded-2xl flex flex-col justify-center h-full bg-[var(--card)] backdrop-blur-[20px]"
                            style={{
                              border: '1px solid var(--border)',
                            }}
                          >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                              {category.features.map((feature, fIdx) => (
                                <div 
                                  key={fIdx} 
                                  className="water-glass p-3 rounded-xl flex items-center gap-3 transition-all duration-300 hover:translate-y-[-1px]"
                                  style={{
                                    background: theme === 'dark' 
                                      ? 'rgba(255, 255, 255, 0.02)' 
                                      : 'rgba(0, 0, 0, 0.02)',
                                    border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'}`,
                                    boxShadow: theme === 'dark' ? 'none' : '0 2px 6px rgba(44,122,123,0.03)',
                                  }}
                                >
                                  <Check className="h-3.5 w-3.5 flex-shrink-0" style={{ color: theme === 'dark' ? 'rgba(99,200,180,0.9)' : 'rgba(44,122,123,0.9)' }} />
                                  <span className="font-body text-[11px] text-foreground/80 leading-normal">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </BorderGlow>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </BorderGlow>

        {/* MOBILE & TABLET: Vertical Accordion Fallback */}
        <div className="lg:hidden space-y-3">
          {featureCategories.map((category, index) => {
            const isActive = activeCategory === category.id;

            return (
              <div 
                key={category.id}
                className="border border-border/80 rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5"
              >
                <button
                  onClick={() => setActiveCategory(isActive ? '' : category.id)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl text-[rgba(99,200,180,0.9)]">{category.icon}</span>
                    <span className="font-body text-xs font-semibold">
                      {String(index + 1).padStart(2, '0')}. {category.label}
                    </span>
                  </div>
                  <span className="text-xs text-foreground/40">{isActive ? '−' : '+'}</span>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5 border-t border-border/40"
                    >
                      <p className="font-body text-xs text-foreground/60 leading-relaxed py-3">
                        {category.description}
                      </p>
                      <div className="space-y-2 mt-2">
                        {category.features.map((feature, fIdx) => (
                          <div 
                            key={fIdx} 
                            className="p-3 rounded-xl flex items-center gap-3 bg-black/5 dark:bg-white/5 border border-border/20"
                          >
                            <Check className="h-3.5 w-3.5 flex-shrink-0" style={{ color: 'rgba(99,200,180,0.9)' }} />
                            <span className="font-body text-[11px] text-foreground/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
