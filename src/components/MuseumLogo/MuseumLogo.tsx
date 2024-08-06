import museumLogoShortSrc from '/logo/museum-short.svg';
import museumLogoFullWhiteSrc from '/logo/museum-full-white.svg';
import museumLogoFullBlackSrc from '/logo/museum-full-black.svg';

import styles from './MuseumLogo.module.scss';

type MuseumLogoProps = {
    variant?: 'short' | 'full-white' | 'full-black';
};

function MuseumLogo({ variant = 'short' }: MuseumLogoProps) {
    const logoSrc = {
        'short': museumLogoShortSrc,
        'full-white': museumLogoFullWhiteSrc,
        'full-black': museumLogoFullBlackSrc,
    }[variant];

    return (
        <div className={styles.logo}>
            <img className={styles.image} src={logoSrc} alt="Museum of Art" />
        </div>
    );
}

export type { MuseumLogoProps };
export { MuseumLogo };
