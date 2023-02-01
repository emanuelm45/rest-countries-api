import { delay, Variants } from 'framer-motion'

const animationImgCountryDetails: Variants = {
  initial: {
    opacity: 0,
    x: -100
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.5,
      delay: 0.4
    }
  }
}

const animationContentCountryDetails: Variants = {
  initial: {
    opacity: 0,
    x: 100
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.2
    }
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.5,
      delay: 0.2
    }
  }
}

const animationBordersCountryDetails: Variants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.4
    }
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.5
    }
  }
}

const animationHome: Variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5
    }
  }
}

export {
  animationImgCountryDetails,
  animationContentCountryDetails,
  animationBordersCountryDetails,
  animationHome
}
