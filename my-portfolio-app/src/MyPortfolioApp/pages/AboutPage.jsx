import { useTranslation } from 'react-i18next';
import { Braces, Layers, Database, ArrowUpRight } from 'lucide-react';

import resumeEs from '../../assets/docs/Anibal-Yanez-CV-ES.pdf?url';
import resumeEn from '../../assets/docs/Anibal-Yanez-CV-EN.pdf?url';

export const AboutPage = () => {
    const { t, i18n } = useTranslation();
    const isSpanish = i18n.resolvedLanguage === 'es';
    const resumeUrl = isSpanish ? resumeEs : resumeEn;
    const specialties = [
        { icon: <Database size={22} />, title: '.NET / C#', text: t('design.backend') },
        { icon: <Braces size={22} />, title: 'React', text: t('design.frontend') },
        { icon: <Layers size={22} />, title: 'DDD / APIs', text: t('design.architecture') },
    ];
    return (
        <section className="about-container page-enter">
            <header className="section-header">
                <p className="eyebrow">{t('menu.about')}</p>
                <h2>{t('design.aboutTitle')}</h2>
                <p className="section-intro">{t('design.aboutIntro')}</p>
            </header>
            <div className="about-copy">
                {[1, 2, 3].map(number => <p key={number}>{t(`design.aboutParagraph${number}`)}</p>)}
            </div>
            <div className="specialties">
                {specialties.map(({icon, title, text}) => (
                    <article className="specialty" key={title}>
                        <span className="specialty-icon">{icon}</span>
                        <h3>{title}</h3><p>{text}</p>
                    </article>
                ))}
            </div>
            <div className="experience-highlight"><strong>10+</strong><span>{t('design.yearsExperience')}</span></div>
            <a className="resume-link" href={resumeUrl} target="_blank" rel="noopener noreferrer">
                {t('design.resume')}<ArrowUpRight size={17} aria-hidden="true" />
                <span className="resume-format">PDF</span>
            </a>
        </section>
    );
};
