import Head from "next/head"

import Header from "@/components/header"
import SlideBar from "@/components/slidebar"

export default function Atendimento() {
    return (
        <>
            <Head>
                <title>Atendimento</title>
                <link rel="icon" href="/images/logo.png" />
            </Head>
            <Header/>
            <div className="flex">
                <div className='top-0 left-0 fixed z-10'>
                    <SlideBar/>
                </div>
                <h1 className="mt-10 ml-28 text-4xl font-bold text-[#88185D]">
                    Atendimento
                </h1>
            </div>
        </>
    )
}