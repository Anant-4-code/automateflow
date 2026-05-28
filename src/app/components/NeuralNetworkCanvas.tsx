import { useEffect, useRef } from 'react';

interface NeuralNetworkCanvasProps {
  theme: string;
}

export default function NeuralNetworkCanvas({ theme }: NeuralNetworkCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, tx: -1000, ty: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Adaptive performance configuration
    const isMobile = width < 768;
    const nodeCount = isMobile ? 28 : 68;
    const connectionDist = isMobile ? 100 : 135;
    const cursorRadius = 160;

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseRadius: number;
      depth: number;
      pulseSpeed: number;
      pulsePhase: number;
      baseAlpha: number;
      alpha: number;
    }

    const nodes: Node[] = [];

    // Initialize nodes with parallax depth layers
    for (let i = 0; i < nodeCount; i++) {
      const depth = Math.random() * 1.2 + 0.4; // Simulated parallax depth (0.4 to 1.6)
      const baseRadius = (Math.random() * 1.8 + 0.8) * (depth > 1 ? 1.25 : 0.8);
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        // Slower movement for background nodes, creating architectural parallax depth
        vx: (Math.random() - 0.5) * 0.12 * (1 / depth),
        vy: (Math.random() - 0.5) * 0.12 * (1 / depth),
        baseRadius,
        depth,
        pulseSpeed: 0.003 + Math.random() * 0.012,
        pulsePhase: Math.random() * Math.PI * 2,
        baseAlpha: Math.random() * 0.22 + 0.12,
        alpha: 0,
      });
    }

    // Dynamic resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Interactive mouse listeners
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.tx = e.clientX;
      mouseRef.current.ty = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.tx = -1000;
      mouseRef.current.ty = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    let mx = -1000;
    let my = -1000;

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse coordinate interpolation (lerping)
      const mouse = mouseRef.current;
      if (mouse.tx === -1000) {
        mx = -1000;
        my = -1000;
      } else {
        if (mx === -1000) {
          mx = mouse.tx;
          my = mouse.ty;
        } else {
          mx += (mouse.tx - mx) * 0.06; // Highly dampened lerp
          my += (mouse.ty - my) * 0.06;
        }
      }

      const centerCol = width / 2;
      const centerRow = height / 2;
      const clearZoneRadius = Math.max(width, height) * 0.42;

      // 1. Draw connection lines
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];

        // Compute center-clearance opacity scaling
        const dxCenter1 = n1.x - centerCol;
        const dyCenter1 = n1.y - centerRow;
        const distFromCenter1 = Math.sqrt(dxCenter1 * dxCenter1 + dyCenter1 * dyCenter1);
        const centerFactor1 = Math.min(1, Math.pow(distFromCenter1 / clearZoneRadius, 1.8));

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const dxCenter2 = n2.x - centerCol;
            const dyCenter2 = n2.y - centerRow;
            const distFromCenter2 = Math.sqrt(dxCenter2 * dxCenter2 + dyCenter2 * dyCenter2);
            const centerFactor2 = Math.min(1, Math.pow(distFromCenter2 / clearZoneRadius, 1.8));
            
            // Average center factor of both connecting nodes
            const combinedCenterFactor = (centerFactor1 + centerFactor2) / 2;

            // Fade line opacity elegantly as nodes drift apart
            let lineAlpha = (1 - dist / connectionDist) * 0.14 * combinedCenterFactor;

            // Brighten connection lines in mouse cursor proximity
            if (mx !== -1000) {
              const mxMid = (n1.x + n2.x) / 2;
              const myMid = (n1.y + n2.y) / 2;
              const dxMouse = mx - mxMid;
              const dyMouse = my - myMid;
              const mouseDist = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
              if (mouseDist < cursorRadius) {
                const mouseBoost = (1 - mouseDist / cursorRadius) * 0.22;
                lineAlpha += mouseBoost;
              }
            }

            if (lineAlpha > 0.005) {
              ctx.beginPath();
              ctx.moveTo(n1.x, n1.y);
              ctx.lineTo(n2.x, n2.y);
              
              // Color palettes matching theme
              if (theme === 'dark') {
                ctx.strokeStyle = `rgba(99, 200, 180, ${lineAlpha})`;
              } else {
                ctx.strokeStyle = `rgba(44, 95, 138, ${lineAlpha * 0.7})`;
              }

              // Visual connection thickness adapts based on distance and depth layers
              ctx.lineWidth = (0.4 + (1 - dist / connectionDist) * 0.6) * ((n1.depth + n2.depth) / 2.5);
              ctx.stroke();
            }
          }
        }
      }

      // 2. Draw active constellation nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Update independent breathing pulse
        n.pulsePhase += n.pulseSpeed;
        const pulse = Math.sin(n.pulsePhase) * 0.06;
        n.alpha = Math.max(0.04, n.baseAlpha + pulse);

        // Center clearance math
        const dxCenter = n.x - centerCol;
        const dyCenter = n.y - centerRow;
        const distFromCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
        const centerFactor = Math.min(1, Math.pow(distFromCenter / clearZoneRadius, 1.8));
        
        let finalAlpha = n.alpha * centerFactor;
        let renderScale = n.depth;

        // Interactive mouse magnetism & local brightness bloom
        if (mx !== -1000) {
          const dxMouse = mx - n.x;
          const dyMouse = my - n.y;
          const mouseDist = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          if (mouseDist < cursorRadius) {
            // Ultra-subtle, dampened magnetic pull towards cursor
            const magnetPull = (1 - mouseDist / cursorRadius) * 0.35;
            n.x += (mx - n.x) * magnetPull * 0.012;
            n.y += (my - n.y) * magnetPull * 0.012;

            // Proximity bloom scaling
            finalAlpha += (1 - mouseDist / cursorRadius) * 0.42;
            renderScale += (1 - mouseDist / cursorRadius) * 0.35;
          }
        }

        // Drift update
        n.x += n.vx;
        n.y += n.vy;

        // Ambient screen boundaries wrapping
        const boundaryBuffer = 15;
        if (n.x < -boundaryBuffer) n.x = width + boundaryBuffer;
        if (n.x > width + boundaryBuffer) n.x = -boundaryBuffer;
        if (n.y < -boundaryBuffer) n.y = height + boundaryBuffer;
        if (n.y > height + boundaryBuffer) n.y = -boundaryBuffer;

        // Render node dot
        if (finalAlpha > 0.01) {
          ctx.beginPath();
          const nodeRadius = n.baseRadius * renderScale;
          ctx.arc(n.x, n.y, nodeRadius, 0, Math.PI * 2);

          if (theme === 'dark') {
            ctx.fillStyle = `rgba(99, 200, 180, ${finalAlpha})`;
            // Node atmospheric bloom glow shadow
            ctx.shadowBlur = nodeRadius * 3.5;
            ctx.shadowColor = `rgba(99, 200, 180, ${finalAlpha * 0.85})`;
          } else {
            ctx.fillStyle = `rgba(44, 95, 138, ${finalAlpha * 0.85})`;
            ctx.shadowBlur = nodeRadius * 2.2;
            ctx.shadowColor = `rgba(44, 95, 138, ${finalAlpha * 0.5})`;
          }

          ctx.fill();
          // Immediately reset shadow config to protect canvas drawing pipelines
          ctx.shadowBlur = 0;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Event listener cleanups
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-1000"
      style={{
        mixBlendMode: theme === 'dark' ? 'screen' : 'multiply',
        opacity: theme === 'dark' ? 0.72 : 0.4,
      }}
    />
  );
}
