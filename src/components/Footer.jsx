const Footer = () => {
  const footerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    borderTop: '1px solid #222',
    padding: '48px 60px',
    marginTop: '64px',
  };

  const containerStyle = {
    maxWidth: '1920px',
    margin: '0 auto',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '40px',
  };

  const logoStyle = {
    fontSize: '34px',
    fontWeight: '800',
    color: '#E50914',
    marginBottom: '8px',
    letterSpacing: '3px',
  };

  const subtitleStyle = {
    color: '#808080',
    fontSize: '15px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
    marginBottom: '40px',
  };

  const columnStyle = {
    textAlign: 'left',
  };

  const columnTitleStyle = {
    color: '#ffffff',
    fontWeight: '600',
    marginBottom: '16px',
    fontSize: '16px',
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
  };

  const listItemStyle = {
    color: '#808080',
    fontSize: '13px',
    marginBottom: '10px',
    cursor: 'pointer',
    transition: 'color 0.2s',
  };

  const paragraphStyle = {
    color: '#808080',
    fontSize: '13px',
    lineHeight: 1.6,
  };

  const bottomStyle = {
    borderTop: '1px solid #222',
    paddingTop: '24px',
    textAlign: 'center',
  };

  const bottomTextStyle = {
    color: '#737373',
    fontSize: '13px',
    marginBottom: '8px',
  };

  const loveTextStyle = {
    color: '#E50914',
    fontWeight: '500',
  };

  const quoteStyle = {
    color: '#666',
    fontSize: '12px',
    marginTop: '8px',
    fontStyle: 'italic',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h3 style={logoStyle}>
            LOVEFLIX
          </h3>
          <p style={subtitleStyle}>
            Nosso amor em cada frame 💕
          </p>
        </div>

        <div style={gridStyle}>
          <div style={columnStyle}>
            <h4 style={columnTitleStyle}>Nossa História</h4>
            <ul style={listStyle}>
              <li 
                style={listItemStyle}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = '#808080'}
              >
                Primeiro Encontro
              </li>
              <li 
                style={listItemStyle}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = '#808080'}
              >
                Momentos Especiais
              </li>
              <li 
                style={listItemStyle}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = '#808080'}
              >
                Viagens
              </li>
              <li 
                style={listItemStyle}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = '#808080'}
              >
                Memórias
              </li>
            </ul>
          </div>

          <div style={columnStyle}>
            <h4 style={columnTitleStyle}>Categorias</h4>
            <ul style={listStyle}>
              <li 
                style={listItemStyle}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = '#808080'}
              >
                Romance
              </li>
              <li 
                style={listItemStyle}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = '#808080'}
              >
                Aventura
              </li>
              <li 
                style={listItemStyle}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = '#808080'}
              >
                Comédia
              </li>
              <li 
                style={listItemStyle}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = '#808080'}
              >
                Drama
              </li>
            </ul>
          </div>

          <div style={columnStyle}>
            <h4 style={columnTitleStyle}>Sobre</h4>
            <p style={paragraphStyle}>
              Criado com muito amor para celebrar 2 anos de um relacionamento 
              incrível. Cada foto aqui é uma lembrança especial dos nossos 
              melhores momentos juntos.
            </p>
          </div>
        </div>

        <div style={bottomStyle}>
          <p style={bottomTextStyle}>
            ❤️ <span style={loveTextStyle}>Raphael & Laryssa</span> · 2 Anos
          </p>
          <p style={quoteStyle}>
            "O amor é a melhor história para contar" ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
