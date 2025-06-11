import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
// import App from './App1.tsx';

createRoot(document.getElementById('root')!).render(<App />);

// Y: orignal with strict mode:
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
