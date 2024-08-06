import { PaginationData } from '#/hooks/usePagination';

import styles from './Pagination.module.scss';

type PaginationProps = {
    pagination: PaginationData;
};

function Pagination({ pagination }: PaginationProps) {
    return (
        <div className={styles.pagination}>
            {pagination.hasPrev && (
                <div className={styles.group}>
                    <button
                        className={styles.button}
                        onClick={() => pagination.toStart()}
                    >
                        &#60;&#60;
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => pagination.prev()}
                    >
                        &#60;
                    </button>
                </div>
            )}
            <div className={styles.group}>
                {pagination.display.map((p) => (
                    <button
                        key={p}
                        className={styles.button}
                        data-current={p === pagination.current}
                        onClick={() => pagination.set(p)}
                    >
                        {p}
                    </button>
                ))}
            </div>
            {pagination.hasNext && (
                <div className={styles.group}>
                    <button
                        className={styles.button}
                        onClick={() => pagination.next()}
                    >
                        &#62;
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => pagination.toEnd()}
                    >
                        &#62;&#62;
                    </button>
                </div>
            )}
        </div>
    );
}

export type { PaginationProps };
export { Pagination };
