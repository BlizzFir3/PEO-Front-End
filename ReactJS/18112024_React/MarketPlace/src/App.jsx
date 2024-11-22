import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './views/Products';
import CounterRedux from './views/CounterRedux';

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
                {
                    path: '/counter-redux',
                    element: <CounterRedux />,
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
