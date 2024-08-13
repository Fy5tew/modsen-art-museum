import { ChangeEvent, useCallback, useState } from 'react';

import { PageHeader } from '#components/PageHeader';
import { PaintingList } from '#components/PaintingList';
import { Search } from '#components/Search';
import { useDebounce } from '#hooks/useDebounce';
import { useSearchPaintings } from '#hooks/useSearchPaintings';

import styles from './styles.module.scss';

export function SearchForm() {
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
        <section className={styles.searchForm}>
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
                <div className={styles.results}>
                    {debauncedSearchQuery &&
                        (paintings.length ? (
                            <PaintingList
                                variant="small"
                                paintings={paintings}
                            />
                        ) : (
                            <h3 className={styles.noMaches}>
                                No maches for{' '}
                                <mark>'{debauncedSearchQuery}'</mark>
                            </h3>
                        ))}
                </div>
            </div>
        </section>
    );
}
