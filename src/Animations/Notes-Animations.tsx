export const NotesOpenAnimation = {
  hidden: {
    scaleX: 0.4,
    scaleY: 0.4,
    opacity: 0,
  },
  visible: {
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: "30",
      stiffness: 600,
    },
  },
  exit: {
    scaleX: 0.4,
    scaleY: 0.4,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};
