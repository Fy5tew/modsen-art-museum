import { ContentContainer } from '#components/ContentContainer';
import { MuseumLogo } from '#components/MuseumLogo';
import { NavBar } from '#components/NavBar';

import styles from './styles.module.scss';

function Header() {
    return (
        <ContentContainer className={styles.header}>
            <MuseumLogo variant="full-white" />
            <NavBar />
        </ContentContainer>
    );
}

export { Header };
