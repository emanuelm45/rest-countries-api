import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Spinner } from '../components'

const Home = lazy(() => import('../pages/Home'))
const CountryDetails = lazy(() => import('../pages/CountryDetails'))

export function RoutesApp() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:code" element={<CountryDetails />} />
      </Routes>
    </Suspense>
  )
}
