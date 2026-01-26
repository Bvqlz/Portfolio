import { Link } from "react-router-dom";
import type { MouseEvent } from "react";


export default function Navbar() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleHomeClick = (e: MouseEvent<HTMLAnchorElement>) => {
        if(window.location.pathname === '/') {
            e.preventDefault();
            scrollToTop();
        } else {
            scrollToTop();
        }
    }

    const auroraLine = (
        <>
            <span className={`
                absolute bottom-0 left-[10%] w-[80%] h-[3px]
                bg-gradient-to-r from-[#94a3b8] via-[#3b82f6] to-[#94a3b8]
                animate-aurora-line
                transition-transform duration-300 ease-out
                origin-right group-hover:origin-left
                scale-x-0 group-hover:scale-x-100
            `} />
            
            <span className="
                absolute bottom-0 left-[10%] w-[80%] h-[10px] 
                bg-blue-500/40 blur-md
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
            " />
        </>
    );

    const linkClasses = `
            relative group 
            px-3 py-2 md:px-6 md:py-3 
            rounded-lg 
            font-bold 
            transition-transform duration-300 
            hover:scale-105 active:scale-95
        `;

    return (
        <nav className="w-full absolute top-0 left-0 z-20">
            <div className="w-full flex justify-center items-center px-4 py-4 mt-2 md:px-6 md:py-6 md:mt-5">
                <ul className="flex gap-6 md:gap-20 text-xl md:text-3xl font-bold text-gray-300">
                    {['Home', 'About', 'Projects'].map((item) => (
                        <li key={item}>
                            <Link 
                                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                                onClick={item === 'Home' ? handleHomeClick : scrollToTop} 
                                className={linkClasses}
                            >
                                
                                <span className="
                                    bg-gradient-to-r from-[#94a3b8] via-[#3b82f6] via-[#60a5fa] to-[#94a3b8]
                                    bg-[length:200%_auto]
                                    bg-clip-text
                                    animate-aurora-fast
                                    text-gray-400
                                    transition-colors duration-300
                                    group-hover:text-transparent
                                ">
                                    {item}
                                </span>
                                {auroraLine}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

