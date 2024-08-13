import { PageDoubleHeader } from '#components/PageDoubleHeader';
import { PaintingList } from '#components/PaintingList';
import { useFavorites } from '#hooks/useFavorites';

import styles from './styles.module.scss';

export function FavoritesList() {
    const favorites = useFavorites();

    return (
        <>
            <div className={styles.headerWrapper}>
                <PageDoubleHeader
                    subHeader="Saved by you"
                    mainHeader="Your favorites list"
                />
            </div>
            {favorites.favorites?.length ? (
                <PaintingList variant="small" paintings={favorites.favorites} />
            ) : (
                <h3 className={styles.emptyList}>
                    Your favorites list is empty
                </h3>
            )}
        </>
    );
}
