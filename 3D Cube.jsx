import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-900 text-white p-6 md:p-12 relative overflow-hidden">
      {/* Background Particles */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-5 animate-pulse"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 4 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-400">
            Interactive 3D Tech Cube
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Explore the future of design and development. Hover to pause the rotation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* 3D Cube */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="scene w-64 h-64 md:w-80 md:h-80 card shadow-2xl">
              <div className="cube">
                {/* Innovation Hub */}
                <div className="cube-face front flex flex-col items-center justify-center p-4">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <span className="font-semibold text-center">Innovation Hub</span>
                </div>

                {/* Future Vision */}
                <div className="cube-face back flex flex-col items-center justify-center p-4">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  <span className="font-semibold text-center">Future Vision</span>
                </div>

                {/* Code Engine */}
                <div className="cube-face right flex flex-col items-center justify-center p-4">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                  <span className="font-semibold text-center">Code Engine</span>
                </div>

                {/* Design Studio */}
                <div className="cube-face left flex flex-col items-center justify-center p-4">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  <span className="font-semibold text-center">Design Studio</span>
                </div>

                {/* Cloud Nexus */}
                <div className="cube-face top flex flex-col items-center justify-center p-4">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                  </svg>
                  <span className="font-semibold text-center">Cloud Nexus</span>
                </div>

                {/* Data Vault */}
                <div className="cube-face bottom flex flex-col items-center justify-center p-4">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                  <span className="font-semibold text-center">Data Vault</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info Panel */}
          <div className="w-full lg:w-1/2 bg-black bg-opacity-30 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white border-opacity-20">
            <h2 className="text-2xl font-bold mb-4">Explore the Cube</h2>
            <p className="text-gray-200 mb-4">
              This interactive 3D cube showcases different aspects of modern web development using only React and TailwindCSS.
            </p>
            <ul className="space-y-3 text-gray-300 list-disc pl-5">
              <li>Smooth 3D animation with CSS transforms</li>
              <li>Creative naming and visual icons per face</li>
              <li>Fully responsive and mobile-friendly</li>
              <li>Modern glassmorphism styling</li>
            </ul>
            <button className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Styles for 3D Cube */}
      <style>
        {`
          .scene {
            perspective: 800px;
            width: 256px;
            height: 256px;
            margin: 0 auto;
          }

          .cube {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            animation: spin 12s infinite linear;
            transition: transform 0.5s ease-out;
          }

          .scene:hover .cube {
            animation-play-state: paused;
            transform: rotateX(25deg) rotateY(25deg) scale(1.1);
          }

          .cube-face {
            position: absolute;
            width: 256px;
            height: 256px;
            background: rgba(255, 255, 255, 0.07);
            border: 2px solid rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 20px;
            font-size: 1rem;
            color: #fff;
            transition: all 0.3s ease-in-out;
            cursor: grab;
          }

          .cube-face:hover {
            background: rgba(255, 255, 255, 0.15);
            transform: scale(1.05);
            box-shadow: 0 0 25px rgba(255, 255, 255, 0.2);
          }

          .front  { transform: translateZ(128px); }
          .back   { transform: rotateY(180deg) translateZ(128px); }
          .right  { transform: rotateY(90deg) translateZ(128px); }
          .left   { transform: rotateY(-90deg) translateZ(128px); }
          .top    { transform: rotateX(90deg) translateZ(128px); }
          .bottom { transform: rotateX(-90deg) translateZ(128px); }

          @keyframes spin {
            from {
              transform: rotateX(0deg) rotateY(0deg);
            }
            to {
              transform: rotateX(360deg) rotateY(360deg);
            }
          }

          .icon {
            width: 64px;
            height: 64px;
            margin-bottom: 10px;
          }

          .card {
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }

          .card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          }
        `}
      </style>
    </div>
  );
}
