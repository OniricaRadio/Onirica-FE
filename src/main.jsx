import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './application/Router'

import Heather from './components/header/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router/>
    <Heather/>
   
  </StrictMode>,
)
