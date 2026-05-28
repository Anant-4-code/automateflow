import BorderGlow from './ui/BorderGlow';

export default function ProblemSection() {
  const painPoints = [
    {
      num: '01',
      title: 'Missed Leads & Slow Responses',
      body: 'Without automated routing, reply times lag and high-value opportunities slip straight to your competition.',
      isFeatured: true,
    },
    {
      num: '02',
      title: 'Scattered Conversations',
      body: 'WhatsApp, email, and social DMs are spread out, forcing teams to lose hours switching platforms.',
      isFeatured: false,
    },
    {
      num: '03',
      title: 'Manual Operational Work',
      body: 'Relying on staff to manually nurture prospects leads to broken workflows and cold follow-ups.',
      isFeatured: true,
    },
    {
      num: '04',
      title: 'Zero Conversion Tracking',
      body: 'Operating without centralized attribution makes managing your sales pipeline conversion sheer guesswork.',
      isFeatured: false,
    },
    {
      num: '05',
      title: 'Disconnected Software Silos',
      body: 'Your CRM, call scheduler, email campaigns, and billing systems refuse to communicate with one another.',
      isFeatured: true,
    },
    {
      num: '06',
      title: 'Restricted Automation',
      body: 'Your growth remains bottlenecked by human head count, causing higher overhead and mistakes.',
      isFeatured: false,
    },
    {
      num: '07',
      title: 'Low Pipeline Conversion',
      body: 'Valuable prospects drop off in the massive friction gap between initial booking and closing.',
      isFeatured: true,
    },
    {
      num: '08',
      title: 'Wasted Rep Productivity',
      body: 'High-salary sales reps waste hours draft-building invoices instead of closing enterprise deals.',
      isFeatured: false,
    },
  ];

  return (
    <section className="relative py-32 px-4 md:px-8 grid-pattern overflow-hidden transition-colors duration-500" style={{ background: 'var(--section-bg-problem)' }}>
      {/* Cinematic Mood Lighting */}
      <div className="problem-shadow-glow" />
      <div className="problem-underglow" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Kicker */}
        <p
          className="font-body font-semibold text-xs uppercase mb-6"
          style={{ color: 'rgba(99,200,180,0.7)', letterSpacing: '0.14em' }}
        >
          // The Problem
        </p>

        {/* Heading */}
        <h2
          className="font-heading text-5xl md:text-7xl lg:text-8xl max-w-4xl mb-8"
          style={{ letterSpacing: '-3px', lineHeight: '0.9' }}
        >
          <span className="text-foreground transition-colors duration-500">Growing Businesses</span>
          <br />
          <span className="text-foreground/25 transition-colors duration-500">Shouldn’t Run</span>
          <br />
          <span className="text-foreground transition-colors duration-500">on Chaos.</span>
        </h2>

        {/* Subheading */}
        <p className="text-base md:text-lg text-foreground/75 max-w-3xl font-body font-light leading-relaxed mb-16">
          Disconnected tools, manual follow-ups, and scattered inbox channels silently degrade customer trust and hold back scalable revenue operations.
        </p>

        {/* Long Description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 text-xs md:text-sm text-foreground/50 leading-relaxed font-body font-light border-b border-border/10 pb-16">
          <div>
            Most businesses operate across fragmented silos—CRMs, spreadsheets, WhatsApp messages, email campaign platforms, calendar schedulers, and payment trackers. Teams waste crucial operational hours context-switching.
          </div>
          <div>
            Without cohesive automation, businesses suffer from delayed reply times, lost prospect visibility, inefficient outreach cycles, and expensive drop-off rates across key marketing funnels.
          </div>
          <div>
            Automate Flow AI centralizes these core functions into one elegant, unified operating platform—infusing intelligent automations, conversational routing, and deep analytics straight into your daily workflow.
          </div>
        </div>

        {/* Pain Cards - Dynamic Asymmetrical Vertical Rhythm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {painPoints.map((pain, index) => {
            const isOffset = index % 2 === 1; // Creates vertical rhythm staggering on larger screens
            return (
              <div 
                key={index} 
                className={`transition-all duration-500 ${isOffset ? 'lg:mt-6' : 'lg:mt-0'}`}
              >
                <BorderGlow
                  edgeSensitivity={55}
                  glowRadius={30}
                  glowIntensity={pain.isFeatured ? 0.85 : 0.6}
                  coneSpread={18}
                  animated={false}
                  colors={['#00ffd0', '#00c8ff', '#7df9ff']}
                  className="rounded-[1.5rem] h-full"
                >
                  <div 
                    className={`fluid-problem-card p-8 rounded-[1.5rem] h-full min-h-[280px] flex flex-col justify-between ${
                      pain.isFeatured ? 'focus-card' : ''
                    }`}
                  >
                    <div>
                      <div className="problem-serif-number mb-6">
                        {pain.num}
                      </div>
                      <h3 className="font-body font-semibold text-sm text-foreground mb-3 transition-colors duration-500">
                        {pain.title}
                      </h3>
                      <p className="font-body font-light text-xs text-foreground/60 leading-relaxed transition-colors duration-500">
                        {pain.body}
                      </p>
                    </div>
                  </div>
                </BorderGlow>
              </div>
            );
          })}
        </div>

        {/* Transition Line */}
        <div className="text-center mt-28">
          <a href="#features" className="cta-shimmer-link">
            There is a better way →
          </a>
        </div>
      </div>
    </section>
  );
}
