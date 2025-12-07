import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import HomePage from './Pages/HomePage';
import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: HomePage,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
);
