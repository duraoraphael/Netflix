import { useState, useEffect } from "react";
import Modal from "./Modal";

const Hero = () => {
  const [showText, setShowText] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fadeStart = 0;
      const fadeEnd = windowHeight * 0.5;

      if (scrollPosition <= fadeStart) {
        setScrollOpacity(1);
      } else if (scrollPosition >= fadeEnd) {
        setScrollOpacity(0);
      } else {
        const opacity =
          1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
        setScrollOpacity(opacity);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroStyle = {
    position: "relative",
    height: "85vh",
    width: "100%",
    overflow: "hidden",
    marginBottom: 0,
    opacity: scrollOpacity,
    transition: "opacity 0.3s ease-out",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(77deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 85%)",
    zIndex: 10,
  };

  const bottomOverlayStyle = {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: "-2px",
    height: "25vh",
    background:
      "linear-gradient(180deg, transparent 0%, rgba(20,20,20,0.7) 40%, rgba(20,20,20,1) 100%)",
    zIndex: 11,
  };

  const backgroundStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(135deg, rgba(139,0,0,0.35) 0%, rgba(75,0,130,0.35) 50%, rgba(219,112,147,0.35) 100%)",
  };

  const videoStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: "100%",
    minHeight: "100%",
    width: "auto",
    height: "auto",
    objectFit: "cover",
    opacity: 0.3,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 20,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "60px",
    paddingRight: "60px",
    maxWidth: "36%",
    transform: `translateY(${(1 - scrollOpacity) * 20}px)`,
    transition: "transform 0.3s ease-out",
  };

  const textContainerStyle = {
    transition:
      "opacity 1s cubic-bezier(0.165, 0.84, 0.44, 1), transform 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
    opacity: showText ? 1 : 0,
    transform: showText ? "translateY(0)" : "translateY(30px)",
  };

  const titleStyle = {
    fontSize: "5vw",
    fontWeight: "400",
    marginBottom: "1vw",
    lineHeight: 1.1,
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
    fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
    letterSpacing: "2px",
  };

  const subtitleStyle = {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "12px",
    fontSize: "1.2vw",
    marginBottom: "1.5vw",
    color: "#e5e5e5",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
    fontWeight: "500",
  };

  const starsStyle = {
    color: "#E50914",
    fontSize: "1.1vw",
    letterSpacing: "3px",
    whiteSpace: "nowrap",
  };

  const descriptionStyle = {
    fontSize: "1.4vw",
    lineHeight: 1.4,
    marginBottom: "1.5vw",
    color: "#ffffff",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.45)",
  };

  const buttonsStyle = {
    display: "flex",
    gap: "12px",
    marginTop: "1vw",
    flexWrap: "wrap",
  };

  const primaryButtonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    color: "#000000",
    padding: "clamp(10px, 1.2vw, 14px) clamp(20px, 2.5vw, 32px)",
    borderRadius: "4px",
    fontSize: "clamp(14px, 1.15vw, 18px)",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  };

  const secondaryButtonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    backgroundColor: "rgba(109, 109, 110, 0.7)",
    color: "#ffffff",
    padding: "clamp(10px, 1.2vw, 14px) clamp(20px, 2.5vw, 32px)",
    borderRadius: "4px",
    fontSize: "clamp(14px, 1.15vw, 18px)",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  };

  const scrollIndicatorStyle = {
    position: "absolute",
    bottom: "8%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 30,
    textAlign: "center",
    opacity: 1,
    animation: "bounce 2s infinite",
  };

  const scrollTextStyle = {
    fontSize: "14px",
    marginBottom: "10px",
    color: "#ffffff",
    fontWeight: "500",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
    letterSpacing: "0.5px",
  };

  const scrollArrowStyle = {
    fontSize: "32px",
    color: "#ffffff",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
  };

  return (
    <div style={heroStyle}>
      <div style={overlayStyle} />
      <div style={bottomOverlayStyle} />

      <div style={backgroundStyle}>
        <video style={videoStyle} autoPlay muted loop playsInline>
          <source src={import.meta.env.BASE_URL + "video-hero.mp4"} type="video/mp4" />
        </video>
      </div>

      <div style={contentStyle}>
        <div style={textContainerStyle}>
          <h1 style={titleStyle}>Raphael e Laryssa</h1>

          <div style={subtitleStyle}>
            <span>30 DE DEZEMBRO DE 2025· 2 ANOS JUNTOS</span>
            <span style={starsStyle}>★ ★ ★ ★ ★</span>
          </div>

          <div style={buttonsStyle}>
            <button
              style={primaryButtonStyle}
              onClick={() => setIsVideoModalOpen(true)}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.75)")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "rgba(255, 255, 255, 1)")
              }
            >
              <span>▶</span> <span>Assistir</span>
            </button>

            <button
              style={secondaryButtonStyle}
              onClick={() => setIsModalOpen(true)}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "rgba(109, 109, 110, 0.4)")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "rgba(109, 109, 110, 0.7)")
              }
            >
              <span>ℹ</span> <span>Mais informações</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Vídeo */}
      <Modal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      >
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            backgroundColor: "#000",
          }}
        >
          <video
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            controls
            autoPlay
          >
            <source src={import.meta.env.BASE_URL + "images/Video.mp4"} type="video/mp4" />
          </video>
        </div>
      </Modal>

      {/* Modal de Mais Informações */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            backgroundColor: "#000",
          }}
        >
          <video
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            controls
            autoPlay
          >
            <source src={import.meta.env.BASE_URL + "images/Video.mp4"} type="video/mp4" />
          </video>
        </div>

        <div style={{ padding: "30px", maxHeight: "40vh", overflowY: "auto" }}>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "700",
              marginBottom: "15px",
              fontFamily: "'Dancing Script', cursive",
              color: "#e5e5e5",
            }}
          >
            Raphael e Laryssa
          </h2>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              marginBottom: "20px",
              fontSize: "14px",
              color: "#46d369",
              fontWeight: "600",
            }}
          >
            <span>30 DE DEZEMBRO · 2 ANOS JUNTOS</span>
            <span style={{ color: "#E50914" }}>★ ★ ★ ★ ★</span>
          </div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
              color: "#e5e5e5",
              marginBottom: "15px",
            }}
          >
            Amor, sei que não tenho sido um excelente namorado, mas eu tento me
            esforçar cada vez mais para te fazer feliz, sei que peco em muita
            coisa mas faço o possivel para tentar mudar isso, mas hoje é so
            alegria, fiz essa surpresa para te mostrar o quanto eu te amo e o
            quanto você é especial para mim. Você é a pessoa mais incrível que
            já conheci, e cada dia ao seu lado é uma nova aventura cheia de
            amor, risadas e momentos inesquecíveis. Saiba que você pode contar comigo pra tudo, pra hoje e sempre.
            Te amo muito! ❤️
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
              color: "#e5e5e5",
              marginBottom: "20px",
            }}
          >
            Você é meu porto seguro, minha paz em dias turbulentos e minha
            companhia preferida em qualquer situação. Com você aprendi que amor
            é parceria, é cuidado, é crescer junto. Te amo com tudo que sou. ❤️
          </p>

          <div
            style={{
              marginTop: "25px",
              paddingTop: "20px",
              borderTop: "1px solid #333",
            }}
          >
            <p style={{ fontSize: "14px", color: "#777", marginBottom: "8px" }}>
              <strong style={{ color: "#e5e5e5" }}>
                Este relacionamento é:
              </strong>{" "}
              Verdadeiro, Especial, Inesquecível
            </p>
            <p style={{ fontSize: "14px", color: "#777" }}>
              <strong style={{ color: "#e5e5e5" }}>Gênero:</strong> Romance,
              Drama, Comédia Romântica
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Hero;
