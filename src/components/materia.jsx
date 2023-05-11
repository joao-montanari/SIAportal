import Image from "next/image"
import RandomColor from '../logic/randomcolor';

export default function Materia({ name, course, description, charge, professor, status }) {
    const colors = RandomColor();
    console.log(colors);

    return (
        // <div className={`mb-8 relative w-[500px] h-56 rounded-lg p-3 max-w-7xl bg-gradient-to-r from-${colors.finish} via-${colors.middle} to-${colors.start}`}>
        <div className={`mb-8 relative w-[500px] h-56 rounded-lg p-3 max-w-7xl bg-gradient-to-r ${(status === 'cursando') ? 'from-[#88185D] via-purple-500 to-pink-500' : (status === 'realizar') ? 'bg-gradient-to-r from-blue-500 to-cyan-500': 'bg-gradient-to-r from-green-600 to-green-300'}`}>
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
                src={`${(status === 'cursando') ? '/images/cursando.png' : (status === 'realizar') ? '/images/realizar.png' : '/images/realizado.png'}`}
                width={150}
                height={100}
                alt="Journal"
                className="absolute top-0 right-0 mr-8 mt-8"
            />
        </div>
    )
}