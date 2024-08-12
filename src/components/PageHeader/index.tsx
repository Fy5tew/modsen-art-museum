import { ReactNode } from 'react';

import styles from './styles.module.scss';

export type PageHeaderProps = {
    children: ReactNode;
};

export function PageHeader({ children }: PageHeaderProps) {
    return <h1 className={styles.header}>{children}</h1>;
}
