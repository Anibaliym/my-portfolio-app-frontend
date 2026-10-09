import { ThemeContext } from '../../../assets/context/ThemeProvider';

import LoginPageLight from '../../../assets/images/proyect-mi-account-lightmode/LoginPage.png';
import ProfilePageLight from '../../../assets/images/proyect-mi-account-lightmode/ProfilePage.png';
import ProfilePageDeleteAccountLight from '../../../assets/images/proyect-mi-account-lightmode/ProfilePageDeleteAccount.png';
import RegisterPageLight from '../../../assets/images/proyect-mi-account-lightmode/RegisterPage.png';
import SessionExpiredLight from '../../../assets/images/proyect-mi-account-lightmode/SessionExpired.png';
import SheetPageLight from '../../../assets/images/proyect-mi-account-lightmode/SheetPage.png';
import HomePageLight from '../../../assets/images/proyect-mi-account-lightmode/HomePage.png';
import AccountsPageLight from '../../../assets/images/proyect-mi-account-lightmode/AccountsPage.png';
import DeleteUserAccountModalLight from '../../../assets/images/proyect-mi-account-lightmode/DeleteUserAccountModal.png';

import LoginPageDark from '../../../assets/images/proyect-mi-account-darkmode/LoginPage.png';
import ProfilePageDark from '../../../assets/images/proyect-mi-account-darkmode/ProfilePage.png';
import ProfilePageDeleteAccountDark from '../../../assets/images/proyect-mi-account-darkmode/ProfilePageDeleteAccount.png';
import RegisterPageDark from '../../../assets/images/proyect-mi-account-darkmode/RegisterPage.png';
import SessionExpiredDark from '../../../assets/images/proyect-mi-account-darkmode/SessionExpired.png';
import SheetPageDark from '../../../assets/images/proyect-mi-account-darkmode/SheetPage.png';
import HomePageDark from '../../../assets/images/proyect-mi-account-darkmode/HomePage.png';
import AccountsPageDark from '../../../assets/images/proyect-mi-account-darkmode/AccountsPage.png';
import DeleteUserAccountModalDark from '../../../assets/images/proyect-mi-account-darkmode/DeleteUserAccountModal.png';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

export const CarouselProyectMyAccount = () => {
    const { t } = useTranslation();
    const {isDarkMode} = useContext(ThemeContext);

    const images = isDarkMode
        ? [
            { src: LoginPageDark },
            { src: RegisterPageDark },
            { src: HomePageDark },
            { src: ProfilePageDark },
            { src: AccountsPageDark },
            { src: SheetPageDark },
            { src: SessionExpiredDark },
            { src: DeleteUserAccountModalDark },
            { src: ProfilePageDeleteAccountDark }
        ]
        : [
            { src: LoginPageLight },
            { src: RegisterPageLight },
            { src: HomePageLight },
            { src: ProfilePageLight },
            { src: AccountsPageLight },
            { src: SheetPageLight },
            { src: SessionExpiredLight },
            { src: DeleteUserAccountModalLight },
            { src: ProfilePageDeleteAccountLight }
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
                        <img src={image.src} className="d-block w-100 rounded-3" alt={t(`carousel.slides.${index}`)} />
                        
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
                            <h6 style={{ margin: 0, fontSize: '0.9rem' }}>{t(`carousel.slides.${index}`)}</h6>
                        </div>
                    </div>
                ))}
            </div>
            
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">{ t('carousel.previous') }</span>
            </button>
            
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">{ t('carousel.next') }</span>
            </button>
        </div>
    );
};