import { useContext } from 'react';
import { LanguageContext } from '../../assets/context/LanguageProvider';

export const AboutPage = () => {

    const { language } = useContext(LanguageContext);

    return (
        <div className="about-container text-color-default animate__animated animate__fadeInDown animate__faster">
            {language === 'es' ? (
                <>
                    <p>
                        Soy un desarrollador Fullstack Senior con más de 10 años de experiencia, especializado en el desarrollo de soluciones de 
                        software utilizando principalmente herramientas microsoft como el entorno 
                        <b><span className="text-color-primary"> .NET</span></b>, y lenguaje 
                        <b><span className="text-color-primary"> C#</span></b>.
                    </p>

                    <p>
                        Mi trayectoria profesional incluye el diseño, desarrollo e implementación de aplicaciones y microservicios escalables 
                        y de alta calidad, aplicando arquitecturas avanzadas como Domain-Driven Design (DDD) y principios de código limpio.                    
                    </p>

                    <p>
                        Mi mayor fortaleza reside en el ecosistema .NET, donde he trabajado extensamente en el desarrollo de APIs robustas, 
                        aplicaciones empresariales y sistemas orientados al cliente. Además, tengo experiencia optimizando el rendimiento de bases de datos SQL, 
                        PostgreSQL, MySQL y Oracle.
                    </p>

                    <p>
                        Además, tengo un gran interés por el desarrollo Front-End utilizando herramientas como la librería <span className="text-color-primary"><b> React</b></span>, 
                        enfocado en ofrecer experiencias de usuario sobresalientes mediante la creación de interfaces modernas, atractivas y de fácil uso que combinan diseño limpio con funcionalidades robustas.
                    </p>

                    <p>
                        He colaborado en equipos ágiles bajo metodologías <b><span className="text-color-primary"> Scrum</span></b>, gestionando tareas con herramientas como Jira y 
                        utilizando sistemas de control de versiones como Azure Repos y plataformas basadas en la herramienta <span className="text-color-primary"><b> GIT</b></span>. 
                    </p>

                    <p>
                        Me apasiona aprender nuevas tecnologías y aplicar ese conocimiento para crear soluciones innovadoras 
                        que cumplan con altos estándares de calidad y usabilidad.
                    </p>
                </>
            ) : (
                <>
                    <p>
                        I am a Senior Fullstack Developer with over 10 years of experience, specialized in software solutions development
                        primarily using <b><span class="text-color-primary">.NET</span></b> tools and the 
                        <b><span class="text-color-primary"> C#</span></b> programming language.
                    </p>

                    <p>
                        My professional journey includes designing, developing, and implementing scalable, high-quality microservices,
                        applying advanced architectures such as <b>Domain-Driven Design (DDD)</b> and clean code principles.
                    </p>

                    <p>
                        My main strength lies within the <b>.NET</b> ecosystem, where I have extensively worked on developing robust APIs,
                        enterprise applications, and client-oriented systems, optimizing the performance of 
                        <b> SQL</b>, <b>PostgreSQL</b>, <b>MySQL</b>, and <b>Oracle</b> databases.
                    </p>

                    <p>
                        Additionally, I have a strong interest in <b>Front-End development</b> using tools like the 
                        <b><span class="text-color-primary"> React</span></b> library, focusing on providing outstanding user experiences through the creation of modern, attractive, and easy-to-use interfaces that combine clean design with robust functionalities.
                    </p>

                    <p>
                        I have collaborated in agile teams under <b>Scrum</b> methodologies, managing tasks with tools like 
                        <b>Jira</b> and using version control systems such as <b>Azure Repos</b> and platforms based on <b>Git</b>.
                    </p>

                    <p>
                        I am passionate about learning new technologies and applying this knowledge to create innovative solutions
                        that meet high standards of quality and usability.
                    </p>
                </>
            )}
        </div>
    )
}