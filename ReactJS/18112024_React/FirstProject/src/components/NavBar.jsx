import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="navbar bg-neutral text-neutral-content shadow-lg">
            <div className="navbar-start">
                <div className="dropdown bg-neutral text-neutral-content">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow bg-neutral text-neutral-content"
                    >
                        <li>
                            <Link
                                className="btn btn-ghost"
                                to={'/hook-use-state'}
                            >
                                HookUseState
                            </Link>
                            <Link className="btn btn-ghost" to={'/flux'}>
                                Flux de donnees
                            </Link>
                            <Link className="btn btn-ghost" to={'/formulaire'}>
                                Les Formulaires
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl" to={'/'}>
                    Accueil
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        {/* <ahref="/hook-use-state">HookUseState</a> */}
                        <Link to={'/hook-use-state'}>HookUseState</Link>
                    </li>
                    <li>
                        {/* <ahref="/hook-use-state">HookUseState</a> */}
                        <Link to={'/flux'}>Flux de donnees</Link>
                    </li>
                    <li>
                        {/* <ahref="/hook-use-state">HookUseState</a> */}
                        <Link to={'/formulaire'}>Les Formulaires</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn btn-ghost text-xl"></Link>
            </div>
        </div>
    );
}

export default NavBar;
