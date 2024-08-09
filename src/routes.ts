import homePrimaryIconSrc from '/icon/home-primary.svg';
import bookmarkPrimaryIconSrc from '/icon/bookmark-primary.svg';

import { HomePage } from '#pages/HomePage';
import { InfoPage } from '#pages/InfoPage';
import { FavoritesPage } from '#pages/FavoritesPage';
import { NotFoundPage } from '#pages/NotFoundPage';

export const ROUTES = [
    {
        path: '/',
        component: HomePage,
        link: {
            text: 'Home',
            icon: homePrimaryIconSrc,
        },
    },
    {
        path: '/info/:id',
        component: InfoPage,
        link: null,
    },
    {
        path: '/favorites',
        component: FavoritesPage,
        link: {
            text: 'Your favorites',
            icon: bookmarkPrimaryIconSrc,
        },
    },
    {
        path: '*',
        component: NotFoundPage,
        link: null,
    },
];
