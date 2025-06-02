import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Disable right-click context menu
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

// Disable text selection with mouse
document.addEventListener('selectstart', (e) => {
  e.preventDefault();
});

// Disable drag and drop
document.addEventListener('dragstart', (e) => {
  e.preventDefault();
});

document.addEventListener('keydown', (e) => {
  // Disable Ctrl+A (Select All)
  if (e.ctrlKey && e.key === 'a') {
    e.preventDefault();
  }
  // Disable Ctrl+C (Copy)
  if (e.ctrlKey && e.key === 'c') {
    e.preventDefault();
  }
  // Disable Ctrl+V (Paste)
  if (e.ctrlKey && e.key === 'v') {
    e.preventDefault();
  }
  // Disable Ctrl+X (Cut)
  if (e.ctrlKey && e.key === 'x') {
    e.preventDefault();
  }
  // Disable Ctrl+S (Save)
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
  }
  // Disable Ctrl+P (Print)
  if (e.ctrlKey && e.key === 'p') {
    e.preventDefault();
  }
  // Disable F12 (Developer Tools)
  if (e.key === 'F12') {
    e.preventDefault();
  }
  // Disable Ctrl+Shift+I (Developer Tools)
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
    e.preventDefault();
  }
  // Disable Ctrl+U (View Source)
  if (e.ctrlKey && e.key === 'u') {
    e.preventDefault();
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
