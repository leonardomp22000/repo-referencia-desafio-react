import { useRouter } from "next/router"


export default function SignLogin({icon, social, signin, route}){
    const router = useRouter()

    return(
        <button className="flex w-full border border-gray-400 h-12 items-center font-semibold px-3 rounded-md hover:bg-gray-200" onClick={() => router.push(route)}>
            <img src={icon} alt=""  className="w-5" />
            {
                signin ? (
                    <span className="text-center w-full">
                        Sign up with {social}
                    </span>
                ): (
                    <span className="text-center w-full">
                        Continue with {social}
                    </span>
                )
            }
        </button>
    )
}