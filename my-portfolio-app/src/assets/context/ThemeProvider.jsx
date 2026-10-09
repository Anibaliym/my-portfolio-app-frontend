import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        try {
            const savedTheme = localStorage.getItem('theme');
            if (['light', 'dark', 'system'].includes(savedTheme)) return savedTheme;
            // Keep explicit preferences saved by the previous theme control.
            const previousTheme = localStorage.getItem('isDarkMode');
            if (previousTheme === 'true') return 'dark';
            if (previousTheme === 'false') return 'light';
        } catch {
            // Use the system appearance when storage is unavailable.
        }
        return 'system';
    });
    const [systemDark, setSystemDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);
    const isDarkMode = theme === 'dark' || (theme === 'system' && systemDark);

    useEffect(() => {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const updateSystemTheme = (event) => setSystemDark(event.matches);
        media.addEventListener('change', updateSystemTheme);
        return () => media.removeEventListener('change', updateSystemTheme);
    }, []);

    useEffect(() => {
        const scheme = isDarkMode ? 'dark' : 'light';
        const color = isDarkMode ? '#000000' : '#ffffff';

        document.body.classList.toggle('dark', isDarkMode);
        document.documentElement.style.colorScheme = scheme;
        document.documentElement.style.backgroundColor = color;
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', color);
        document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', scheme);

        try {
            localStorage.setItem('theme', theme);
            localStorage.removeItem('isDarkMode');
        } catch {
            // Theme switching still works when storage is unavailable.
        }
    }, [theme, isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
