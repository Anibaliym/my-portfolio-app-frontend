import { useContext, useEffect, useState } from 'react';
import { AboutPage } from './MyRepository/pages/AboutPage';
import { ExperiencePage } from './MyRepository/pages/ExperiencePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MenuBar } from './MyRepository/components/ui/MenuBar';
import { ProyectsPage } from './MyRepository/pages/ProyectsPage';
import { LanguageContext } from './assets/context/LanguageProvider';
import { ThemeContext } from './assets/context/ThemeProvider';
import { ToggleLanguage } from './MyRepository/components/ui/toggles/ToggleLanguage';
import { ToggleTheme } from './MyRepository/components/ui/toggles/ToggleTheme';

export const MyRepositoryApp = () => {
    const {language} = useContext(LanguageContext);
    const [activeMenuItem, setActiveMenuItem] = useState('About Me');
    
    return (
        <div className="principal-container">
            <ToggleLanguage />
            <ToggleTheme />

            <div className="left-panel">
                <div className="">
                    <h5 className="title display-5">ANIBAL YAÑEZ</h5>
                    <p className="lead text-color-default text-color-primary fw-normal">
                        { (language === 'es') ? 'Desarrollador Fullstack' : 'Fullstack Developer'}
                        
                    </p>
                    <p className="text-color-default" style={{ fontSize:'14px' }}>
                        {
                            (language === 'es')
                            ? 'Creo experiencias digitales innovadoras y eficientes con tecnologías .NET y Frontend modernas.'
                            : 'I create innovative and efficient digital experiences using modern .NET and Frontend technologies.'
                        }
                    </p>

                    <MenuBar activeMenuItem={ activeMenuItem } setActiveMenuItem={ setActiveMenuItem }/>
                </div>

                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/anibal-ya%C3%B1ez-moraga-568b67113/" target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-linkedin-square'></i>
                    </a>
                    <a href="https://github.com/Anibaliym" target="_blank" rel="noopener noreferrer">
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