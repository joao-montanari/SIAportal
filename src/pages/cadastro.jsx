import Head from "next/head"
import { useState } from "react"

import Header from "@/components/header"
import SlideBar from "@/components/slidebar"

export default function Cadastro() {
    const [name, setName] = useState('Joao Montanari')
    const [matricula, setMatricula] = useState('202203931415')
    const [genero, setGenero] = useState('masculino')
    const [cpf, setCpf] = useState('36552714840')
    const [curso, setCurso] = useState('Ciência da Computação')
    const [turma, setTurma] = useState('CC-0100')
    const [mensalidade, setMensalidade] = useState('800,00')
    const [usuario, setUsuario] = useState('joaomontanari')
    const [email, setEmail] = useState('joao.montanari@gmail.com')
    const [nascimento, setNascimento] = useState('21 de junho de 2003')
    const [telefone, setTelefone] = useState('+55 (19) 98933-7462')

    return (
        <>
            <Head>
                <title>Dados Cadastrais</title>
                <link rel="icon" href="/images/logo.png" />
            </Head>
            <Header/>
            <div className="flex">
                <div className='top-20 left-0 fixed'>
                    <SlideBar/>
                </div>
                <div className="ml-28 w-full">
                    <h1 className="mt-10 text-4xl font-bold text-[#88185D]">
                        Dados Cadastrais
                    </h1>
                    <p className="mt-4 text-lg text-gray-500">
                        Informações pessoais e opções de gerenciamento. Você também pode ver um resumo dos seu perfil.
                    </p>
                    <div className="border border-gray-300 w-[95%] mt-8 mb-8 rounded-md p-4 shadow-md">
                        <h1 className="text-2xl">
                            Informações básicas
                        </h1>
                        <p className="text-gray-500 mt-2">
                            Algumas informações podem estar visíveis para outras pessoas que estejam usando os serviços.
                        </p>
                        <div className="relative flex border-b-2 border-gray-300 my-5 pb-4 pl-4">
                            <h1 className="font-semibold text-gray-500">
                                Nome
                            </h1>
                            <label className="absolute text-xl right-0 mr-8">
                                {name}
                            </label>
                        </div>
                        <div className="relative flex border-b-2 border-gray-300 my-5 pb-4 pl-4">
                            <h1 className="font-semibold text-gray-500">
                                Data nascimento
                            </h1>
                            <label className="absolute text-xl right-0 mr-8">
                                {nascimento}
                            </label>
                        </div>
                        <div className="relative flex border-b-2 border-gray-300 my-5 pb-4 pl-4">
                            <h1 className="font-semibold text-gray-500">
                                Gênero
                            </h1>
                            <label className="absolute text-xl right-0 mr-8">
                                {genero}
                            </label>
                        </div>
                        <div className="relative flex my-5 pl-4">
                            <h1 className="font-semibold text-gray-500">
                                Matrícula
                            </h1>
                            <label className="absolute text-xl right-0 mr-8">
                                {matricula}
                            </label>
                        </div>
                    </div>

                    <div className="border border-gray-300 w-[95%] mb-8 rounded-md p-4 shadow-md">
                        <h1 className="text-2xl">
                            Informações de contato
                        </h1>
                        <p className="text-gray-500 mt-2">
                            Essas informações são usadas para que a instituição possa entrar em contato com você e vice e versa.
                        </p>
                        <div className="relative flex border-b-2 border-gray-300 my-5 pb-4 pl-4">
                            <h1 className="font-semibold text-gray-500">
                                E-mail
                            </h1>
                            <label className="absolute text-xl right-0 mr-8">
                                {email}
                            </label>
                        </div>
                        <div className="relative flex my-5 pl-4">
                            <h1 className="font-semibold text-gray-500">
                                Telefone
                            </h1>
                            <label className="absolute text-xl right-0 mr-8">
                                {telefone}
                            </label>
                        </div>
                    </div>

                    <div className="border border-gray-300 w-[95%] mb-8 rounded-md p-4 shadow-md">
                        <h1 className="text-2xl">
                            Informações do usuário
                        </h1>
                        <p className="text-gray-500 mt-2">
                            As informações deste campo contém um critério maior de sensibilidade. Elas devem ser vistas apenas pelo usuário pertencente a conta, então tome cuidado ao compartilha-las.
                        </p>
                        <div className="relative flex border-b-2 border-gray-300 my-5 pb-4 pl-4">
                            <h1 className="font-semibold text-gray-500">
                                CPF
                            </h1>
                            <label className="absolute text-xl right-0 mr-8">
                                {cpf}
                            </label>
                        </div>
                        <div className="relative flex border-b-2 border-gray-300 my-5 pb-4 pl-4">
                            <h1 className="font-semibold text-gray-500">
                                Usuário
                            </h1>
                            <label className="absolute text-xl right-0 mr-8">
                                {usuario}
                            </label>
                        </div>
                        <div className="relative flex border-b-2 border-gray-300 my-5 pb-4 pl-4">
                            <h1 className="font-semibold text-gray-500">
                                turma
                            </h1>
                            <label className="absolute text-xl right-0 mr-8">
                                {turma}
                            </label>
                        </div>
                        <div className="relative flex border-b-2 border-gray-300 my-5 pb-4 pl-4">
                            <h1 className="font-semibold text-gray-500">
                                Curso
                            </h1>
                            <label className="absolute text-xl right-0 mr-8">
                                {curso}
                            </label>
                        </div>
                        <div className="relative flex my-5 pl-4">
                            <h1 className="font-semibold text-gray-500">
                                Curso
                            </h1>
                            <label className="absolute text-xl right-0 mr-8">
                                {curso}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}