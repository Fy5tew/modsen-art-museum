import { useState } from 'react';
import { PageDoubleHeader } from '#/components/PageDoubleHeader';
import { PaintingList } from '#/components/PaintingList';
import { useSearchPaintings } from '#/hooks/useSearchPaintings';
import { FOR_YOU_QUERY, FOR_YOU_PAGES } from '#/constants/recomendations';

import styles from './styles.module.scss';

function WorksForYou() {
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

export { WorksForYou };
