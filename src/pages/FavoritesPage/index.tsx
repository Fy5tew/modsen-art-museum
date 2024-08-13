import bookmarkSecondaryIconSrc from '/icon/bookmark-secondary.svg';
import { ErrorBoundary } from '#components/ErrorBoundary';
import { ErrorDetail } from '#components/ErrorDetail';
import { FavoritesList } from '#components/FavoritesList';
import { PageHeader } from '#components/PageHeader';
import { PageLayout } from '#components/PageLayout';

import styles from './styles.module.scss';

export function FavoritesPage() {
    return (
        <PageLayout>
            <div className={styles.pageHeaderWrapper}>
                <PageHeader>Here are your</PageHeader>
                <PageHeader>
                    <span className={styles.highlighted}>
                        <img
                            className={styles.icon}
                            src={bookmarkSecondaryIconSrc}
                            alt=""
                        />
                        <mark>Favorites</mark>
                    </span>
                </PageHeader>
            </div>
            <ErrorBoundary fallback={<ErrorDetail />}>
                <FavoritesList />
            </ErrorBoundary>
        </PageLayout>
    );
}
