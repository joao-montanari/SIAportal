import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import Header from '@/components/header'
import SlideBar from '@/components/slidebar'
import ChartPie from '@/components/graphics/chartpie'
import ChartBar from '@/components/graphics/chartbar'
import ChartLine from '@/components/graphics/charline'

export default function Home() {
  return (
    <>
      <Head>
        <title>SIA Portal | Unimetrocamp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <main>
        <Header/>
        <div className='flex'>
          <div className='top-0 left-0 fixed z-10'>
              <SlideBar/>
          </div>
          <div className="ml-28 w-full pr-6">
            <h1 className="mt-6 text-4xl font-bold text-[#88185D]">
                Home
            </h1>
            <div className="rounded-lg">
              <div className="flex mt-6 w-full h-44 rounded-lg bg-gradient-to-r from-[#88185D] via-[#bf18b1] to-[#f12fa7] opacity-90">
                <div className='border-r-4 border-white h-full w-1/4 flex justify-center items-center text-center'>
                  <h1 className='font-bold text-white text-3xl'>
                    +60 cursos
                  </h1>
                </div>
                <div className='border-r-4 border-white h-full w-1/4 flex justify-center items-center text-center'>
                  <h1 className='font-bold text-white text-3xl'>
                    +2.000 alunos
                  </h1>
                </div>
                <div className='border-r-4 border-white h-full w-1/4 flex justify-center items-center text-center'>
                  <h1 className='font-bold text-white text-3xl'>
                    +40 unidades
                  </h1>
                </div>
                <div className='h-full w-1/4 flex justify-center items-center text-center'>
                  <h1 className='font-bold text-white text-3xl'>
                    +100 profissionais
                  </h1>
                </div>
              </div>
            </div>

            <div className='mt-10 flex justify-between'>
              <div className='w-80 h-72 border border-gray-400 p-4 shadow-lg rounded-lg text-center'>
                <h1 className='mb-2'>
                  Cursos por categoria na Unimetrocamp
                </h1>
                <div className='h-56 flex justify-center items-center'>
                  <ChartPie/>
                </div>
              </div>
              <div className='w-80 border border-gray-400 p-4 shadow-lg rounded-lg text-center'>
                <h1 className='mb-2'>
                  Cursos por instituição Wyden
                </h1>
                <div className='h-56 flex justify-center items-center'>
                  <ChartBar/>
                </div>
              </div>
              <div className='w-80 border border-gray-400 p-4 shadow-lg rounded-lg text-center'>
                <h1 className='mb-2'>
                  Alunos na Unimetrocamp
                </h1>
                <div className='h-56 flex justify-center items-center'>
                  <ChartLine/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
