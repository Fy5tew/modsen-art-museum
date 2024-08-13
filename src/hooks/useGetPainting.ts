import { useEffect, useState } from 'react';

import { useAsyncError } from '#hooks/useAsyncError';
import { Painting } from '#types/api';
import { getPainting } from '#utils/api';

export function useGetPainting(paintingId: number): Painting | null {
    const throwError = useAsyncError();
    const [painting, setPainting] = useState<Painting | null>(null);

    useEffect(() => {
        (() => {
            getPainting(paintingId)
                .then((painting) => setPainting(painting))
                .catch((error) => throwError(error));
        })();
    }, [paintingId, throwError]);

    return painting;
}
