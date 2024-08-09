import { NavButton } from '#components/NavButton';
import { ROUTES } from '#/routes';

import styles from './styles.module.scss';

function NavBar() {
    return (
        <div className={styles.navbar}>
            {ROUTES.filter((r) => r.link !== null).map((r) => (
                <NavButton
                    key={r.path}
                    to={r.path}
                    text={r.link.text}
                    iconSrc={r.link.icon}
                />
            ))}
        </div>
    );
}

export { NavBar };
