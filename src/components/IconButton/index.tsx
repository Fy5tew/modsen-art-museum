import { MouseEventHandler } from 'react';

import styles from './styles.module.scss';

export type IconButtonProps = {
    iconSrc: string;
    alt?: string;
    isActive?: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
};

export function IconButton({
    iconSrc,
    alt,
    isActive = false,
    onClick,
}: IconButtonProps) {
    return (
        <button
            className={styles.button}
            data-active={isActive}
            onClick={onClick}
        >
            <img className={styles.icon} src={iconSrc} alt={alt ?? ''} />
        </button>
    );
}
