import { useContext } from 'react';
import { LanguageContext } from '../../assets/context/LanguageProvider';
import { CarouselProyectMyAccount } from '../components/carousel/CarouselProyectMyAccount';

const myAccountUrl = import.meta.env.VITE_URL_MY_ACCOUNT; 

export const ProyectsPage = () => {

    const {language} = useContext(LanguageContext);
    
    return (
        <div style={{ padding:'20px 50px 200px 50px' }}> 
            <div className="proyect-card animate__animated animate__fadeInDown animate__faster">
                <h6 className="display-6 fs-1 text-color-primary mb-3">
                    { (language === 'es' ? 'MI CUENTA' : 'MY ACCOUNT') }
                </h6>

                <small className="lead fw-normal text-color-forte fs-6">
                    { (language === 'es' ? 'Descripción funcional:' : 'Functional Description:') }
                </small>
                <div className="description-section text-color-default">
                    <p>
                        { 
                            (language === 'es')
                                ? 'La aplicación Mi Cuenta es una plataforma intuitiva diseñada para simplificar la gestión y supervisión de las finanzas personales de manera clara y eficiente. Proporciona un control detallado de ingresos, gastos y balances mensuales y anuales, permitiendo a los usuarios llevar un seguimiento preciso de su situación financiera. La aplicación ofrece un panel de visualización dinámico con gráficos interactivos y opciones de personalización adaptables a las necesidades específicas de cada usuario.' 
                                : 'My Account App is an intuitive platform designed to simplify the management and supervision of personal finances in a clear and efficient way. It provides detailed control of income, expenses, and monthly and annual balances, allowing users to keep precise track of their financial situation. The application offers a dynamic dashboard with interactive charts and customization options tailored to each user’s specific needs.' 
                        }
                    </p>
                </div>

                <small className="lead fw-normal text-color-forte  fs-6">
                    {
                        (language === 'es')
                            ? 'Descripción Técnica:'
                            : 'Overview:'
                    }
                    
                </small>
                <div className="description-section text-color-default">
                    <p>
                        {
                            (language === 'es')
                                ? 'La aplicación se desarrolla utilizando'
                                : 'The application is developed using '
                        }

                        <strong>React</strong> 
                        {
                            (language === 'es')
                                ? ' para el frontend, proporcionando una interfaz moderna y dinámica, mientras que el backend está implementado con '
                                : ' for the frontend, providing a modern and dynamic interface, while the backend is implemented to ensure robust and scalable performance. '
                        }
                        
                        {
                            (language === 'es')
                                ? ' asegurando un rendimiento robusto y escalable. Los datos se almacenan eficientemente en una base de datos '
                                : ' ensuring robust and scalable performance. The data is efficiently stored in a '
                        }
                        
                        <strong> .NET Core 8</strong>, 
                        <strong> PostgreSQL</strong>,

                        {
                            (language === 'es')
                                ? ' garantizando un manejo seguro, confiable y preparado para escalar en cualquier momento.'
                                : ' guaranteeing secure, reliable management and readiness for scaling at any time.'
                        }
                    </p>
                </div>

                <div className="tools-section mb-3">
                    <small className="lead fw-normal text-color-forte  fs-6">
                        {
                            (language === 'es')
                                ? 'Herramientas y lenguajes utilizados:'
                                : 'Tools and Languages Used:'
                        }
                        
                    </small>
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

                <p className="mt-3 text-color-default text-center">
                    {
                        (language === 'es')
                            ? '¿Quieres experimentar todo el potencial de '
                            : 'Want to experience the full potential of  '
                    }

                    <strong>
                        {
                            (language === 'es')
                                ? 'Mi Cuenta'
                                : 'My Account'
                        }
                    </strong>

                    {
                        (language === 'es')
                            ? '? Crea una cuenta y pruébalo ahora.'
                            : '? Create an account and try it now!”'
                    }
                </p>

                <div className="container">
                    <div className="row mt-3">
                        <button 
                            className="primary-button"
                            onClick={() => window.location.href = myAccountUrl}
                        >
                            {
                                (language === 'es')
                                    ? 'Probar la Aplicación'
                                    : 'Start Exploring My Account'
                            }                            
                        </button>
                    </div>
                </div>
           </div>
        </div>
    )
}