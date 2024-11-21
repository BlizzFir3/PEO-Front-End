import { Link } from 'react-router-dom';
import HeaderItem from './HeaderItem';

export default function Navbar() {
    const logoPath = 'src/assets/images/logo.png';

    return (
        <header className="px-5 shadow-lg navbar bg-neutral txt-neutral-content">
            <nav className="w-full">
                <Link to={'/'}>
                    <img src={logoPath} alt="logo" className="h-10" />
                </Link>
                <section className="m-auto w-fit">
                    <ul className="flex items-center gap-10">
                            <HeaderItem href={"/"}>Accueil</HeaderItem>
                            <HeaderItem href={"/products"}>Nos Produits</HeaderItem>

                    </ul>
                </section>
            </nav>
        </header>
    );
}
