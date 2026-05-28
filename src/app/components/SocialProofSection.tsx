import FluidGlass from './ui/FluidGlass';

export default function SocialProofSection() {
  const testimonials = [
    {
      quote: 'We reduced no-shows by 60% in the first month with automated appointment reminders.',
      name: 'Ravi K.',
      role: 'Clinic Owner Pune',
    },
    {
      quote: 'Our payment recovery rate went from 20% to 78%. AF AI pays for itself 10× over.',
      name: 'Priya S.',
      role: 'E-commerce Founder',
    },
    {
      quote: 'Managing 40 client WhatsApp accounts from one inbox changed everything for our team.',
      name: 'Anil M.',
      role: 'Digital Agency Mumbai',
    },
    {
      quote: 'The AI chat agent handles 80% of inquiries before I even see them. Insane leverage.',
      name: 'Sneha D.',
      role: 'Coaching Business',
    },
    {
      quote: 'Lead scoring and pipeline automation turned our sales team into a machine.',
      name: 'Kiran T.',
      role: 'Real Estate Bangalore',
    },
    {
      quote: '5 clinics, one dashboard. We finally have visibility across the entire business.',
      name: 'Meera P.',
      role: 'Healthcare Chain',
    },
  ];

  const outcomeStats = [
    {
      kicker: 'ROI Management',
      number: '4× ROI',
      description: 'Average return across 500+ businesses using AF AI automation.',
    },
    {
      kicker: 'Customer Tracking',
      number: '92%',
      description: 'Lead follow-up rate when using AI-powered automated sequences.',
    },
    {
      kicker: 'Advanced Reporting',
      number: '3 min',
      description: 'Time to your full business health report — live, always up to date.',
    },
  ];

  return (
    <section className="relative py-24 px-4 md:px-8 overflow-hidden transition-colors duration-500" style={{ background: 'var(--section-bg-social)' }}>
      {/* Cinematic Calm Mood Lighting */}
      <div className="social-proof-diffuser" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Kicker */}
        <p
          className="font-body font-semibold text-xs uppercase mb-6"
          style={{ color: 'rgba(99,200,180,0.7)', letterSpacing: '0.14em' }}
        >
          // Social Proof
        </p>

        {/* Heading */}
        <h2
          className="font-heading text-5xl md:text-7xl max-w-3xl mb-16"
          style={{ letterSpacing: '-3px', lineHeight: '0.9' }}
        >
          <span className="text-foreground transition-colors duration-500">Smart solutions.</span>
          <br />
          <span className="text-foreground/25 transition-colors duration-500">Real results.</span>
        </h2>

        {/* Testimonial Marquee */}
        <div className="relative overflow-hidden mb-20">
          <div className="marquee-fade-left" />
          <div className="marquee-fade-right" />
          <div className="flex gap-4 animate-scroll">
            {/* Duplicate array for infinite scroll effect */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <FluidGlass
                key={index}
                variant="water"
                className="p-6 rounded-[1.25rem] w-[320px] flex-shrink-0 transition-all duration-500"
              >
                <p className="font-body font-light text-sm text-foreground/75 leading-relaxed mb-4 transition-colors duration-500">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-body font-semibold text-sm text-foreground transition-colors duration-500">{testimonial.name}</p>
                  <p className="font-body text-xs text-foreground/45 transition-colors duration-500">{testimonial.role}</p>
                </div>
              </FluidGlass>
            ))}
          </div>
        </div>

        {/* Outcome Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {outcomeStats.map((stat, index) => (
            <FluidGlass
              key={index}
              variant="water"
              className="p-8 rounded-[1.25rem] transition-all duration-500"
            >
              <p
                className="font-body font-semibold text-[10px] uppercase mb-3"
                style={{ color: 'rgba(99,200,180,0.6)', letterSpacing: '0.12em' }}
              >
                {stat.kicker}
              </p>
              <div
                className="font-heading text-5xl text-foreground mb-3 transition-colors duration-500"
                style={{ letterSpacing: '-2px', lineHeight: '1' }}
              >
                {stat.number}
              </div>
              <p className="font-body font-light text-sm text-foreground/50 leading-snug transition-colors duration-500">
                {stat.description}
              </p>
            </FluidGlass>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 28s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
