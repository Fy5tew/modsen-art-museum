import { ContentContainer } from '#/components/ContentContainer';
import { NavBar } from '#components/NavBar';
import { MuseumLogo } from '#components/MuseumLogo';

import styles from './Header.module.scss';

function Header() {
    return (
        <ContentContainer className={styles.header}>
            <MuseumLogo variant="full-white" />
            <NavBar />
        </ContentContainer>
    );
}

export { Header };
