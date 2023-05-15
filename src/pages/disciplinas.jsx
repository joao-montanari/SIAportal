import Head from "next/head"

import Header from "@/components/header"
import SlideBar from "@/components/slidebar"
import Materia from "@/components/materia"

export default function Disciplinas() {
    const cursando = [
        {
            name : 'Estrutura de dados em C',
            course : 'Ciência da computação',
            charge : '40 horas',
            professor : 'Giuliano',
            status : 'cursando',
            description : 'Abordagem na estruturação de dados na linguagem de programação em C.',
        },
        {
            name : 'Protocolo de redes',
            course : 'Ciência da computação',
            charge : '40 horas',
            professor : 'Arnaldo',
            status : 'cursando',
            description : 'Demonstra a aplicação de rede por meio de protocolos e forma de utilização.',
        },
        {
            name : 'Lógica de programação',
            course : 'Ciência da computação',
            charge : '40 horas',
            professor : 'on-line',
            status : 'cursando',
            description : 'Abordagem sobre os conceitos fundamentais a cerca da programação.',
        },
        {
            name : 'Desenvolvimento em Python',
            course : 'Ciência da computação',
            charge : '40 horas',
            professor : 'Kessede',
            status : 'cursando',
            description : 'Abordagem a linguagem de programação Python com projetos de aplicação real.',
        },
    ]
    const realizado = [
        {
            name : 'Computação em nuvem',
            course : 'Ciência da computação',
            charge : '40 horas',
            professor : 'João Ronaldo',
            status : 'realizado',
            description : 'Abordagem nos princpais serviços de nuvem, e forma de utilização e construção.',
        },
        {
            name : 'Introdução a programação em C',
            course : 'Ciência da computação',
            charge : '40 horas',
            professor : 'Kessede',
            status : 'realizado',
            description : 'Desenvolvimento de programas lógicos com C, abordando a lógica fundamental.',
        },
        {
            name : 'Banco de dados',
            course : 'Ciência da computação',
            charge : '40 horas',
            professor : 'João Ronaldo',
            status : 'realizado',
            description : 'Abordagem inicial em banco de dados com fundamentos. Atividades em SQL.',
        },
        {
            name : 'Lógica de programação',
            course : 'Ciência da computação',
            charge : '40 horas',
            professor : 'Online',
            status : 'realizado',
            description : 'Fundamentos e introdução ao mundo da programação. Ensinando lógica.',
        },
    ]
    const realizar = [
        {
            name : 'Engenharia de software',
            course : 'Ciência da computação',
            charge : '40 horas',
            professor : 'Indefinido',
            status : 'realizar',
            description : 'Compreenção de como funcionam os principais equipamentos tecnologicos.',
        },
        {
            name : 'Segurança da informação',
            course : 'Ciência da computação',
            charge : '40 horas',
            professor : 'Indefinido',
            status : 'realizar',
            description : 'Entender os fundamentos de segurança e como desenvolver um produto seguro.',
        },
        {
            name : 'Paradigmas da programação',
            course : 'Ciência da computação',
            charge : '40 horas',
            professor : 'Indefinido',
            status : 'realizar',
            description : 'Aprender sobre os principais paradigmas que existem nas linguagens do mercado.',
        },
        {
            name : 'Fundamentos de Redes',
            course : 'Ciência da computação',
            charge : '40 horas',
            professor : 'Indefinido',
            status : 'realizar',
            description : 'Entender o que é uma rede e como ela funciona, além de suas aplicações no mercado.',
        },
    ]

    return (
        <>
            <Head>
                <title>Disciplinas</title>
                <link rel="icon" href="/images/logo.png" />
            </Head>
            <Header/>
            <div className="flex">
                <div className='top-0 left-0 fixed z-10'>
                    <SlideBar/>
                </div>
                <div className="ml-28 w-full">
                    <h1 className="mt-10 text-4xl font-bold text-[#88185D]">
                        Disciplinas matriculadas
                    </h1>

                    <div className="border border-gray-300 w-[95%] mt-8 mb-8 rounded-md p-4 shadow-md">
                        <h1 className="text-2xl">
                            Informações da turma
                        </h1>
                        <p className="text-gray-500 mt-2">
                            Aqui você pode ver as informações relacionadas a sua turma e suas matérias.
                        </p>
                        <div className="relative flex border-b-2 border-gray-300 my-5 pb-4 pl-4">
                            <h1 className="font-semibold text-gray-500">
                                Curso
                            </h1>
                            <label className="absolute text-xl right-0 mr-8">
                                Ciência da computação
                            </label>
                        </div>
                        <div className="relative flex border-b-2 border-gray-300 my-5 pb-4 pl-4">
                            <h1 className="font-semibold text-gray-500">
                                Turma
                            </h1>
                            <label className="absolute text-xl right-0 mr-8">
                                CC-0100
                            </label>
                        </div>
                        <div className="relative flex border-b-2 border-gray-300 my-5 pb-4 pl-4">
                            <h1 className="font-semibold text-gray-500">
                                Professor responsável
                            </h1>
                            <label className="absolute text-xl right-0 mr-8">
                                João Ronaldo da Cunha
                            </label>
                        </div>
                        <div className="relative flex border-b-2 border-gray-300 my-5 pb-4 pl-4">
                            <h1 className="font-semibold text-gray-500">
                                Ano de início
                            </h1>
                            <label className="absolute text-xl right-0 mr-8">
                                2021
                            </label>
                        </div>
                        <div className="relative flex my-5 pl-4">
                            <h1 className="font-semibold text-gray-500">
                                Duração
                            </h1>
                            <label className="absolute text-xl right-0 mr-8">
                                4 anos
                            </label>
                        </div>
                    </div>

                    <div className="border border-gray-300 mb-10 pl-4 w-[95%] rounded-lg shadow-md">
                        <h1 className="font-semibold text-xl my-4 text-[#88185D] border-b-2 border-[#88185D] w-52 ml-3">
                            Matérias em curso
                        </h1>
                        <div className="grid grid-cols-2">
                            {
                                cursando.map((materia) => (
                                    <Materia
                                        name={materia.name}
                                        course={materia.course}
                                        charge={materia.charge}
                                        professor={materia.professor}
                                        status={materia.status}
                                        description={materia.description}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="border border-gray-300 mb-10 pl-4 w-[95%] rounded-lg shadow-md">
                        <h1 className="font-semibold text-xl my-4 text-green-500 border-b-2 border-green-500 w-56 ml-3">
                            Matérias já realizadas
                        </h1>
                        <div className="columns-2">
                            {
                                realizado.map((materia) => (
                                    <Materia
                                        name={materia.name}
                                        course={materia.course}
                                        charge={materia.charge}
                                        professor={materia.professor}
                                        status={materia.status}
                                        description={materia.description}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="border border-gray-300 mb-10 pl-4 w-[95%] rounded-lg shadow-md">
                        <h1 className="font-semibold text-xl my-4 text-blue-500 border-b-2 border-blue-500 w-52 ml-3">
                            Matérias a realizar
                        </h1>
                        <div className="columns-2">
                            {
                                realizar.map((materia) => (
                                    <Materia
                                        name={materia.name}
                                        course={materia.course}
                                        charge={materia.charge}
                                        professor={materia.professor}
                                        status={materia.status}
                                        description={materia.description}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}