import Hashtag from "../Hashtags";
import { useRouter } from 'next/router';

export default function Post({ id, title, user, hashtags = [], createdAt }) {
    const router = useRouter();
    const createdDate = new Date(createdAt);
    const formattedDateTime = `${createdDate.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' })} ${createdDate.toLocaleTimeString('en-US')}`;

    const handlePostClick = () => {
        router.push(`/${id}`);
    }

    return (
        <div className="w-full">
            <article 
                onClick={handlePostClick} 
                className="flex w-full bg-white rounded-md shadow-sm justify-center p-5 gap-3 cursor-pointer" 
                role="button"
            >
                <div className="w-10">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center bg-blueb">
                        <img src="/apple.svg" alt="profilePic" className="w-5" />
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex flex-col items-start">
                        {user && user.username ? (
                            <button className="text-md text-gray-700 font-semibold">
                                {user.username}
                            </button>
                        ) : (
                            <span className="text-md text-gray-700 font-semibold">
                                Unknown User
                            </span>
                        )}
                        <time className="text-sm text-gray-500">
                            {formattedDateTime}
                        </time>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold">{title}</span>
                        {hashtags.length > 0 && (
                            <div className="flex flex-wrap">
                                {hashtags.map((hashtagObj, index) => (
                                    <Hashtag
                                        key={`hashtag-${index}`}
                                        title={hashtagObj.hashtag}
                                    />
                                ))}
                            </div>
                        )}
                        <div className="flex justify-between items-center">
                            <div className="flex gap-5 items-center">
                                <span>81 reactions</span>
                                <span>81 comments</span>
                            </div>
                            <div className="flex gap-5 items-center">
                                <span>13 min read</span>
                                <div className="hover:bg-[#caceff] w-10 h-10 flex justify-center items-center rounded-md cursor-pointer">
                                    <img
                                        src="/save.svg"
                                        alt="saveIcon"
                                        className="w-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
