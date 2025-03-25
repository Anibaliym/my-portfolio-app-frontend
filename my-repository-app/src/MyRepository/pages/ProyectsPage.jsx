import { ProyectImageCarousel } from "../components/ProyectImageCarousel"

export const ProyectsPage = ({ isDarkMode }) => {
    return (
        <div style={{ padding:'20px 50px 200px 50px' }}> 
            <div className="proyect-card animate__animated animate__fadeInDown animate__faster">
                <h6 className="display-6 fs-1 text-color-primary mb-3">
                    MI CUENTA
                </h6>

                <small className="lead fw-normal text-color-forte fs-6">Descripción funcional:</small>
                <div className="description-section text-color-default">
                    <p>
                        My Account App es una plataforma intuitiva diseñada para simplificar la gestión y supervisión de las finanzas personales de manera clara y eficiente.
                        Proporciona un control detallado de ingresos, gastos y balances mensuales y anuales, permitiendo a los usuarios llevar un seguimiento preciso de su situación financiera.
                        La aplicación ofrece un panel de visualización dinámico con gráficos interactivos y opciones de personalización adaptables a las necesidades específicas de cada usuario.
                    </p>
                </div>

                <small className="lead fw-normal text-color-forte  fs-6">Descripción Técnica:</small>
                <div className="description-section text-color-default">
                    <p>
                        La aplicación se desarrolla utilizando <strong>React</strong> para el frontend, proporcionando una interfaz moderna y dinámica, mientras que el backend está implementado con 
                        <strong> .NET Core 8</strong>, asegurando un rendimiento robusto y escalable. Los datos se almacenan eficientemente en una base de datos 
                        <strong> PostgreSQL</strong>, garantizando un manejo seguro, confiable y preparado para escalar en cualquier momento.
                    </p>
                </div>

                <div className="tools-section mb-3">
                    <small className="lead fw-normal text-color-forte  fs-6">Herramientas y lenguajes utilizados:</small>
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

                <ProyectImageCarousel isDarkMode={ isDarkMode }/>

                <p className="mt-3 text-color-default text-center">
                    ¿Quieres experimentar todo el potencial de <strong> "Mi Cuenta"</strong>? Crea una cuenta y pruébalo ahora.
                </p>

                <div className="container">
                    <div className="row mt-3">
                        <button className="primary-button">
                            Probar la Aplicación
                        </button>
                    </div>
                </div>
           </div>
        </div>
    )
}