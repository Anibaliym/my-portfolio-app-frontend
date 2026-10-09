import { Trans, useTranslation } from 'react-i18next';
import { CarouselProyectMyAccount } from '../components/carousel/CarouselProyectMyAccount';

const myAccountUrl = import.meta.env.VITE_URL_MY_ACCOUNT;

export const ProyectsPage = () => {
    const { t } = useTranslation();

    return (
        <div className="proyects-container">
            <div className="proyect-card animate__animated animate__fadeInDown animate__faster">
                <h6 className="display-6 fs-1 text-color-primary mb-3">{ t('projects.title') }</h6>
                <small className="lead fw-normal text-color-forte fs-6">{ t('projects.functionalTitle') }</small>
                <div className="description-section text-color-default">
                    <p>{ t('projects.functionalDescription') }</p>
                </div>
                <small className="lead fw-normal text-color-forte fs-6">{ t('projects.technicalTitle') }</small>
                <div className="description-section text-color-default">
                    <p>
                        <Trans t={t} i18nKey="projects.technicalDescription"
                            components={{ highlight: <b className="text-color-primary" /> }} />
                    </p>
                </div>
                <div className="tools-section mb-3">
                    <small className="lead fw-normal text-color-forte fs-6">{ t('projects.toolsTitle') }</small>
                    <div  className="tech-stack mt-3">
                        <span>React</span>
                        <span>JavaScript</span>
                        <span>HTML/CSS</span>
                        <span>Bootstrap</span>
                        <span>C#</span>
                        <span>.NET Core 8</span>
                        <span>Entity Framework Core</span>
                        <span>PostgreSQL</span>
                    </div>
                </div>

                <CarouselProyectMyAccount />

                <div className="container">
                    <div className="row mt-3">
                        <button className="primary-button" onClick={() => window.location.href = myAccountUrl}>
                            { t('projects.explore') }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
