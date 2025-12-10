import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { SiteHealthDashboard } from './SiteHealthDashboard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SiteHealthDashboard />
  </StrictMode>,
)
