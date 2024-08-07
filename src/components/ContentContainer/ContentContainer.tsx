import { ReactNode } from 'react';

import styles from './ContentContainer.module.scss';

type ContentContainerProps = {
    className?: string;
    children: ReactNode;
};

function ContentContainer({ className, children }: ContentContainerProps) {
    return (
        <div className={[styles.container, className].join(' ')}>
            {children}
        </div>
    );
}

export type { ContentContainerProps };
export { ContentContainer };
