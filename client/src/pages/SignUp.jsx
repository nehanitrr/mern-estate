import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold my-7 text-center text-gray-600">
        Sign Up
      </h1>
      <form className="flex flex-col gap-4">
        <input
          id="uname"
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
        />
        <input
          id="email"
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
        />
        <input
          id="password"
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
        />
        <button
          className="text-white bg-gray-600 uppercase p-3 rounded-lg mt-2 hover:opacity-95 disabled:opacity-75"
        >
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-2">
        <p>Have an account?</p>
        <Link to="/sign-in" className="text-blue-700 hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
}
