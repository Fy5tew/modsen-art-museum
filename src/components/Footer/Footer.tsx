import { ContentContainer } from '#/components/ContentContainer';
import { ModsenLogo } from '#components/ModsenLogo';
import { MuseumLogo } from '#components/MuseumLogo';

import styles from './Footer.module.scss';

function Footer() {
    return (
        <ContentContainer className={styles.footer}>
            <MuseumLogo variant="full-black" />
            <ModsenLogo />
        </ContentContainer>
    );
}

export { Footer };