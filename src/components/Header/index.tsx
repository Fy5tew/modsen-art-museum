import { useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { useOnClickOutside } from '#/hooks/useOnClickOutside';
import { ContentContainer } from '#components/ContentContainer';
import { MenuButton } from '#components/MenuButton';
import { MuseumLogo } from '#components/MuseumLogo';
import { NavBar } from '#components/NavBar';
import { MenuContext } from '#contexts/MenuContext';

import styles from './styles.module.scss';

export function Header() {
    const location = useLocation();
    const headerRef = useRef<HTMLDivElement>(null);
    const { isOpened, close } = useContext(MenuContext);

    useEffect(() => {
        close();
    }, [location, close]);

    useOnClickOutside(headerRef, () => {
        close();
    });

    return (
        <div ref={headerRef}>
            <ContentContainer className={styles.header}>
                <MuseumLogo variant="full-white" />
                <div className={styles.navigation} data-opened={isOpened}>
                    <div className={styles.navBarWrapper}>
                        <NavBar />
                    </div>
                </div>
                <div className={styles.menuButtonWrapper}>
                    <MenuButton />
                </div>
            </ContentContainer>
        </div>
    );
}
