import { PageHeader } from '#components/PageHeader';
import { PageLayout } from '#components/PageLayout';

export function NotFoundPage() {
    return (
        <PageLayout>
            <PageHeader>
                <mark>404</mark>
            </PageHeader>
            <PageHeader>This page is not exists</PageHeader>
        </PageLayout>
    );
}