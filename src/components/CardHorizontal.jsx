export function CardHorizontal({ title, img, description, color }) {
    return (
        <div className="bg-[#1a1a1a] hover:bg-[#262626] hover:border-stone-600 hover:border border border-transparent transition-colors duration-300 w-full items-center rounded-lg flex px-4 py-3 gap-3">
        <div className={`p-1.5 w-16 h-16 ${color} rounded-lg flex items-center justify-center overflow-hidden`}>
            <img className="w-full h-full object-cover rounded-lg my-auto" src={img} alt={`${title} technology icon.`} />
        </div>
        <div className="flex flex-col w-[50%]">
            <p className="font-semibold text-lg">{title}</p>
            <p>{description}</p>
        </div>
    </div>
    
    )
}