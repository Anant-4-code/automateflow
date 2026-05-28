import logoLightMode from '../../../img/Black.png';
import logoDarkMode from '../../../img/White.png';

interface FooterProps {
  onOpenModal?: (type: 'privacy' | 'terms') => void;
  theme?: string;
}

export default function Footer({ onOpenModal, theme = 'dark' }: FooterProps) {
  return (
    <footer className="bg-background border-t border-border/10 py-16 px-4 md:px-8 transition-colors duration-500 relative overflow-hidden">
      {/* Subtle underglow line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Left - Logo & Tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <a 
                href="#home" 
                aria-label="Automate Flow AI — Home"
                style={{ textDecoration: 'none' }}
              >
                <div className="logo-only">
                  <img 
                    src={theme === 'dark' ? logoDarkMode : logoLightMode} 
                    alt="Automate Flow AI" 
                    className="logo-icon"
                  />
                </div>
              </a>
            </div>
            <p className="font-body font-light text-xs text-foreground/40 max-w-sm leading-relaxed mb-4 transition-colors duration-500">
              A centralized AI-powered business operating system replacing 12 disconnected platforms to capture leads, orchestrate WhatsApp engagement, and automate workflows.
            </p>
            <p className="font-body text-[11px] text-foreground/30 leading-snug transition-colors duration-500">
              Fremont Office: 45128 Warm Springs Blvd #319, Fremont, CA 94539, USA
              <br />
              Contact: ceo@automateflow.tech
            </p>
          </div>

          {/* Center - Links */}
          <div className="flex flex-col gap-2.5">
            <div className="font-body font-semibold text-xs text-foreground/80 tracking-wider uppercase mb-2">Platform</div>
            <a
              href="#home"
              className="font-body text-xs text-foreground/40 hover:text-foreground/80 transition-colors duration-300"
            >
              Home Autopilot
            </a>
            <a
              href="#features"
              className="font-body text-xs text-foreground/40 hover:text-foreground/80 transition-colors duration-300"
            >
              System Features
            </a>
            <a
              href="#pricing"
              className="font-body text-xs text-foreground/40 hover:text-foreground/80 transition-colors duration-300"
            >
              Pricing Model
            </a>
          </div>

          {/* Right - Legal Links */}
          <div className="flex flex-col gap-2.5">
            <div className="font-body font-semibold text-xs text-foreground/80 tracking-wider uppercase mb-2">Legal Operations</div>
            {onOpenModal && (
              <>
                <button
                  onClick={() => onOpenModal('privacy')}
                  className="text-left font-body text-xs text-foreground/40 hover:text-foreground/80 transition-colors duration-300 bg-transparent border-none cursor-pointer p-0"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => onOpenModal('terms')}
                  className="text-left font-body text-xs text-foreground/40 hover:text-foreground/80 transition-colors duration-300 bg-transparent border-none cursor-pointer p-0"
                >
                  Terms & Conditions
                </button>
              </>
            )}
            <p className="font-body text-[11px] text-foreground/20 mt-4 transition-colors duration-500">
              © 2026 Automate Flow AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
