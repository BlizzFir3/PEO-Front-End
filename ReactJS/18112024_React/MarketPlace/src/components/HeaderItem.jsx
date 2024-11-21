import { Link, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function HeaderItem({ href, children }) {
    const { pathname } = useLocation();

    return (
        <>
            <li>
                <Link
                    to={href}
                    className={`${
                        pathname === href && 'border-b-4'
                    } pb-1 text-lg hover:text-secondary text-white font-semibold`}
                >
                    {children}
                </Link>
            </li>
        </>
    );
}
