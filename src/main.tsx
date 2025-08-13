import { createRoot } from 'react-dom/client'
import AppHashRouter from './AppHashRouter.tsx' // Using HashRouter for reliable routing
import './index.css'

// For debugging: let's see what URL we're trying to load
console.log("Current URL:", window.location.href);
console.log("Pathname:", window.location.pathname);

createRoot(document.getElementById("root")!).render(<AppHashRouter />);
