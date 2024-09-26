import { useState } from "react";
import Hashtag from "../Hashtags";

export default function Post({title, hashtags, body, created_at}) {
    const [formattedDate, setFormattedDate] = useState(() => {
        const date = new Date(created_at);
        if (!isNaN(date.getTime())) {
            return formatDate(date);
        } else {
            return 'Fecha inválida';
        }
    });

    function formatDate(date) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    }

    return (
        <section className="w-full grid-col-start-1 grid-col-end-2 sm:grid-col-start-2 sm:grid-col-end-3 overflow-hidden rounded-md">
            <header className="flex w-full">
                <img src="https://picsum.photos/1200/600" alt="" className="object-cover w-full" />
            </header>
            <article className="flex flex-col w-full bg-white rounded justify-center py-5 px-10 gap-3">
                <div className="w-10">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center bg-blueb">
                        <img src="/apple.svg" alt="profilePic" className="w-5" />
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex flex-col items-start">
                        <button className="text-md text-gray-700 font-semibold"></button>
                        <time className="text-sm text-gray-500">{formattedDate}</time>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold">{title}</span>
                        
                        <div className="hashtags">
                            {hashtags.map((hashtag, index) => (
                                <Hashtag key={`hash-${index}`} title={hashtag.hashtag} />
                            ))}
                        </div>
                        
                    </div>
                </div>
                <div className="flex flex-col gap-4 text-lg text-gray-800">
                    <p>{body}</p>
                </div>
            </article>
        </section>
    );
}