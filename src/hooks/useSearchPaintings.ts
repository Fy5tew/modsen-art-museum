import { useEffect, useState } from 'react';

import { Pagination, Painting, PaintingListResult } from '#types/api';
import { searchPaintings } from '#utils/api';

export function useSearchPaintings(
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
