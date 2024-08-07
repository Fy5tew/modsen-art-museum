import { Link } from 'react-router-dom';

import styles from './NavButton.module.scss';

type NavButtonProps = {
    to: string;
    text: string;
    iconSrc: string;
};

function NavButton({ to, text, iconSrc }: NavButtonProps) {
    return (
        <Link className={styles.link} to={to}>
            <img className={styles.icon} src={iconSrc} alt="" />
            <span className={styles.text}>{text}</span>
        </Link>
    );
}

export type { NavButtonProps };
export { NavButton };
