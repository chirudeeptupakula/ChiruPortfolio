import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function StarBackground() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        background: {
          color: "#000000"
        },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 2 } },
          move: { enable: true, speed: 0.6 }
        }
      }}
    />
  );
}

export default StarBackground;
