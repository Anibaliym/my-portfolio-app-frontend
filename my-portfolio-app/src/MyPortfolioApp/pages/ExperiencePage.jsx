import { useTranslation } from 'react-i18next';
import { experienceData } from '../../assets/data/experienceData';
import { CardExperience } from '../components/cards/CardExperience';

const sortedExperience = [...experienceData].sort((a, b) => b.id - a.id);

export const ExperiencePage = () => {
    const { t } = useTranslation();

    return (
        <div className="experience-container">
            {
                sortedExperience.map((experience) => (
                    <CardExperience
                        key={experience.id}
                        {...experience}
                        startMonthDate={t(`experience.entries.${experience.id}.startMonthDate`)}
                        endMonth={t(`experience.entries.${experience.id}.endMonth`)}
                        position={t(`experience.entries.${experience.id}.position`)}
                        positionDescription={t(`experience.entries.${experience.id}.positionDescription`)}
                        technologies={experience.technologies.map((technology) => ({
                            ...technology,
                            description: technology.translationKey ? t(technology.translationKey) : technology.description,
                        }))}
                    />
                ))
            }
        </div>
    );
};
