import Link from "next/link";
import SignLogin from "@/components/registerLogin/SocialRegister";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { login } from "@/lib/api";
import { useIsLogged } from "@/hooks/isLogged"

export default function Login() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();

    useIsLogged('/')

    async function onSubmit(data) {
        try {
            const token = await login(data.email, data.password);

            localStorage.setItem('token', token);
            router.push("/");

        } catch (error) {
            alert('Incorrect Email or Password');
        }
    }

    return (
        <main className="w-full h-full min-h-screen flex justify-center start py-10">
            <section className="w-full h-full max-w-[545px] flex flex-col gap-5">
                <header className="flex flex-col h-full items-center gap-5">
                    <img src="/devLogo.webp" alt="DevTo Logo" className="w-16 cursor-pointer" onClick={() => router.push('/')} />

                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="font-bold text-3xl">Join the DEV Community</h1>
                        <p>DEV Community is a community of 1,679,481 amazing developers</p>
                    </div>
                </header>
                <div className="flex flex-col w-full gap-4">
                    {/* Social login options */}
                    <SignLogin icon="./apple.svg" social="Apple" signin={false} />
                    <SignLogin icon="./facebook.svg" social="Facebook" signin={false} />
                    <SignLogin icon="./github.svg" social="GitHub" signin={false} />
                    <SignLogin icon="./google.svg" social="Google" signin={false} />
                    <SignLogin icon="./twitter.svg" social="Twitter (X)" signin={false} />
                </div>
                <div className="flex items-center">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-gray-500">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col gap-4">
                    {/* Email input */}
                    <label htmlFor="email" className="flex flex-col gap-2 font-semibold text-lg">
                        Email
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email address"
                                }
                            })}
                            type="email"
                            className="h-9 rounded-md border border-gray-400 text-gray-900 pl-4"
                            placeholder="Enter your email"
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </label>
                    {/* Password input */}
                    <label htmlFor="password" className="flex flex-col gap-2 font-semibold text-lg">
                        Password
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                }
                            })}
                            type="password"
                            className="h-9 rounded-md border border-gray-400 text-gray-900 pl-4"
                            placeholder="Enter your password"
                        />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                    </label>
                    {/* Remember me checkbox and forgot password link */}
                    <div className="flex justify-between">
                        <label htmlFor="checkbox" className="flex gap-2">
                            <input type="checkbox" className="w-5 h-5" />
                            Remember me
                        </label>
                        <a href="" className="text-blueb">Forgot Password?</a>
                    </div>
                    {/* Login button */}
                    <button type="submit" className="bg-blueb text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-700 transition-colors">
                        Log In
                    </button>
                </form>
                {/* Legal disclaimer */}
                <p className="text-sm text-gray-600 font-light italic text-center border-b pb-5 border-gray-300 px-10">
                    By signing up, you are agreeing to our <span className="text-blueb cursor-pointer">privacy policy</span>, <span className="text-blueb cursor-pointer">terms of use</span> and <span className="text-blueb cursor-pointer">code of conduct</span> .
                </p>
                {/* Sign up link */}
                <div>
                    <p className="text-center text-lg">
                        New to DEV Community? <Link href="/signUp" className="text-blueb">Create Account</Link>
                    </p>
                </div>
            </section>
        </main>
    );
}
