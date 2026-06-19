"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export interface MediaItemType {
  id: number;
  type: "video" | "image";
  title: string;
  desc: string;
  url: string;
  span: string;
}

const MediaItem = ({
  item,
  className,
  onClick,
}: {
  item: MediaItemType;
  className?: string;
  onClick?: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (item.type !== "video" || !videoRef.current) return;
    const node = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => setIsInView(e.isIntersecting)),
      { root: null, rootMargin: "50px", threshold: 0.1 },
    );
    observer.observe(node);
    return () => observer.unobserve(node);
  }, [item.type]);

  useEffect(() => {
    if (item.type !== "video" || !videoRef.current) return;
    const v = videoRef.current;
    if (isInView) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [isInView, item.type]);

  if (item.type === "video") {
    return (
      <video
        ref={videoRef}
        src={item.url}
        className={className}
        muted
        playsInline
        loop
        preload="metadata"
        onClick={onClick}
      />
    );
  }

  return (
    <img
      src={item.url}
      alt={item.title}
      className={className}
      loading="lazy"
      onClick={onClick}
    />
  );
};

interface GalleryModalProps {
  selectedItem: MediaItemType;
  isOpen: boolean;
  onClose: () => void;
  setSelectedItem: (item: MediaItemType | null) => void;
  mediaItems: MediaItemType[];
}

const GalleryModal = ({
  selectedItem,
  isOpen,
  onClose,
  setSelectedItem,
  mediaItems,
}: GalleryModalProps) => {
  if (!isOpen) return null;
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background/85 backdrop-blur-xl p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 28 }}
          className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-card shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative aspect-video w-full bg-black">
            <MediaItem
              item={selectedItem}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="border-t border-white/5 p-5 sm:p-6">
            <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
              {selectedItem.title}
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              {selectedItem.desc}
            </p>
          </div>

          <button
            onClick={onClose}
            className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/70 text-foreground ring-1 ring-white/10 backdrop-blur transition-colors hover:bg-background"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      </motion.div>

      <div className="fixed bottom-4 left-1/2 z-[60] -translate-x-1/2">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-card/80 px-3 py-2 backdrop-blur-xl">
          {mediaItems.map((item) => (
            <button
              key={item.id}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItem(item);
              }}
              className={`relative h-10 w-10 overflow-hidden rounded-lg transition-all ${
                selectedItem.id === item.id
                  ? "ring-2 ring-primary scale-110"
                  : "ring-1 ring-white/10 hover:ring-white/30"
              }`}
            >
              <MediaItem
                item={item}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

interface InteractiveBentoGalleryProps {
  mediaItems: MediaItemType[];
  title?: string;
  description?: string;
}

const InteractiveBentoGallery: React.FC<InteractiveBentoGalleryProps> = ({
  mediaItems,
  title,
  description,
}) => {
  const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null);

  return (
    <div className="w-full">
      {(title || description) && (
        <div className="mb-8 text-center">
          {title && (
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
              {description}
            </p>
          )}
        </div>
      )}

      <AnimatePresence>
        {selectedItem && (
          <GalleryModal
            selectedItem={selectedItem}
            isOpen={!!selectedItem}
            onClose={() => setSelectedItem(null)}
            setSelectedItem={setSelectedItem}
            mediaItems={mediaItems}
          />
        )}
      </AnimatePresence>

      <div className="grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[200px] md:grid-cols-4">
        {mediaItems.map((item, index) => (
          <motion.div
            key={item.id}
            layoutId={`media-${item.id}`}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 26,
              delay: index * 0.06,
            }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedItem(item)}
            className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-card/60 ${item.span}`}
          >
            <MediaItem
              item={item}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
              <div className="flex items-center gap-2">
                {item.type === "video" && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary ring-1 ring-primary/40">
                    ● demo
                  </span>
                )}
              </div>
              <h3 className="mt-2 text-base font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveBentoGallery;