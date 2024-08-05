import { useState, useEffect } from 'react';
import { PaintingListResult, Painting, Pagination } from '#/types';
import { searchPaintings } from '#/utils/api';

function useSearchPaintings(
    searchQuery?: string,
    limit?: number,
    page?: number
): [Painting[], Pagination | null] {
    const [result, setResult] = useState<PaintingListResult | null>(null);

    useEffect(() => {
        (async () => {
            setResult(await searchPaintings(searchQuery, limit, page));
        })();
    }, [searchQuery, limit, page]);

    return [result?.paintingList ?? [], result?.pagination ?? null];
}

export { useSearchPaintings };