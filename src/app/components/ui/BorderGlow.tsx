import { useRef, useState } from 'react';
import './BorderGlow.css';

interface BorderGlowProps {
  children: React.ReactNode;
  className?: string;
  edgeSensitivity?: number; // default: 55
  glowRadius?: number;      // default: 30
  glowIntensity?: number;   // default: 0.7
  coneSpread?: number;      // default: 18
  animated?: boolean;       // default: false
  colors?: string[];        // default: ['#00ffd0', '#00c8ff', '#7df9ff']
  style?: React.CSSProperties;
}

export default function BorderGlow({
  children,
  className = '',
  edgeSensitivity = 55,
  glowRadius = 30,
  glowIntensity = 0.7,
  coneSpread = 18,
  animated = false,
  colors = ['#00ffd0', '#00c8ff', '#7df9ff'],
  style
}: BorderGlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  // Convert custom color arrays into gradient stops
  const primaryColor = colors[0] || '#00ffd0';
  const secondaryColor = colors[1] || '#00c8ff';
  const accentColor = colors[2] || '#7df9ff';

  const customBg = `radial-gradient(
    ${glowRadius}px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    ${primaryColor} 0%,
    ${secondaryColor} 50%,
    ${accentColor} 80%,
    transparent 100%
  )`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`border-glow-wrapper ${className}`}
      style={{
        ...style,
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`,
        '--glow-radius': `${glowRadius}px`,
        '--glow-intensity': glowIntensity,
      } as React.CSSProperties}
    >
      <div 
        className="border-glow-element" 
        style={{
          background: customBg,
          opacity: undefined // controlled by wrapper hover in CSS
        }}
      />
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
