import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { PaintingList as PaintingListType } from '#/types';
import { Painting, PaintingProps } from '#components/Painting';
import { useFavoritesIds } from '#/hooks/useFavoritesIds';

import styles from './styles.module.scss';

type PaintingListProps = Omit<
    PaintingProps,
    'painting' | 'isFavorite' | 'onClick' | 'onFavoriteAdd' | 'onFavoriteRemove'
> & {
    paintings: PaintingListType;
};

function PaintingList({ paintings, ...props }: PaintingListProps) {
    const navigate = useNavigate();
    const favorites = useFavoritesIds();

    const handleCardClick = useCallback(
        (id: number) => {
            navigate(`/info/${id}`);
        },
        [navigate]
    );

    return (
        <div className={styles.list}>
            {paintings.map((p) => (
                <Painting
                    key={p.id}
                    painting={p}
                    isFavorite={(id) => favorites.favoritesIds.includes(id)}
                    onClick={handleCardClick}
                    onFavoriteAdd={favorites.add}
                    onFavoriteRemove={favorites.remove}
                    {...props}
                />
            ))}
        </div>
    );
}

export type { PaintingListProps };
export { PaintingList };
