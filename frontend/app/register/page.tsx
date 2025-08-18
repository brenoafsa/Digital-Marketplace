"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import api from "@/services/api";
import { storeAccessToken, storeRefreshToken } from "@/services/tokenAuth";

export default function RegisterPage() {
  const [username, setUsername] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const navigate = useRouter();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await api.post("api/user/register/", { 
        username: username, 
        password: password 
      });
      if (res.status === 201){
        const tokenResponse = await api.post("api/token/", { 
          username: username, 
          password: password 
        });
        storeAccessToken(tokenResponse.data.access);
        storeRefreshToken(tokenResponse.data.refresh);
      }
      alert("Registrado com sucesso!");
      navigate.push("/homepage")
    } catch (err) {
      console.log(err);
      alert("Erro ao registrar.");
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
