# Interactive Physics Canvas Background 🌌

A production-grade, highly interactive particle background component built from scratch with React and the HTML5 Canvas API. 

Designed to serve as a premium backdrop for high-end web applications (like 3D product configurators or modern dashboards), this component features custom spring physics, responsive theming, and aggressive performance optimizations.

---

## ✨ Key Features

* 💥 **Kinetic Shockwaves:** Click or tap anywhere on the screen to trigger a physical repulsion wave that scatters the grid and rubber-bands back into place.
* 🌈 **Neon Bloom Hover:** As the cursor moves across the canvas, dots dynamically scale up and ignite into glowing, randomized neon colors using Canvas drop-shadows.
* ⚡ **Zero-Drain Performance:** Wrapped in an `IntersectionObserver`. The 60FPS animation loop completely halts the millisecond the canvas scrolls out of view, saving CPU cycles and battery life.
* 📱 **Mobile & Touch Optimized:** Built-in support for touch events, dynamic grid-density reduction for smaller screens, and resize debouncing.
* 🌗 **Theme Aware:** Smoothly interpolates RGB values to transition dot colors perfectly alongside Tailwind Dark Mode toggles.

---

## 🛠️ Tech Stack

* **Framework:** React (Vite)
* **Rendering:** HTML5 `<canvas>` API
* **Styling:** Tailwind CSS (for theme state)
* **Physics:** Custom JavaScript implementation (Lerping, Velocity, Spring mechanics)

---

## 🚀 Quick Start

Drop the component into your root `App.jsx` or layout wrapper. Because it has `pointer-events-none` applied by default, it will sit perfectly behind your main UI without blocking clicks or scrolls.

```jsx
import BackgroundCanvas from "./components/BackgroundCanvas";

function App() {
  return (
    <main className="relative min-h-screen bg-gray-100 dark:bg-neutral-900">
      
      {/* The Interactive Background */}
      <BackgroundCanvas 
        dotGap={30} 
        dotRadius={2} 
        interactionRadius={120} 
        lightColor="#000000" 
        darkColor="#ffffff" 
      />

      {/* Your Foreground UI */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold">Premium UI</h1>
      </div>
      
    </main>
  );
}
```

<img width="1024" height="559" alt="image" src="https://github.com/user-attachments/assets/92371674-c7f6-4d64-a6e4-e10f0a7d7282" />


🧠 Architecture Highlights
Separation of Concerns:
1. The logic is strictly divided into Particle.js (rendering/state), physics.js (math/movement), and Mouse.js (event tracking), keeping the React layer remarkably thin.

2. Custom Color Interpolation: Hex codes are converted to RGB objects, interpolated frame-by-frame, and converted back to seamlessly blend colors without CSS transitions.

3. O(N) Math Optimization: The shockwave array calculation relies on raw distance geometry rather than heavy physics libraries, maintaining a buttery smooth frame rate even with thousands of active particles.
