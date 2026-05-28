import { useEffect, useRef } from 'react';
import {
  Clock,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three';

import './FloatingLines.css';

/* ─────────────────────────────────────────────────────────────────────────────
   VERTEX SHADER  (passthrough)
──────────────────────────────────────────────────────────────────────────── */
const vertexShader = `
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

/* ─────────────────────────────────────────────────────────────────────────────
   FRAGMENT SHADER
   Key compatibility requirement: GLSL ES 1.0 (WebGL 1) does NOT allow
   variable indexing of arrays.  All `lineGradient[idx]` accesses must use
   compile-time-constant indices — hence the explicit if-else ladder.
   Loop bounds must also be compile-time constants; we break out early.
──────────────────────────────────────────────────────────────────────────── */
const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec3  iResolution;
uniform float animationSpeed;

uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;

uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;

uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;

uniform vec3 topWavePosition;
uniform vec3 middleWavePosition;
uniform vec3 bottomWavePosition;

uniform vec2  iMouse;
uniform bool  interactive;
uniform float bendRadius;
uniform float bendStrength;
uniform float bendInfluence;

uniform bool  parallax;
uniform float parallaxStrength;
uniform vec2  parallaxOffset;

uniform vec3 lineGradient[8];
uniform int  lineGradientCount;

const vec3 BLACK = vec3(0.0);
const vec3 TEAL  = vec3(14.0,  165.0, 164.0) / 255.0;
const vec3 BLUE  = vec3(100.0, 245.0, 210.0) / 255.0;

mat2 rotate(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

vec3 background_color(vec2 uv) {
  float y = sin(uv.x - 0.2) * 0.3 - 0.1;
  float m = uv.y - y;
  vec3 col = mix(BLUE, BLACK, smoothstep(0.0, 1.0, abs(m)));
  col     += mix(TEAL, BLACK, smoothstep(0.0, 1.0, abs(m - 0.8)));
  return col * 0.5;
}

/* Safe gradient lookup — no variable array indexing */
vec3 getLineColor(float t, vec3 baseColor) {
  if (lineGradientCount <= 0) return baseColor;
  if (lineGradientCount == 1) return lineGradient[0] * 0.8;

  float ct = clamp(t, 0.0, 0.9999);
  float s  = ct * float(lineGradientCount - 1);
  int   i  = int(floor(s));
  float f  = fract(s);

  vec3 c1 = lineGradient[0];
  vec3 c2 = lineGradient[1];
  if      (i == 1) { c1 = lineGradient[1]; c2 = lineGradient[2]; }
  else if (i == 2) { c1 = lineGradient[2]; c2 = lineGradient[3]; }
  else if (i == 3) { c1 = lineGradient[3]; c2 = lineGradient[4]; }
  else if (i == 4) { c1 = lineGradient[4]; c2 = lineGradient[5]; }
  else if (i == 5) { c1 = lineGradient[5]; c2 = lineGradient[6]; }
  else if (i >= 6) { c1 = lineGradient[6]; c2 = lineGradient[7]; }

  return mix(c1, c2, f) * 0.85;
}

float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv, bool shouldBend) {
  float t   = iTime * animationSpeed;
  float amp = sin(offset + t * 0.2) * 0.3;
  float y   = sin(uv.x + offset + t * 0.1) * amp;

  if (shouldBend) {
    vec2  d   = screenUv - mouseUv;
    float infl = exp(-dot(d, d) * (bendRadius * 0.45));
    y += (mouseUv.y - screenUv.y) * infl * bendStrength * bendInfluence * 1.6;
  }

  float m = uv.y - y;
  float core = 0.0016 / (abs(m) + 0.0003);
  float glow = 0.005 / (abs(m) + 0.009);
  return core * 1.0 + glow * 0.25;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
  uv.y *= -1.0;
  if (parallax) uv += parallaxOffset;

  vec3 b  = lineGradientCount > 0 ? vec3(0.0) : background_color(uv);
  vec3 col = vec3(0.0);

  vec2 mUv = vec2(0.0);
  if (interactive) {
    mUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;
    mUv.y *= -1.0;
  }

  /* ---- BOTTOM ---- */
  if (enableBottom) {
    for (int i = 0; i < 30; ++i) {
      if (i >= bottomLineCount) break;
      float fi  = float(i);
      float t   = fi / max(float(bottomLineCount - 1), 1.0);
      vec3  lc  = getLineColor(t, b);
      float ang = bottomWavePosition.z * log(length(uv) + 1.0);
      vec2  ruv = uv * rotate(ang);
      col += lc * wave(
        ruv + vec2(bottomLineDistance * fi + bottomWavePosition.x, bottomWavePosition.y),
        1.5 + 0.2 * fi, uv, mUv, interactive
      ) * 0.22;
    }
  }

  /* ---- MIDDLE ---- */
  if (enableMiddle) {
    for (int i = 0; i < 30; ++i) {
      if (i >= middleLineCount) break;
      float fi  = float(i);
      float t   = fi / max(float(middleLineCount - 1), 1.0);
      vec3  lc  = getLineColor(t, b);
      float ang = middleWavePosition.z * log(length(uv) + 1.0);
      vec2  ruv = uv * rotate(ang);
      col += lc * wave(
        ruv + vec2(middleLineDistance * fi + middleWavePosition.x, middleWavePosition.y),
        2.0 + 0.15 * fi, uv, mUv, interactive
      );
    }
  }

  /* ---- TOP ---- */
  if (enableTop) {
    for (int i = 0; i < 30; ++i) {
      if (i >= topLineCount) break;
      float fi  = float(i);
      float t   = fi / max(float(topLineCount - 1), 1.0);
      vec3  lc  = getLineColor(t, b);
      float ang = topWavePosition.z * log(length(uv) + 1.0);
      vec2  ruv = uv * rotate(ang);
      ruv.x    *= -1.0;
      col += lc * wave(
        ruv + vec2(topLineDistance * fi + topWavePosition.x, topWavePosition.y),
        1.0 + 0.2 * fi, uv, mUv, interactive
      ) * 0.12;
    }
  }

  fragColor = vec4(col, 1.0);
}

void main() {
  vec4 c = vec4(0.0);
  mainImage(c, gl_FragCoord.xy);
  float alpha = clamp(max(c.r, max(c.g, c.b)), 0.0, 1.0);
  gl_FragColor = vec4(c.rgb, alpha);
}
`;

/* ─────────────────────────────────────────────────────────────────────────────
   TYPES
──────────────────────────────────────────────────────────────────────────── */
const MAX_STOPS = 8;

function hexToVec3(hex: string): Vector3 {
  let v = hex.trim().replace(/^#/, '');
  if (v.length === 3) v = v[0]+v[0]+v[1]+v[1]+v[2]+v[2];
  return new Vector3(
    parseInt(v.slice(0, 2), 16) / 255,
    parseInt(v.slice(2, 4), 16) / 255,
    parseInt(v.slice(4, 6), 16) / 255,
  );
}

interface WavePos { x: number; y: number; rotate: number }

interface FloatingLinesProps {
  linesGradient?:      string[];
  enabledWaves?:       Array<'top' | 'middle' | 'bottom'>;
  lineCount?:          number | number[];
  lineDistance?:       number | number[];
  topWavePosition?:    WavePos;
  middleWavePosition?: WavePos;
  bottomWavePosition?: WavePos;
  animationSpeed?:     number;
  interactive?:        boolean;
  bendRadius?:         number;
  bendStrength?:       number;
  mouseDamping?:       number;
  parallax?:           boolean;
  parallaxStrength?:   number;
  mixBlendMode?:       React.CSSProperties['mixBlendMode'];
}

/* ─────────────────────────────────────────────────────────────────────────────
   COMPONENT
──────────────────────────────────────────────────────────────────────────── */
export default function FloatingLines({
  linesGradient,
  enabledWaves      = ['top', 'middle', 'bottom'],
  lineCount         = [6],
  lineDistance      = [5],
  topWavePosition,
  middleWavePosition,
  bottomWavePosition = { x: 2.0, y: -0.7, rotate: -1 },
  animationSpeed    = 1,
  interactive       = true,
  bendRadius        = 5.0,
  bendStrength      = -0.5,
  mouseDamping      = 0.05,
  parallax          = true,
  parallaxStrength  = 0.2,
  mixBlendMode      = 'screen',
}: FloatingLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  /* Smooth mouse state — persists across re-renders */
  const targetMouse    = useRef(new Vector2(-1e4, -1e4));
  const currentMouse   = useRef(new Vector2(-1e4, -1e4));
  const targetInfl     = useRef(0);
  const currentInfl    = useRef(0);
  const targetParallax = useRef(new Vector2(0, 0));
  const curParallax    = useRef(new Vector2(0, 0));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    /* ── helpers ─────────────────────────────────── */
    const cnt = (type: 'top' | 'middle' | 'bottom') => {
      if (typeof lineCount === 'number') return lineCount;
      const i = enabledWaves.indexOf(type);
      return i >= 0 ? ((lineCount as number[])[i] ?? 6) : 0;
    };
    const dst = (type: 'top' | 'middle' | 'bottom') => {
      if (typeof lineDistance === 'number') return lineDistance;
      const i = enabledWaves.indexOf(type);
      return i >= 0 ? ((lineDistance as number[])[i] ?? 5) : 5;
    };

    const hasTop = enabledWaves.includes('top');
    const hasMid = enabledWaves.includes('middle');
    const hasBot = enabledWaves.includes('bottom');

    /* ── Three.js setup ──────────────────────────── */
    let alive = true;

    const scene    = new Scene();
    const camera   = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
    camera.position.z = 1;

    let renderer: WebGLRenderer;
    try {
      renderer = new WebGLRenderer({ antialias: true, alpha: true });
    } catch (err) {
      console.warn('[FloatingLines] WebGL unavailable:', err);
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    /* Canvas fills the container via absolute positioning */
    const canvas = renderer.domElement;
    canvas.style.position = 'absolute';
    canvas.style.top      = '0';
    canvas.style.left     = '0';
    canvas.style.width    = '100%';
    canvas.style.height   = '100%';
    canvas.style.display  = 'block';
    container.appendChild(canvas);

    /* ── Uniforms ────────────────────────────────── */
    const uniforms = {
      iTime:          { value: 0 },
      iResolution:    { value: new Vector3(1, 1, 1) },
      animationSpeed: { value: animationSpeed },

      enableTop:    { value: hasTop },
      enableMiddle: { value: hasMid },
      enableBottom: { value: hasBot },

      topLineCount:    { value: hasTop ? cnt('top')    : 0 },
      middleLineCount: { value: hasMid ? cnt('middle') : 0 },
      bottomLineCount: { value: hasBot ? cnt('bottom') : 0 },

      topLineDistance:    { value: hasTop ? dst('top')    * 0.01 : 0.01 },
      middleLineDistance: { value: hasMid ? dst('middle') * 0.01 : 0.01 },
      bottomLineDistance: { value: hasBot ? dst('bottom') * 0.01 : 0.01 },

      topWavePosition: {
        value: new Vector3(
          topWavePosition?.x      ?? 10.0,
          topWavePosition?.y      ?? 0.5,
          topWavePosition?.rotate ?? -0.4,
        ),
      },
      middleWavePosition: {
        value: new Vector3(
          middleWavePosition?.x      ?? 5.0,
          middleWavePosition?.y      ?? 0.0,
          middleWavePosition?.rotate ?? 0.2,
        ),
      },
      bottomWavePosition: {
        value: new Vector3(
          bottomWavePosition?.x      ?? 2.0,
          bottomWavePosition?.y      ?? -0.7,
          bottomWavePosition?.rotate ?? 0.4,
        ),
      },

      iMouse:        { value: new Vector2(-1e4, -1e4) },
      interactive:   { value: interactive },
      bendRadius:    { value: bendRadius },
      bendStrength:  { value: bendStrength },
      bendInfluence: { value: 0 },

      parallax:         { value: parallax },
      parallaxStrength: { value: parallaxStrength },
      parallaxOffset:   { value: new Vector2(0, 0) },

      lineGradient:      { value: Array.from({ length: MAX_STOPS }, () => new Vector3(1, 1, 1)) },
      lineGradientCount: { value: 0 },
    };

    if (linesGradient && linesGradient.length > 0) {
      const stops = linesGradient.slice(0, MAX_STOPS);
      uniforms.lineGradientCount.value = stops.length;
      stops.forEach((hex, i) => {
        const c = hexToVec3(hex);
        uniforms.lineGradient.value[i].set(c.x, c.y, c.z);
      });
    }

    const material = new ShaderMaterial({ uniforms, vertexShader, fragmentShader });
    const geometry = new PlaneGeometry(2, 2);
    scene.add(new Mesh(geometry, material));

    const clock = new Clock();

    /* ── Sizing ──────────────────────────────────── */
    const resize = () => {
      if (!alive) return;
      /* Always fall back to viewport if container has no size yet */
      const w = container.clientWidth  || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      renderer.setSize(w, h, false);
      uniforms.iResolution.value.set(canvas.width, canvas.height, 1);
    };
    resize();

    const ro = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(resize) : null;
    if (ro) ro.observe(container);
    window.addEventListener('resize', resize);

    /* ── Mouse — on window so pointer-events:none never blocks it ── */
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x    = e.clientX - rect.left;
      const y    = e.clientY - rect.top;
      const dpr  = renderer.getPixelRatio();

      targetMouse.current.set(x * dpr, (rect.height - y) * dpr);
      targetInfl.current = 1.0;

      if (parallax) {
        targetParallax.current.set(
          ((x - rect.width  / 2) / rect.width)  * parallaxStrength,
          -((y - rect.height / 2) / rect.height) * parallaxStrength,
        );
      }
    };
    const onMouseLeave = () => { targetInfl.current = 0; };

    if (interactive) {
      window.addEventListener('mousemove',  onMouseMove);
      window.addEventListener('mouseleave', onMouseLeave);
    }

    /* ── Render loop ─────────────────────────────── */
    let raf = 0;
    const loop = () => {
      if (!alive) return;
      uniforms.iTime.value = clock.getElapsedTime();

      if (interactive) {
        currentMouse.current.lerp(targetMouse.current, mouseDamping);
        uniforms.iMouse.value.copy(currentMouse.current);
        currentInfl.current += (targetInfl.current - currentInfl.current) * mouseDamping;
        uniforms.bendInfluence.value = currentInfl.current;
      }

      if (parallax) {
        curParallax.current.lerp(targetParallax.current, mouseDamping);
        uniforms.parallaxOffset.value.copy(curParallax.current);
      }

      renderer.render(scene, camera);
      raf = requestAnimationFrame(loop);
    };
    loop();

    /* ── Cleanup ─────────────────────────────────── */
    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      if (ro) ro.disconnect();
      window.removeEventListener('resize', resize);
      if (interactive) {
        window.removeEventListener('mousemove',  onMouseMove);
        window.removeEventListener('mouseleave', onMouseLeave);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      try { renderer.forceContextLoss(); } catch (_) { /* noop */ }
      if (canvas.parentElement) canvas.parentElement.removeChild(canvas);
    };
  // Stringify deps to avoid React array-identity false-positives
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    // eslint-disable-next-line react-hooks/exhaustive-deps
    JSON.stringify(linesGradient),
    JSON.stringify(enabledWaves),
    JSON.stringify(lineCount),
    JSON.stringify(lineDistance),
    JSON.stringify(topWavePosition),
    JSON.stringify(middleWavePosition),
    JSON.stringify(bottomWavePosition),
    animationSpeed, interactive, bendRadius, bendStrength,
    mouseDamping, parallax, parallaxStrength,
  ]);

  return (
    <div
      ref={containerRef}
      className="floating-lines-container"
      style={{ mixBlendMode }}
    />
  );
}
