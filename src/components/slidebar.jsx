import React from "react"
import Image from "next/image"
import Link from "next/link";
import { useState } from "react"
import { IoIosArrowBack, IoCall } from 'react-icons/Io'
import { FaSchool } from 'react-icons/Fa'
import { GiArchiveRegister, GiBugleCall } from 'react-icons/Gi'
import { SiGoogleclassroom } from 'react-icons/Si'

export default function SlideBar({ setTrigger }) {
    const [open, setOpen] = useState(false);
    const Menu = [
        {
            title: 'Sala de aula virtual',
            icon: <FaSchool className='text-3xl ml-1 text-gray-500'/>,
            src: 'salaVirtual'
        },
        {
            title: 'Dados cadastrais',
            icon: <GiArchiveRegister className='text-3xl ml-1 text-gray-500'/>,
            src: 'cadastro'
        },
        {
            title: 'Atendimento',
            icon: <GiBugleCall className='text-3xl ml-1 text-gray-500'/>,
            src: 'atendimento'
        },
        {
            title: 'Disciplinas matriculadas',
            icon: <SiGoogleclassroom className='text-3xl ml-1 text-gray-500'/>,
            src: 'disciplinas'
        },
    ]

    return (
        <div className= {`${open ? "w-72" : "w-20"} duration-300 h-screen shadow-2xl relative p-3 pt-7 border-l border-gray-300 bg-white`}>
            <IoIosArrowBack
                className={`text-3xl absolute w-8 cursor-pointer -right-4 top-16 bg-white border-2 border-gray-200 rounded-full duration-500 ${!open && 'rotate-180'}`}
                onClick={() => {setOpen(!open)}}
            />
            <ul>
                {
                    Menu.map((aba, index)=>(
                        <Link href={`/${aba.src}`} key={index} className={`p-1 text-gray-400 flex items-center gap-x-4 rounded-md duration-300 ${aba.gap ? "mt-9 text-xl font-bold" : "text-base mt-2 hover:bg-gray-200 cursor-pointer"} ${index === 0 && 'mt-7'}`}>
                            {aba.icon}
                            <span className={`${!open && 'hidden'} origin-left duration-300`}>
                                {aba.title}
                            </span>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}