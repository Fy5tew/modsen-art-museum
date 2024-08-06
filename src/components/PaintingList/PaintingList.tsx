import { PaintingList as PaintingListType } from '#/types';
import { Painting, PaintingProps } from '#components/Painting';

import styles from './PaintingList.module.scss';

type PaintingListProps = Omit<PaintingProps, 'painting'> & {
    paintings: PaintingListType;
};

function PaintingList({ paintings, ...props }: PaintingListProps) {
    return (
        <div className={styles.list}>
            {paintings.map((p) => (
                <Painting key={p.id} painting={p} {...props} />
            ))}
        </div>
    );
}

export type { PaintingListProps };
export { PaintingList };
