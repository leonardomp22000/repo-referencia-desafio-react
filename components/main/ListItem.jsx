

 export default function ListItem({info, icon}) {
    return (
        <a href="" className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline">
            <span className="text-xl">{icon}</span>
            {info}
        </a>
    )
}