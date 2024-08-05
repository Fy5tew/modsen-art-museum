import { useState, useEffect } from 'react';
import { PaintingList } from '#/types';
import { getPaintingList } from '#/utils/api';

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
