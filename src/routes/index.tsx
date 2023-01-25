import { Route, Routes, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Spinner } from '../components'
import { AnimatePresence } from 'framer-motion'
import { CountryDetails, Home } from '../pages'

// const Home = lazy(() => import('../pages/Home'))
// const CountryDetails = lazy(() => import('../pages/CountryDetails'))

export function RoutesApp() {
  const location = useLocation()

  return (
    <AnimatePresence>
      {/* <Suspense fallback={<Spinner />}> */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/:code" element={<CountryDetails />} />
      </Routes>
      {/* </Suspense> */}
    </AnimatePresence>
  )
}
