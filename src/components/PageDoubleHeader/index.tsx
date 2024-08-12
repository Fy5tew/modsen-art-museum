import { ReactNode } from 'react';

import styles from './styles.module.scss';

type PageDoubleHeaderProps = {
    mainHeader: ReactNode;
    subHeader: ReactNode;
};

function PageDoubleHeader({ mainHeader, subHeader }: PageDoubleHeaderProps) {
    return (
        <div className={styles.doubleHeader}>
            <h4 className={styles.subHeader}>{subHeader}</h4>
            <h2 className={styles.mainHeader}>{mainHeader}</h2>
        </div>
    );
}

export type { PageDoubleHeaderProps };
export { PageDoubleHeader };
