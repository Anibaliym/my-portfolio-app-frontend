import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MyRepositoryApp } from './MyRepositoryApp'
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './assets/context/LanguageProvider';
import { ThemeProvider } from './assets/context/ThemeProvider';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css';

import '/src/assets/css/global.css';
import '/src/assets/css/index.css';
import '/src/assets/css/responsive.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <LanguageProvider>
        <MyRepositoryApp />
      </LanguageProvider>
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
