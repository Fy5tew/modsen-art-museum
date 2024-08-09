import { useState, useEffect } from 'react';
import { Painting } from '#/types/types';
import { getPainting } from '#/utils/api';

function useGetPainting(paintingId: number): Painting | null {
    const [painting, setPainting] = useState<Painting | null>(null);

    useEffect(() => {
        (async () => {
            setPainting(await getPainting(paintingId));
        })();
    }, [paintingId]);

    return painting;
}

export { useGetPainting };
