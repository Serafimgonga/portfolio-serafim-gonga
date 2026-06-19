"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimState = {
  bgColor: string;
  indicatorColor: string;
  pathColor: string;
  smileColor: string;
  titleColor: string;
  trackColor: string;
  eyeWidth: number;
  eyeHeight: number;
  eyeBorderRadius: string;
  eyeBg: string;
  smileRotate: number;
  indicatorRotate: number;
  noteText: string;
  noteColor: string;
  noteX: string;
  indicatorLeft: string;
};

const animationStates: AnimState[] = [
  {
    bgColor: "#c44a3b",
    indicatorColor: "#2a0a06",
    pathColor: "#c44a3b",
    smileColor: "#2a0a06",
    titleColor: "#2a0a06",
    trackColor: "#a83a2d",
    eyeWidth: 56,
    eyeHeight: 56,
    eyeBorderRadius: "100%",
    eyeBg: "#2a0a06",
    smileRotate: 180,
    indicatorRotate: 180,
    noteText: "MAU",
    noteColor: "#a83a2d",
    noteX: "0%",
    indicatorLeft: "0%",
  },
  {
    bgColor: "#d4a53b",
    indicatorColor: "#3a2a06",
    pathColor: "#d4a53b",
    smileColor: "#3a2a06",
    titleColor: "#3a2a06",
    trackColor: "#b07615",
    eyeWidth: 100,
    eyeHeight: 20,
    eyeBorderRadius: "36px",
    eyeBg: "#3a2a06",
    smileRotate: 180,
    indicatorRotate: 180,
    noteText: "OK",
    noteColor: "#b07615",
    noteX: "-100%",
    indicatorLeft: "50%",
  },
  {
    bgColor: "#4db8c8",
    indicatorColor: "#062a2f",
    pathColor: "#4db8c8",
    smileColor: "#062a2f",
    titleColor: "#062a2f",
    trackColor: "#2d8e9e",
    eyeWidth: 120,
    eyeHeight: 120,
    eyeBorderRadius: "100%",
    eyeBg: "#062a2f",
    smileRotate: 0,
    indicatorRotate: 0,
    noteText: "INCRÍVEL",
    noteColor: "#2d8e9e",
    noteX: "-200%",
    indicatorLeft: "100%",
  },
];

const SmilePath = ({ color, rotate }: { color: string; rotate: number }) => (
  <motion.svg
    width="160"
    height="80"
    viewBox="0 0 160 80"
    fill="none"
    animate={{ rotate }}
    transition={{ type: "spring", stiffness: 200, damping: 25 }}
    style={{ originX: 0.5, originY: 0.5 }}
  >
    <motion.path
      d="M10 20 Q 80 80 150 20"
      stroke={color}
      strokeWidth="10"
      strokeLinecap="round"
      fill="none"
      animate={{ d: "M10 20 Q 80 80 150 20" }}
    />
  </motion.svg>
);

export interface FeedbackSliderProps extends React.HTMLAttributes<HTMLDivElement> {}

const FeedbackSlider = React.forwardRef<HTMLDivElement, FeedbackSliderProps>(
  ({ className, ...props }, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(2);
    const current = animationStates[selectedIndex];
    const transition = { type: "spring" as const, stiffness: 300, damping: 30 };

    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full max-w-md mx-auto overflow-hidden rounded-3xl p-8 shadow-2xl",
          className,
        )}
        {...props}
      >
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundColor: current.bgColor }}
          transition={transition}
        />

        <div className="relative z-10 flex flex-col items-center gap-8">
          <motion.h3
            className="text-center text-xl font-semibold tracking-tight"
            animate={{ color: current.titleColor }}
            transition={transition}
          >
            Como foi a tua experiência a trabalhar comigo?
          </motion.h3>

          {/* Face */}
          <div className="relative flex h-44 w-full items-center justify-center">
            <div className="flex items-center gap-6">
              <motion.div
                animate={{
                  width: current.eyeWidth,
                  height: current.eyeHeight,
                  borderRadius: current.eyeBorderRadius,
                  backgroundColor: current.eyeBg,
                }}
                transition={transition}
              />
              <motion.div
                animate={{
                  width: current.eyeWidth,
                  height: current.eyeHeight,
                  borderRadius: current.eyeBorderRadius,
                  backgroundColor: current.eyeBg,
                }}
                transition={transition}
              />
            </div>
            <div className="absolute bottom-0">
              <SmilePath color={current.smileColor} rotate={current.smileRotate} />
            </div>
          </div>

          {/* Note text reel */}
          <div className="relative h-10 w-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 flex w-[300%]"
              animate={{ x: current.noteX }}
              transition={transition}
            >
              {animationStates.map((state, i) => (
                <div key={i} className="flex w-1/3 items-center justify-center">
                  <span
                    className="text-2xl font-extrabold tracking-widest"
                    style={{ color: state.noteColor }}
                  >
                    {state.noteText}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Slider */}
          <div className="w-full">
            <div className="relative flex items-center justify-between">
              <motion.div
                className="absolute left-0 right-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full"
                animate={{ backgroundColor: current.trackColor }}
                transition={transition}
              />
              {animationStates.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedIndex(i)}
                  className="relative z-10 h-4 w-4 rounded-full ring-2 ring-white/40 transition-transform hover:scale-110"
                  style={{ backgroundColor: current.trackColor }}
                  aria-label={`Nota ${i + 1}`}
                />
              ))}
              <motion.div
                className="pointer-events-none absolute top-1/2 z-20 -mt-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full shadow-lg"
                animate={{
                  left: current.indicatorLeft,
                  backgroundColor: current.indicatorColor,
                }}
                transition={transition}
              >
                <motion.div
                  className="h-2 w-2 rounded-full"
                  animate={{ backgroundColor: current.bgColor }}
                  transition={transition}
                />
              </motion.div>
            </div>

            <div className="mt-4 flex justify-between text-xs font-medium uppercase tracking-wider">
              {["Mau", "OK", "Incrível"].map((text, i) => (
                <motion.span
                  key={text}
                  animate={{
                    color: selectedIndex === i ? current.titleColor : current.trackColor,
                    opacity: selectedIndex === i ? 1 : 0.7,
                  }}
                  transition={transition}
                >
                  {text}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  },
);

FeedbackSlider.displayName = "FeedbackSlider";

export default FeedbackSlider;