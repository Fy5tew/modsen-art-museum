import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { Painting } from '#/types/api';
import { PageHeader } from '#components/PageHeader';
import { PaintingList } from '#components/PaintingList';
import { Search } from '#components/Search';
import { useDebounce } from '#hooks/useDebounce';
import { useSearchPaintings } from '#hooks/useSearchPaintings';

import styles from './styles.module.scss';

const SORTING_FIELDS: (keyof Painting)[] = ['title', 'artist', 'isOnView'];
const SORTING_OPTIONS = {
    NONE: 0,
    ASCENDING: 1,
    DESCENDING: 2,
};

const SORTING_FIELDS_DISPLAY = ['Title', 'Artist', 'Is on view'];
const SORTING_OPTIONS_DISPLAY = ['', '↑', '↓'];

function getNextSortingOption(currentOption: number): number {
    switch (currentOption) {
        case SORTING_OPTIONS.ASCENDING:
            return SORTING_OPTIONS.DESCENDING;
        case SORTING_OPTIONS.DESCENDING:
            return SORTING_OPTIONS.ASCENDING;
        default:
            return SORTING_OPTIONS.ASCENDING;
    }
}

export function SearchForm() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const debauncedSearchQuery = useDebounce(searchQuery, 500);
    const [paintings] = useSearchPaintings(debauncedSearchQuery);

    const [sortingField, setSortingField] = useState<keyof Painting | null>(
        null
    );
    const [sortingOption, setSortingOption] = useState<number>(
        SORTING_OPTIONS.NONE
    );

    const [sortedPaintings, setSortedPaintings] = useState(paintings);

    const handleSearchInput = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            setSearchQuery(event.target.value);
        },
        []
    );

    const handleSortOptionChange = useCallback(
        (field: keyof Painting) => {
            if (sortingField === field) {
                setSortingOption(getNextSortingOption(sortingOption));
            } else {
                setSortingField(field);
                setSortingOption(SORTING_OPTIONS.ASCENDING);
            }
        },
        [sortingField, sortingOption]
    );

    useEffect(() => {
        if (!sortingField) {
            setSortedPaintings(paintings);
            return;
        }

        const sortedArray = [...paintings].sort((a, b) => {
            const fieldA = a[sortingField];
            const fieldB = b[sortingField];

            if (fieldA === null || fieldB === null) {
                return 0;
            }

            const valueA = String(fieldA).toLowerCase();
            const valueB = String(fieldB).toLowerCase();

            if (sortingOption === SORTING_OPTIONS.ASCENDING) {
                return valueA.localeCompare(valueB);
            } else if (sortingOption === SORTING_OPTIONS.DESCENDING) {
                return valueB.localeCompare(valueA);
            }

            return 0;
        });

        setSortedPaintings(sortedArray);
    }, [paintings, sortingField, sortingOption]);

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
            <div className={styles.sortWrapper}>
                <span className={styles.sortTitle}>Sort by:</span>
                {SORTING_FIELDS.map((field) => (
                    <button
                        key={field}
                        className={styles.sortButton}
                        onClick={() => handleSortOptionChange(field)}
                        data-active={sortingField === field}
                    >
                        {sortingField === field &&
                            SORTING_OPTIONS_DISPLAY[sortingOption]}
                        {SORTING_FIELDS_DISPLAY[SORTING_FIELDS.indexOf(field)]}
                    </button>
                ))}
            </div>
            <div className={styles.resultsWrapper}>
                <div className={styles.results}>
                    {debauncedSearchQuery &&
                        (paintings.length ? (
                            <PaintingList
                                variant="small"
                                paintings={sortedPaintings}
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
