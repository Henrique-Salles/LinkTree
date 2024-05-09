import { useEffect, useState } from "react";
import { Social } from "../../components/social/social";

import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { db } from "../../services/firebaseConnection";
import { getDocs, collection, orderBy, query } from "firebase/firestore";

interface LinkProps {
  id: string;
  name: string;
  url: string;
  bg: string;
  color: string;
}

export function Home() {
  const [links, setLinks] = useState<LinkProps[]>([]);

  useEffect(() => {
    function loadLinks() {
      const linksRef = collection(db, "links");
      const queryRef = query(linksRef, orderBy("created", "asc"));

      getDocs(queryRef).then((snapshot) => {
        let lista = [] as LinkProps[];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bg: doc.data().bg,
            color: doc.data().color,
          });
        });

        setLinks(lista);
      });
    }
    loadLinks();
  }, []);

  return (
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className="md:text-4xl txt-3xl font-bold text-white mt-20">
        Henrique Salles
      </h1>
      <span className="text-gray-50 mb-5 mt-3">My Links 👇</span>

      <main className="flex flex-col w-11/12 max-w-xl text-center">
        {links.map((link) => (
          <section
            style={{ backgroundColor: link.bg }}
            key={link.id}
            className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer"
          >
            <a href={link.url} target="_blank" style={{ color: link.color }}>
              <p className="text-base md:text-lg">{link.name}</p>
            </a>
          </section>
        ))}
        <footer className="flex justify-center gap-3 my-4 items-center">
          <Social url="https://www.instagram.com/henrique_sallesss/">
            <FaInstagram size={35} color="#FFF" />
          </Social>
          <Social url="https://wa.me/5521979622658">
            <FaWhatsapp size={35} color="#FFF" />
          </Social>
          <Social url="https://www.facebook.com/henriquesllman">
            <FaFacebook size={35} color="#FFF" />
          </Social>
        </footer>
      </main>
    </div>
  );
}
