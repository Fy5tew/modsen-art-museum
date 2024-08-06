import { useState, useEffect, useCallback, ChangeEvent } from 'react';
import { PageLayout } from '#/components/PageLayout';
import { PageHeader } from '#/components/PageHeader';
import { PageDoubleHeader } from '#/components/PageDoubleHeader';
import { Search } from '#/components/Search';
import { Pagination } from '#/components/Pagination';
import { PaintingList } from '#/components/PaintingList';
import { useDebounce } from '#/hooks/useDebounce';
import { usePagination } from '#/hooks/usePagination';
import { useFavoritesIds } from '#/hooks/useFavoritesIds';
import { useSearchPaintings } from '#/hooks/useSearchPaintings';
import { FOR_YOU_QUERY, FOR_YOU_PAGES } from '#/constants';

import styles from './HomePage.module.scss';

function HomePage() {
    const favorites = useFavoritesIds();
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchPage, setSearchPage] = useState<number>(1);
    const [forYouPage] = useState<number>(
        Math.floor(Math.random() * FOR_YOU_PAGES) + 1
    );
    const debauncedSearchQuery = useDebounce(searchQuery, 500);
    const debauncedSearchPage = useDebounce(searchPage, 500);
    const [searchedPaintings, paginationInfo] = useSearchPaintings(
        debauncedSearchQuery,
        3,
        debauncedSearchPage
    );
    const [forYouPaintings] = useSearchPaintings(FOR_YOU_QUERY, 9, forYouPage);
    const pagination = usePagination(1, paginationInfo?.totalPages || 1, 5);

    const handleSearchInput = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            setSearchQuery(event.target.value);
            pagination.set(1);
        },
        [pagination]
    );

    useEffect(() => {
        setSearchPage(pagination.current);
    }, [pagination]);

    return (
        <PageLayout>
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
            <div className={styles.searchedHeaderWrapper}>
                <PageDoubleHeader
                    subHeader="Topics for you"
                    mainHeader="Our special gallery"
                />
            </div>
            <div className={styles.searchedResultsWrapper}>
                {searchedPaintings.length ? (
                    <PaintingList
                        paintings={searchedPaintings}
                        variant="big"
                        onClick={(id) => console.log(id)}
                        isFavorite={(id) => favorites.favoritesIds.includes(id)}
                        onFavoriteAdd={favorites.add}
                        onFavoriteRemove={favorites.remove}
                    />
                ) : (
                    <h3 className={styles.noMaches}>
                        No maches for <mark>'{debauncedSearchQuery}'</mark>
                    </h3>
                )}
            </div>
            <div className={styles.searchedPaginationWrapper}>
                <Pagination pagination={pagination} />
            </div>
            <div className={styles.forYouHeaderWrapper}>
                <PageDoubleHeader
                    subHeader="Here some more"
                    mainHeader="Other works for you"
                />
            </div>
            <div className={styles.forYouResultsWrapper}>
                <PaintingList
                    paintings={forYouPaintings}
                    variant="small"
                    onClick={(id) => console.log(id)}
                    isFavorite={(id) => favorites.favoritesIds.includes(id)}
                    onFavoriteAdd={favorites.add}
                    onFavoriteRemove={favorites.remove}
                />
            </div>
        </PageLayout>
    );
}

export { HomePage };
