import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [ isDarkMode, setTheme ] = useState(() => {
        try 
        {
            return localStorage.getItem('isDarkMode') === 'true';
        } 
        catch 
        {
            return false;
        }
    });

    useEffect(() => {
        const scheme = isDarkMode ? 'dark' : 'light';
        const color = isDarkMode ? '#000000' : '#ffffff';

        document.body.classList.toggle('dark', isDarkMode);
        document.documentElement.style.colorScheme = scheme;
        document.documentElement.style.backgroundColor = color;
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', color);
        document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', scheme);

        try 
        {
            localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
        } 
        catch 
        {
            // Theme switching still works when storage is unavailable.
        }
        
    }, [isDarkMode]);

    const toggleTheme = () => setTheme((currentTheme) => !currentTheme);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
