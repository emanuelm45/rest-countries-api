import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { CountryDetails, Home } from '../pages'

export default function RoutesApp() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/:code" element={<CountryDetails />} />
      </Routes>
    </AnimatePresence>
  )
}
