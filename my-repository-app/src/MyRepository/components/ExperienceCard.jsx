export const ExperienceCard = ({ startMonthDate, startYear, endMonth, endYear, company, position, positionDescription, technologies, experincesCount }) => {

    return (
        <div className="experience-card animate__animated animate__fadeInDown animate__faster">
            <div className="experience-row">
                <div>
                    <small className="lead text-color-forte fw-normal">
                        { company } - { position }
                    </small><br />

                    <small className="text-color-default">
                        { `${ startMonthDate } ${ startYear } - ${ endMonth } ${ endYear }` }
                    </small>

                    <div className="experience-description mt-3">
                        <small className="text-color-forte">
                            { positionDescription }
                        </small>
                    </div>
                    <div className="tech-stack mt-4">
                        {
                            technologies.map( ({ id, description }) => (<span key={ id }>{ description }</span>))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
