import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-slate-300 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">REAL INDIA</span>
            <span className="text-slate-800">ESTATE</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            className="bg-transparent focus:outline-none w24 sm:w-64"
            type="text"
            placeholder="Search..."
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-4 text-slate-700">
          <Link to={"/"}>
            <li className="hidden sm:inline hover:underline">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline hover:underline">About</li>
          </Link>

          <Link to={"/sign-in"}>
            <li className="hover:underline">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
