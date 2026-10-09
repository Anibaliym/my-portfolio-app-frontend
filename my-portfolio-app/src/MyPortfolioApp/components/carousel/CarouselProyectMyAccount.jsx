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
import { useContext, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const CarouselProyectMyAccount = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(2);
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

    const selectSlide = (offset) => setActiveIndex(current => (current + offset + images.length) % images.length);

    return (
        <div className="project-gallery" role="region" aria-label={t('projects.gallery')}>
            <div className="gallery-frame">
                <div className="gallery-browser" aria-hidden="true">
                    <span></span><span></span><span></span><small>Mi Cuenta</small>
                </div>
                <img src={images[activeIndex].src} alt={t(`carousel.slides.${activeIndex}`)} className="gallery-image" />
            </div>
            <div className="gallery-toolbar">
                <div className="gallery-caption" aria-live="polite">
                    <span>{String(activeIndex + 1).padStart(2, '0')} / {images.length}</span>
                    <strong>{t(`carousel.slides.${activeIndex}`)}</strong>
                </div>
                <div className="gallery-controls">
                    <button type="button" onClick={() => selectSlide(-1)} aria-label={t('carousel.previous')}><ChevronLeft size={18} /></button>
                    <button type="button" onClick={() => selectSlide(1)} aria-label={t('carousel.next')}><ChevronRight size={18} /></button>
                </div>
            </div>
            <div className="gallery-pagination">
                {images.map((image, index) => (
                    <button key={index} type="button" aria-label={t(`carousel.slides.${index}`)}
                        aria-pressed={activeIndex === index} onClick={() => setActiveIndex(index)}
                        title={t(`carousel.slides.${index}`)}><span /></button>
                ))}
            </div>
        </div>
    );
};
