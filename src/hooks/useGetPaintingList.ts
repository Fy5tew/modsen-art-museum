import { useEffect, useState } from 'react';

import { PaintingList } from '#types/api';
import { getPaintingList } from '#utils/api';

function useGetPaintingList(paintingIds: number[]): PaintingList | null {
    const [paintings, setPaintings] = useState<PaintingList | null>(null);

    useEffect(() => {
        (async () => {
            setPaintings(await getPaintingList(paintingIds));
        })();
    }, [paintingIds]);

    return paintings;
}

export { useGetPaintingList };
