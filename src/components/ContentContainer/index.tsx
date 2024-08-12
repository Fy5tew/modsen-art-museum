import { ReactNode } from 'react';

import styles from './styles.module.scss';

export type ContentContainerProps = {
    className?: string;
    children: ReactNode;
};

export function ContentContainer({
    className,
    children,
}: ContentContainerProps) {
    return (
        <div className={[styles.container, className].join(' ')}>
            {children}
        </div>
    );
}
