import { useState, useEffect } from 'react';

function ErrorPage({ error }) {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Criar corações flutuantes aleatórios
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
    }));
    setHearts(newHearts);
  }, []);

  const errorMessages = [
    "Ops! Foi tanta fofura que o servidor derreteu! 🥰",
    "Erro 404: Amor demais para processar! 💕",
    "O sistema não aguenta tanto amor! 💖",
    "Tanta doçura que deu bug no código! 🍭",
    "Overdose de fofura detectada! 💝"
  ];

  const randomMessage = errorMessages[Math.floor(Math.random() * errorMessages.length)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
      {/* Corações flutuantes */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart absolute text-4xl opacity-60"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          💕
        </div>
      ))}

      {/* Conteúdo principal */}
      <div className="text-center z-10 p-8 max-w-2xl">
        {/* Emoji grande pulsante */}
        <div className="text-9xl mb-8 animate-bounce">
          🥺
        </div>

        {/* Título do erro */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 text-transparent bg-clip-text animate-pulse">
          Ooopsie! 
        </h1>

        {/* Mensagem de erro fofa */}
        <p className="text-2xl md:text-3xl mb-8 text-gray-700 font-semibold">
          {randomMessage}
        </p>

        {/* Descrição do erro */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg">
          {/* Ilustração fofa */}
          <div className="mb-4 text-6xl flex justify-center gap-3">
            <span className="animate-bounce" style={{ animationDelay: '0s' }}>💖</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🐻</span>
            <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>💕</span>
          </div>
          
          <p className="text-lg text-gray-600 mb-4">
            💖 Parece que nosso amor é tão grande que até o sistema ficou confuso!
          </p>
          {error && (
            <p className="text-sm text-gray-500 font-mono bg-pink-50 p-3 rounded-lg">
              {error.message || "Erro desconhecido"}
            </p>
          )}
        </div>

        {/* Botão de voltar */}
        <button
          onClick={() => window.location.href = '/'}
          className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <span className="flex items-center gap-2">
            💝 Voltar para o Amor
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </button>

        {/* Mensagem extra fofa */}
        <p className="mt-8 text-gray-600 italic">
          "O amor verdadeiro nunca dá erro, mas o código às vezes sim! 🌸"
        </p>
      </div>

      {/* Estrelas decorativas */}
      <div className="absolute top-10 left-10 text-6xl animate-spin-slow">✨</div>
      <div className="absolute bottom-20 right-20 text-5xl animate-spin-slow" style={{ animationDelay: '1s' }}>⭐</div>
      <div className="absolute top-1/3 right-10 text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>💫</div>
      <div className="absolute bottom-10 left-20 text-5xl animate-bounce" style={{ animationDelay: '1.5s' }}>🌟</div>
    </div>
  );
}

export default ErrorPage;
