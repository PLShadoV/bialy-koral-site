import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// import AppHashRouter from './AppHashRouter.tsx' // Fallback option if direct routing doesn't work
import './index.css'

// For debugging: let's see what URL we're trying to load
console.log("Current URL:", window.location.href);
console.log("Pathname:", window.location.pathname);

createRoot(document.getElementById("root")!).render(<App />);
