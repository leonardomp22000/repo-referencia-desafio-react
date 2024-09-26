import MainButton from "../MainButton"
import LoginButton from "../LoginButton"
import ListItem from "./ListItem"
import clsx from "clsx"
import { useState,useEffect } from "react"
import { useIsLogged } from "@/hooks/isLogged"

export default function AsideL() {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        isLoggedIn();
    }, [isLoggedIn]);

    function isLoggedIn() {
        const token = localStorage.getItem('token');
        setIsLogged(!!token); // Simplified the logic
    }


    return (
        <aside className="flex-col grid-col-start-1 grid-col-end-2 gap-3 hidden sm:flex">

            <div className={clsx("flex flex-col gap-4 p-3 bg-white rounded-md shadow-sm border border-gray-100", {
                "hidden": isLogged
            })}>
                <h2 className="font-bold text-xl">DEV Community is a community of 1,679,481 amazing developers</h2>
                <p className="text-gray-600">We are a place where coders share, stay up-to-date and grow their careers.</p>
                <MainButton className="w-full" route="/signUp"/>
                <LoginButton className="w-full text-gray-500" route="/login" text="Log in"/>
            </div>
        
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <ListItem 
                        icon="🏠"
                        info="Home"
                    />
                    <ListItem 
                        icon="🎙️"
                        info="Podcasts"
                    />
                    <ListItem 
                        icon="📽️"
                        info="Videos"
                    />
                    <ListItem 
                        icon="🏷️"
                        info="Tags"
                    />
                    <ListItem 
                        icon="💡"
                        info="DEV Help"
                    />
                    <ListItem 
                        icon="🛍️"
                        info="Forem Shop"
                    />
                    <ListItem 
                        icon="💖"
                        info="Advertise on DEV"
                    />
                    <ListItem 
                        icon="🏆"
                        info="DEV Challenges"
                    />
                    <ListItem 
                        icon="✨"
                        info="DEV Showcase"
                    />
                    <ListItem 
                        icon="📖"
                        info="About"
                    />
                    <ListItem 
                        icon="🎺"
                        info="Contact"
                    />
                    <ListItem 
                        icon="📚"
                        info="Guides"
                    />
                    <ListItem 
                        icon="🤔"
                        info="Software comparisons"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <h2 className="px-2 font-bold">Other</h2>
                    <ListItem 
                        icon="👍"
                        info="Code of Conduct"
                    />
                    <ListItem 
                        icon="🤓"
                        info="Privacy Policy"
                    />
                    <ListItem 
                        icon="👀"
                        info="Terms of use"
                    />
                </div>

                <div className="flex w-full justify-between px-2">
                    <div><img src="/twitter.svg" alt="" className="w-5"/></div>
                    <div><img src="/facebook.svg" alt="" className="w-5"/></div>
                    <div><img src="/github.svg" alt="" className="w-5"/></div>
                    <div><img src="/instagram.svg" alt="" className="w-5"/></div>
                    <div><img src="/twitch.svg" alt="" className="w-5"/></div>
                </div>
            </div>
        
            <div>
                <h2 className="font-bold">Popular Tags</h2>
                <ul className="w-full h-96 overflow-y-auto ">
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#news</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#html</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#datascience</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#database</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#frontend</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#dohoesign</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#php</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#nextjs</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#api</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#development</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#webdev</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#javascript</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#beginners</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#programming</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#tutorial</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#react</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#ai</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#python</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#devops</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#productivity</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#opernsource</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#node</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#aws</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#learning</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#career</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#css</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#java</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#typescipt</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#machinelearning</li>
                    <li className=" flex items-center text-md gap-2 w-full rounded px-2 py-1 text-gray-600 hover:bg-[#caceff] hover:text-blueb hover:underline cursor-pointer">#discuss</li>
                </ul>
            </div>

            <div className="flex flex-col gap-4 p-3 bg-white rounded-md shadow-sm border border-gray-100">
                <span className="text-gray-500 text-sm">DEV Community</span>
                <h2 className="font-bold text-xl">DEV Community is a community of 1,679,481 amazing developers</h2>
                <p className="text-gray-600">We are a place where coders share, stay up-to-date and grow their careers.</p>
                <img src="https://picsum.photos/200/300" alt="loremPicsum" className="object-cover aspect-square rounded" />
                <MainButton className="w-full"/>
            </div>

            <div className="flex flex-col gap-5">
                <p className="text-sm text-gray-500"><span className="text-blueb hover:underline cursor-pointer">DEV Community</span> A constructive and inclusive social network for software developers. With you every step of your journey.</p>
                <p className="text-sm text-gray-500">Built on <span className="text-blueb hover:underline cursor-pointer">Forem</span> — the open source software that powers DEV and other inclusive communities.</p>
                <p className="text-sm text-gray-500">Made with love and <span className="text-blueb hover:underline cursor-pointer">Ruby on Rails.</span> DEV Community © 2016 - 2024.</p>
            </div>
        </aside>
    )
}