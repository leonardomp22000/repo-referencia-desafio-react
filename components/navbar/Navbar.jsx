import MainButton from "../MainButton";
import LoginButton from "../LoginButton";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Navbar() {
    const router = useRouter();
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        isLoggedIn();
    }, []);

    function isLoggedIn() {
        const token = localStorage.getItem('token');
        setIsLogged(!!token); // Simplified the logic
    }

    function logOut() {
        localStorage.removeItem('token'); // Clear the specific token item
        setIsLogged(false); // Update the state
        router.push('/'); // Redirect to the home page
    }

    return (
        <nav className="max-w-full w-full h-14 flex justify-center items-center bg-white px-2 md:px-0">
            <div className="w-full sm:max-w-[1345px] h-full flex justify-between items-center">
                <div className="flex items-center w-full max-w-[680px] h-full gap-4">
                    <img src="/hamburger-icon.svg" alt="hamburger-icon" className="w-9 cursor-pointer sm:hidden" />
                    <img src="/devLogo.webp" alt="Dev Logo" className="h-9 w-11 cursor-pointer" onClick={() => router.push("/")}/>
                    <div className="w-full relative hidden sm:block">
                        <img src="/magnifying-glass.svg" alt="" className="w-6 absolute top-2 left-2"/>
                        <input type="search" className="border border-gray-300 hover:border-gray-500 focus:border-none transition delay-50 w-full h-10 rounded-md pl-10 text-black placeholder:text-gray-500 focus:outline-buttonb" placeholder="Search..."/>
                    </div>
                </div>
                <div className="flex gap-5 h-full items-center justify-end w-full sm:min-w-64">
                    {isLogged ? (
                        <>

                            <LoginButton 
                                onClick={logOut}
                                route="/"
                                text="Log Out"
                            />
                            <MainButton
                                route="/newpost"
                                text="Create Post"
                            />
                        </>
                    ) : (
                        <>
                            <LoginButton 
                                route="/login"
                                text="Log in"
                            />
                            <MainButton 
                                route="/signUp"
                            />
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
