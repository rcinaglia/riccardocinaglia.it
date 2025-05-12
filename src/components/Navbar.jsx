import { useState } from 'react';
import logo from "../assets/logo.svg";
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        document.body.style.overflow = menuOpen ? '' : 'hidden';
    };

    const closeMenu = () => {
        setMenuOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <>
            <header className="relative z-50 mx-auto lg:px-25 md:px-10 px-5 font-mono align-middle backdrop-blur-sm">
                <div className="flex justify-between items-center pt-4 pb-4 pr-2.5">
                    <Link to="/"><img src={logo} alt="logo" className="w-25" id="logo_rc" /></Link>
                    <nav>
                        <ul className="gap-6 list-none hidden md:flex space-x-4 mt-0.5">
                            <li><Link to="/" className="hover:underline">HOME</Link></li>
                            <li><Link to="/downloads" className="hover:underline">DOWNLOADS</Link></li>
                        </ul>
                        <button onClick={toggleMenu} className="md:hidden p-2 focus:outline-none relative z-50">
                            {!menuOpen ? (
                                <svg className="w-6 h-6 block" fill="none" stroke="currentColor" strokeWidth="2"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            ) : (
                                <svg className="w-6 h-6 block" fill="none" stroke="currentColor" strokeWidth="2"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            )}
                        </button>
                    </nav>
                </div>
            </header>
            <div
                className={`font-mono fixed inset-0 bg-black bg-opacity-90 text-white flex flex-col justify-center items-center space-y-6 text-2xl transition-all duration-300 z-40 ${menuOpen ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-95'
                    }`}
            >
                <ul>
                    <li><Link to="/" className="hover:underline">HOME</Link></li>
                    <li><Link to="/downloads" className="hover:underline">DOWNLOADS</Link></li>
                </ul>
            </div>
            <hr className="mx-auto text-zinc-900" />
        </>
    );
}

export default Navbar;
