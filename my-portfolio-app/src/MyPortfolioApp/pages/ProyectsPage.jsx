import { useId, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { ArrowUpRight, Wallet, BarChart3, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { CarouselProyectMyAccount } from '../components/carousel/CarouselProyectMyAccount';

const myAccountUrl = import.meta.env.VITE_URL_MY_ACCOUNT;

const ProjectAccordion = ({ title, children }) => {
    const [open, setOpen] = useState(false);
    const id = useId();
    return (
        <div className="project-accordion" data-open={open}>
            <button type="button" className="accordion-trigger" id={`${id}-trigger`}
                aria-expanded={open} aria-controls={`${id}-content`} onClick={() => setOpen(current => !current)}>
                {title}<ChevronDown size={16} aria-hidden="true" />
            </button>
            <div className="accordion-panel" id={`${id}-content`} role="region"
                aria-labelledby={`${id}-trigger`} aria-hidden={!open} inert={!open}>
                <div className="accordion-inner">{children}</div>
            </div>
        </div>
    );
};

export const ProyectsPage = () => {
    const { t } = useTranslation();
    const features = [
        { icon: <Wallet size={18} />, key: 'tracking' },
        { icon: <BarChart3 size={18} />, key: 'balances' },
        { icon: <SlidersHorizontal size={18} />, key: 'customization' },
    ];
    return (
        <section className="proyects-container page-enter">
            <header className="section-header">
                <p className="eyebrow">{t('menu.projects')}</p>
                <h2>{t('design.projectsTitle')}</h2>
            </header>
            <article className="project-showcase">
                <div className="project-heading">
                    <div>
                        <p className="project-category">{t('projects.category')}</p>
                        <h3>{t('projects.title')}</h3>
                    </div>
                    {myAccountUrl && <a className="project-demo" href={myAccountUrl} target="_blank" rel="noopener noreferrer">{t('projects.demo')}<ArrowUpRight size={16} /></a>}
                </div>
                <p className="project-summary">{t('design.projectSummary')}</p>
                <CarouselProyectMyAccount />
                <div className="project-features">
                    {features.map(({icon, key}) => <div className="project-feature" key={key}>
                        <span>{icon}</span><h4>{t(`projects.features.${key}`)}</h4>
                    </div>)}
                </div>
                <div className="project-stack">
                    <h4>{t('projects.stack')}</h4>
                    <div className="tech-stack">
                        {['React', 'JavaScript', '.NET Core 8', 'C#', 'PostgreSQL'].map(tech => <span key={tech}>{tech}</span>)}
                    </div>
                </div>
                <div className="project-accordions">
                    <ProjectAccordion title={t('projects.overview')}>
                        <p>{t('projects.functionalDescription')}</p>
                    </ProjectAccordion>
                    <ProjectAccordion title={t('projects.architecture')}>
                        <p><Trans t={t} i18nKey="projects.technicalDescription" components={{ highlight: <b className="text-color-primary" /> }} /></p>
                        <div className="tech-stack"><span>HTML/CSS</span><span>Bootstrap</span><span>Entity Framework Core</span></div>
                    </ProjectAccordion>
                </div>
            </article>
        </section>
    );
};
