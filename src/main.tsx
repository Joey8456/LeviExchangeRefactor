import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LeviExchange from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LeviExchange />
  </StrictMode>,
)
