import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How do your conversational AI agents work?',
    answer: 'Our AI agents analyze inbound client queries to qualify prospects, trigger workflows, and coordinate calendar bookings autonomously 24/7.',
  },
  {
    question: 'Is the official WhatsApp Business API included?',
    answer: 'Yes. We provision official WhatsApp Business API channels to support high-volume automated campaigns and shared templates.',
  },
  {
    question: 'Can I manage complex deal pipelines inside the CRM?',
    answer: 'Absolutely. Centralize contact tags, custom fields, conversation histories, and visual deal pipelines inside our unified CRM.',
  },
  {
    question: 'What professional onboarding assistance is provided?',
    answer: 'Every plan includes hands-on setup support, personalized onboarding runs, and strategic sequence configuration assistance.',
  },
  {
    question: 'Which third-party services connect to the platform?',
    answer: 'Connect Stripe, Razorpay, Gmail, Google Calendar, Meta Pixel, and 1,000+ custom applications natively or via secure webhooks.',
  },
  {
    question: 'How are automated invoices and payments processed?',
    answer: 'Generate professional bills, direct payment links, recurring subscriptions, and outstanding payment recovery workflows automatically.',
  },
  {
    question: 'Does the calendar coordinate round-robin bookings?',
    answer: 'Yes. Distribute incoming client meetings across team members dynamically, sending auto-reminders to slash no-show rates.',
  },
  {
    question: 'What performance metrics can I monitor in real-time?',
    answer: 'Track ad campaigns ROI, deal conversion speeds, conversation velocities, and team response productivity on unified dashboards.',
  },
  {
    question: 'How complex can our visual workflow sequences be?',
    answer: 'Build multi-step automation branch chains triggered by customer actions, message keywords, page visits, or deal movements.',
  },
  {
    question: 'Is there a functional mobile application available?',
    answer: 'Yes. Access our fully featured mobile CRM app on iOS and Android to manage leads and respond to chats on the go.',
  },
  {
    question: 'How does team communication collaboration work?',
    answer: 'Utilize a unified shared inbox to compile multi-channel threads, allocate conversation owners, and drop internal context notes.',
  },
  {
    question: 'Is customer data protected under security regulations?',
    answer: 'We enforce bank-grade SSL encryption, daily secure database backups, and GDPR-compliant server environments to protect client data.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="relative py-24 px-4 md:px-8 transition-colors duration-500"
      style={{ background: 'var(--section-bg-faq)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Kicker */}
        <p
          className="font-body font-semibold text-xs uppercase mb-6"
          style={{ color: 'rgba(99,200,180,0.7)', letterSpacing: '0.14em' }}
        >
          // FAQs
        </p>

        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-12">
          <h2
            className="font-heading text-5xl md:text-6xl"
            style={{ letterSpacing: '-3px', lineHeight: '0.9' }}
          >
            <span className="text-foreground transition-colors duration-500">Frequently</span>
            <br />
            <span className="text-foreground/30 transition-colors duration-500">asked questions.</span>
          </h2>
          <a
            href="#contact"
            className="font-body text-sm whitespace-nowrap self-start md:self-auto mt-2 transition-colors duration-300"
            style={{ color: 'rgba(99,200,180,0.9)' }}
          >
            View more questions →
          </a>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {faqs.map((faq, index) => (
            <button
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="water-glass rounded-2xl text-left transition-all overflow-hidden"
            >
              <div className="px-5 py-5 flex items-start justify-between gap-3">
                <span className="font-body font-medium text-sm text-foreground transition-colors duration-500">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-foreground/40 flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-5 pb-5 font-body font-light text-sm text-foreground/50 leading-relaxed transition-colors duration-500">
                  {faq.answer}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
