/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import Portfolio from './Portfolio.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
)*/

console.log('Main.tsx si sta caricando...')

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

console.log('Import React completato')

const rootElement = document.getElementById('root')
console.log('Root element:', rootElement)

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <div style={{color: 'blue', fontSize: '24px'}}>
        React funziona! 🎉
      </div>
    </StrictMode>,
  )
} else {
  console.error('Root element non trovato!')
}