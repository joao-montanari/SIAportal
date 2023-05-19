import Image from "next/image"
import { useState } from "react";
import Notiflix from "notiflix";
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri'

export default function CardLogin() {
    const [matricula, setMatricula] = useState('');
    const [password, setPassword] = useState('');
    const text = 'Ola Mundo';
    
    function onSubmit(e) {
        e.preventDefault();

        if (matricula != '' && password != '') {
            Loading.circle('Verificando os dados')
        } else {
            Notiflix.Notify.warning('Preenha todos os campos')
        }

    }

    return (
        <form 
            onSubmit={onSubmit}
            className="bg-gray-100 w-[500px] h-96 rounded-md shadow-lg flex justify-center items-center"
        >
            <div className="w-auto h-auto">
                <Image
                    src={'/images/unimetrocamp.png'}
                    width={250}
                    height={100}
                    className="m-auto mb-10"
                    alt="logo Unimetrocamp"
                />
                <div className='mt-2'>
                    <label className='pl-1 text-gray-500'>Matrícula:</label>
                    <div className='flex'>
                        <AiOutlineUser className='bg-[#88185D] text-gray-100 h-8 w-8 border-l-2 border-[#88185D]'/>
                        <input 
                            type="number"
                            value={matricula}
                            onChange={(e) => setMatricula(e.target.value)}
                            className='border-2 border-[#88185D] w-96 p-1 pl-2 text-sm h-8 rounded-tr-lg rounded-br-lg bg-gray-100' 
                        />
                    </div>
                </div>
                <div className='mt-2'>
                    <label className='pl-1 text-gray-500'>Senha:</label>
                    <div className='flex'>
                        <RiLockPasswordLine className='bg-[#88185D] text-gray-100 h-8 w-8 border-l-2 border-[#88185D]'/>
                        <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='border-2 border-[#88185D] w-96 p-1 pl-2 text-sm h-8 rounded-tr-lg rounded-br-lg bg-gray-100' 
                        />
                    </div>
                </div>
                <button 
                    type="submit" 
                    className="mt-10 bg-[#88185D] text-white text-lg p-1 rounded-sm hover:bg-[#cc2e8f] w-full duration-300 shadow-lg"
                >
                    Entrar
                </button>
            </div>
        </form>
    )
}