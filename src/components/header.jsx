import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import Usuario from "./usuario"
import Notificacoes from "./notificacoes"

export default function Header() {
    return (
        <>
            <div className="flex items-center h-20 w-full shadow-lg">
                <div className="w-1/2 h-full items-center flex">
                    <Link href={'/'}>
                        <Image
                            src={'/images/logo_unimetrocamp.png'}
                            width={150}
                            height={100}
                            alt='Logo Unimetrocamp'
                            className="ml-28"
                        />
                    </Link>
                </div>
                <div className="w-1/2 h-full items-center">
                    <div className="float-right flex mr-8 mt-2">
                        <Notificacoes/>
                        <div className="flex">
                            <div className="text-gray-500 mr-4">
                                <p>
                                    Olá, <strong>João Vitor</strong>
                                </p>
                                <p>
                                    Matrícula: <strong>202203931415</strong>
                                </p>
                            </div>
                            <Usuario/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
