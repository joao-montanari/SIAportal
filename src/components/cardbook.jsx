import Image from "next/image"

export default function CardBook({ category, name, description, image }) {
    return (
        <div className="w-56 h-64 text-center mt-28 shadow-2xl rounded-lg">
            <div className="relative border border-gray-300 rounded-t-lg p-2 h-1/2 justify-center items-center">
                <Image
                    src={image}
                    width={100}
                    height={100}
                    className="absolute left-[60px] -top-16 shadow-2xl"
                />
                <h1 className="font-semibold mt-[90px]">
                    {name}
                </h1>
            </div>
            <div className="relative bg-gradient-to-r from-purple-400 to-purple-500 rounded-b-lg p-2 h-1/2">
                <p className="text-xs text-white font-light">
                    {description}
                </p>
                <h1 className="absolute bottom-0 left-0 mb-4 w-auto bg-white pl-1 pr-1 rounded-r-md text-sm">
                    {category}
                </h1>
            </div>
        </div>
    )
}