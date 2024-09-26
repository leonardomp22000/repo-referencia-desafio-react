import Navbar from "@/components/navbar/Navbar";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";
import { create } from "@/lib/api";
import { useIsLogged } from "@/hooks/isLogged"

export default function EmailRegistration() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const password = watch("password");

  useIsLogged('/')

  async function onSubmit(data) {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const newUser = await create(data.username, data.email, data.password);
      console.log(newUser)
      router.push('/login'); 
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="flex flex-col min-h-screen w-full">
      <Navbar />
      <section className="grid place-items-center pt-10">
        <div className="flex max-w-[580px] w-full bg-white rounded-xl shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 px-7 py-10 w-full">
            <span className="font-bold">Create your account</span>
            <label htmlFor="username" className="flex flex-col w-full gap-2 font-semibold">
              Username:
              <input
                {...register("username", { required: "Username is required", minLength: 1, maxLength: 20 })}
                type="text" className="border rounded-md w-full h-10 text-lg pl-1" />
              {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
            </label>
            <label htmlFor="email" className="flex flex-col w-full gap-2 font-semibold">
              Email:
              <input
                {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                type="text" className="border rounded-md w-full h-10 text-lg pl-1" />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </label>
            <label htmlFor="password" className="flex flex-col w-full gap-2 font-semibold">
              Password:
              <input
                {...register("password", { required: "Password is required", minLength: 1, maxLength: 20 })}
                type="password" className="border rounded-md w-full h-10 text-lg pl-1" />
              {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </label>
            <label htmlFor="passwordConfirmation" className="flex flex-col w-full gap-2 font-semibold">
              Password Confirmation:
              <input
                {...register("passwordConfirmation", {
                  validate: value => value === password || "The passwords do not match"
                })}
                type="password" className="border rounded-md w-full h-10 text-lg pl-1" />
              {errors.passwordConfirmation && <span className="text-red-500 text-sm">{errors.passwordConfirmation.message}</span>}
            </label>
            {errorMessage && <span className="text-red-500 text-sm">{errorMessage}</span>}
            <button className="bg-blueb rounded-md text-white font-semibold w-36 py-2">Sign Up</button>
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </form>
        </div>
      </section>
    </main>
  );
}


