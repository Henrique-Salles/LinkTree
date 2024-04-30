import { Social } from "../../components/social/social";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiGithubpages } from "react-icons/si";

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
        <footer className="flex justify-center gap-3 my-4 items-center">
          <Social url="https://www.instagram.com/henrique_sallesss/">
            <FaInstagram size={35} color="#FFF" />
          </Social>
          <Social url="https://wa.me/5521979622658">
            <FaWhatsapp size={35} color="#FFF" />
          </Social>
          <Social url="https://0henrique-salles.github.io">
            <SiGithubpages size={70} color="#FFF" />
          </Social>
        </footer>
      </main>
    </div>
  );
}
