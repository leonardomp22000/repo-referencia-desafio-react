import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import LoginButton from "@/components/LoginButton";
import clsx from "clsx";
import { createPost } from "@/lib/api";

export default function CreatePost() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [animation, setAnimation] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null); // Estado para almacenar errores generales

    const onSubmit = async (data, event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario

        setIsLoading(true);

        try {
            const hashtagsArray = data.hashtags.split(",").map(tag => ({ hashtag: tag.trim() }));
            const newPost = await createPost(data.title, data.body, hashtagsArray);
            console.log(newPost);
            router.push('/');
        } catch (error) {
            console.error(error);
            setError("Error al publicar el post. Inténtalo de nuevo más tarde."); // Establecer el error general
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="w-full min-h-screen sm:relative py-2 sm:px-10">
            <span className="hidden sm:block sm:absolute right-3 top-2 text-2xl cursor-pointer hover:bg-gray-700 hover:text-white rounded aspect-square h-10 text-center" onClick={() => router.push('/')}>x</span>
            <section className="w-full h-full flex justify-center">
                <div className="min-w-16 justify-start hidden sm:flex">
                    <img src="/devLogo.webp" alt="" className="w-12 h-10 cursor-pointer" onClick={() => router.push('/')}/>
                </div>
                <div className="w-full sm:max-w-[870px] flex flex-col">
                    <nav className="w-full flex justify-between items-center">
                        <h3 className="font-semibold text-lg">Create Post</h3>
                        <div className="flex items-center">
                            <LoginButton text="Edit" className="font-bold text-md text-gray-800"/>
                            <LoginButton text="Preview" className="text-md text-gray-600"/>
                        </div>
                    </nav>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                        {/* Mensaje de error general */}
                        {error && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
                            <p>{error}</p>
                        </div>}
                        <div className="flex flex-col w-full bg-white justify-center min-h-[200px] p-10">
                            <label htmlFor="postTitle">
                                <textarea
                                    {...register("title", { required: "Title is required", minLength: 1, maxLength: 20 })}
                                    name="title" 
                                    className="text-5xl text-gray-900 font-bold px-4" 
                                    placeholder="New post title here" 
                                    onClick={() => setAnimation('postTitle')}
                                />
                                {/* Mensaje de error específico para el título */}
                                {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                            </label>
                            <label htmlFor="hashtags">
                                <input 
                                    {...register("hashtags", { minLength: 1, maxLength: 200 })}
                                    name="hashtags"
                                    type="text"
                                    placeholder="Add hashtags separated by commas"
                                    className="px-4"
                                />
                                {/* Mensaje de error específico para los hashtags */}
                                {errors.hashtags && <p className="text-red-500">{errors.hashtags.message}</p>}
                            </label>
                        </div>
                        <div className="bg-gray-100 h-14 flex items-center text-gray-700 px-10">
                            <p className=""> Aquí se supone que van las configuraciones del texto pero ya no tengo tiempo, tal vez luego lo haga.</p>
                        </div>
                        <div className="h-[520px] w-full bg-white p-10 overflow-hidden">
                            <label htmlFor="postInfo">
                                <textarea 
                                    {...register("body", { required: "Body is required", minLength: 1 })}
                                    name="body" 
                                    placeholder="Write your post content here..." 
                                    className="p-2 h-full w-full" 
                                    onClick={() => setAnimation('postInfo')}
                                />
                                {/* Mensaje de error específico para el cuerpo del post */}
                                {errors.body && <p className="text-red-500">{errors.body.message}</p>}
                            </label>
                        </div>
                        <div className="flex gap-10 items-center py-4">
                            <button type="submit" className="px-4 py-2 bg-blueb rounded-md text-gray-200 font-bold">Publish</button>
                            <LoginButton text="Save Draft" />
                            <span>©️</span>
                            <span>Revert new change</span>
                            {isLoading && <span>Creating Post...</span>}
                        </div>      
                    </form>
                </div>
                <div className="max-w-[400px] w-full relative hidden lg:block" name="titleDescription">
                    <div className={clsx(`w-full absolute top-10 left-6 flex flex-col gap-2`, 
                        {"hidden": animation !== "postTitle"}
                    )}>
                        <h2 className="font-bold">Writing a Great Post Title</h2>
                        <ul className={`pl-5 text-gray-600 flex flex-col gap-2`}>
                            <li className="list-disc">Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.</li>
                            <li className="list-disc">Use keywords where appropriate to help ensure people can find your post by search.</li>
                        </ul>
                    </div>
                    <div className={clsx(`w-full absolute top-80 left-6 flex flex-col gap-2" name="postDescription`,
                        {"hidden": animation !== "postInfo"}
                     )}>
                        <h2 className="font-bold">Editor Basics</h2>
                        <ul className="pl-5 text-gray-600 flex flex-col gap-2">
                            <li className="list-disc">Use Markdown to write and format posts.</li>
                            <li className="list-disc">Embed rich content such as Tweets, YouTube videos, etc. Use the complete URL: % embed https://... %. See a list of supported embeds.</li>
                            <li className="list-disc">In addition to images for the posts content, you can also drag and drop a cover image.</li>
                        </ul>
                    </div>
                    <div name="default" className="w-full absolute bottom-10 left-6 flex flex-col gap-2">
                        <h2 className="font-bold">Publishing Tips</h2>
                        <ul className="pl-5 text-gray-600 flex flex-col gap-2">
                            <li className="list-disc">Ensure your post has a cover image set to make the most of the home feed and social media platforms.</li>
                            <li className="list-disc">Share your post on social media platforms or with your co-workers or local communities.</li>
                            <li className="list-disc">Ask people to leave questions for you in the comments. Its a great way to spark additional discussion describing personally why you wrote it or why people might find it helpful.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
