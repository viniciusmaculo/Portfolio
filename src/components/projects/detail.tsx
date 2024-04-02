import { useEffect, useRef } from "react";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";
import { ProjectItemProps } from ".";
import { HiOutlineX } from "react-icons/hi";
import gsap from "gsap";

interface ProjectDetailsProps {
    project: ProjectItemProps;
    onClose: () => void;
}

export function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
    const detailsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.from(detailsRef.current, {
            duration: 1,
            y: 65,
            ease: "power3.out",
        });
    }, []);

    const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            ref={detailsRef}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10"
            onClick={handleBackgroundClick}
        >
            <div className="bg-gradient-to-b from-[#302b63] to-[#313155] rounded-lg relative mx-3 max-w-xl p-5">
                <h2 className="text-3xl font-bold mb-5 text-white tracking-wide">{project.nameProject}</h2>

                <HiOutlineX onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer" size={25} color="#FFF" />

                <div className="my-6 flex gap-5">
                    <a href={project.linkGit} target="_blank" className="flex items-center gap-2 text-orange-500 duration-300 hover:text-orange-600"><FaGithub size={30} />Repositório</a>
                    <a href={project.linkDeploy} target="_blank" className="flex items-center gap-2 text-orange-500 duration-300 hover:text-orange-600"><FaExternalLinkSquareAlt size={30} />Deploy</a>
                </div>

                <p className="my-6 text-white">{project.info}</p>

                <a href={project.linkDeploy} target="_blank">
                    <img
                        src={project.image}
                        alt={project.alt}
                        className="rounded mx-auto w-full max-w-md hover:translate-y-[-0.2rem] duration-500 cursor-pointer hover:shadow-lg border-y-2 border-orange-500"
                    />
                </a>

                <h3 className="text-xl font-bold mt-6 text-white tracking-wide">Tecnologias utilizadas:</h3>

                <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((item) => (
                        <p key={item} className="bg-orange-500 tracking-wide px-1 rounded">{item}</p>
                    ))}
                </div>

            </div>
        </div>
    );
}
