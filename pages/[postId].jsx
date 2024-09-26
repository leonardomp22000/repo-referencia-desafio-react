import Post from "@/components/postDescription/PostDetailed";
import Navbar from "@/components/navbar/Navbar";
import AsideL from "@/components/postDescription/AsideL";
import AsideR from "@/components/postDescription/AsideR";
import { getPost } from "@/lib/api";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function PostDetails() {
    const router = useRouter();
    const [post, setPost] = useState(null);
    const { postId } = router.query;
    
    useEffect(() => {
        if (postId) {
            getPost(postId)
                .then(data => {
                    setPost(data); // data debe ser el objeto post según la estructura del JSON
                })
                .catch(error => {
                    console.error('Error fetching post:', error);
                });
        }
    }, [postId]);

    // Manejo cuando post es null o undefined
    if (!post) {
        return null; // O puedes mostrar un mensaje de carga mientras se carga el post
    }

    return (
        <main className="flex flex-col items-center min-h-screen w-full">
            <Navbar />
            <section className="w-full grid grid-cols-1 sm:grid-cols-[60px_1fr] lg:grid-cols-[60px_1fr_360px] sm:max-w-[1345px] gap-2 mt-5">
                <AsideL />
                <Post
                    key={`post-${postId}`}
                    title={post.title}
                    body={post.body}
                    hashtags={post.hashtags}
                    created_at={post.created_at}
                    
                />
                <AsideR 
                user={post.user}
                />
            </section>
        </main>
    );
}
