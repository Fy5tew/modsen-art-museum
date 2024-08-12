import { useEffect, useState } from 'react';

import { Painting } from '#types/api';
import { getPainting } from '#utils/api';

export function useGetPainting(paintingId: number): Painting | null {
    const [painting, setPainting] = useState<Painting | null>(null);

    useEffect(() => {
        (async () => {
            setPainting(await getPainting(paintingId));
        })();
    }, [paintingId]);

    return painting;
}
