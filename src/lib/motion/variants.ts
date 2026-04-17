export const fadeIn = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

export const imageFadeIn = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1 },
};

export const defaultTransition = {
  duration: 0.18,
  ease: "easeOut",
} as const;

export const imageTransition = {
  duration: 0.35,
  ease: "easeOut",
} as const;

export const viewportOnce = {
  once: true,
  amount: 0.25,
} as const;

export const getStaggerDelay = (index: number) => Math.min(index * 0.025, 0.1);
