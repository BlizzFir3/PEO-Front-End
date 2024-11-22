import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './components/views/Products';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    path: '',
                    // eslint-disable-next-line react/no-unescaped-entities
                    element: <>Page d'accueil</>,
                },
                {
                    path: '/products',
                    element: <Products />,
                },
            ],
        },
    ]);

    function Root() {
        return (
            <>
                <section className="root-container">
                    <Navbar />
                    <section className="outlet">
                        <Outlet />
                    </section>
                    <Footer />
                </section>
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
