// src/components/ParticlesBackground.jsx
import React from "react";
import Particles from "@tsparticles/react";  // ✅ updated
import { loadFull } from "@tsparticles/engine"; // ✅ updated

function ParticlesBackground() {
  const particlesInit = async (engine) => {
    await loadFull(engine); // ✅ now loadFull works!
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
      options={{
        background: {
          color: { value: "#000000" },
        },
        fullScreen: { enable: true },
        fpsLimit: 60,
        particles: {
          number: {
            value: 120,
            density: { enable: true, area: 800 },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: { min: 2, max: 4 } },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: { default: "out" },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBackground;
