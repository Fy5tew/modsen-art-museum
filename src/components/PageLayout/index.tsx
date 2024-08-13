import { ReactNode } from 'react';

import { ContentContainer } from '#components/ContentContainer';
import { ErrorBoundary } from '#components/ErrorBoundary';
import { ErrorDetail } from '#components/ErrorDetail';
import { Footer } from '#components/Footer';
import { Header } from '#components/Header';

import styles from './styles.module.scss';

export type PageLayoutProps = {
    children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className={styles.pageWrapper}>
            <header className={styles.headerWrapper}>
                <Header />
            </header>
            <main className={styles.contentWrapper}>
                <ErrorBoundary fallback={<ErrorDetail />}>
                    <ContentContainer className={styles.content}>
                        {children}
                    </ContentContainer>
                </ErrorBoundary>
            </main>
            <footer className={styles.footerWraper}>
                <Footer />
            </footer>
        </div>
    );
}
