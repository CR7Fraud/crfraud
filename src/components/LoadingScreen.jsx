import React, { useEffect, useRef, useState } from "react";

const WORD_ENTRY_MS = 1040;
const MORPH_MS = 820;
const FINAL_CHAR_STAGGER = 55;
const EXIT_FADE_DURATION = 300;
const EASE = "cubic-bezier(.16, 1, .3, 1)";

const TIMING = {
  morph: 1460,
  stable: 1900,
  final: 2520,
  complete: 4100,
};

function MorphSlot({ stage }) {
  const isIntro = stage === "intro";
  const isMorph = stage === "morph";
  const isStable = stage === "stable";
  const isFinal = stage === "final";

  return (
    <span
      className="relative inline-flex h-[1em] w-[0.62em] items-center justify-center"
      style={{ marginInline: "-0.04em" }}
    >
      <span
        className="absolute inset-0 flex items-center justify-center text-white"
        style={{
          transition: `opacity ${MORPH_MS}ms ${EASE}, transform ${MORPH_MS}ms ${EASE}, filter ${MORPH_MS}ms linear`,
          willChange: "opacity, transform, filter",
          transformOrigin: "center center",
          opacity: isIntro ? 1 : 0,
          transform: isIntro
            ? "rotate(0deg) scale(1) translateY(0)"
            : "rotate(180deg) scale(0.5) translateY(-0.04em)",
          filter: isIntro ? "blur(0px)" : "blur(4px)",
        }}
      >
        7
      </span>
      <span
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transition: `opacity ${MORPH_MS}ms ${EASE}, transform ${MORPH_MS}ms ${EASE}, filter ${MORPH_MS}ms linear, color ${MORPH_MS}ms linear`,
          willChange: "opacity, transform, filter, color",
          transformOrigin: "center center",
          opacity: isIntro ? 0 : 1,
          transform:
            isMorph || isStable || isFinal
              ? "rotate(0deg) scale(1) translateY(0)"
              : "rotate(-90deg) scale(0.58) translateY(0.02em)",
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
              "opacity 320ms cubic-bezier(.16, 1, .3, 1), transform 320ms cubic-bezier(.16, 1, .3, 1), filter 320ms linear",
            transitionDelay: `${index * FINAL_CHAR_STAGGER}ms`,
            willChange: "opacity, transform, filter",
            opacity: revealed ? 1 : 0,
            transform: revealed
              ? "translateY(0) scale(1)"
              : "translateY(0.14em) scale(0.96)",
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
  const finalShift = stage === "final" ? "-0.07em" : "0em";

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <h1
        className="flex items-center whitespace-nowrap select-none font-black leading-none tracking-[-0.075em]"
        style={{
          fontSize: "clamp(4rem, 8.4vw, 9.15rem)",
          transition: `transform ${WORD_ENTRY_MS}ms ${EASE}, opacity ${Math.round(
            WORD_ENTRY_MS * 0.65,
          )}ms linear`,
          willChange: "transform, opacity",
          transform: entered
            ? `translate3d(${finalShift}, 0, 0) scale(1)`
            : "translate3d(-46vw, 0, 0) scale(0.975)",
          opacity: entered ? 1 : 0,
          textShadow: "0 0 26px rgba(255, 255, 255, 0.04)",
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
