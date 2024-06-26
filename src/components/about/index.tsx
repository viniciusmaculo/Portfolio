import me from '../../assets/me.jpeg'
import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { Cursor } from 'react-simple-typewriter';

export function About() {

    useLayoutEffect(() => {
        gsap.to(".screenAnimation0", {
            y: 0,
            opacity:1
        })
    }, [])

    return(
        <section className='w-full max-w-[110rem] mx-auto flex flex-col justify-center items-center sm:mt-20 mt-60 screenAnimation0 translate-y-[5rem] opacity-0'>
            <div className="max-w-full w-11/12 flex items-center justify-around lg:flex-col"> 

               <div className="text-white text-justify mb-16">

                <h1 className='text-xl mb-5 lg:mb-3'>Olá, meu nome é</h1>
                <h1 className='font-bold text-4xl mb-5 tracking-wide lg:text-3xl lg:mb-3'>Vinícius Maçulo</h1>
                <h2 className='font-bold text-4xl mb-5 lg:text-2xl lg:mb-3'>Sou <span className='text-orange-500'>Desenvolvedor Front-End<Cursor/></span></h2>
                <p className='max-w-xl text-lg mb-8'>
                Poder criar interfaces atraentes e funcionais sempre me fascinou, e tenho dedicado tempo e esforço para aprofundar meus conhecimentos nessa área. 
                Possuo habilidades sólidas em ReactJS, HTML, CSS e TypeScript, buscando constantemente aprimorar minha experiência nessas e em outras tecnologias.
                </p>

                <a href='#contact'><button className="border rounded-lg py-3 px-5 hover:scale-105 hover:bg-[#fed7aa21] duration-500 tracking-wider text-orange-500 border-orange-500">Contato</button></a>  

               </div>
                
               <img
                src={me}
                alt='Vinícius Maçulo.'
                className='w-[25rem] h-auto rounded-full text-center border-y-2 border-orange-400 mb-16 lg:mb-0'
               />
   
            </div>

            <a href='#skills'><RiArrowDownDoubleFill className='text-orange-500 mt-20 cursor-pointer size-20 animate-bounce' id='skills'/></a>

        </section>
    )
}