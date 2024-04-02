import portfolio from '../../assets/Portfólio.jpg'
import mylinks from '../../assets/MyLinks.jpg'
import cartazflix from '../../assets/CartazFlix.jpg'
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { useLayoutEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ProjectDetails } from './detail';
import ScrollTrigger from 'gsap/ScrollTrigger';

export interface ProjectItemProps {
    nameProject: string;
    image: string;
    alt: string;
    info: string;
    linkGit: string;
    linkDeploy: string;
    technologies: string[];
}

export function Projects() {
    const [showDetails, setShowDetails] = useState(false);
    const [selectedProject, setSelectedProject] = useState<ProjectItemProps | null>(null);

    const projects: ProjectItemProps[] = [
        {
            nameProject: 'Portfólio',
            image: portfolio,
            alt: 'Meu Portfólio.',
            info: 'Meu portfólio pessoal, desenvolvido pensando em uma experiência responsiva e dinâmica, utilizando ReactJS e aproveitando o poder de bibliotecas complementares para aprimorar a funcionalidade e o design.',
            linkGit: 'https://github.com/viniciusmaculo/Portfolio',
            linkDeploy: 'https://portfolio-viniciusmaculo.vercel.app/',
            technologies: ["React", "TypeScript", "TailwindCSS", "GSAP", "EmailJS"]
        },
        {
            nameProject: 'MyLinks',
            image: mylinks,
            alt: 'Projeto MyLinks.',
            info: 'Agregador de links em ReactJS que permite aos usuários realizar cadastro, criar, personalizar e compartilhar seus principais links de forma intuitiva e eficaz.',
            linkGit: 'https://github.com/viniciusmaculo/mylinks',
            linkDeploy: 'https://mylinks-lovat.vercel.app/',
            technologies: ["React", "TypeScript", "TailwindCSS", "Firebase"]
        },
        {
            nameProject: 'Cartaz Flix',
            image: cartazflix,
            alt: 'Projeto Cartaz Flix.',
            info: 'Site em ReactJS que utiliza uma API de filmes para exibir as últimas estreias. Os usuários podem salvar seus filmes favoritos localmente, pesquisar por filmes específicos e acessar informações detalhadas sobre cada filme.',
            linkGit: 'https://github.com/viniciusmaculo/cartazflix',
            linkDeploy: 'https://cartazflix.vercel.app/',
            technologies: ["React", "JavaScript"]
        }
    ];

    const openDetails = (project: ProjectItemProps) => {
        setSelectedProject(project);
        setShowDetails(true);
    };

    const closeDetails = () => {
        setShowDetails(false);
    };

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".itemAnimation2", {
            x: 0,
            opacity: 1,
            scrollTrigger:{
                trigger: ".screenAnimation2",
                start: "top 95%",
                end: "top 50%",
                scrub: true
            }
        })

        return() => {
            gsap.killTweensOf(".itemAnimation2")
        }
    }, [])

    return (
        <section className="screenAnimation2">
            <div className="flex flex-col justify-center items-center pt-4 itemAnimation2 translate-x-[-10rem] opacity-0">
                <h1 className="text-white font-bold text-4xl tracking-wide">Projetos</h1>
                <h2 className="text-zinc-100 m-8 text-center tracking-wide">
                    Aqui estão alguns dos projetos pessoais que desenvolvi.
                </h2>
                <div className="flex flex-row justify-center items-center gap-8 flex-wrap">
                    {projects.map((project, index) => (
                        <div key={index} onClick={() => openDetails(project)}>
                            <ProjectItem {...project} />
                        </div>
                    ))}
                </div>
            </div>
            {showDetails && selectedProject && (
                <ProjectDetails project={selectedProject} onClose={closeDetails} />
            )}
        </section>
    );
}

function ProjectItem({nameProject, image, alt, info, linkGit, linkDeploy}: ProjectItemProps){
    return(
        <div className='flex flex-col items-center bg-zinc-800 rounded-lg w-72 h-[27rem] relative hover:translate-y-[-0.5rem] duration-300 hover:shadow-lg cursor-pointer'>
                <img
                    src={image}
                    alt={alt}
                    className='rounded-t-lg'
                />

            <h3 className='text-white mt-5 tracking-wide text-xl font-bold'>{nameProject}</h3>

            <p className='text-white text-center text-base p-3'>
                {info}
            </p>

            <div className="flex absolute bottom-0 mb-4">
                <a href={linkGit} target='_blank' className='hover:text-orange-400 duration-300'><FaGithub size={30} className='mr-2'/></a>
                <a href={linkDeploy} target='_blank' className='hover:text-orange-400 duration-300'><FaExternalLinkSquareAlt size={30}/></a>
            </div>
        </div>
    )
}