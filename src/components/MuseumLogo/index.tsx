import { Link } from 'react-router-dom';

import museumLogoFullBlackSrc from '/logo/museum-full-black.svg';
import museumLogoFullWhiteSrc from '/logo/museum-full-white.svg';
import museumLogoShortSrc from '/logo/museum-short.svg';
import { ROUTES } from '#/routes';

import styles from './styles.module.scss';

export type MuseumLogoProps = {
    variant?: 'short' | 'full-white' | 'full-black';
};

export function MuseumLogo({ variant = 'short' }: MuseumLogoProps) {
    const logoSrc = {
        'short': museumLogoShortSrc,
        'full-white': museumLogoFullWhiteSrc,
        'full-black': museumLogoFullBlackSrc,
    }[variant];

    return (
        <Link className={styles.logo} to={ROUTES.home.getPath()}>
            <img className={styles.image} src={logoSrc} alt="Museum of Art" />
        </Link>
    );
}
