import { ThemeContext } from '../../assets/context/ThemeProvider';

import LoginPageLight from '../../assets/images/proyect-mi-account-lightmode/LoginPage.png';
import ProfilePageLight from '../../assets/images/proyect-mi-account-lightmode/ProfilePage.png';
import ProfilePageDeleteAccountLight from '../../assets/images/proyect-mi-account-lightmode/ProfilePageDeleteAccount.png';
import RegisterPageLight from '../../assets/images/proyect-mi-account-lightmode/RegisterPage.png';
import SessionExpiredLight from '../../assets/images/proyect-mi-account-lightmode/SessionExpired.png';
import SheetPageLight from '../../assets/images/proyect-mi-account-lightmode/SheetPage.png';
import HomePageLight from '../../assets/images/proyect-mi-account-lightmode/HomePage.png';
import AccountsPageLight from '../../assets/images/proyect-mi-account-lightmode/AccountsPage.png';
import DeleteUserAccountModalLight from '../../assets/images/proyect-mi-account-lightmode/DeleteUserAccountModal.png';

import LoginPageDark from '../../assets/images/proyect-mi-account-darkmode/LoginPage.png';
import ProfilePageDark from '../../assets/images/proyect-mi-account-darkmode/ProfilePage.png';
import ProfilePageDeleteAccountDark from '../../assets/images/proyect-mi-account-darkmode/ProfilePageDeleteAccount.png';
import RegisterPageDark from '../../assets/images/proyect-mi-account-darkmode/RegisterPage.png';
import SessionExpiredDark from '../../assets/images/proyect-mi-account-darkmode/SessionExpired.png';
import SheetPageDark from '../../assets/images/proyect-mi-account-darkmode/SheetPage.png';
import HomePageDark from '../../assets/images/proyect-mi-account-darkmode/HomePage.png';
import AccountsPageDark from '../../assets/images/proyect-mi-account-darkmode/AccountsPage.png';
import DeleteUserAccountModalDark from '../../assets/images/proyect-mi-account-darkmode/DeleteUserAccountModal.png';
import { useContext } from 'react';

export const ProyectImageCarousel = () => {

    const {isDarkMode} = useContext(ThemeContext);

    const images = isDarkMode
        ? [
            { src: LoginPageDark, desc: 'Acceso' },
            { src: RegisterPageDark, desc: 'Registro' },
            { src: HomePageDark, desc: 'Inicio de la aplicación' },
            { src: ProfilePageDark, desc: 'Perfil de usuario' },
            { src: AccountsPageDark, desc: 'Cuentas' },
            { src: SheetPageDark, desc: 'Hojas de cálculo' },
            { src: SessionExpiredDark, desc: 'Sesión expirada' },
            { src: DeleteUserAccountModalDark, desc: 'Eliminación de usuario' },
            { src: ProfilePageDeleteAccountDark, desc: 'Usuario eliminado' }
        ]
        : [
            { src: LoginPageLight, desc: 'Acceso' },
            { src: RegisterPageLight, desc: 'Registro' },
            { src: HomePageLight, desc: 'Inicio de la aplicación' },
            { src: ProfilePageLight, desc: 'Perfil de usuario' },
            { src: AccountsPageLight, desc: 'Cuentas' },
            { src: SheetPageLight, desc: 'Hojas de cálculo' },
            { src: SessionExpiredLight, desc: 'Sesión expirada' },
            { src: DeleteUserAccountModalLight, desc: 'Eliminación de usuario' },
            { src: ProfilePageDeleteAccountLight, desc: 'Usuario eliminado' }
        ];

    return (
        <div 
            id="carouselExampleAutoplaying" 
            className="carousel slide rounded-3 shadow" 
            data-bs-ride="carousel" 
            style={{ boxShadow: '0px 0px 5px var(--primary-color)', transition: '0.4s' }}
        >
            <div className="carousel-inner rounded-3">
                {images.map((image, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img src={image.src} className="d-block w-100 rounded-3" alt={image.desc} />
                        
                        {/* Descripción en la esquina inferior derecha */}
                        <div 
                            className="carousel-caption d-none d-md-block"
                            style={{
                                position: 'absolute',
                                bottom: '10px',
                                right: '10px',
                                backgroundColor: 'rgba(0, 0, 0, 0.3)', // Fondo oscuro semitransparente
                                borderRadius: '5px',
                                padding: '5px 10px',
                                color: 'white'
                            }}
                        >
                            <h6 style={{ margin: 0, fontSize: '0.9rem' }}>{image.desc}</h6>
                        </div>
                    </div>
                ))}
            </div>
            
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};