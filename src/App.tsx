import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { ROUTES } from './routes';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {ROUTES.map((r) => (
                    <Route key={r.path} path={r.path} Component={r.component} />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export { App };
