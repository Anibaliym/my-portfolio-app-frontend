import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../../assets/context/LanguageProvider';
import { experienceData_en, experinceData_es } from '../../assets/data/experienceData';
import { CardExperience } from '../components/ui/cards/CardExperience';

export const ExperiencePage = () => {
    const {language} = useContext(LanguageContext);
    const [arr, setArr] = useState([]); 
    
    useEffect(() => {
        setArr( (language === 'es' ? experinceData_es : experienceData_en) ); 
    }, [language])
    
    return (
        <div style={{ padding:'20px 50px 200px 50px' }}> 
            {
                arr
                .sort((a, b) => b.id - a.id)  // Ordena de mayor a menor por 'id'
                .map( ({ id, startMonthDate, startYear, endMonth, endYear, company, position, positionDescription, technologies }) => (
                    <CardExperience
                        key={ id }
                        startMonthDate={ startMonthDate }
                        startYear={ startYear }
                        endMonth={ endMonth }
                        endYear={ endYear }
                        company={ company }
                        position={ position }
                        positionDescription={ positionDescription }
                        technologies={ technologies }
                        experincesCount = { experinceData_es.length }
                    />
                ))
            }
        </div>
    )
}
