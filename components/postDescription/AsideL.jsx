

export default function AsideL(){
    return (
        
            <aside className="flex-col grid-col-start-1 grid-col-end-2 gap-8 hidden sm:flex pt-32">

                <div className="flex flex-col items-center justify-center gap-2 hover:bg-[#caceff] hover:underline rounded md cursor-pointer">
                    <img src="/hearth.svg" alt="reactions" className="w-6"/>
                    <span className="text-sm">30</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-2 hover:bg-[#caceff] hover:underline rounded md cursor-pointer">
                    <img src="/comment.svg" alt="reactions" className="w-6"/>
                    <span className="text-sm">30</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-2 hover:bg-[#caceff] hover:underline rounded md cursor-pointer">
                    <img src="/save.svg" alt="reactions" className="w-6"/>
                    <span className="text-sm">30</span>
                </div>

            </aside>
       
    )
}