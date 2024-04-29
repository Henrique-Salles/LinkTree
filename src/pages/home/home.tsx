export function Home() {
  return (
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className="md:text-4xl txt-3xl font-bold text-white mt-20">
        Henrique Salles
      </h1>
      <span className="text-gray-50 mb-5 mt-3">My Links 👇</span>

      <main className="flex flex-col w-11/12 max-w-xl text-center">
        <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
          <a>
            <p className="text-base md:text-lg">GitHub</p>
          </a>
        </section>
      </main>
    </div>
  );
}
