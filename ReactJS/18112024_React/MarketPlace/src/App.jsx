import { useState } from 'react';
import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    path: '',
                    element: <>Page d'accueil</>,
                },
                {
                    path: '/products',
                    element: <>Page produits</>,
                },
            ],
        },
    ]);

    function Root() {
        return (
            <>
                <section>Navbar</section>
                <Outlet />
                <section>Footer</section>
            </>
        );
    }

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
