/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useCallback } from 'react';

import { BookmarkButton } from '#components/BookmarkButton';
import { Painting } from '#types/api';

import styles from './styles.module.scss';

export type PaintingBigProps = {
    painting: Painting;
    // eslint-disable-next-line no-unused-vars
    isFavorite: (paintingId: number) => boolean;
    // eslint-disable-next-line no-unused-vars
    onClick: (paintingId: number) => void;
    // eslint-disable-next-line no-unused-vars
    onFavoriteAdd: (paintingId: number) => void;
    // eslint-disable-next-line no-unused-vars
    onFavoriteRemove: (paintingId: number) => void;
};

export function PaintingBig({
    painting,
    isFavorite,
    onClick,
    onFavoriteAdd,
    onFavoriteRemove,
}: PaintingBigProps) {
    const handleCardClick = useCallback(() => {
        onClick(painting.id);
    }, [painting, onClick]);
    const handleFavoriteClick = useCallback(() => {
        const action = isFavorite(painting.id)
            ? onFavoriteRemove
            : onFavoriteAdd;
        action(painting.id);
    }, [painting, isFavorite, onFavoriteAdd, onFavoriteRemove]);

    return (
        <div className={styles.painting} onClick={handleCardClick}>
            <div className={styles.imageSection}>
                <img
                    className={styles.image}
                    src={painting.imageUrl}
                    alt={painting.title}
                />
            </div>
            <div className={styles.cardSection}>
                <div className={styles.infoSection}>
                    <h3 className={styles.title}>{painting.title}</h3>
                    <div className={styles.space} />
                    <p className={styles.author}>{painting.artist}</p>
                    <div className={styles.space} />
                    <p className={styles.view}>
                        {painting.isOnView ? 'Public' : 'Private'}
                    </p>
                </div>
                <div
                    className={styles.controlSection}
                    onClick={(event) => event.stopPropagation()}
                >
                    <BookmarkButton
                        isActive={isFavorite(painting.id)}
                        onClick={handleFavoriteClick}
                    />
                </div>
            </div>
        </div>
    );
}
