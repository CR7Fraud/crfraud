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
      className={`fixed inset-0 z-[9999] bg-[#05080d] transition-opacity duration-300 ${
        fadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={finish}
          onError={finish}
        >
          <source src={loadingVideoSrc} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
