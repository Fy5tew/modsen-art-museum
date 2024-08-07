import { useState, useEffect } from 'react';
import { PageDoubleHeader } from '#/components/PageDoubleHeader';
import { Pagination } from '#/components/Pagination';
import { PaintingList } from '#/components/PaintingList';
import { useDebounce } from '#/hooks/useDebounce';
import { usePagination } from '#/hooks/usePagination';
import { useSearchPaintings } from '#/hooks/useSearchPaintings';

import styles from './SpacialGallery.module.scss';

function SpecialGallery() {
    const [searchPage, setSearchPage] = useState<number>(1);
    const debauncedSearchPage = useDebounce(searchPage, 500);
    const [paintings, paginationInfo] = useSearchPaintings(
        '',
        3,
        debauncedSearchPage
    );
    const pagination = usePagination(1, paginationInfo?.totalPages || 1, 5);

    useEffect(() => {
        setSearchPage(pagination.current);
    }, [pagination]);

    return (
        <div className={styles.specialGallery}>
            <div className={styles.headerWrapper}>
                <PageDoubleHeader
                    subHeader="Topics for you"
                    mainHeader="Our special gallery"
                />
            </div>
            <div className={styles.listWrapper}>
                <PaintingList variant="big" paintings={paintings} />
            </div>
            <div className={styles.paginationWrapper}>
                <Pagination pagination={pagination} />
            </div>
        </div>
    );
}

export { SpecialGallery };
