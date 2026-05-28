import { useRef, ReactNode } from 'react';
import './FluidGlass.css';

interface FluidGlassProps {
  children: ReactNode;
  className?: string;
  variant?: 'normal' | 'strong' | 'water';
  spotlightColor?: string;
  interactive?: boolean;
  style?: React.CSSProperties;
}

export default function FluidGlass({
  children,
  className = '',
  variant = 'normal',
  spotlightColor = 'rgba(99, 200, 180, 0.15)',
  interactive = true,
  style
}: FluidGlassProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ref.current.style.setProperty('--mouse-x', `${x}px`);
    ref.current.style.setProperty('--mouse-y', `${y}px`);
    ref.current.style.setProperty('--spotlight-color', spotlightColor);
  };

  const variantClass = variant === 'strong' 
    ? 'fluid-glass-strong' 
    : variant === 'water' 
      ? 'fluid-glass-water' 
      : 'fluid-glass-normal';

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`fluid-glass-panel ${variantClass} ${className}`}
      style={style}
    >
      <div className="fluid-glass-glare" />
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
