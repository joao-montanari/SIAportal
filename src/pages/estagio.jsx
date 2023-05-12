import Head from "next/head"

import Header from "@/components/header"
import SlideBar from "@/components/slidebar"

export default function Estagio() {
    return (
        <>
            <Head>
                <title>Estágio</title>
                <link rel="icon" href="/images/logo.png" />
            </Head>
            <Header/>
            <div className="flex">
                <div className='top-0 left-0 fixed'>
                    <SlideBar/>
                </div>
                <div className="relative ml-28 w-full">
                    <h1 className="mt-10 text-4xl font-bold text-[#88185D]">
                        Oportunidades de Estágio
                    </h1>
                    <p className="mt-4 text-lg text-gray-500">
                        Nesta página é possível encontrar oportunidades de empregos postadas pelos usuários da plataforma. Você tambêm pode divulgar uma oportunidade de estágio!
                    </p>
                </div>
            </div>
        </>
    )
}