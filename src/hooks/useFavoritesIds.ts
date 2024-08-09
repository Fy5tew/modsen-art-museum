import { useState, useEffect, useMemo, useCallback } from 'react';
import { FAVORITES_PAINTINGS_STORAGE_KEY } from '#/constants/storage';
import {
    getFavoritePaintingsIds,
    addFavoritePaintingId,
    removeFavoritePaintingId,
    clearFavoritePaintingsIds,
} from '#/utils/favorites';

function useFavoritesIds() {
    const [favoritesIds, setFavoritesIds] = useState<number[]>(
        getFavoritePaintingsIds()
    );
    const memoizedFavoritesIds = useMemo(() => favoritesIds, [favoritesIds]);

    const handleFavoritesChange = useCallback(
        (event: StorageEvent) => {
            if (event.key !== FAVORITES_PAINTINGS_STORAGE_KEY) {
                return;
            }
            if (event.newValue === event.oldValue) {
                return;
            }
            setFavoritesIds(getFavoritePaintingsIds());
        },
        [setFavoritesIds]
    );

    useEffect(() => {
        window.addEventListener('storage', handleFavoritesChange, false);
        return () => {
            window.removeEventListener('storage', handleFavoritesChange);
        };
    }, [handleFavoritesChange]);

    return {
        favoritesIds: memoizedFavoritesIds,
        add: addFavoritePaintingId,
        remove: removeFavoritePaintingId,
        clear: clearFavoritePaintingsIds,
    };
}

export { useFavoritesIds };
