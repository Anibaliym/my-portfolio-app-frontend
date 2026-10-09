import { useTranslation } from 'react-i18next';
import { AboutPage } from './MyPortfolioApp/pages/AboutPage';
import { ExperiencePage } from './MyPortfolioApp/pages/ExperiencePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MenuBar } from './MyPortfolioApp/components/ui/MenuBar';
import { ProyectsPage } from './MyPortfolioApp/pages/ProyectsPage';
import { ToggleLanguage } from './MyPortfolioApp/components/toggles/ToggleLanguage';
import { ToggleTheme } from './MyPortfolioApp/components/toggles/ToggleTheme';

export const MyPortfolioApp = () => {
    const { t } = useTranslation();

    return (
        <div className="principal-container">
            <ToggleLanguage />
            <ToggleTheme />

            <div className="left-panel">
                <div className="">
                    <h1 className="title display-5">ANIBAL YAÑEZ</h1>
                    <p className="lead text-color-default text-color-primary fw-normal">
                        { t('profile.role') }
                    </p>
                    
                    <p className="text-color-default text-description">
                        { t('profile.description') }
                    </p>

                    <MenuBar />
                </div>

                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/anibal-ya%C3%B1ez-moraga-568b67113/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className='bx bxl-linkedin-square'></i>
                    </a>
                    <a href="https://github.com/Anibaliym" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className='bx bxl-github'></i>
                    </a>
                </div>
            </div>

            <div className="right-panel">
                <Routes>
                    <Route path="/" element={<Navigate to="/about" />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="experience" element={<ExperiencePage />} />
                    <Route path="proyects" element={<ProyectsPage/>} />

                    <Route path="/*" element={<AboutPage />} />
                </Routes>
            </div>
        </div>
    );
};