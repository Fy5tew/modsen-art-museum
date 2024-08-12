import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { ROUTES } from './routes';

function App() {
    return (
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
    );
}

export { App };
