"use client";

'use client';

import { useScroll, useTransform, motion, type MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface ZoomImage {
  src: string;
  alt?: string;
}

interface ZoomParallaxProps {
  /** Array of images to be displayed in the parallax effect — max 7 */
  images: ZoomImage[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const scales: MotionValue<number>[] = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  // Position presets per index (mimics original layout)
  const positions = [
    { top: '0', left: '0', width: '25vw', height: '25vh' }, // 0 center
    { top: '-30vh', left: '5vw', width: '35vw', height: '30vh' }, // 1
    { top: '-10vh', left: '-25vw', width: '20vw', height: '45vh' }, // 2
    { top: '0', left: '27.5vw', width: '25vw', height: '25vh' }, // 3
    { top: '27.5vh', left: '5vw', width: '20vw', height: '25vh' }, // 4
    { top: '27.5vh', left: '-22.5vw', width: '30vw', height: '25vh' }, // 5
    { top: '22.5vh', left: '25vw', width: '15vw', height: '15vh' }, // 6
  ];

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.slice(0, 7).map(({ src, alt }, index) => {
          const scale = scales[index % scales.length];
          const pos = positions[index];

          return (
            <motion.div
              key={index}
              style={{ scale }}
              className="absolute top-0 left-0 flex h-full w-full items-center justify-center"
            >
              <div
                className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl"
                style={{
                  width: pos.width,
                  height: pos.height,
                  top: pos.top,
                  left: pos.left,
                }}
              >
                <img
                  src={src}
                  alt={alt ?? ''}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}