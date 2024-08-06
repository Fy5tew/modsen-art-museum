import { NavButton } from '#components/NavButton';
import homePrimaryIconSrc from '/icon/home-primary.svg';
import bookmarkPrimaryIconSrc from '/icon/bookmark-primary.svg';

import styles from './NavBar.module.scss';

const ROUTES = [
    {
        to: '/',
        text: 'Home',
        iconSrc: homePrimaryIconSrc,
    },
    {
        to: '/favorites',
        text: 'Your favorites',
        iconSrc: bookmarkPrimaryIconSrc,
    },
];

function NavBar() {
    return (
        <div className={styles.navbar}>
            {ROUTES.map((r) => (
                <NavButton {...r} key={r.to} />
            ))}
        </div>
    );
}

export { NavBar };
