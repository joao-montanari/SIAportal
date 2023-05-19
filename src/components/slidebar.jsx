import React from "react"
import Image from "next/image"
import Link from "next/link";
import { useState } from "react"
import { IoIosArrowBack, IoCall } from 'react-icons/io'
import { FaSchool } from 'react-icons/fa'
import { GiArchiveRegister, GiBugleCall } from 'react-icons/gi'
import { SiGoogleclassroom } from 'react-icons/si'
import { TbBooks } from 'react-icons/tb'
import { MdWork } from 'react-icons/md'
import { FaSlidersH } from 'react-icons/fa'

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
        {
            title: 'Biblioteca virtual',
            icon: <TbBooks className='text-3xl ml-1 text-gray-500'/>,
            src: 'biblioteca'
        },
        {
            title: 'Estágio',
            icon: <MdWork className='text-3xl ml-1 text-gray-500'/>,
            src: 'estagio'
        },
    ]

    return (
        <div className= {`${open ? "w-72" : "w-20"} duration-300 h-screen shadow-2xl relative p-3 pt-16 border-r border-gray-200 bg-white`}>
            <div className="flex absolute left-5 top-8">
                <FaSlidersH
                    className={`text-3xl w-8 text-gray-600 cursor-pointer duration-500 ${!open && 'rotate-180'}`}
                    onClick={() => {setOpen(!open)}}
                />
                <Image
                    src={'/images/unimetrocamp.png'}
                    width={180}
                    height={60}
                    className={`${!open && 'hidden'} ml-4`}
                />
            </div>
            <ul>
                {
                    Menu.map((aba, index)=>(
                        <Link 
                            href={`/${aba.src}`} 
                            key={index} 
                            className={`p-1 text-gray-400 flex items-center gap-x-4 rounded-md duration-300 ${aba.gap ? "mt-9 text-xl font-bold" : "text-base mt-2 hover:bg-gray-200 cursor-pointer"} ${index === 0 && 'mt-7'}`}
                        >
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