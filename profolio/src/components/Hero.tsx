import { useState, useEffect } from 'react';
import '../styles/aurora.css';

export default function Hero() {

    const [hasAnimated] = useState(() => {
        return !!sessionStorage.getItem('heroAnimationPlayed');
    });

    useEffect(() => {
        if (!hasAnimated) {
            sessionStorage.setItem('heroAnimationPlayed', 'true');
        }
    }, [hasAnimated]);

    const animationClass = hasAnimated ? 'opacity-100' : 'animate-fade-in-down';

    return (
        <section className="w-full min-h-screen max-w-5xl px-6 py-20 md:py-32 flex flex-col items-center justify-center">
            <div className="space-y-2 w-full flex flex-col items-center">
                
                <div className="w-fit mx-auto flex flex-col items-start">
                    
                    <p className={`text-gray-400 text-3xl sm:text-4xl md:text-5xl font-mono font-semibold tracking-wide mb-2 text-left ml-1 ${hasAnimated ? '' : 'opacity-0'} ${animationClass}`} style={{ animationDelay: hasAnimated ? '0s' : '0s' }}>Hello! I'm</p>

                    <h1 className={`relative overflow-hidden bg-[#09090B] text-5xl sm:text-7xl md:text-9xl font-display font-bold tracking-tight text-white m-0 text-left ${hasAnimated ? '' : 'opacity-0'} ${animationClass}`} style={{ animationDelay: hasAnimated ? '0s' : '0.15s' }}>Brian Velazquez
                        
                        <div className="absolute top-0 left-0 w-full h-full z-10 mix-blend-darken pointer-events-none">
                            <div className="aurora-blob absolute w-[60vw] h-[60vw] bg-[#94a3b8] rounded-[37%_29%_27%_27%_/_28%_25%_41%_37%] blur-2xl mix-blend-overlay animate-aurora-1"></div>
                            <div className="aurora-blob absolute w-[60vw] h-[60vw] bg-[#3b82f6] rounded-[37%_29%_27%_27%_/_28%_25%_41%_37%] blur-2xl mix-blend-overlay animate-aurora-2"></div>
                            <div className="aurora-blob absolute w-[60vw] h-[60vw] bg-[#64748b] rounded-[37%_29%_27%_27%_/_28%_25%_41%_37%] blur-2xl mix-blend-overlay animate-aurora-3"></div>
                            <div className="aurora-blob absolute w-[60vw] h-[60vw] bg-[#60a5fa] rounded-[37%_29%_27%_27%_/_28%_25%_41%_37%] blur-2xl mix-blend-overlay animate-aurora-4"></div>
                        </div>
                    </h1>
                </div>
            </div>

            <div className="flex justify-center gap-6 md:gap-8 mt-12 md:mt-16">
                <a className={`cursor-pointer group ${hasAnimated ? '' : 'opacity-0'} ${animationClass}`} href="https://www.linkedin.com/in/bvlqz28" target="_blank" style={{ animationDelay: hasAnimated ? '0s' : '0.6s' }}> 
                    <div className="p-3 md:p-4 rounded-xl bg-zinc-900 shadow-[0_4px_12px_rgba(0,0,0,0.6),0_2px_4px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.1)] text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-current w-6 h-6 md:w-8 md:h-8">
                            <path d="M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z"/>
                        </svg>
                    </div>
                </a>

                <a className={`cursor-pointer group ${hasAnimated ? '' : 'opacity-0'} ${animationClass}`} href="https://github.com/Bvqlz" target="_blank" style={{ animationDelay: hasAnimated ? '0s' : '0.85s' }}>
                    <div className="p-3 md:p-4 rounded-xl bg-zinc-900 shadow-[0_4px_12px_rgba(0,0,0,0.6),0_2px_4px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.1)] text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-current w-6 h-6 md:w-8 md:h-8">
                            <path d="M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                        </svg>
                    </div>   
                </a>

                <a className={`cursor-pointer group ${hasAnimated ? '' : 'opacity-0'} ${animationClass}`} href="/resume.pdf" target="_blank" style={{ animationDelay: hasAnimated ? '0s' : '1.1s' }}>
                    <div className="p-3 md:p-4 rounded-xl bg-zinc-900 shadow-[0_4px_12px_rgba(0,0,0,0.6),0_2px_4px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.1)] text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current w-6 h-6 md:w-8 md:h-8">
                            <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" />
                        </svg>
                    </div>   
                </a>

            </div>
        </section>
    )
}