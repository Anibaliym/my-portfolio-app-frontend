import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MyRepositoryApp } from './MyRepositoryApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyRepositoryApp />
  </StrictMode>,
)
