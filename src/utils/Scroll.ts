import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    setTimeout(() => {
      document.documentElement.scrollTo({
        top: 0
      })
    }, 500)
  }, [pathname])

  return null
}

function ScrollToLastCountry({ position }: { position: number }) {
  useEffect(() => {
    setTimeout(() => {
      document.documentElement.scrollTo({
        top: position - window.innerHeight / 3,
        behavior: 'smooth'
      })
    }, 1000)
  }, [])

  return null
}

export { ScrollToTop, ScrollToLastCountry }
