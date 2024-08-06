import { ReactNode } from 'react';
import { ContentContainer } from '#/components/ContentContainer';
import { Header } from '#components/Header';
import { Footer } from '#components/Footer';

import styles from './PageLayout.module.scss';

type PageLayoutProps = {
    children: ReactNode;
};

function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.headerWrapper}>
                <ContentContainer>
                    <Header />
                </ContentContainer>
            </div>
            <div className={styles.contentWrapper}>
                <ContentContainer className={styles.content}>
                    {children}
                </ContentContainer>
            </div>
            <div className={styles.footerWraper}>
                <Footer />
            </div>
        </div>
    );
}

export type { PageLayoutProps };
export { PageLayout };
