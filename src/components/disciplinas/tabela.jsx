

export default function Tabela() {
    return (
       <div className="max-w-5xl mt-8 m-auto">
            <h2 className="text-2xl text-[#b52c80] font-bold">
                Quadro horário:
            </h2>
            <div className="border-2 border-gray-400 mt-5 w-full h-96 rounded-lg">
                <ul className="border-b border-gray-400 w-full h-16 flex">
                    <li className="border-r border-gray-400 w-40 text-center py-4 font-bold text-gray-500 text-lg">
                        Horários
                    </li>
                    <li className="border-r border-gray-400 w-40 text-center py-4 font-bold text-gray-500 text-lg">
                        Segunda
                    </li>
                    <li className="border-r border-gray-400 w-40 text-center py-4 font-bold text-gray-500 text-lg">
                        Terça
                    </li>
                    <li className="border-r border-gray-400 w-40 text-center py-4 font-bold text-gray-500 text-lg">
                        Quarta
                    </li>
                    <li className="border-r border-gray-400 w-40 text-center py-4 font-bold text-gray-500 text-lg">
                        Quinta
                    </li>
                    <li className="border-r border-gray-400 w-40 text-center py-4 font-bold text-gray-500 text-lg">
                        Sexta
                    </li>
                    <li className="w-40 text-center py-4 font-bold text-gray-500 text-lg">
                        Sábado
                    </li>
                </ul>
                <div className="w-full h-80 flex">
                    <ul className="border-r border-gray-400 w-36 text-center py-4 font-bold text-gray-500 text-lg">
                        <li className="h-12 w-full text-center border-b border-gray-500">

                        </li>
                    </ul>
                </div>
            </div>
       </div>
    )
}