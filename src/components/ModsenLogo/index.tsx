import modsenLogoImage from '/logo/modsen.svg';

import styles from './styles.module.scss';

export function ModsenLogo() {
    return (
        <div className={styles.logo}>
            <img className={styles.image} src={modsenLogoImage} alt="Modsen" />
        </div>
    );
}
