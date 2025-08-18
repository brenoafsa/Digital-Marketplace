"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import api from "@/services/api";
import { storeAccessToken, storeRefreshToken } from "@/services/tokenAuth";

export default function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const tokenResponse = await api.post("api/token/", { 
            username: username, 
            password: password 
        });
        storeAccessToken(tokenResponse.data.access);
        storeRefreshToken(tokenResponse.data.refresh);
        alert("Logado com sucesso!");
        navigate.push("/homepage")
    } catch (err) {
        console.log(err);
        alert("Erro ao logar.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 p-8 border border-gray-200 rounded-lg bg-white shadow-md min-w-[300px] w-full max-w-sm"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="px-3 py-2 rounded border border-gray-300 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="px-3 py-2 rounded border border-gray-300 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
