import { useRouter } from "next/router";

export default function MainButton({ className, route, text = "Create Account" }) {
    const router = useRouter();

    function handleRoute() {
        router.push(route);
    }

    return (
        <button onClick={handleRoute} className={`border h-11 border-blueb min-w-36 rounded-md text-blueb ${className} hover:bg-blueb hover:text-white font-semibold text-md`}>
            {text}
        </button>
    );
}
