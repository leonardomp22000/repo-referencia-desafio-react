import AsideL from "./Asidel";
import AsideR from "./Asider";
import LoginButton from "../LoginButton";
import { getPosts } from "@/lib/api";
import Post from "./PostPreview";
import { useEffect, useState, useCallback } from "react";

export default function Hero({ initialPosts = [] }) {
    const [posts, setPosts] = useState(initialPosts);
    const [loading, setLoading] = useState(!initialPosts.length);

    const fetchPosts = useCallback(async () => {
        try {
            setLoading(true);
            const newPosts = await getPosts();
            setPosts(newPosts);
        } catch (error) {
            console.error("Error fetching posts:", error);
            // Additional error handling can be added here
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (!initialPosts.length) {
            fetchPosts();
        }
    }, [fetchPosts, initialPosts]);

    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-[240px_1fr] lg:grid-cols-[240px_1fr_360px] sm:max-w-[1345px] gap-2 mt-5">
            <AsideL />
            <section className="grid-col-start-1 grid-col-end-2 sm:grid-col-start-2 sm:grid-col-end-3">
                <header className="flex w-full">
                    <LoginButton 
                        className="font-bold text-xl text-gray-800"
                        text="Relevant"
                    />
                    <LoginButton 
                        className="text-lg"
                        text="Latest"
                    />
                    <LoginButton 
                        className="text-lg"
                        text="Top"
                    />
                </header>
                <div className="flex flex-col gap-5">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        posts.map((post, index) => (
                            <Post
                                key={`post-${index}`} 
                                title={post.title}
                                user={post.user}
                                hashtags={post.hashtags}
                                createdAt={post.created_at}  // This matches the database field name
                                id={post._id}
                            />
                        ))
                    )}
                </div>
            </section>
            <AsideR />
        </div>
    );
}
