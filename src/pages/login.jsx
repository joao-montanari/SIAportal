import Head from "next/head"

import CardLogin from "@/components/cardlogin"

export default function Login() {
    return (
        <>
            <Head>
                <title>Unimetrocamp Login</title>
                <link rel="icon" href="/images/logo.png" />
            </Head>
            <main className="flex w-screen h-screen justify-center items-center bg-gradient-to-r from-[#88185D] via-[#ff2aad] to-[#fc009b]">
                <CardLogin/>
            </main>
        </>
    )
}