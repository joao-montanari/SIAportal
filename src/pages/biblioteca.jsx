import Head from "next/head"

import Header from "@/components/header"
import SlideBar from "@/components/slidebar"

export default function Biblioteca() {
    return (
        <>
        <Head>
            <title>Biblioteca Virtual</title>
            <link rel="icon" href="/images/logo.png" />
        </Head>
        <Header/>
        <div className="flex">
            <div className="fixed top-20 left-0">
                <SlideBar/>
            </div>
            <h1 className="mt-10 ml-28 text-4xl font-bold text-[#88185D]">
                Biblioteca Virtual
            </h1>
        </div>
        </>
    )
}