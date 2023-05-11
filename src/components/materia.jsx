import Image from "next/image"

export default function Materia({ name, course, description, charge, professor }) {
    return (
        <div className="relative w-[95%] h-56 bg-gradient-to-r from-[#88185D] via-purple-500 to-pink-500 rounded-lg p-3 max-w-5xl">
            <h1 className="font-semibold text-white text-2xl">
                {name}
            </h1>
            <ul className="text-white ml-8 list-disc text-sm">
                <li className="my-2">
                    <strong>Curso:</strong> {course}
                </li>
                <li className="my-2">
                    <strong>Carga horária:</strong> {charge}
                </li>
                <li className="my-2">
                    <strong>Professor responsável:</strong> {professor}
                </li>
                <li className="my-1 w-[50%] text-justify">
                    <strong>Descrição:</strong> {description}
                </li>
            </ul>
            <Image
                src={'/images/journal.png'}
                width={150}
                height={100}
                alt="Journal"
                className="absolute top-0 right-0 mr-8 mt-8"
            />
        </div>
    )
}