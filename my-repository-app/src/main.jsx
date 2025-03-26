import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MyRepositoryApp } from './MyRepositoryApp'
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './assets/context/LanguageProvider';

import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';
import '/src/assets/css/global.css';
import '/src/assets/css/index.css';
import '/src/assets/css/test.css';
import '/src/assets/css/responsive.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <MyRepositoryApp />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
