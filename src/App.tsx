import { Routes, Route } from 'react-router-dom';

import { HomePage } from '#pages/HomePage';
import { InfoPage } from '#pages/InfoPage';
import { FavoritesPage } from '#pages/FavoritesPage';
import { NotFoundPage } from '#pages/NotFoundPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/info/:id" element={<InfoPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export { App };
