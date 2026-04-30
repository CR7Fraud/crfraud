import React, { useEffect, useRef, useState } from "react";

export default function LoadingScreen({ onComplete }) {
  const hasCompletedRef = useRef(false);
  const [fadingOut, setFadingOut] = useState(false);
  const loadingVideoSrc = `${import.meta.env.BASE_URL}assets/loading.mp4`;

  useEffect(() => {
    const fallbackTimer = window.setTimeout(() => {
      if (!hasCompletedRef.current) {
        hasCompletedRef.current = true;
        setFadingOut(true);
        window.setTimeout(() => onComplete?.(), 250);
      }
    }, 10000);

    return () => window.clearTimeout(fallbackTimer);
  }, [onComplete]);

  const finish = () => {
    if (hasCompletedRef.current) return;
    hasCompletedRef.current = true;
    setFadingOut(true);
    window.setTimeout(() => onComplete?.(), 250);
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#05080d] transition-opacity duration-300 ${
        fadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="h-full w-full object-cover opacity-95"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={finish}
          onError={finish}
        >
          <source src={loadingVideoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center">
        <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-[#0b1016]/85 px-5 py-3 shadow-2xl backdrop-blur-sm">
          <span className="font-playfair text-3xl font-black tracking-tight text-white">
            CR
          </span>
          <span className="font-playfair text-3xl font-black tracking-tight text-amber-400">
            FRAUD
          </span>
        </div>
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            Loading
          </p>
          <p className="text-sm text-white/60">Critical football analysis</p>
        </div>
      </div>
    </div>
  );
}
