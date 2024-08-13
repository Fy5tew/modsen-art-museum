import { ErrorBoundary } from '#/components/ErrorBoundary';
import { ErrorDetail } from '#components/ErrorDetail';
import { PageLayout } from '#components/PageLayout';
import { SearchForm } from '#components/SearchForm';
import { SpecialGallery } from '#components/SpecialGallery';
import { WorksForYou } from '#components/WorksForYou';

import styles from './styles.module.scss';

export function HomePage() {
    return (
        <PageLayout>
            <div className={styles.wrapper}>
                <ErrorBoundary fallback={<ErrorDetail />}>
                    <SearchForm />
                </ErrorBoundary>
                <ErrorBoundary fallback={<ErrorDetail />}>
                    <SpecialGallery />
                </ErrorBoundary>
                <ErrorBoundary fallback={<ErrorDetail />}>
                    <WorksForYou />
                </ErrorBoundary>
            </div>
        </PageLayout>
    );
}
