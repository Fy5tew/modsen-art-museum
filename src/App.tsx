import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MenuContextProvider } from './contexts/MenuContext';
import { ROUTES } from './routes';

export function App() {
    return (
        <MenuContextProvider>
            <BrowserRouter>
                <Routes>
                    {Object.values(ROUTES).map((r) => (
                        <Route
                            key={r.basePath}
                            path={r.getRoutePath()}
                            Component={r.component}
                        />
                    ))}
                </Routes>
            </BrowserRouter>
        </MenuContextProvider>
    );
}
