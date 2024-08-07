import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '#/components/PageLayout';
import { PageHeader } from '#/components/PageHeader';
import { PageDoubleHeader } from '#/components/PageDoubleHeader';
import { PaintingList } from '#/components/PaintingList';
import { useFavorites } from '#/hooks/useFavorites';
import bookmarkSecondaryIconSrc from '/icon/bookmark-secondary.svg';
import styles from './FavoritesPage.module.scss';

function FavoritesPage() {
    const navigate = useNavigate();
    const favorites = useFavorites();

    const handleCardClick = useCallback(
        (id: number) => {
            navigate(`/info/${id}`);
        },
        [navigate]
    );

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
                        paintings={favorites.favorites}
                        onClick={handleCardClick}
                        isFavorite={(id) =>
                            favorites.favorites?.some((p) => p.id === id) ??
                            false
                        }
                        onFavoriteAdd={favorites.add}
                        onFavoriteRemove={favorites.remove}
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
