import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    // Enlever le Strict Mode pour la production, c'est destiner aux dev
    <StrictMode>
        <App />
    </StrictMode>
);
