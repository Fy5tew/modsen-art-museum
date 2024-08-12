import homePrimaryIconSrc from '/icon/home-primary.svg';
import bookmarkPrimaryIconSrc from '/icon/bookmark-primary.svg';

import { HomePage } from '#pages/HomePage';
import { InfoPage } from '#pages/InfoPage';
import { FavoritesPage } from '#pages/FavoritesPage';
import { NotFoundPage } from '#pages/NotFoundPage';

export const ROUTES = {
    home: {
        basePath: '/',
        component: HomePage,
        link: {
            text: 'Home',
            icon: homePrimaryIconSrc,
        },
        getRoutePath() {
            return `${this.basePath}`;
        },
        getPath() {
            return `${this.basePath}`;
        },
    },
    info: {
        basePath: '/info',
        component: InfoPage,
        link: null,
        getRoutePath() {
            return `${this.basePath}/:id`;
        },
        getPath(id: number | string) {
            return `${this.basePath}/${id}`;
        },
    },
    favorites: {
        basePath: '/favorites',
        component: FavoritesPage,
        link: {
            text: 'Your favorites',
            icon: bookmarkPrimaryIconSrc,
        },
        getRoutePath() {
            return `${this.basePath}`;
        },
        getPath() {
            return `${this.basePath}`;
        },
    },
    notFound: {
        basePath: '*',
        component: NotFoundPage,
        link: null,
        getRoutePath() {
            return `${this.basePath}`;
        },
        getPath() {
            return `${this.basePath}`;
        },
    },
};
