import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
