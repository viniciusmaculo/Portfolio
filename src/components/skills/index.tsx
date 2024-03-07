import react from '../../assets/React.svg'
import html5 from '../../assets/HTML5.svg'
import css3 from '../../assets/CSS3.svg'
import typescript from '../../assets/TypeScript.svg'
import tailwind from '../../assets/Tailwind CSS.svg'
import firebase from '../../assets/Firebase.svg'
import github from '../../assets/GitHub.svg'
import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';

interface SkillItemProps {
    icon: string;
    alt: string;
    name: string;
    id?: string;
}

function SkillItem({ icon, alt, name, id }: SkillItemProps) {
    return (
        <div className='flex flex-col justify-center items-center bg-zinc-800 rounded-lg w-32 h-48 sm:h-40 hover:translate-y-[-0.5rem] duration-300 cursor-pointer hover:shadow-lg'>
            <img
                src={icon}
                alt={alt}
                className="w-24 bg-zinc-800 sm:w-20"
            />
            <p className='text-white mt-5 tracking-wide' id={id}>{name}</p>
        </div>
    );
}

export function Skills() {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".itemAnimation", {
            y: 0,
            opacity: 1,
            scrollTrigger:{
                trigger: ".screenAnimation",
                start: "top 900px",
                end: "bottom 1150px",
                scrub: true
            }
        })

        return() => {
            gsap.killTweensOf(".itemAnimation")
        }
    }, [])

    return(
        <section className='screenAnimation'>
            <div className="flex flex-col justify-center items-center my-16 pt-4 itemAnimation translate-y-[5rem] opacity-0" id='skills'>
                <h1 className="text-white font-bold text-4xl tracking-wide">Skills</h1> 
                <h2 className='text-zinc-100 m-8 text-center tracking-wide'>Aqui estão algumas das minhas habilidades nas quais tenho trabalhado.</h2>   
                <div className="flex flex-row justify-center items-center gap-8 flex-wrap ">

                    <SkillItem icon={react} alt="Ícone do React" name="React" />
                    <SkillItem icon={html5} alt="Ícone do HTML5" name="HTML5" />
                    <SkillItem icon={css3} alt="Ícone do CSS3" name="CSS3" />
                    <SkillItem icon={typescript} alt="Ícone do TypeScript" name="TypeScript" />
                    <SkillItem icon={tailwind} alt="Ícone do Tailwind CSS" name="Tailwind CSS" />
                    <SkillItem icon={firebase} alt="Ícone do Firebase" name="Firebase" />
                    <SkillItem icon={github} alt="Ícone do GitHub" name="GitHub" id='projects'/>

                </div>
            </div>
        </section>
    )
}