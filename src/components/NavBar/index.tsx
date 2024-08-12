import { ROUTES } from '#/routes';
import { NavButton } from '#components/NavButton';

import styles from './styles.module.scss';

function NavBar() {
    return (
        <div className={styles.navbar}>
            {Object.values(ROUTES)
                .filter((r) => r.link !== null)
                .map((r) => (
                    <NavButton
                        key={r.basePath}
                        to={r.getPath()}
                        text={r.link.text}
                        iconSrc={r.link.icon}
                    />
                ))}
        </div>
    );
}

export { NavBar };
