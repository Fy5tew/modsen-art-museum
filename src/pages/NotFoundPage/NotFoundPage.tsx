import { PageLayout } from '#/components/PageLayout';
import { PageHeader } from '#/components/PageHeader';

function NotFoundPage() {
    return (
        <PageLayout>
            <PageHeader>
                <mark>404</mark>
            </PageHeader>
            <PageHeader>This page is not exists</PageHeader>
        </PageLayout>
    );
}

export { NotFoundPage };
