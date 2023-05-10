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
                    <Materia/>
                </div>
            </div>
        </>
    )
}