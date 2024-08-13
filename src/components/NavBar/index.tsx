import { ROUTES } from '#/routes';
import { NavLink } from '#components/NavButton';

import styles from './styles.module.scss';

export function NavBar() {
    return (
        <nav className={styles.navbar}>
            {Object.values(ROUTES)
                .filter((r) => r.link !== null)
                .map((r) => (
                    <NavLink
                        key={r.basePath}
                        to={r.getPath()}
                        text={r.link.text}
                        iconSrc={r.link.icon}
                    />
                ))}
        </nav>
    );
}
