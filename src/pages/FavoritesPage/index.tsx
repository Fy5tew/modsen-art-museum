import { PageLayout } from '#/components/PageLayout';
import { PageHeader } from '#/components/PageHeader';
import { PageDoubleHeader } from '#/components/PageDoubleHeader';
import { PaintingList } from '#/components/PaintingList';
import { useFavorites } from '#/hooks/useFavorites';
import bookmarkSecondaryIconSrc from '/icon/bookmark-secondary.svg';
import styles from './styles.module.scss';

function FavoritesPage() {
    const favorites = useFavorites();

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
            <div className={styles.favoritesHeaderWrapper}>
                <PageDoubleHeader
                    subHeader="Saved by you"
                    mainHeader="Your favorites list"
                />
            </div>
            <div className={styles.favoritesListWrapper}>
                {favorites.favorites?.length ? (
                    <PaintingList
                        variant="small"
                        paintings={favorites.favorites}
                    />
                ) : (
                    <h3 className={styles.emptyList}>
                        Your favorites list is empty
                    </h3>
                )}
            </div>
        </PageLayout>
    );
}

export { FavoritesPage };
