import { Trans, useTranslation } from 'react-i18next';

export const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <div className="about-container text-color-default animate__animated animate__fadeInDown animate__faster">
            {
                [1, 2, 3, 4, 5, 6].map((number) => (
                    <p key={number}>
                        <Trans
                            t={ t }
                            i18nKey={`about.paragraph${number}`}
                            components={{ highlight: <b className="text-color-primary" /> }}
                        />
                    </p>
                ))
            }
        </div>
    );
};
