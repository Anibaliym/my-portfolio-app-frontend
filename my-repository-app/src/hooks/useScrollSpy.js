import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds) => {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = sectionIds.map((id) => document.getElementById(id));
            const offset = window.innerHeight / 3; // Ajusta la sensibilidad del Scrollspy

            for (const section of sections) {
                if (section) {
                    const { top, bottom } = section.getBoundingClientRect();

                    if (top <= offset && bottom >= offset) {
                        setActiveId(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds]);

    return activeId;
};