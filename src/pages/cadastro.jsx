import Head from "next/head"

import Header from "@/components/header"
import SlideBar from "@/components/slidebar"

export default function Cadastro() {
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
                <h1 className="mt-10 ml-28 text-4xl font-bold text-[#88185D]">
                    Dados Cadastrais
                </h1>
            </div>
        </>
    )
}