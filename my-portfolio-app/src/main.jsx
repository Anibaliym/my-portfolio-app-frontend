import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import { ThemeProvider } from './assets/context/ThemeProvider';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css';
import '/src/assets/css/Global.css';
import '/src/assets/css/Index.css';
import '/src/assets/css/Responsive.css';
import { MyPortfolioApp } from './MyPortfolioApp';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
          <MyPortfolioApp />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
