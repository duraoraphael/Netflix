import Header from './components/Header';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Dados de exemplo - você pode substituir pelas suas fotos e descrições reais
  const melhoresMomentos1 = [
    {
      title: "Nós dois",
      date: "2024",
      image: "/images/eu&ela.jpg",
      description: "Juntos para sempre ❤️",
      featured: true
    },
    {
      title: "Viagem",
      date: "2024",
      image: "/images/viajem.jpg",
      description: "Explorando o mundo juntos"
    },
    {
      title: "Aparecida",
      date: "2024",
      image: "/images/aparecida.jpg",
      description: "Momentos especiais"
    },
    {
      title: "Feira",
      date: "2024",
      image: "/images/feira.jpg",
      description: "Passeios e diversão"
    },
    {
      title: "Museu",
      date: "2024",
      image: "/images/museu.jpg",
      description: "Cultura e amor"
    },
    {
      title: "Juntos",
      date: "2024",
      image: "/images/eu&ela2.jpg",
      description: "Sempre ao seu lado"
    }
  ];

  const melhoresMomentos2 = [
    {
      title: "Aparecida",
      date: "2024",
      image: "/images/aparecida2.jpg",
      description: "Momentos de fé",
      featured: true
    },
    {
      title: "Nós",
      date: "2024",
      image: "/images/eu&ela3.jpg",
      description: "Nosso amor"
    },
    {
      title: "Museu",
      date: "2024",
      image: "/images/museu2.jpg",
      description: "Descobrindo juntos"
    },
    {
      title: "Aparecida",
      date: "2024",
      image: "/images/aparecida3.jpg",
      description: "Unidos pela fé"
    },
    {
      title: "Especial",
      date: "2024",
      image: "/images/bc735577-e7e9-4434-88ae-b45f677bf8ee.jpg",
      description: "Momento único"
    }
  ];

  const appStyle = {
    minHeight: '100vh',
    backgroundColor: '#141414',
  };

  const mainStyle = {
    position: 'relative',
    marginTop: '-150px',
    paddingTop: '20px',
  };

  return (
    <div style={appStyle}>
      <Header />
      <Hero />
      
      <main style={mainStyle}>
        <MovieRow title="💕 Nossos Melhores Momentos" movies={melhoresMomentos1} />
        <MovieRow title="⭐ Momentos Inesquecíveis" movies={melhoresMomentos2} />
      </main>

      <Footer />
    </div>
  );
}

export default App;

