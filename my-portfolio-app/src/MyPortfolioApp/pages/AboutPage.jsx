import { useContext } from 'react';
import { LanguageContext } from '../../assets/context/LanguageProvider';

export const AboutPage = () => {

    const { language } = useContext(LanguageContext);

    return (
        <div className="about-container text-color-default animate__animated animate__fadeInDown animate__faster">
            {language === 'es' ? (
                <>
                    <p>
                        Soy un desarrollador Fullstack Senior con más de 10 años de experiencia, 
                        especializado en el desarrollo de soluciones de software utilizando principalmente herramientas 
                        <b><span className="text-color-primary"> .NET</span></b>, y lenguaje 
                        <b><span className="text-color-primary"> C#</span></b>. 
                        Mi trayectoria profesional incluye el diseño, desarrollo e implementación de aplicaciones y 
                        microservicios escalables y de alta calidad, 
                        aplicando arquitecturas avanzadas como Domain-Driven Design (DDD) y principios de código limpio.
                    </p>

                    <p>
                        Mi mayor fortaleza reside en el ecosistema .NET, 
                        donde he trabajado extensamente desarrollando APIs robustas, aplicaciones empresariales y sistemas orientados al cliente, 
                        optimizando el rendimiento de bases de datos SQL, PostgreSQL, MySQL y Oracle. 
                    </p>

                    <p>
                        Además, tengo un gran interés por el desarrollo Front-End utilizando herramientas como la librería <span className="text-color-primary"><b> React</b></span>, enfocado en ofrecer experiencias de usuario sobresalientes mediante 
                        la creación de interfaces modernas, atractivas y de fácil uso que combinan diseño limpio con funcionalidades robustas.
                    </p>

                    <p>
                        He colaborado en equipos ágiles bajo metodologías Scrum, gestionando tareas con herramientas como Jira y 
                        utilizando sistemas de control de versiones como Azure Repos y plataformas basadas en la herramienta <b>Git</b>. 
                    </p>

                    <p>
                        Me apasiona aprender nuevas tecnologías y aplicar ese conocimiento para crear soluciones innovadoras 
                        que cumplan con altos estándares de calidad y usabilidad.
                    </p>
                </>
            ) : (
                <>
                    <p>
                        I am a Senior Fullstack Developer with over 10 years of experience, specializing in software solutions development 
                        primarily using <b><span className="text-color-primary"> .NET</span></b> tools and the 
                        <b><span className="text-color-primary"> C#</span></b> language. 
                        My professional journey includes designing, developing, and implementing scalable, high-quality microservices, 
                        applying advanced architectures such as Domain-Driven Design (DDD) and clean code principles.
                    </p>

                    <p>
                        My main strength lies within the .NET ecosystem, where I have extensively worked on developing robust APIs, 
                        enterprise applications, and client-oriented systems, optimizing the performance of SQL, PostgreSQL, MySQL, and Oracle databases.
                    </p>

                    <p>
                        Additionally, I have a strong interest in Front-End development using tools like the <span className="text-color-primary"><b> React</b></span> library, 
                        focusing on providing outstanding user experiences through the creation of modern, attractive, and easy-to-use interfaces 
                        that combine clean design with robust functionalities.
                    </p>

                    <p>
                        I have collaborated in agile teams under Scrum methodologies, managing tasks with tools like Jira and 
                        using version control systems such as Azure Repos and platforms based on <b>Git</b>.
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