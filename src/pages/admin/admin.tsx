import { Header } from "../../components/header/header";
import { Input } from "../../components/input/input";
import { useState } from "react";

export function Admin() {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2 mt-8">
      <Header />

      <form className="flex flex-col mt-8 mb-3 w-full max-w-xl">
        <label className="text-white font-mediu mt-2 mb-2">Nome do Link</label>
        <Input
          placeholder="Digite o nome do link"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />

        <label className="text-white font-mediu mt-2 mb-2">URL do Link</label>
        <Input
          type="url"
          placeholder="Digite a URL do link"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />
      </form>
    </div>
  );
}
