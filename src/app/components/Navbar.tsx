import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const navLinks = ['Home', 'Voyages', 'Worlds', 'Innovation', 'Plan Launch'];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="liquid-glass flex items-center justify-center rounded-full w-12 h-12">
          <span className="font-heading italic text-white lowercase text-lg">a</span>
        </div>

        {/* Center nav - desktop only */}
        <div className="hidden lg:flex liquid-glass rounded-full px-1.5 py-1.5 items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
          <button className="flex items-center gap-2 bg-white text-black rounded-full px-5 py-2 text-sm font-semibold whitespace-nowrap hover:bg-white/90 transition-colors">
            Claim a Spot
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* Right spacer */}
        <div className="w-12 h-12" />
      </div>
    </nav>
  );
}
