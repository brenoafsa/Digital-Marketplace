'use client'
import { clearAcessRefreshTokens } from '@/services/tokenAuth'
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const nagivate = useRouter()

  const handleLogout = (): void => {
    clearAcessRefreshTokens();
    alert("Você foi deslogado com sucesso!")
    nagivate.push('/')
  }

  return (
    <div>
      <button onClick={handleLogout}>
        LOG OUT 
      </button>
    </div>
  )
}

