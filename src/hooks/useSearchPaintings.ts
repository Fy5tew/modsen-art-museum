import { useEffect, useState } from 'react';

import { useAsyncError } from '#hooks/useAsyncError';
import { Pagination, Painting, PaintingListResult } from '#types/api';
import { searchPaintings } from '#utils/api';

export function useSearchPaintings(
    searchQuery?: string,
    limit?: number,
    page?: number
): [Painting[], Pagination | null] {
    const throwError = useAsyncError();
    const [result, setResult] = useState<PaintingListResult | null>(null);

    useEffect(() => {
        (() => {
            searchPaintings(searchQuery, limit, page)
                .then((result) => setResult(result))
                .catch((error) => throwError(error));
        })();
    }, [searchQuery, limit, page, throwError]);

    return [result?.paintingList ?? [], result?.pagination ?? null];
}
