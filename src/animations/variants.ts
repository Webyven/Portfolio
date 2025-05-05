export const slideLeftFade = {
  hidden: {opacity: 0, x: -20},
  visible: {opacity: 1, x: 0, transition: {duration: 0.5}},
}

export const slideRightFade = {
  hidden: {opacity: 0, x: 20},
  visible: {opacity: 1, x: 0, transition: {duration: 0.5}},
}

export const scaleFade = {
  hidden: {opacity: 0, scale: 0.95},
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
}

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const fadeInUp = {
  hidden: {opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.6, ease: 'easeOut'},
  },
}

export const slideFromLeft = {
  hidden: {opacity: 0, x: -20},
  visible: {
    opacity: 1,
    x: 0,
    transition: {duration: 0.6, ease: 'easeOut'},
  },
}

export const slideFromRight = {
  hidden: {opacity: 0, x: 20},
  visible: {
    opacity: 1,
    x: 0,
    transition: {duration: 0.6, ease: 'easeOut'},
  },
}

export const fadeIn = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {duration: 0.6, ease: 'easeOut'},
  },
}
