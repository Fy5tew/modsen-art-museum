import { ReactNode } from 'react';

import styles from './styles.module.scss';

const DEFAULT_ERROR_MESSAGE = (
    <>
        <mark>Sorry</mark>, something went wrong...
    </>
);

export type ErrorDetailProps = {
    children?: ReactNode;
};

export function ErrorDetail({ children }: ErrorDetailProps) {
    return (
        <h1 className={styles.errorDetail}>
            {children ?? DEFAULT_ERROR_MESSAGE}
        </h1>
    );
}
