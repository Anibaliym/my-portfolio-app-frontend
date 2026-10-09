import { useTranslation } from 'react-i18next';
import { Github, Linkedin } from 'lucide-react';
import { AboutPage } from './MyPortfolioApp/pages/AboutPage';
import { ExperiencePage } from './MyPortfolioApp/pages/ExperiencePage';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { MenuBar } from './MyPortfolioApp/components/ui/MenuBar';
import { ProyectsPage } from './MyPortfolioApp/pages/ProyectsPage';
import { ToggleLanguage } from './MyPortfolioApp/components/toggles/ToggleLanguage';
import { ToggleTheme } from './MyPortfolioApp/components/toggles/ToggleTheme';

const linkedIn = 'https://www.linkedin.com/in/anibal-ya%C3%B1ez-moraga-568b67113/';

export const MyPortfolioApp = () => {
    const { t } = useTranslation();
    const { pathname } = useLocation();

    return (
        <div className="principal-container">
            <aside className="left-panel">
                <div className="profile-topline">
                    <div className="appearance-controls"><ToggleLanguage /><ToggleTheme /></div>
                </div>
                <div className="profile-intro">
                    <h1 className="title">Anibal Yañez<span>.</span></h1>
                    <p className="profile-role">{t('profile.role')}</p>
                    <p className="text-description">{t('design.heroDescription')}</p>
                </div>
                <MenuBar />
                <div className="profile-footer">
                    <span>{t('design.builtWith')}</span>
                    <div className="social-icons">
                        <a href={linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="https://github.com/Anibaliym" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
                    </div>
                </div>
            </aside>
            <main className="right-panel" key={pathname}>
                <Routes>
                    <Route path="/" element={<Navigate to="/about" replace />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="experience" element={<ExperiencePage />} />
                    <Route path="proyects" element={<ProyectsPage />} />
                    <Route path="/*" element={<AboutPage />} />
                </Routes>
            </main>
        </div>
    );
};
