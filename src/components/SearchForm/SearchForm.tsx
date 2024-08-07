import { useState, useCallback, ChangeEvent } from 'react';
import { PageHeader } from '#/components/PageHeader';
import { Search } from '#/components/Search';
import { PaintingList } from '#components/PaintingList';
import { useDebounce } from '#/hooks/useDebounce';
import { useSearchPaintings } from '#/hooks/useSearchPaintings';

import styles from './SearchForm.module.scss';

function SearchForm() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const debauncedSearchQuery = useDebounce(searchQuery, 500);
    const [paintings] = useSearchPaintings(debauncedSearchQuery);

    const handleSearchInput = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            setSearchQuery(event.target.value);
        },
        []
    );

    return (
        <div className={styles.searchForm}>
            <div className={styles.headerWrapper}>
                <PageHeader>
                    Let's Find Some <mark>Art</mark> Here!
                </PageHeader>
            </div>
            <div className={styles.searchWrapper}>
                <Search
                    placeholder="Search art, artist, work..."
                    value={searchQuery}
                    onChange={handleSearchInput}
                />
            </div>
            <div className={styles.resultsWrapper}>
                {debauncedSearchQuery &&
                    (paintings.length ? (
                        <PaintingList variant="small" paintings={paintings} />
                    ) : (
                        <h3 className={styles.noMaches}>
                            No maches for <mark>'{debauncedSearchQuery}'</mark>
                        </h3>
                    ))}
            </div>
        </div>
    );
}

export { SearchForm };
