import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

import { BookmarkButton } from '#components/BookmarkButton';
import { PageHeader } from '#components/PageHeader';
import { PageLayout } from '#components/PageLayout';
import { useFavoritesIds } from '#hooks/useFavoritesIds';
import { useGetPainting } from '#hooks/useGetPainting';

import styles from './styles.module.scss';

export function InfoPage() {
    const { id } = useParams();
    const [paintingId] = useState(Number.parseInt(id as string));
    const painting = useGetPainting(paintingId);
    const favorites = useFavoritesIds();

    const handleFavoriteClick = useCallback(() => {
        if (!painting) {
            return;
        }
        if (favorites.favoritesIds.includes(painting.id)) {
            favorites.remove(painting.id);
        } else {
            favorites.add(painting.id);
        }
    }, [painting, favorites]);

    if (!painting) {
        return (
            <PageLayout>
                <PageHeader>
                    <mark>Fetching data...</mark>
                </PageHeader>
            </PageLayout>
        );
    }

    return (
        <PageLayout>
            <div className={styles.wrapper}>
                <div className={styles.imageWrapper}>
                    <img
                        className={styles.image}
                        src={painting.imageUrl}
                        alt={painting.title}
                    />
                    <div className={styles.favoriteButtonWrapper}>
                        <BookmarkButton
                            isActive={favorites.favoritesIds.includes(
                                painting.id
                            )}
                            onClick={handleFavoriteClick}
                        />
                    </div>
                </div>
                <div className={styles.infoWrapper}>
                    <div className={styles.topInfo}>
                        <h2 className={styles.title}>{painting.title}</h2>
                        <h3 className={styles.artist}>{painting.artist}</h3>
                        <h5 className={styles.date}>{painting.date}</h5>
                    </div>
                    <div className={styles.bottomInfo}>
                        <h2 className={styles.overview}>Overview</h2>
                        <p className={styles.param}>
                            <span className={styles.paramTitle}>
                                Place Of Origin:
                            </span>
                            <span className={styles.paramValue}>
                                {painting.placeOfOrigin ?? 'Unknown'}
                            </span>
                        </p>
                        <p className={styles.param}>
                            <span className={styles.paramTitle}>
                                Dimensions:
                            </span>
                            <span className={styles.paramValue}>
                                {painting.dimensions}
                            </span>
                        </p>
                        <p className={styles.param}>
                            <span className={styles.paramTitle}>
                                Creadit Line:
                            </span>
                            <span className={styles.paramValue}>
                                {painting.creditLine}
                            </span>
                        </p>
                        <p className={styles.param}>
                            <span className={styles.paramTitle}>Gallery:</span>
                            <span className={styles.paramValue}>
                                {painting.gallery ?? 'Unknown'}
                            </span>
                        </p>
                        <p className={styles.param}>
                            {painting.isOnView ? 'Public' : 'Private'}
                        </p>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
