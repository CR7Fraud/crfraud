import React, { useEffect, useRef, useState } from "react";

const WORD_ENTRY_MS = 820;
const MORPH_MS = 650;
const FINAL_CHAR_STAGGER = 85;
const EXIT_FADE_DURATION = 300;

const TIMING = {
  morph: 1100,
  stable: 1800,
  final: 2820,
  complete: 4350,
};

function MorphSlot({ stage }) {
  const isIntro = stage === "intro";
  const isMorph = stage === "morph";
  const isStable = stage === "stable";
  const isFinal = stage === "final";

  return (
    <span className="relative inline-flex h-[1em] w-[0.8em] items-center justify-center">
      <span
        className="absolute inset-0 flex items-center justify-center text-white"
        style={{
          transition: `opacity ${MORPH_MS}ms linear, transform ${MORPH_MS}ms linear, filter ${MORPH_MS}ms linear`,
          willChange: "opacity, transform, filter",
          opacity: isIntro ? 1 : 0,
          transform: isIntro
            ? "rotate(0deg) scale(1) translateY(0)"
            : "rotate(180deg) scale(0.55) translateY(-0.06em)",
          filter: isIntro ? "blur(0px)" : "blur(4px)",
        }}
      >
        7
      </span>
      <span
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transition: `opacity ${MORPH_MS}ms linear, transform ${MORPH_MS}ms linear, filter ${MORPH_MS}ms linear, color ${MORPH_MS}ms linear`,
          willChange: "opacity, transform, filter, color",
          opacity: isIntro ? 0 : 1,
          transform:
            isMorph || isStable || isFinal
              ? "rotate(0deg) scale(1) translateY(0)"
              : "rotate(-90deg) scale(0.65) translateY(0.05em)",
          filter: isIntro ? "blur(4px)" : "blur(0px)",
          color: isFinal ? "#f59e0b" : "#ffffff",
        }}
      >
        F
      </span>
    </span>
  );
}

function FinalLetters({ active }) {
  const [revealed, setRevealed] = useState(false);
  const letters = "raud".split("");

  useEffect(() => {
    if (!active) {
      setRevealed(false);
      return undefined;
    }

    const frameId = window.requestAnimationFrame(() => {
      setRevealed(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [active]);

  return (
    <span className="inline-flex">
      {letters.map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className="inline-block text-amber-500"
          style={{
            transition:
              "opacity 320ms linear, transform 320ms linear, filter 320ms linear",
            transitionDelay: `${index * FINAL_CHAR_STAGGER}ms`,
            willChange: "opacity, transform, filter",
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(0.16em)",
            filter: revealed ? "blur(0px)" : "blur(4px)",
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}

function LoadingWord({ stage, entered }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <h1
        className="flex items-center whitespace-nowrap select-none font-black leading-none tracking-[-0.095em]"
        style={{
          fontSize: "clamp(3.6rem, 7.8vw, 8.5rem)",
          transition: `transform ${WORD_ENTRY_MS}ms cubic-bezier(.18, 1, .32, 1), opacity ${Math.round(
            WORD_ENTRY_MS * 0.65,
          )}ms linear`,
          willChange: "transform, opacity",
          transform: entered
            ? "translate3d(0, 0, 0) scale(1)"
            : "translate3d(-34vw, 0, 0) scale(0.96)",
          opacity: entered ? 1 : 0,
        }}
      >
        <span className="text-white">CR</span>
        <MorphSlot stage={stage} />
        <FinalLetters active={stage === "final"} />
      </h1>
    </div>
  );
}

export default function LoadingScreen({ onComplete }) {
  const hasCompletedRef = useRef(false);
  const hasExitedRef = useRef(false);
  const [stage, setStage] = useState("intro");
  const [entered, setEntered] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setEntered(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const complete = () => {
    if (hasCompletedRef.current) {
      return;
    }

    hasCompletedRef.current = true;
    onCompleteRef.current?.();
  };

  const finish = () => {
    if (hasExitedRef.current) {
      return;
    }

    hasExitedRef.current = true;
    setIsExiting(true);
  };

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStage("morph"), TIMING.morph),
      window.setTimeout(() => setStage("stable"), TIMING.stable),
      window.setTimeout(() => setStage("final"), TIMING.final),
      window.setTimeout(() => finish(), TIMING.complete),
      window.setTimeout(() => finish(), 15000),
    ];

    return () => {
      timers.forEach((timerId) => window.clearTimeout(timerId));
    };
  }, []);

  useEffect(() => {
    if (!isExiting) {
      return undefined;
    }

    const fallbackTimer = window.setTimeout(() => {
      complete();
    }, EXIT_FADE_DURATION + 80);

    return () => window.clearTimeout(fallbackTimer);
  }, [isExiting]);

  const handleTransitionEnd = (event) => {
    if (
      event.target !== event.currentTarget ||
      event.propertyName !== "opacity" ||
      !isExiting
    ) {
      return;
    }

    complete();
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black transition-opacity duration-300 ${
        isExiting ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      onTransitionEnd={handleTransitionEnd}
    >
      <LoadingWord stage={stage} entered={entered} />
    </div>
  );
}
