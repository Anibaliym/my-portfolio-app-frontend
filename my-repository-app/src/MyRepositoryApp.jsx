import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';
import '/src/assets/css/global.css';
import '/src/assets/css/index.css';
import '/src/assets/css/test.css';

export const MyRepositoryApp = () => {
    
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [activeMenuItem, setActiveMenuItem] = useState("About Me");

    useEffect(() => {
        const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const handleMenuClick = (menuItem) => {
        setActiveMenuItem(menuItem);
    };

    return (
        <div className="principal-container">
            <div className="left-panel">
                <div>
                    {
                        (windowSize.width > 1020) 
                            ? (<h2 className="title display-2" >ANIBAL YAÑEZ</h2>) 
                            : (<h2 className="title lead fs-1" >ANIBAL YAÑEZ</h2>)
                    }

                    <div className="menu" style={{ marginTop: `${ (windowSize.width > 760) ? '80px' : '20px' }` }}>
                        <ul>
                            {["About Me", "Experience", "Projects"].map((item) => (
                                <li 
                                    key={item}
                                    className={`lead ${ activeMenuItem === item ? 'active' : '' } `}
                                    onClick={() => handleMenuClick(item)}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <i className="bx bxl-github" style={{ color: 'red' }}></i>
                <i className="bx bxl-linkedin-square" ></i>

                {/* Links a tus redes sociales */}
                <div className="links">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>

            
            <div className="right-panel">
                <div className="sticky-title">
                    <h1 className="lead title">About Me</h1>
                </div>

                <div style={{ height: '2000px', padding: '20px' }}>

                    <div className="item-container">
                        about
                    </div>
                    <div className="item-container">
                        experience
                    </div>                    
                    <div className="item-container">
                        proyects
                    </div>
                </div>
            </div>

        </div>
    );
}