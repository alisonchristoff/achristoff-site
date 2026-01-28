"use client"

import React, { useState, useEffect, useRef } from 'react';

interface ButterflyAnimationProps {
  onComplete: () => void;
}

const ButterflyAnimation: React.FC<ButterflyAnimationProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'flying' | 'unlocking' | 'complete'>('flying');
  const stageRef = useRef<'flying' | 'unlocking' | 'complete'>('flying');
  const audioContextRef = useRef<AudioContext | null>(null);
  const [sparkles, setSparkles] = useState<number[]>([]);

  useEffect(() => {
    stageRef.current = stage;
  }, [stage]);

  useEffect(() => {
    audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();

    const flyingDuration = 4000;
    const unlockingDuration = 500;
    const holdDuration = 300;

    const flyingTimer = setTimeout(() => {
      play8BitAchievement();
      play8BitUnlock();
      setStage('unlocking');
    }, flyingDuration);

    const completeTimer = setTimeout(() => {
      setStage('complete');
      onComplete();
    }, flyingDuration + unlockingDuration + holdDuration);

    const flutterInterval = setInterval(() => {
      if (stageRef.current === 'flying') play8BitFlutter();
    }, 600);

    const sparkleInterval = setInterval(() => {
      if (stageRef.current === 'flying') {
        setSparkles(prev => [...prev.slice(-8), Date.now()]);
      }
    }, 150);

    return () => {
      clearTimeout(flyingTimer);
      clearTimeout(completeTimer);
      clearInterval(flutterInterval);
      clearInterval(sparkleInterval);
    };
  }, [onComplete]);

  const play8BitFlutter = () => {
    if (!audioContextRef.current) return;
    const ctx = audioContextRef.current;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'square';
    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.setValueAtTime(800, ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.03, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.005, ctx.currentTime + 0.1);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.1);
  };

  const play8BitAchievement = () => {
    if (!audioContextRef.current) return;
    const ctx = audioContextRef.current;

    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'square';
      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.15);
      gain.gain.setValueAtTime(0.06, ctx.currentTime + i * 0.15);
      gain.gain.exponentialRampToValueAtTime(0.005, ctx.currentTime + i * 0.15 + 0.4);

      osc.start(ctx.currentTime + i * 0.15);
      osc.stop(ctx.currentTime + i * 0.15 + 0.4);
    });
  };

  const play8BitUnlock = () => {
    if (!audioContextRef.current) return;
    const ctx = audioContextRef.current;

    setTimeout(() => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'square';
      filter.type = 'lowpass';
      filter.frequency.value = 200;

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.frequency.setValueAtTime(80, ctx.currentTime);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.005, ctx.currentTime + 0.08);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.08);
    }, 100);
  };

  const butterflySprite = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cstyle%3Erect%7Bshape-rendering:crispEdges%7D%3C/style%3E%3C!-- Body --%3E%3Crect x='15' y='8' width='2' height='2' fill='%23000'/%3E%3Crect x='15' y='10' width='2' height='2' fill='%23FFD700'/%3E%3Crect x='15' y='12' width='2' height='2' fill='%23FFD700'/%3E%3Crect x='15' y='14' width='2' height='2' fill='%23FFD700'/%3E%3Crect x='15' y='16' width='2' height='2' fill='%23FFD700'/%3E%3Crect x='15' y='18' width='2' height='2' fill='%23FFD700'/%3E%3Crect x='15' y='20' width='2' height='2' fill='%23FFD700'/%3E%3Crect x='15' y='22' width='2' height='2' fill='%23000'/%3E%3C!-- Left Wing --%3E%3Crect x='7' y='10' width='2' height='2' fill='%23FF69B4'/%3E%3Crect x='9' y='10' width='2' height='2' fill='%23FF69B4'/%3E%3Crect x='7' y='12' width='2' height='2' fill='%23FF69B4'/%3E%3Crect x='9' y='12' width='2' height='2' fill='%23FFD700'/%3E%3Crect x='11' y='12' width='2' height='2' fill='%23FF69B4'/%3E%3Crect x='13' y='12' width='2' height='2' fill='%23FF69B4'/%3E%3Crect x='5' y='14' width='2' height='2' fill='%23FF69B4'/%3E%3Crect x='7' y='14' width='2' height='2' fill='%23FFD700'/%3E%3Crect x='9' y='14' width='2' height='2' fill='%23FFD700'/%3E%3Crect x='11' y='14' width='2' height='2' fill='%23FFD700'/%3E%3Crect x='13' y='14' width='2' height='2' fill='%23FF69B4'/%3E%3Crect x='7' y='16' width='2' height='2' fill='%23FF69B4'/%3E%3Crect x='9' y='16' width='2' height='2' fill='%23FFD700'/%3E%3Crect x='11' y='16' width='2' height='2' fill='%23FF69B4'/%3E%3Crect x='13' y='16' width='2' height='2' fill='%23FF69B4'/%3E%3Crect x='9' y='18' width='2' height='2' fill='%23FF69B4'/%3E%3Crect x='11' y='18' width='2' height='2' fill='%23FF69B4'/%3E%3C!-- Right Wing --%3E%3Crect x='21' y='10' width='2' height='2' fill='%23FF69B4'/%3E%3Crect x='23' y='10' width='2' height='2' fill='%23FF69B4'/%3E%3Crect x='19' y='12' width='2' height='2' fill='%23FF69B4'/%3E%3Crect x='21' y='12' width='2' height='2' fill='%23FFD700'/%3E%3Crect x='23' y='12' width='2' height='2' fill='%23FF69B4'/%3E%3Crect x='25' y='12' width='2' height='2' fill='%23FF69B4'/%3E%3Crect x='19' y='14' width='2' height='2' fill='%23FF69B4'/%3E%3Crect x='21' y='14' width='2' height='2' fill='%23FFD700'/%3E%3Crect x='23' y='14' width='2' height='2' fill='%23FFD700'/%3E%3Crect x='25' y='14' width='2' height='2' fill='%23FFD700'/%3E%3Crect x='27' y='14' width='2' height='2' fill='%23FF69B4'/%3E%3Crect x='19' y='16' width='2' height='2' fill='%23FF69B4'/%3E%3Crect x='21' y='16' width='2' height='2' fill='%23FFD700'/%3E%3Crect x='23' y='16' width='2' height='2' fill='%23FF69B4'/%3E%3Crect x='25' y='16' width='2' height='2' fill='%23FF69B4'/%3E%3Crect x='21' y='18' width='2' height='2' fill='%23FF69B4'/%3E%3Crect x='23' y='18' width='2' height='2' fill='%23FF69B4'/%3E%3C/svg%3E`;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#7B2CBF]/80 overflow-hidden z-[100]">
      {/* CRT scanline effect overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-50"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)',
          animation: 'introScanline 8s linear infinite'
        }}
      />

      {/* Subtle vignette for CRT effect */}
      <div
        className="absolute inset-0 pointer-events-none z-40"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0,0,0,0.3) 100%)'
        }}
      />

      {/* 16-bit style background - diamond shape */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FF10F0] transform rotate-45 opacity-30"
        style={{
          filter: 'blur(30px)',
          boxShadow: '0 0 80px 30px rgba(255, 16, 240, 0.3)'
        }}
      />

      {/* Pixel art butterfly */}
      <div
        className="absolute z-20"
        style={{
          animation: stage === 'flying' ? 'spiralFlight 4s ease-in-out forwards' : 'none',
          left: stage === 'flying' ? '0%' : '50%',
          top: stage === 'flying' ? '50%' : '45%',
          transform: stage !== 'flying' ? 'translate(-50%, -50%)' : 'translate(-50%, -50%)',
          filter: stage === 'unlocking' ? 'drop-shadow(0 0 15px #FFD700) drop-shadow(0 0 30px #FF69B4)' : 'drop-shadow(2px 2px 0px rgba(0,0,0,0.3))'
        }}
      >
        <img
          src={butterflySprite}
          alt="butterfly"
          className="w-16 h-16"
          style={{
            imageRendering: 'pixelated',
            animation: stage === 'flying' ? 'pixelFlap 0.3s steps(2) infinite' : 'none'
          }}
        />

        {/* Pixel sparkle trail */}
        {stage === 'flying' && sparkles.map((id, index) => (
          <div
            key={id}
            className="absolute"
            style={{
              left: `-${index * 12}px`,
              top: '50%',
              opacity: 1 - (index / sparkles.length),
              imageRendering: 'pixelated',
              animation: `sparkleFloat 0.8s ease-out forwards`
            }}
          >
            <div className="w-2 h-2 bg-white" style={{
              imageRendering: 'pixelated',
              boxShadow: '0 0 8px #fff, 0 0 12px #FFD700'
            }} />
          </div>
        ))}
      </div>

      {/* Bracelet and lock */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative">
          {/* Pixel art chain bracelet */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-16 w-48 h-16 flex items-center justify-center">
            <svg width="200" height="40" style={{ imageRendering: 'pixelated' }}>
              {[...Array(12)].map((_, i) => (
                <g key={i}>
                  <rect x={10 + i * 16} y="18" width="4" height="4" fill="#FFD700" />
                  <rect x={10 + i * 16} y="22" width="4" height="4" fill="#FFA500" />
                  <rect x={6 + i * 16} y="20" width="4" height="4" fill="#FFD700" />
                  <rect x={14 + i * 16} y="20" width="4" height="4" fill="#FFD700" />
                </g>
              ))}
            </svg>
          </div>

          {/* Pixel art butterfly holder charm */}
          <div
            className="relative w-24 h-24 mx-auto mt-4"
            style={{
              imageRendering: 'pixelated',
              filter: stage === 'unlocking' ? 'drop-shadow(0 0 20px #FFD700) drop-shadow(0 0 30px #FF69B4)' : 'drop-shadow(2px 2px 0px rgba(0,0,0,0.5))'
            }}
          >
            <svg width="96" height="96" viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
              <rect x="1" y="1" width="14" height="14" fill="#FFD700" />
              <rect x="2" y="2" width="12" height="12" fill="#FFA500" />
              <rect x="3" y="3" width="10" height="10" fill="#7B2CBF" />
              <rect x="1" y="1" width="2" height="2" fill="#FFED4E" />
              <rect x="13" y="1" width="2" height="2" fill="#FFA500" />
              <rect x="1" y="13" width="2" height="2" fill="#FFA500" />
              <rect x="13" y="13" width="2" height="2" fill="#CC8400" />
              <rect x="7" y="5" width="2" height="4" fill="#FF69B4" opacity="0.5" />
              <rect x="5" y="6" width="2" height="2" fill="#FF69B4" opacity="0.5" />
              <rect x="9" y="6" width="2" height="2" fill="#FF69B4" opacity="0.5" />
            </svg>
          </div>

          {/* Pixel art padlock */}
          <div
            className="relative w-16 h-24 mx-auto mt-6"
            style={{
              imageRendering: 'pixelated',
              filter: stage === 'unlocking'
                ? 'drop-shadow(0 0 20px #00FF00) drop-shadow(0 0 30px #00FF00)'
                : 'drop-shadow(2px 2px 0px rgba(0,0,0,0.5))'
            }}
          >
            <svg width="64" height="96" viewBox="0 0 12 16" style={{ imageRendering: 'pixelated' }}>
              {/* Shackle - opens when unlocking */}
              <g style={{
                transform: stage === 'unlocking' ? 'translateY(-6px)' : 'translateY(0)',
                transition: stage === 'unlocking' ? 'transform 0.3s ease-out' : 'none'
              }}>
                {/* Top arch - connects the two sides to form closed loop */}
                <rect x="4" y="0" width="4" height="1" fill={stage === 'unlocking' ? '#00FF00' : '#FFED4E'} />
                <rect x="5" y="1" width="2" height="1" fill={stage === 'unlocking' ? '#00FF00' : '#FFD700'} />
                {/* Left side of shackle */}
                <rect x="3" y="1" width="2" height="1" fill={stage === 'unlocking' ? '#00FF00' : '#FFD700'} />
                <rect x="2" y="2" width="2" height="3" fill={stage === 'unlocking' ? '#00FF00' : '#FFD700'} />
                {/* Right side of shackle */}
                <rect x="7" y="1" width="2" height="1" fill={stage === 'unlocking' ? '#00FF00' : '#FFD700'} />
                <rect x="8" y="2" width="2" height="3" fill={stage === 'unlocking' ? '#00FF00' : '#FFD700'} />
              </g>

              {/* Lock body */}
              <rect x="2" y="5" width="8" height="10" fill="#FFD700" />
              <rect x="3" y="6" width="6" height="8" fill="#FFA500" />

              {/* Keyhole */}
              <rect x="5" y="9" width="2" height="2" fill="#000000" />
              <rect x="5" y="11" width="2" height="1" fill="#000000" />

              {/* Lock highlights */}
              <rect x="2" y="5" width="2" height="2" fill="#FFED4E" />
              <rect x="8" y="13" width="2" height="2" fill="#CC8400" />
            </svg>
          </div>
        </div>

        {/* Sparkle burst when unlocking */}
        {stage === 'unlocking' && (
          <>
            {/* Sparkles around butterfly holder */}
            <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `rotate(${i * 30}deg) translateY(-40px)`,
                    imageRendering: 'pixelated',
                    animation: 'pixelBurst 1s ease-out forwards'
                  }}
                >
                  <div className="relative w-3 h-3">
                    <div className="absolute top-0 left-1 w-1 h-3 bg-white" style={{ boxShadow: '0 0 8px #fff' }} />
                    <div className="absolute left-0 top-1 w-3 h-1 bg-white" style={{ boxShadow: '0 0 8px #fff' }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Sparkles around lock */}
            <div className="absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`lock-${i}`}
                  className="absolute w-2 h-2 bg-[#00FF00]"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `rotate(${i * 45}deg) translateY(-30px)`,
                    imageRendering: 'pixelated',
                    boxShadow: '0 0 16px #00FF00',
                    animation: 'pixelBurst 1s ease-out forwards'
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {stage === 'complete' && (
        <div className="absolute inset-0 pointer-events-none" />
      )}
    </div>
  );
};

export default ButterflyAnimation;
