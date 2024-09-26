import Hashtag from "../Hashtags";
import MainButton from "../MainButton";

export default function AsideR({user}){
    return (
        <aside className="md:grid-col-start-3 md:grid-col-end-4 hidden lg:flex flex-col gap-6 max-w-[360px]">
            <article className="w-full rounded-md flex flex-col justify-between bg-white p-4 gap-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 z-0 bg-pink-500 w-full h-7"></div>
                <div className="z-10 flex items-cente gap-4">
                    <img src="/github.svg" alt="profilePic"  className="w-9"/>
                    <span className="pt-4 font-bold text-xl text-gray-700">{user.username}</span>
                </div>
                <button className="w-full h-10 bg-blueb rounded-md font-bold text-gray-100">Follow</button>
                <p className="text-gray-500 text-md">Accessibility First DevRel. I focus on ensuring content created, events held and company assets are as accessible as possible, for as many people as possible.</p>
                <div className="flex flex-col ">
                    <span className="font-semibold text-gray-700">Location</span>
                    <span className="text-gray-900">United Kingdown</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold text-gray-700">Work</span>
                    <span className="text-gray-900">DevRel - open to opportunities</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold text-gray-700">Joined</span>
                    <time className="text-gray-900" datetime="">June 2, 2021</time>
                </div>
            </article>

            <article className="w-full rounded-md flex flex-col justify-between bg-white relative overflow-hidden">
                <div className="border-b w-full p-4 ">
                    <h2 className="font-bold text-xl">More from <span className="text-blueb">GrahamTheDev</span></h2>
                </div>
                <div className="p-4 hover:text-blueb">
                    <a href="">
                        Video encoded as emojis!? Stored in a DB? 🤓
                    </a>
                    <Hashtag className="text-gray-400 text-sm"/>
                </div>
            </article>

            <article>
                <div className="flex flex-col gap-4 p-3 bg-white rounded-md shadow-sm border border-gray-100">
                    <span className="text-gray-500 text-sm">DEV Community</span>
                    <h2 className="font-bold text-xl">DEV Community is a community of 1,679,481 amazing developers</h2>
                    <p className="text-gray-600">We are a place where coders share, stay up-to-date and grow their careers.</p>
                    <img src="https://picsum.photos/200/300" alt="loremPicsum" className="object-cover aspect-square rounded" />
                    <MainButton className="w-full"
                        text="Learn more here"
                    />
                </div>
            </article>
        </aside>
    )
}