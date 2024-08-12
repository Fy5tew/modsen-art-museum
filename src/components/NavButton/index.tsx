import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export type NavButtonProps = {
    to: string;
    text: string;
    iconSrc: string;
};

export function NavButton({ to, text, iconSrc }: NavButtonProps) {
    return (
        <Link className={styles.link} to={to}>
            <img className={styles.icon} src={iconSrc} alt="" />
            <span className={styles.text}>{text}</span>
        </Link>
    );
}
