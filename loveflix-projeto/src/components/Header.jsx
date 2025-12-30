import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'background-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
    backgroundColor: scrolled ? 'rgb(20, 20, 20)' : 'transparent',
    backgroundImage: scrolled 
      ? 'none' 
      : 'linear-gradient(180deg, rgba(0,0,0,0.7) 10%, rgba(0,0,0,0))',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '68px',
    padding: '0 60px',
  };

  const responsiveStyle = `
    @media (max-width: 768px) {
      .header-container {
        padding: 0 20px !important;
      }
      .logo-text {
        font-size: 24px !important;
      }
      .heart-icon {
        font-size: 20px !important;
      }
      .date-text {
        font-size: 12px !important;
      }
    }
    @media (max-width: 480px) {
      .logo-text {
        font-size: 20px !important;
      }
      .date-text {
        font-size: 11px !important;
      }
    }
  `;

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const logoStyle = {
    fontSize: '34px',
    fontWeight: '800',
    color: '#E50914',
    letterSpacing: '3px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.45)',
  };

  const heartStyle = {
    fontSize: '28px',
    filter: 'drop-shadow(2px 2px 3px rgba(0,0,0,0.45))',
    animation: 'pulse 2s ease-in-out infinite',
  };

  const pulseAnimation = `
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }
  `;

  const dateStyle = {
    fontSize: '15px',
    color: '#e5e5e5',
    fontWeight: '500',
    letterSpacing: '0.5px',
  };

  return (
    <>
      <style>{responsiveStyle}</style>
      <style>{pulseAnimation}</style>
      <header style={headerStyle}>
        <div style={containerStyle} className="header-container">
          <div style={logoContainerStyle}>
            <h1 style={logoStyle} className="logo-text">LOVEFLIX</h1>
            <span style={heartStyle} className="heart-icon">❤️</span>
          </div>
          
          <div style={dateStyle} className="date-text">
            2 Anos de Amor
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
