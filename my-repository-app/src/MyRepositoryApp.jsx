import { useContext, useEffect, useState } from 'react';
import { AboutPage } from './MyRepository/pages/AboutPage';
import { ExperiencePage } from './MyRepository/pages/ExperiencePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MenuBar } from './MyRepository/components/ui/MenuBar';
import { ProyectsPage } from './MyRepository/pages/ProyectsPage';
import { LanguageToggle } from './MyRepository/components/ui/LanguageToggle';
import { LanguageContext } from './assets/context/LanguageProvider';

export const MyRepositoryApp = () => {
    
    const [isDarkMode, setIsDarkMode] = useState(false);
    const {language} = useContext(LanguageContext);
    const [activeMenuItem, setActiveMenuItem] = useState('About Me');
    
    const toggleDarkMode = () => {
        const newDarkModeState = !isDarkMode;
        setIsDarkMode(newDarkModeState);
        document.body.classList.toggle('dark', newDarkModeState);
        localStorage.setItem('isDarkMode', JSON.stringify(newDarkModeState));
    };
    
    useEffect(() => {
        document.body.classList.toggle('dark', false);
        const savedDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    
        if (savedDarkMode !== null) {
            setIsDarkMode(savedDarkMode);
            document.body.classList.toggle('dark', savedDarkMode);
        }
    }, []);

    return (
        <div className="principal-container">
            <LanguageToggle/>

            <div className="toggle-switch" onClick={ toggleDarkMode }>
                <span className="switch"></span>
            </div>

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
                    <Route path="proyects" element={<ProyectsPage isDarkMode={ isDarkMode }/>} />

                    <Route path="/*" element={<AboutPage />} />
                </Routes>
            </div>
        </div>
    );
};