import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import FluidGlass from './ui/FluidGlass';

interface LegalModalsProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export default function LegalModals({ isOpen, type, onClose }: LegalModalsProps) {
  return (
    <AnimatePresence>
      {isOpen && type && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="w-full max-w-4xl max-h-[85vh] flex flex-col"
          >
            <FluidGlass variant="strong" className="flex flex-col h-full overflow-hidden" interactive={false}>
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-border/10 bg-background/30 backdrop-blur-md">
                <h3 className="font-heading text-3xl md:text-4xl text-foreground">
                  {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
                </h3>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-foreground/5 text-foreground/60 hover:text-foreground transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Scrollable Content Area */}
              <div className="overflow-y-auto px-8 py-8 font-body font-light text-sm text-foreground/75 leading-relaxed space-y-6 max-h-[65vh]">
                {type === 'privacy' ? (
                  <>
                    <p className="text-foreground/90 font-medium">
                      Last Updated: May 28, 2026
                    </p>
                    <p>
                      Automate Flow AI ("we," "our," or "us") is dedicated to protecting your privacy and ensuring compliance with global data protection frameworks. This Privacy Policy outlines how we gather, process, retain, and distribute personal information and messaging metadata within our AI-powered business operating platform.
                    </p>

                    <h4 className="font-semibold text-foreground text-base mt-6">1. Information Gathered</h4>
                    <p>
                      We collect information directly provided by you, including your name, enterprise details, billing address, WhatsApp Business API metadata, and connected credentials (such as Google API nodes and payment keys). Additionally, our AI engines ingest customer conversation history across active channels to execute response automation.
                    </p>

                    <h4 className="font-semibold text-foreground text-base mt-6">2. Conversational & Messaging Data Compliance</h4>
                    <p>
                      All customer conversations routed through official WhatsApp, SMS, and Instagram DM gateways are processed using secure TLS 1.3 encryption layers. We capture messaging meta logs to generate visual analytics and response performance trends. Customer data is strictly owned by you and is never sold, traded, or shared with external database compilers.
                    </p>

                    <h4 className="font-semibold text-foreground text-base mt-6">3. Artificial Intelligence Disclaimer & Training</h4>
                    <p>
                      Our system employs proprietary large language models and machine learning pipelines. We do not use customer CRM directories or private client dialogue logs to train base foundation models without explicit corporate authorization. Custom AI agent parameters and data vectors are isolated in separate enterprise cloud containers.
                    </p>

                    <h4 className="font-semibold text-foreground text-base mt-6">4. Global Jurisdictional Standards (CCPA & GDPR)</h4>
                    <p>
                      We comply fully with the California Consumer Privacy Act (CCPA) and the General Data Protection Regulation (GDPR). Users retain the right to download, audit, or request permanent deletion of their CRM directories and conversation logs from our global cloud servers in Fremont, California, and integrated regional data centers.
                    </p>

                    <h4 className="font-semibold text-foreground text-base mt-6">5. Data Retention Schedules</h4>
                    <p>
                      Active conversation timelines, activity maps, and billing logs are kept for the lifetime of your business subscription. Upon cancellation or termination of services, Automate Flow AI will purge all contact profiles and client chats within sixty (60) days, unless legally required to retain transaction nodes.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-foreground/90 font-medium">
                      Last Updated: May 28, 2026
                    </p>
                    <p>
                      Welcome to Automate Flow AI. By accessing or provisioning our AI automation services, visual workflow triggers, WhatsApp messaging gateways, or billing dashboards, you agree to comply with the following Terms and Conditions of service.
                    </p>

                    <h4 className="font-semibold text-foreground text-base mt-6">1. Messaging Compliance & Acceptable Use Policy</h4>
                    <p>
                      Users must comply with regional cellular carrier guidelines, TCPA regulations, and official WhatsApp Business API policies. Automated spamming, mass non-consensual outbound messaging, or broadcasting prohibited content is strictly forbidden. We reserve the right to suspend or block rate-limited API profiles violating messaging guidelines.
                    </p>

                    <h4 className="font-semibold text-foreground text-base mt-6">2. CRM Service Level Agreements (SLA)</h4>
                    <p>
                      While we target a 99.9% uptime rate for our cloud core, Automate Flow AI is not liable for downstream failures caused by WhatsApp API outages, carrier-side delivery blockages, or third-party webhooks failures. Services are delivered on an "as is" and "as available" basis.
                    </p>

                    <h4 className="font-semibold text-foreground text-base mt-6">3. Subscription, Cancellation & Billing Policies</h4>
                    <p>
                      Automate Flow AI bills monthly or annually according to your selected plan (Starter, Pro, or Enterprise). All fees are non-refundable after the completion of your initial 7-Day Free Trial. Account cancellations must be submitted directly through your active billing dashboard at least 24 hours prior to your monthly renewal date.
                    </p>

                    <h4 className="font-semibold text-foreground text-base mt-6">4. AI Disclaimers & Operational Liability Limits</h4>
                    <p>
                      Our artificial intelligence modules deliver text content, follow-ups, and calendar schedules based on custom guidelines. All AI outputs are advisory. The client assumes 100% operational liability for agreements made, conversations held, and appointments booked by autonomous agents. Our maximum aggregate liability is limited to the fees paid to us in the prior three months.
                    </p>

                    <h4 className="font-semibold text-foreground text-base mt-6">5. Intellectual Property & California Jurisdiction</h4>
                    <p>
                      All platform components, visual builders, and underlying automation engines remain the exclusive property of Automate Flow AI. These terms are governed under the laws of the State of California, United States, and any disputes shall be resolved in courts located in Alameda County, California.
                    </p>
                  </>
                )}
              </div>
            </FluidGlass>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
