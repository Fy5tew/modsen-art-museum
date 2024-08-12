import { InputHTMLAttributes } from 'react';

import searchNeutralIcon from '/icon/search-neutral.svg';

import styles from './styles.module.scss';

type SearchProps = InputHTMLAttributes<HTMLInputElement>;

function Search({ ...props }: SearchProps) {
    return (
        <div className={styles.search}>
            <input className={styles.input} {...props} />
            <img className={styles.icon} src={searchNeutralIcon} alt="" />
        </div>
    );
}

export type { SearchProps };
export { Search };
