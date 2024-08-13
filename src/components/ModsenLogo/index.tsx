import { Link } from 'react-router-dom';

import modsenLogoImage from '/logo/modsen.svg';
import { ROUTES } from '#/routes';

import styles from './styles.module.scss';

export function ModsenLogo() {
    return (
        <Link className={styles.logo} to={ROUTES.home.getPath()}>
            <img className={styles.image} src={modsenLogoImage} alt="Modsen" />
        </Link>
    );
}
