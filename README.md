# 🌌 AutomateFlow — Cinematic AI Automation Platform

AutomateFlow is an ultra-premium, cinematic, and immersive landing page designed for the next-generation AI Automation Platform. Featuring dynamic dark/light modes, beautiful glassmorphism, interactive neural network physics simulations, and floating volumetric ambient effects, this application delivers a captivating visual experience right from the first frame.

---

## 🌟 Key Visual & Interactive Features

- **🧠 Dynamic Neural Network Canvas**: An active background canvas simulation that dynamically adjusts nodes, connections, and interactive attraction-repulsion physics based on the selected theme (Light/Dark mode) and mouse cursor movement.
- **✨ Volumetric Atmospheric Overlays**: Embedded cinematic fog layers, interactive light beams, custom noise grain overlays, and floating ambient particles creating a deep, three-dimensional spatial experience.
- **🎨 Ultra-Premium UI Components**:
  - **Gooey Nav Menu**: High-performance CSS filter-based gooey toggle navigation menu with smooth morphing transitions.
  - **Spotlight Cards**: Premium interactive cards with responsive cursor-following radial gradient lighting.
  - **Border Glow Effects**: CSS-driven glowing gradient borders that cycle through harmonized modern palettes.
  - **Fluid Glass Layouts**: Ultra-modern frosted-glass styling elements using complex backdrop-filter and transparency overlays.
- **📱 Fully Responsive Design**: Seamless fluid styling optimized for all device sizes (mobile, tablet, desktop) using tailored media queries and container grids.
- **🌓 Adaptive Theme Engine**: Instantly transitions the entire environment (including interactive backgrounds and animations) between deep space-dark and modern high-contrast light mode, with local storage state persistence.

---

## 🛠️ Technology Stack

- **Core Framework**: React (v18.3.1) with TypeScript
- **Bundler & Tooling**: Vite (v6)
- **Styling Engine**: Modern Vanilla CSS, TailwindCSS (v4), custom @tailwindcss/vite compiler
- **Animation Framework**: Motion (Framer Motion v12) for micro-animations and page transitions
- **Icons & Graphics**: Lucide React & custom SVG path drawings
- **Premium Components**: Handcrafted custom extensions, canvas physics engine, and integrated Shadcn UI blocks

---

## ⚙️ Project Structure

```bash
site/
├── public/                 # Static assets and icons
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ui/         # Reusable premium UI components (GooeyNav, SpotlightCard, etc.)
│   │   │   ├── ...         # Section-specific components (Hero, FAQ, AllFeatures, Pricing, etc.)
│   │   │   └── App.tsx     # Main application core assembly
│   │   └── main.tsx        # React entrypoint
│   └── index.css           # Global typography, color variables, and ambient overlays
├── package.json            # Core dependencies & scripts
└── vite.config.ts          # Vite compilation & compiler plugins config
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine (v18.x or above is highly recommended).

### Installation

Install the required npm packages:

```bash
npm install
```

### Running Locally

To fire up the blazing-fast local development server:

```bash
npm run dev
```

The application will launch on your local host (usually `http://localhost:5173/`).

### Building for Production

Compile and bundle the production build with optimization:

```bash
npm run build
```

The static output will be generated inside the `dist/` directory, ready to be hosted on any high-performance CDN.

---

## ☁️ Deploying to Vercel

To host this premium landing page on Vercel, follow these direct, step-by-step instructions:

1. **Push your code to GitHub** (Ensure your repository is initialized and pushed).
2. **Import into Vercel**:
   - Go to your Vercel Dashboard and click **Add New** → **Project**.
   - Select your `automateflow` repository.
3. **⚠️ Adjust framework settings (CRITICAL)**:
   - Vercel may incorrectly detect the framework preset as **VitePress**.
   - Under **Framework Preset**, click the dropdown and change it from `VitePress` to **`Vite`**.
4. **Build & Output Settings**:
   - Vercel will auto-fill the configuration correctly once the framework is changed to **Vite**:
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`
5. **Click Deploy** 🚀

Vercel will build and launch your cinematic landing page globally in seconds!

---

## 📄 License

This landing page was crafted with precision. Components derived from shadcn/ui are governed by the MIT License. High-fidelity static media files are covered under standard licensing conditions (Unsplash License).