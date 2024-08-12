import { PageLayout } from '#components/PageLayout';
import { SearchForm } from '#components/SearchForm';
import { SpecialGallery } from '#components/SpecialGallery';
import { WorksForYou } from '#components/WorksForYou';

import styles from './styles.module.scss';

export function HomePage() {
    return (
        <PageLayout>
            <div className={styles.wrapper}>
                <SearchForm />
                <SpecialGallery />
                <WorksForYou />
            </div>
        </PageLayout>
    );
}
