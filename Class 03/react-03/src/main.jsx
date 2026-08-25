import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Q2 from '../../../Assignments/Q2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Q2 />
  </StrictMode>,
)
