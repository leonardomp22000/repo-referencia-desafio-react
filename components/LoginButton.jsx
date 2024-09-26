import { useRouter } from "next/router";

export default function LoginButton({ className, route, text, onClick }) {
    const router = useRouter();

    function handleClick() {
        if (onClick) {
            onClick(); // Call the logout function if provided
        }
        router.push(route);
    }

    return (
        <button onClick={handleClick} className={`text-[#7c7c7c] hover:text-blueb hover:bg-[#caceff] hover:underline px-4 py-2 ${className} rounded-md`}>
            {text}
        </button>
    );
}
