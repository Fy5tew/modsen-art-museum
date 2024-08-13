import { useContext } from 'react';

import { MenuContext } from '#contexts/MenuContext';

import styles from './styles.module.scss';

export function MenuButton() {
    const { isOpened, toggle } = useContext(MenuContext);

    return (
        <button
            className={styles.button}
            data-active={isOpened}
            onClick={toggle}
        >
            <span className={styles.line} />
            <span className={styles.line} />
            <span className={styles.line} />
        </button>
    );
}
