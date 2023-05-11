import Head from "next/head"

import Header from "@/components/header"
import SlideBar from "@/components/slidebar"
import Materia from "@/components/materia"

export default function Disciplinas() {
    return (
        <>
            <Head>
                <title>Disciplinas</title>
                <link rel="icon" href="/images/logo.png" />
            </Head>
            <Header/>
            <div className="flex">
                <div className='top-20 left-0 fixed'>
                    <SlideBar/>
                </div>
                <div className="ml-28 w-full">
                    <h1 className="mt-10 text-4xl font-bold text-[#88185D]">
                        Disciplinas matriculadas
                    </h1>
                    <div className="">
                        <h1 className="font-semibold text-gray-500 text-2xl my-4">
                            Matérias em curso
                        </h1>
                        <Materia
                            name={'Desenvolvimento rápido em Python'}
                            course={'Ciência da Computação'}
                            charge={'40 horas'}
                            professor={'Kessede'}
                            description={'A matéria tem o objetivo de desenvolver habilidades referentes a linguagem de programação Python por meio de projetos acadêmicos de escolha do aluno.'}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}