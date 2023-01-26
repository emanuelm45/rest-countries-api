import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { DataCountriesProvider } from './contexts'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <DataCountriesProvider>
          <App />
        </DataCountriesProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)
