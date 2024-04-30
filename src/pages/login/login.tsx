import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <Link to="/">
        <h1 className="mt-11 text-white mb-7 font-bold text-5xl">
          Link
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Tree
          </span>
        </h1>
      </Link>
    </div>
  );
}
