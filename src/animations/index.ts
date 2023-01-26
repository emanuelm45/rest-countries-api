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
      delay: 0.4
    }
  },
  exit: {
    opacity: 0,
    x: -15,
    transition: {
      duration: 0.3
    }
  }
}

export const animationAllCountries = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
}
