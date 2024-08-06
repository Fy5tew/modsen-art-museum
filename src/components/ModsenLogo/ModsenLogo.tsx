import modsenLogoImage from '/logo/modsen.svg';

import styles from './ModsenLogo.module.scss';

function ModsenLogo() {
    return (
        <div className={styles.logo}>
            <img className={styles.image} src={modsenLogoImage} alt="Modsen" />
        </div>
    );
}

export { ModsenLogo };
