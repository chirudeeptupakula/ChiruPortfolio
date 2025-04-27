// src/components/ParticlesBackground.jsx
import React from "react";
import Particles from "react-tsparticles";

function ParticlesBackground() {
  return (
    <Particles
      id="tsparticles"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // behind everything
      }}
      options={{
        background: {
          color: {
            value: "#000000", // ✅ Black full background
          },
        },
        fullScreen: { enable: true },
        fpsLimit: 60,
        particles: {
          number: {
            value: 120, // enough stars
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#ffffff", // white stars
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: true,
          },
          size: {
            value: { min: 2, max: 4 },
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBackground;
