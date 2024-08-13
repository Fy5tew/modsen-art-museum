import { useParams } from 'react-router-dom';

import { PageLayout } from '#components/PageLayout';
import { PaintingInfo } from '#components/PaintingInfo';

export function InfoPage() {
    const { id } = useParams();

    return (
        <PageLayout>
            <PaintingInfo paintingId={Number.parseInt(id as string)} />
        </PageLayout>
    );
}
