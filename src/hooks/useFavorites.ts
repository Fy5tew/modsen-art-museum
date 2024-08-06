import { useGetPaintingList } from './useGetPaintingList';
import { useFavoritesIds } from './useFavoritesIds';

function useFavorites() {
    const { favoritesIds, add, remove, clear } = useFavoritesIds();
    const favorites = useGetPaintingList(favoritesIds);

    return {
        favorites,
        add,
        remove,
        clear,
    };
}

export { useFavorites };
