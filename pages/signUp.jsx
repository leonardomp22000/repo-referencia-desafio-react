import SignLogin from "@/components/registerLogin/SocialRegister"
import { useIsLogged } from "@/hooks/isLogged"
import Link from "next/link"
import { useRouter } from "next/router"


export default function Register(){
    const router = useRouter()

    useIsLogged('/')

    return (
        <main className="w-full h-full min-h-screen flex justify-center start py-12">
            <section className="w-full h-full max-w-[545px] flex flex-col gap-5">
                <header className="flex flex-col h-full items-center gap-5">
                    <img src="/devLogo.webp" alt="" className="w-16 cursor-pointer" onClick={() => router.push('/')}/>
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="font-bold text-3xl">Join the DEV Community</h1>
                        <p>DEV Community is a community of 1,679,481 amazing developers</p>
                    </div>    
                </header>
                <div className="flex flex-col w-full gap-4">
                    <SignLogin
                        icon="./apple.svg"
                        social="Apple"
                        signin={true}
                    />
                    <SignLogin
                        icon="./facebook.svg"
                        social="Facebook"
                        signin={true}
                    />
                    <SignLogin
                        icon="./github.svg"
                        social="github"
                        signin={true}
                    />
                    <SignLogin
                        icon="./google.svg"
                        social="Google"
                        signin={true}
                    />
                    <SignLogin
                        icon="./twitter.svg"
                        social="Twitter (X)"
                        signin={true}
                    />
                    <SignLogin
                        icon="./email.svg"
                        social="Email"
                        signin={true}
                        route="/register"
                    />
                </div>
                <p className="text-sm text-gray-600 font-light italic text-center border-b pb-5 border-gray-300 px-10">By signing up, you are agreeing to our <span className="text-blueb cursor-pointer">privacy policy</span>, <span className="text-blueb cursor-pointer">terms of use</span> and <span className="text-blueb cursor-pointer">code of conduct</span> .</p>
                <div>
                    <p className="text-center text-lg">Already have an account? <Link href="/login" className="text-blueb">Log in</Link></p>
                </div>
            </section>
        </main>
    )
}

