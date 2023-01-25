import { motion, Variants } from 'framer-motion'

export const animationCountryDetails = {
  initial: {
    opacity: 0,
    x: -100
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.5
    }
  },
  exit: {
    opacity: 0,
    x: -10,
    transition: {
      duration: 0.3
    }
  }
}

export const animationAllCountries = {
  initial: {
    opacity: 0,
    y: 40
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3
    }
  },
  exit: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.3
    }
  }
}

export default function AnimatedRoutes({
  children,
  animation
}: {
  children: JSX.Element
  animation: Variants
}) {
  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}
