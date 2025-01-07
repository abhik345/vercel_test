export const transition = { type: "spring", duration: 0.8 };

export const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};

export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.5 },
  },
  animate: {
    opacity: 1,
    transition: { ...transition, delay: 0 },
  },
  exit: {
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
};

export const headTextAnimation = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 5,
    stiffness: 40,
    restDelta: 0.001,
    duration: 0.3,
  },
};

export const headContentAnimation = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 7,
    stiffness: 30,
    restDelta: 0.001,
    duration: 0.6,
    delay: 0.2,
    delayChildren: 0.2,
  },
};

export const headContainerAnimation = {
  initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
};

export const EaseinOutAnimation={
  initial:{ scale: 0 },
  whileInView:{ scale: 1 },
  transition:{ duration: 1 },
  viewport:{ once: true }
}

export const TreadingAnimation={
  initial:{ x: 200, opacity: 0 },
  whileInView:{ x: 0, opacity: 1 },
  transition:{duration: 1 },
  viewport:{once: true },
}

export const SuccessfullCoachAnimation={
  initial:{ x: -200, opacity: 0 },
  whileInView:{ x: 0, opacity: 1 },
  transition:{ duration: 1 },
  viewport:{ once: true },
}

export const CoachingBannerAnimation={
  initial:{ opacity: 0 },
  animate:{ opacity: 1 },
  transition:{ duration: 1 },
}

export const SlideTopAnimation={
  initial:{ y: 100, opacity: 0 },
  whileInView:{ y: 0, opacity: 1 },
  transition:{ duration: 1 },
  viewport:{ once: true },
}


export const CtaAnimation={
  initial:{ opacity: 0 },
  whileInView:{ opacity: 1 },
  transition:{ duration: 1 },
  viewport:{ once: true },
}

export const QuestionAnimation={
  initial:{ rotateY: 90, opacity: 0 },
  whileInView:{ rotateY: 0, opacity: 1 },
  transition:{ duration: 1 },
  viewport:{ once: true },
}

export const HowtoworkAnimation={
  initial:{ y: 100, opacity: 0 },
  whileInView:{ y: 0, opacity: 1 },
  transition:{ duration: 1 },
  viewport:{ once: true },
}