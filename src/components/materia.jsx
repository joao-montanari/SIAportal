import Image from "next/image"
import RandomColor from '../logic/randomcolor';

export default function Materia({ name, course, description, charge, professor, status }) {
    let gradient = RandomColor();
    let randomImage = Math.floor(Math.random() * (10 - 1) + 1);

    return (
        <div 
            style={{ background: `${gradient}` }}
            className='mb-8 relative w-[500px] h-56 rounded-lg p-3 max-w-7xl'
        >
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
                src={`/images/materias/${randomImage}.png`}
                width={150}
                height={100}
                alt="Journal"
                className="absolute top-0 right-0 mr-8 mt-10 max-h-40"
            />
        </div>
    )
}