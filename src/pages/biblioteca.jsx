import Head from "next/head"

import Header from "@/components/header"
import SlideBar from "@/components/slidebar"
import CardBook from "@/components/cardbook"

export default function Biblioteca() {
    const books = [
        {
            name : 'A Névoa da Floresta',
            category : 'mistério',
            image : '/images/books/1.png',
            description : 'Descrição de um livro genêrico para poder servir de exemplo na construção do componente CardBook, assim tendo noção de dimensões.'
        },
        {
            name : 'Sussuros na Floresta',
            category : 'aventura',
            image : '/images/books/2.png',
            description : 'Descrição de um livro genêrico para poder servir de exemplo na construção do componente CardBook, assim tendo noção de dimensões.'
        },
        {
            name : 'Design de Capa',
            category : 'design',
            image : '/images/books/3.png',
            description : 'Descrição de um livro genêrico para poder servir de exemplo na construção do componente CardBook, assim tendo noção de dimensões.'
        },
        {
            name : 'A Menina que Roubava Livros',
            category : 'história',
            image : '/images/books/4.png',
            description : 'Descrição de um livro genêrico para poder servir de exemplo na construção do componente CardBook, assim tendo noção de dimensões.'
        },
        {
            name : 'Mestre do Tempo',
            category : 'realismo',
            image : '/images/books/5.png',
            description : 'Descrição de um livro genêrico para poder servir de exemplo na construção do componente CardBook, assim tendo noção de dimensões.'
        },
        {
            name : 'Fora de Circuito',
            category : 'indefinido',
            image : '/images/books/6.png',
            description : 'Descrição de um livro genêrico para poder servir de exemplo na construção do componente CardBook, assim tendo noção de dimensões.'
        },
        {
            name : 'Through the Breaking',
            category : 'amor',
            image : '/images/books/7.png',
            description : 'Descrição de um livro genêrico para poder servir de exemplo na construção do componente CardBook, assim tendo noção de dimensões.'
        },
        {
            name : 'O Menino do Dedo Verde',
            category : 'fantasia',
            image : '/images/books/8.png',
            description : 'Descrição de um livro genêrico para poder servir de exemplo na construção do componente CardBook, assim tendo noção de dimensões.'
        },
    ]

    return (
        <>
            <Head>
                <title>Biblioteca Virtual</title>
                <link rel="icon" href="/images/logo.png" />
            </Head>
            <Header/>
            <div className="flex">
                <div className='top-0 left-0 fixed z-10'>
                    <SlideBar/>
                </div>
                <div className="relative ml-28 w-full">
                    <h1 className="mt-10 text-4xl font-bold text-[#88185D]">
                        Biblioteca Virtual
                    </h1>
                    <div className="grid grid-cols-4 mb-10">
                        {
                            books.map((book) => (
                                <CardBook
                                    name={book.name}
                                    category={book.category}
                                    image={book.image}
                                    description={book.description}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}