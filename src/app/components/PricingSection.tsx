import { Check, ArrowUpRight } from 'lucide-react';
import BorderGlow from './ui/BorderGlow';

export default function PricingSection({ theme = 'dark' }: { theme?: string }) {
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$99',
      description: 'For startups and growing businesses beginning their automation journey.',
      features: [
        'Centralized CRM inbox',
        'Official WhatsApp integration',
        'Smart email campaign loops',
        'Visual drag-and-drop funnel builder',
        'Unified calendar slot scheduler',
        'Automated pipeline deal updates',
        'Standard customer support desk',
      ],
      featured: false,
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$199',
      description: 'For scaling businesses that need advanced automation and intelligent workflows.',
      features: [
        'Everything in Starter plan',
        'Advanced AI conversational bots',
        'Multi-channel sequence campaigns',
        'Autonomous lead qualifiers',
        'Overdue payment recovery workflows',
        'Custom developer integrations',
        'Priority onboarding sessions',
      ],
      featured: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$299',
      description: 'For advanced operations, agencies, and enterprise-level growth systems.',
      features: [
        'Everything in Pro plan',
        'Unlimited active automation agents',
        'White-label portal domains',
        'Advanced webhooks & REST API',
        'Custom business intelligence suite',
        '24/7 dedicated success manager',
        'Strategic systems consulting',
      ],
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 px-4 md:px-8 overflow-hidden transition-colors duration-500" style={{ background: 'var(--section-bg-pricing)' }}>
      {/* Product Showcase Lighting */}
      <div className="pricing-showcase-light" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Kicker */}
        <p
          className="font-body font-semibold text-xs uppercase text-center mb-6"
          style={{ color: 'rgba(99,200,180,0.7)', letterSpacing: '0.14em' }}
        >
          // Choose a Plan
        </p>

        {/* Heading */}
        <h2
          className="font-heading text-5xl md:text-7xl text-center max-w-2xl mx-auto mb-6"
          style={{ letterSpacing: '-3px', lineHeight: '0.9' }}
        >
          <span className="text-foreground transition-colors duration-500">Simple Pricing.</span>
          <br />
          <span className="text-foreground/30 transition-colors duration-500">Enterprise Automation.</span>
        </h2>

        {/* Subtext */}
        <p className="font-body font-light text-base text-foreground/45 text-center mb-16 transition-colors duration-500">
          No credit card required · Cancel anytime · Setup in 15 minutes · 7-Day Free Trial
        </p>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.id} className="relative flex flex-col h-full transition-all duration-500">
              {plan.featured && (
                <>
                  <div className="pricing-growth-underglow" />
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-slate-900 z-20"
                    style={{ background: 'rgba(99,200,180,0.9)' }}
                  >
                    Most Popular
                  </div>
                </>
              )}
              
              <BorderGlow
                edgeSensitivity={55}
                glowRadius={30}
                glowIntensity={0.7}
                coneSpread={18}
                animated={false}
                colors={['#00ffd0', '#00c8ff', '#7df9ff']}
                className="flex-1 rounded-[1.75rem] flex flex-col h-full relative"
              >
                <div
                  className="flex-1 p-8 rounded-[1.75rem] flex flex-col h-full transition-all duration-500 relative bg-[var(--card)] backdrop-blur-[20px]"
                  style={{
                    border: plan.featured 
                      ? '1px solid rgba(99,200,180,0.35)' 
                      : '1px solid var(--border)',
                    boxShadow: plan.featured
                      ? (theme === 'dark' ? '0 20px 45px rgba(99,200,180,0.1)' : '0 20px 45px rgba(44,122,123,0.08)')
                      : 'none'
                  }}
                >
                  <p
                    className="font-body font-semibold text-xs uppercase mb-4 transition-colors duration-500"
                    style={{ 
                      color: plan.featured ? 'rgba(99,200,180,0.9)' : 'var(--text-heading-muted)', 
                      letterSpacing: '0.08em' 
                    }}
                  >
                    {plan.name}
                  </p>
                  <div className="flex items-end gap-2 mb-2">
                    <span
                      className="font-heading text-5xl text-foreground transition-colors duration-500"
                      style={{ letterSpacing: '-2px' }}
                    >
                      {plan.price}
                    </span>
                    <span className="font-body text-sm text-foreground/40 pb-2 transition-colors duration-500">/mo</span>
                  </div>
                  <p className="font-body font-light text-xs text-foreground/50 mb-6 min-h-[32px] transition-colors duration-500">
                    {plan.description}
                  </p>
                  
                  <a 
                    href="https://calendly.com/sanyam-chhoriya/automate-flow-ai-demo?month=2026-05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full rounded-full px-5 py-3 text-sm font-semibold flex items-center justify-center gap-2 mb-8 transition-all duration-500 ${
                      plan.featured
                        ? 'bg-[rgba(99,200,180,0.18)] border border-[rgba(99,200,180,0.35)] text-slate-900 dark:text-white shimmer-hover'
                        : 'liquid-glass text-slate-900 dark:text-white hover:bg-white/5'
                    }`}
                    style={{ textDecoration: 'none' }}
                  >
                    Start Free Trial
                    <ArrowUpRight className="h-4 w-4 text-slate-900 dark:text-white transition-colors duration-500" />
                  </a>
                  
                  <ul className="space-y-3.5 mt-auto">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: 'rgba(99,200,180,0.9)' }} />
                        <span className="font-body text-[13px] text-foreground/70 transition-colors duration-500 leading-normal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </BorderGlow>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
