import { ReactNode } from 'react';

type PageLayoutProps = {
    children: ReactNode;
};

function PageLayout({ children }: PageLayoutProps) {
    return <div>{children}</div>;
}

export type { PageLayoutProps };
export { PageLayout };
