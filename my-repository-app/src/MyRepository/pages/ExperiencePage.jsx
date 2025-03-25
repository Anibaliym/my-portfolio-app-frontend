import { experinceData } from '../../assets/data/experienceData'; 
import { ExperienceCard } from '../components/ExperienceCard'; 

export const ExperiencePage = () => {
    
    return (
        <div style={{ padding:'20px 50px 200px 50px' }}> 
            {
                experinceData
                .sort((a, b) => b.id - a.id)  // Ordena de mayor a menor por 'id'
                .map( ({ id, startMonthDate, startYear, endMonth, endYear, company, position, positionDescription, technologies }) => (
                    <ExperienceCard
                        key={ id }
                        startMonthDate={ startMonthDate }
                        startYear={ startYear }
                        endMonth={ endMonth }
                        endYear={ endYear }
                        company={ company }
                        position={ position }
                        positionDescription={ positionDescription }
                        technologies={ technologies }
                        experincesCount = { experinceData.length }
                    />
                ))
            }
        </div>
    )
}
