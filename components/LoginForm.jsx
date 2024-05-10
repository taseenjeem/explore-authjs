"use client";
import { credentialLogin } from "@/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const navigate = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const response = await credentialLogin(formData);

      if (!!response.error) {
        console.error(response.error);
      } else {
        navigate.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleLogin}
        className="max-w-md w-full mx-auto p-4 rounded shadow-md bg-white"
      >
        <h2 className="text-3xl font-bold text-gray-800">Login</h2>
        <div className="mt-4">
          <label className="block mb-2 text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none"
            placeholder="example@example.com"
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Password"
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="w-full p-2 bg-indigo-500 text-white font-bold rounded hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>
        </div>
        <div className="mt-4 text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="#" className="text-indigo-500 hover:text-indigo-800">
            Sign up
          </Link>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
