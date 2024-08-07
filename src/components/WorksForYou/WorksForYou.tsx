import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageDoubleHeader } from '#/components/PageDoubleHeader';
import { PaintingList } from '#/components/PaintingList';
import { useFavoritesIds } from '#/hooks/useFavoritesIds';
import { useSearchPaintings } from '#/hooks/useSearchPaintings';
import { FOR_YOU_QUERY, FOR_YOU_PAGES } from '#/constants';

import styles from './WorksForYou.module.scss';

function WorksForYou() {
    const navigate = useNavigate();
    const favorites = useFavoritesIds();
    const [page] = useState<number>(
        Math.floor(Math.random() * FOR_YOU_PAGES) + 1
    );
    const [paintings] = useSearchPaintings(FOR_YOU_QUERY, 9, page);

    const handleCardClick = useCallback(
        (id: number) => {
            navigate(`/info/${id}`);
        },
        [navigate]
    );

    return (
        <div className={styles.worksForYou}>
            <PageDoubleHeader
                subHeader="Here some more"
                mainHeader="Other works for you"
            />
            <PaintingList
                paintings={paintings}
                variant="small"
                onClick={handleCardClick}
                isFavorite={(id) => favorites.favoritesIds.includes(id)}
                onFavoriteAdd={favorites.add}
                onFavoriteRemove={favorites.remove}
            />
        </div>
    );
}

export { WorksForYou };
