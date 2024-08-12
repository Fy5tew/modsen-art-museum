import { useFavoritesIds } from './useFavoritesIds';
import { useGetPaintingList } from './useGetPaintingList';

export function useFavorites() {
    const { favoritesIds, add, remove, clear } = useFavoritesIds();
    const favorites = useGetPaintingList(favoritesIds);

    return {
        favorites,
        add,
        remove,
        clear,
    };
}
