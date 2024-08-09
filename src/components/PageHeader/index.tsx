import { ReactNode } from 'react';
import styles from './styles.module.scss';

type PageHeaderProps = {
    children: ReactNode;
};

function PageHeader({ children }: PageHeaderProps) {
    return <h1 className={styles.header}>{children}</h1>;
}

export type { PageHeaderProps };
export { PageHeader };
