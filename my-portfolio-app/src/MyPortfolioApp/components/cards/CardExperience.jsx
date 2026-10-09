export const CardExperience = ({ startMonthDate, startYear, endMonth, endYear, company, position, positionDescription, technologies }) => (
    <article className="experience-card">
        <p className="experience-date">{`${startMonthDate} ${startYear} — ${endMonth} ${endYear}`.trim()}</p>
        <h3>{company}</h3>
        <p className="experience-position">{position}</p>
        <p className="experience-description">{positionDescription}</p>
        <div className="tech-stack">
            {technologies.map(({ id, description }) => <span key={id}>{description}</span>)}
        </div>
    </article>
);
