import { useState } from 'react';

import { PageDoubleHeader } from '#components/PageDoubleHeader';
import { PaintingList } from '#components/PaintingList';
import { FOR_YOU_PAGES, FOR_YOU_QUERY } from '#constants/recomendations';
import { useSearchPaintings } from '#hooks/useSearchPaintings';

import styles from './styles.module.scss';

export function WorksForYou() {
    const [page] = useState<number>(
        Math.floor(Math.random() * FOR_YOU_PAGES) + 1
    );
    const [paintings] = useSearchPaintings(FOR_YOU_QUERY, 9, page);

    return (
        <div className={styles.worksForYou}>
            <PageDoubleHeader
                subHeader="Here some more"
                mainHeader="Other works for you"
            />
            <PaintingList variant="small" paintings={paintings} />
        </div>
    );
}
