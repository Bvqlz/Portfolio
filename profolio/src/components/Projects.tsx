
import { useState, useEffect } from 'react';


const isVideo = (src: string) => src.toLowerCase().endsWith('.mp4');

interface Project {
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    images: string[]; 
}

const PROJECTS: Project[] = [
    {
        title: "Zonta Club of Naples Website",
        description: "A website that was rehauled for the Zonta Club of Naples to improve their online presence and improve their engagement with the community.",
        tags: ["React", "MongoDB", "Tailwind", "ExpressJS"],
        githubUrl: "https://github.com/dennisr7/ZontaNaplesWebsite",
        images: ["/zonta/demo.mp4", "/zonta/hero.jpg", "/zonta/zonta6.jpg", "/zonta/zonta2.jpg", "/zonta/zonta3.jpg", "/zonta/zonta4.jpg", "/zonta/zonta5.jpg"] 
    },
    {
        title: "Wayfinder",
        description: "WayFinder is a mobile app aimed at combating the loneliness epidemic that is impacting our generation. It allows users to find landmarks or waypoints located on a map and meet up with new potential friends",
        tags: ["Node.js", "Express", "MongoDB", "react-native"],
        githubUrl: "https://github.com/Bartokens/Wayfinder-Shellhacks-2025",
        images: ["/wayfinder/way1.jpg", "/wayfinder/way2.jpg", "/wayfinder/way3.jpg"]
    },
    {
        title: "Full-Stack Todo",
        description: "A full-stack to-do application built in C++.",
        tags: ["C++", "Crowcpp", "Javascript"],
        githubUrl: "https://github.com/Bvqlz/Todo",
        images: ["/todo/todo1.jpg", "/todo/todo2.jpg", "/todo/todo3.jpg"]
    },
    {
        title: "F1 Championship Tracker",
        description: "A C++ terminal app that allows users to view real-time standings and race results for any F1 season.",
        tags: ["C++", "FTXUI", "Jolpica-F1 API", "libcurl", "nlohmann-json"],
        githubUrl: "https://github.com/Bvqlz/F1",
        images: ["/f1/main_menu.jpg", "/f1/Season_Select.jpg", "/f1/Driver_Standings.jpg", "/f1/Constructor_Standings.jpg", "/f1/Driver_Stats.jpg"]
    },
    {
        title: "Gridwatch",
        description: "A full-stack web application that provides dashboard and drone route vizualizations while utilizing a path-finding algorithm to optimize drone routes.",
        tags: ["Flask", "React", "ORTools", "Javascript"],
        githubUrl: "https://github.com/Bvqlz/GridWatch",
        images: ["/gridwatch/gw1.jpg", "/gridwatch/gw2.jpg", "/gridwatch/gw3.jpg", "/gridwatch/gw4.jpg", "/gridwatch/gw5.jpg"]
    }
];


function ImageModal({ 
    images, 
    initialIndex, 
    onClose 
}: { 
    images: string[]; 
    initialIndex: number; 
    onClose: () => void; 
}) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in"
            onClick={onClose}
        >
            <div 
                className="relative max-w-7xl w-full max-h-[90vh] p-4 flex items-center justify-center"
                onClick={e => e.stopPropagation()} 
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 md:-top-12 md:-right-12 p-2 text-white/70 hover:text-white transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {images.length > 1 && (
                    <button 
                        onClick={handlePrev}
                        className="absolute left-2 md:-left-12 p-2 text-white/70 hover:text-white transition-all hover:scale-110"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-12 md:h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                )}

                {isVideo(images[currentIndex]) ? (
                    <video 
                        src={images[currentIndex]} 
                        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                        controls
                        autoPlay
                        loop
                        playsInline
                    />
                ) : (
                    <img 
                        src={images[currentIndex]} 
                        alt={`Preview ${currentIndex + 1}`} 
                        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                    />
                )}

                {images.length > 1 && (
                    <button 
                        onClick={handleNext}
                        className="absolute right-2 md:-right-12 p-2 text-white/70 hover:text-white transition-all hover:scale-110"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-12 md:h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                )}

                {images.length > 1 && (
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/50'}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function ProjectCard({ project, onImageClick }: { project: Project; onImageClick: (index: number) => void }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation(); 
        e.preventDefault();
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.6),0_2px_4px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.1)] hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full group relative">
            <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="absolute top-0 right-0 p-2.5 bg-zinc-950/50 hover:bg-zinc-800 text-white rounded-bl-xl z-20 transition-colors backdrop-blur-sm border-l border-b border-white/5 shadow-lg"
                title="View Source on GitHub"
            >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
            </a>

            <div 
                className="group/image h-48 w-full relative bg-zinc-800 overflow-hidden cursor-pointer"
                onClick={() => onImageClick(currentImageIndex)}
            >
                {isVideo(project.images[currentImageIndex]) ? (
                    <video 
                        src={project.images[currentImageIndex]} 
                        className="w-full h-full object-cover object-top transition-transform duration-500"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                ) : (
                    <img 
                        src={project.images[currentImageIndex]} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-top transition-transform duration-500"
                    />
                )}
                <div className="absolute inset-0 bg-black/10 group-hover/image:bg-black/0 transition-colors"></div>

                <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <button 
                        onClick={prevImage}
                        className="pointer-events-auto p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm transition-all hover:scale-110"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button 
                        onClick={nextImage}
                        className="pointer-events-auto p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm transition-all hover:scale-110"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
                
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-0 z-10">
                    {project.images.map((_, idx) => (
                        <div key={idx} className="w-3 h-3 flex items-center justify-center">
                            <div 
                                className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${idx === currentImageIndex ? 'bg-white animate-pill-stretch' : 'bg-white/50 hover:bg-white/75'}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white font-display mb-3">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 text-xs font-mono font-medium text-blue-300 bg-blue-500/10 rounded-md border border-blue-500/20">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {project.description}
                </p>
            </div>
        </div>
    );
}

export default function Projects() {
    const [hasAnimated] = useState(() => {
        return !!sessionStorage.getItem('projectsAnimationPlayed');
    });
    
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openModal = (project: Project, index: number) => {
        setSelectedProject(project);
        setSelectedImageIndex(index);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    useEffect(() => {
        if (!hasAnimated) {
            sessionStorage.setItem('projectsAnimationPlayed', 'true');
        }
    }, [hasAnimated]);

    const animationClass = hasAnimated ? 'opacity-100' : 'animate-fade-in-down';

    return (
        <section className="w-full max-w-7xl px-6 pt-50 pb-24 md:pt-52 md:pb-32 flex flex-col items-center mx-auto">
             <div className="space-y-12 w-full">
                 <div className={`space-y-6 ${hasAnimated ? '' : 'opacity-0'} ${animationClass}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-display">Projects</h2>
                    <p className="text-gray-400 max-w-none text-lg leading-relaxed">
                        Here are some of the projects that I have worked on. More to come!
                    </p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                     {PROJECTS.map((project, index) => (
                         <div 
                            key={index} 
                            style={{ animationDelay: hasAnimated ? '0s' : `${0.2 + (index * 0.1)}s` }} 
                            className={`h-full ${hasAnimated ? '' : 'opacity-0'} ${animationClass}`}
                         >
                             <ProjectCard 
                                project={project} 
                                onImageClick={(imgIndex) => openModal(project, imgIndex)}
                             />
                         </div>
                     ))}
                 </div>
             </div>

             {selectedProject && (
                 <ImageModal 
                     images={selectedProject.images} 
                     initialIndex={selectedImageIndex} 
                     onClose={closeModal} 
                 />
             )}
        </section>
    );
}