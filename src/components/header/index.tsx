import { useState } from 'react';

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#100d2bf5]">
            <div className="flex justify-around m-5 font-bold text-white items-center sm:hidden">
                <a href='#'><h1 className="cursor-pointer hover:scale-105 duration-500 tracking-wider" >{`<Portfólio/>`}</h1></a>   

                <nav>
                    <ul className="flex gap-5 cursor-pointer tracking-wider sm:gap-2">
                        <li className="hover:scale-105 duration-500 hover:text-orange-500"><a href='#'>Sobre</a></li>
                        <li className="hover:scale-105 duration-500 hover:text-orange-500"><a href='#skills'>Skills</a></li>
                        <li className="hover:scale-105 duration-500 hover:text-orange-500"><a href='#projects'>Projetos</a></li>
                    </ul>       
                </nav>
                <a href='#contact'><button className="border rounded-lg py-1 px-2 hover:scale-105 hover:bg-[#fed7aa21] duration-500 tracking-wider text-orange-500 border-orange-500">Contato</button></a>   
            </div>

            <div className="sm:flex justify-between items-center m-5 font-bold text-white hidden">
                <a href='#'><h1 className="cursor-pointer hover:scale-105 duration-500 tracking-wider">{`<Portfólio/>`}</h1></a>
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>
            {menuOpen && (
                <nav className="sm:block hidden fixed bg-[#100d2bf5] w-full shadow-xl">
                    <ul className="flex flex-col gap-5 m-5 cursor-pointer tracking-wider text-white">
                        <li className="hover:scale-105 duration-500 hover:text-orange-500">
                            <a href="#">Sobre</a>
                        </li>
                        <li className="hover:scale-105 duration-500 hover:text-orange-500">
                            <a href="#skills">Skills</a>
                        </li>
                        <li className="hover:scale-105 duration-500 hover:text-orange-500">
                            <a href="#projects">Projetos</a>
                        </li>
                        <li>
                            <a href="#contact">
                                <button className="border rounded-lg py-1 px-2 hover:scale-105 hover:bg-[#fed7aa21] duration-500 tracking-wider text-orange-500 border-orange-500">
                                    Contato
                                </button>
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}