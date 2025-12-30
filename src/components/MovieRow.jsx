import { useRef, useState, useEffect } from 'react';

const MovieRow = ({ title, movies }) => {
  const rowRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  const scroll = (direction) => {
    if (rowRef.current) {
      const scrollAmount = rowRef.current.offsetWidth * 0.9;
      const newPosition = direction === 'left' 
        ? rowRef.current.scrollLeft - scrollAmount 
        : rowRef.current.scrollLeft + scrollAmount;
      
      rowRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
      
      setTimeout(() => {
        checkArrows();
      }, 300);
    }
  };

  const checkArrows = () => {
    if (rowRef.current) {
      setShowLeftArrow(rowRef.current.scrollLeft > 0);
      setShowRightArrow(
        rowRef.current.scrollLeft < rowRef.current.scrollWidth - rowRef.current.offsetWidth - 10
      );
    }
  };

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const rowContainerStyle = {
    marginBottom: '3vw',
    position: 'relative',
    minHeight: '200px',
  };

  const titleStyle = {
    fontSize: '1.4vw',
    fontWeight: '700',
    marginBottom: '0.5em',
    color: '#e5e5e5',
    paddingLeft: '60px',
    transition: 'color 0.4s',
  };

  const sliderContainerStyle = {
    position: 'relative',
    paddingLeft: '60px',
    overflow: 'visible',
  };

  const arrowButtonStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '60px',
    backgroundColor: 'rgba(20, 20, 20, 0.5)',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
    zIndex: 30,
    fontSize: '2.5vw',
    transition: 'background-color 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
  };

  const leftButtonStyle = {
    ...arrowButtonStyle,
    left: '0',
    opacity: showLeftArrow ? 1 : 0,
    pointerEvents: showLeftArrow ? 'auto' : 'none',
  };

  const rightButtonStyle = {
    ...arrowButtonStyle,
    right: '0',
    opacity: showRightArrow ? 1 : 0,
    pointerEvents: showRightArrow ? 'auto' : 'none',
  };

  const scrollContainerStyle = {
    display: 'flex',
    gap: '0.5vw',
    overflowX: 'scroll',
    overflowY: 'visible',
    scrollBehavior: 'smooth',
    paddingBottom: '50px',
    paddingTop: '20px',
    paddingRight: '60px',
    paddingLeft: '4px',
  };

  return (
    <div 
      style={rowContainerStyle}
      onMouseEnter={() => checkArrows()}
    >
      <h2 style={titleStyle}>{title}</h2>
      
      <div style={sliderContainerStyle}>
        <button
          style={leftButtonStyle}
          onClick={() => scroll('left')}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(20, 20, 20, 0.8)';
            e.target.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(20, 20, 20, 0.5)';
            e.target.style.opacity = showLeftArrow ? '1' : '0';
          }}
        >
          ‹
        </button>

        <div
          ref={rowRef}
          className="scrollbar-hide"
          style={scrollContainerStyle}
          onScroll={checkArrows}
        >
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} onClick={() => openImageModal(movie.image)} />
          ))}
        </div>

        <button
          style={rightButtonStyle}
          onClick={() => scroll('right')}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(20, 20, 20, 0.8)';
            e.target.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(20, 20, 20, 0.5)';
            e.target.style.opacity = showRightArrow ? '1' : '0';
          }}
        >
          ›
        </button>
      </div>

      {/* Modal de imagem em tela cheia */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.25s ease-out',
            cursor: 'pointer'
          }}
          onClick={closeImageModal}
        >
          <button
            style={{
              position: 'absolute',
              top: 'clamp(10px, 3vw, 20px)',
              right: 'clamp(10px, 3vw, 20px)',
              width: 'clamp(40px, 8vw, 52px)',
              height: 'clamp(40px, 8vw, 52px)',
              borderRadius: '50%',
              backgroundColor: 'rgba(20, 20, 20, 0.9)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              color: '#ffffff',
              fontSize: 'clamp(24px, 5vw, 32px)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              transition: 'all 0.2s',
              fontWeight: '300',
              lineHeight: '1'
            }}
            onClick={closeImageModal}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#E50914';
              e.target.style.transform = 'scale(1.1)';
              e.target.style.borderColor = '#E50914';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(20, 20, 20, 0.9)';
              e.target.style.transform = 'scale(1)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}
          >
            ✕
          </button>
          <img
            src={selectedImage}
            alt="Imagem em tela cheia"
            style={{
              maxWidth: '95%',
              maxHeight: '95vh',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 12px 48px rgba(0, 0, 0, 0.9)',
              animation: 'scaleIn 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

const MovieCard = ({ movie, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null);

  // Lazy loading com Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cardStyle = {
    position: 'relative',
    flexShrink: 0,
    width: 'clamp(200px, 24vw, 380px)',
    borderRadius: '8px',
    overflow: 'hidden',
    transform: isHovered ? 'scale(1.08)' : 'scale(1)',
    transition: 'transform 0.35s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.3s',
    cursor: 'pointer',
    zIndex: isHovered ? 50 : 1,
    margin: 0,
  };

  const cardInnerStyle = {
    position: 'relative',
    width: '100%',
    borderRadius: '6px',
    overflow: 'hidden',
    boxShadow: isHovered 
      ? '0 12px 32px rgba(0, 0, 0, 0.7), 0 0 0 3px rgba(229, 9, 20, 0.4), 0 0 20px rgba(229, 9, 20, 0.3)' 
      : '0 2px 8px rgba(0, 0, 0, 0.3)',
    backgroundColor: '#181818',
    transition: 'box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
  };

  const imageContainerStyle = {
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%', // Proporção 16:9 (landscape)
    overflow: 'hidden',
  };

  const imageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    filter: isHovered 
      ? 'brightness(1.15) contrast(1.1) saturate(1.2)' 
      : 'brightness(1) contrast(1) saturate(1)',
    transition: 'transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1), filter 0.4s ease',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: isHovered 
      ? 'radial-gradient(circle at center, rgba(229, 9, 20, 0.15) 0%, rgba(0, 0, 0, 0.2) 40%, rgba(0, 0, 0, 0.5) 100%)'
      : 'linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, transparent 50%)',
    transition: 'background 0.4s ease',
  };

  const badgeStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'rgba(229, 9, 20, 0.95)',
    color: '#ffffff',
    fontSize: 'clamp(11px, 0.8vw, 14px)',
    padding: '6px 12px',
    borderRadius: '4px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    zIndex: 10,
    backdropFilter: 'blur(10px)',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
    opacity: isHovered ? 1 : 0.9,
    transition: 'opacity 0.3s',
  };

  const skeletonStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#2a2a2a',
    display: imageLoaded ? 'none' : 'block',
  };

  return (
    <div
      ref={cardRef}
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div style={cardInnerStyle}>
        <div style={imageContainerStyle}>
          {isInView && (
            <img
              src={movie.image}
              alt={movie.title || "Foto"}
              style={imageStyle}
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
            />
          )}
          <div style={skeletonStyle} className="skeleton" />
          <div style={overlayStyle} />
          
          {movie.featured && (
            <div style={badgeStyle}>
              <span>⭐</span>
              <span>Especial</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
