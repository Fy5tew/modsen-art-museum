import { useEffect, useState } from 'react';

import { useAsyncError } from '#hooks/useAsyncError';
import { PaintingList } from '#types/api';
import { getPaintingList } from '#utils/api';

export function useGetPaintingList(paintingIds: number[]): PaintingList | null {
    const throwError = useAsyncError();
    const [paintings, setPaintings] = useState<PaintingList | null>(null);

    useEffect(() => {
        (() => {
            getPaintingList(paintingIds)
                .then((paintings) => setPaintings(paintings))
                .catch((error) => throwError(error));
        })();
    }, [paintingIds, throwError]);

    return paintings;
}
