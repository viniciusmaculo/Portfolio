import { FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';

export function Contact(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")

    function sendEmail(e: FormEvent){
        e.preventDefault()

        if(name === '' || email === '' || text === '') {
            alert("Preencha todos os campos.")
            return
        } else {
            const templateParams = {
                from_name: name,
                message: text,
                email: email
            }
            
            emailjs.send("service_h780tr8", "template_fbhmkqu", templateParams, "TXk9zSaseikU5yKyG")
            .then(() => {
                alert("E-mail enviado com sucesso!")
                setName('')
                setEmail('')
                setText('')
            }), (error: any) => {
                alert("Ocorreu um erro.")
                console.log(error)
            }
        }
    }

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".itemAnimation3", {
            y: 0,
            opacity: 1,
            scrollTrigger:{
                trigger: ".screenAnimation3",
                start: "top 900px",
                end: "bottom 1000px",
                scrub: true
            }
        })

        return() => {
            gsap.killTweensOf(".itemAnimation3")
        }
    }, [])

    return(
        <section className='screenAnimation3'>
            <div className="flex flex-col justify-center items-center my-16 pt-4 itemAnimation3 translate-y-[5rem] opacity-0" id="contact">
                <h1 className="text-white font-bold text-4xl tracking-wide">Contato</h1> 
                <h2 className='text-zinc-100 m-8 text-center tracking-wide'>Sinta-se à vontade para entrar em contato comigo em caso de dúvidas ou oportunidades!</h2>
                <form className="flex flex-col" onSubmit={sendEmail}>
                    <input 
                        type="text" 
                        placeholder=" Insira seu nome"
                        className="mt-4 p-1 rounded-md shadow-2xl sm:w-80"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder=" Insira seu e-mail" 
                        className="mt-4 p-1 rounded-md shadow-2xl sm:w-80"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea 
                        placeholder=" Insira sua mensagem" 
                        className="mt-4 p-1 w-96 h-48 rounded-md resize-none shadow-xl sm:w-80"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea> 
                    <input type="submit" className="mt-4 w-96 bg-orange-500 p-1 rounded-md hover:scale-105 duration-500 cursor-pointer sm:w-80"/>
                </form>
            </div>
        </section>
    )
}