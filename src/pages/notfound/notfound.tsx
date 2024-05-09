import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex w-full min-h-screen justify-center items-center flex-col text-white">
      <h1 className="font-bold text-6xl mb-4">404</h1>
      <h1 className="font-bold text-4xl mb-4">Oops!</h1>
      <p className="text-2xl mb-3">Esta página não pôde ser encontrada 😥</p>
      <Link className="bg-gray-50/20 py-1 px-4 rounded-md" to="/">
        Volte para a página inicial
      </Link>
    </div>
  );
}
