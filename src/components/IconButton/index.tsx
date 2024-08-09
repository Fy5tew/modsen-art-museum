import styles from './styles.module.scss';

type IconButtonProps = {
    iconSrc: string;
    alt?: string;
    isActive?: boolean;
    onClick: () => void;
};

function IconButton({
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

export type { IconButtonProps };
export { IconButton };
