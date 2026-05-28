import { Brain, MessageSquare, IndianRupee } from 'lucide-react';
import BorderGlow from './ui/BorderGlow';

export default function CapabilitiesSection() {
  const capabilities = [
    {
      Icon: Brain,
      tags: ['AI Chat Agents', 'Auto Follow-ups', '24/7 Qualifiers'],
      title: 'AI Autopilot',
      description:
        'AI agents handle customer queries, qualify prospects, and coordinate bookings 24/7.',
    },
    {
      Icon: MessageSquare,
      tags: ['WhatsApp Business', 'Multi-channel', 'Shared Inbox'],
      title: 'Unified Inbox',
      description:
        'Centralize WhatsApp, email, and social DMs in one unified interactive inbox.',
    },
    {
      Icon: IndianRupee,
      tags: ['Smart Invoicing', 'Auto Reminders', 'Recovery Flows'],
      title: 'Revenue Recovery',
      description:
        'Automatic invoice generation, overdue reminders, and payment recovery systems.',
    },
  ];

  return (
    <section className="relative py-24 px-4 md:px-8 bg-background text-foreground transition-colors duration-500 overflow-hidden">
      {/* Cinematic Mood Lighting */}
      <div className="capabilities-bloom-1" />
      <div className="capabilities-bloom-2" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Kicker */}
        <p
          className="font-body font-semibold text-xs uppercase mb-6"
          style={{ color: 'rgba(99,200,180,0.7)', letterSpacing: '0.14em' }}
        >
          // Capabilities
        </p>

        {/* Heading */}
        <h2
          className="font-heading text-5xl md:text-7xl lg:text-8xl max-w-3xl mb-16"
          style={{ letterSpacing: '-3px', lineHeight: '0.9' }}
        >
          <span className="text-foreground transition-colors duration-500">Automation</span>
          <br />
          <span className="text-foreground/30 transition-colors duration-500">evolved.</span>
        </h2>

        {/* Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
          {capabilities.map((capability, index) => {
            const Icon = capability.Icon;
            return (
              <BorderGlow
                key={index}
                edgeSensitivity={55}
                glowRadius={30}
                glowIntensity={0.7}
                coneSpread={18}
                animated={false}
                colors={['#00ffd0', '#00c8ff', '#7df9ff']}
                className="rounded-[1.25rem] min-h-[360px] flex"
              >
                <div
                  className="w-full p-6 rounded-[1.25rem] min-h-[360px] flex flex-col transition-all duration-500 bg-[var(--card)] backdrop-blur-[20px]"
                  style={{ border: '1px solid var(--border)' }}
                >
                  {/* Top Row */}
                  <div className="flex items-start justify-between gap-4 mb-auto">
                    {/* Icon Container */}
                    <div className="liquid-glass rounded-xl w-11 h-11 flex items-center justify-center flex-shrink-0 transition-all duration-500">
                      <Icon className="h-6 w-6 text-foreground transition-colors duration-500" />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                      {capability.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="liquid-glass rounded-full px-2.5 py-1 text-[10px] text-foreground/90 font-body whitespace-nowrap transition-colors duration-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="mt-6">
                    <h3
                      className="font-heading text-4xl text-foreground leading-none mb-3 transition-colors duration-500"
                      style={{ letterSpacing: '-1px' }}
                    >
                      {capability.title}
                    </h3>
                    <p className="font-body font-light text-sm text-foreground/65 leading-snug max-w-[32ch] transition-colors duration-500">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </BorderGlow>
            );
          })}
        </div>
      </div>
    </section>
  );
}
