import { useState, useEffect } from 'react';

function App() {
  const [textIndex, setTextIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const texts = ["Contagion", "Coming Soon", "Epstein"];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('fade-out');
      setTimeout(() => {
        setTextIndex((current) => (current + 1) % texts.length);
        setFadeClass('fade-in');
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '2rem',
  };

  const textStyle: React.CSSProperties = {
    fontSize: '15vw',
    fontWeight: 900,
    letterSpacing: '-0.05em',
    userSelect: 'none',
    background: 'linear-gradient(90deg, #ffffff, #e0e0e0, #ffffff)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    animation: `${fadeClass === 'fade-in' ? 'fadeIn 1s ease-in-out' : 'fadeOut 0.5s ease-in-out'}, shine 3s linear infinite`,
    marginBottom: '3rem',
  };

  // Smaller GitHub card
  const githubCardStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '450px',
    backgroundColor: '#111111',
    border: '1px solid #222',
    borderRadius: '10px',
    padding: '1.2rem',
    boxShadow: '0 8px 20px -8px rgba(255,255,255,0.1)',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
  };

  const githubHeaderStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    marginBottom: '0.8rem',
    borderBottom: '1px solid #222',
    paddingBottom: '0.8rem',
  };

  const repoNameStyle: React.CSSProperties = {
    color: 'white',
    fontSize: '1rem',
    fontWeight: 600,
    margin: 0,
  };

  const repoDescStyle: React.CSSProperties = {
    color: '#888',
    fontSize: '0.8rem',
    marginBottom: '0.8rem',
    lineHeight: 1.4,
  };

  const statsContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1.2rem',
    marginBottom: '0.8rem',
  };

  const statStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
    color: '#aaa',
    fontSize: '0.8rem',
  };

  const buttonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#222',
    color: 'white',
    textDecoration: 'none',
    padding: '0.6rem 1rem',
    borderRadius: '6px',
    fontSize: '0.8rem',
    fontWeight: 500,
    border: '1px solid #333',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    gap: '0.4rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={textStyle}>{texts[textIndex]}</h1>
      
      {/* Smaller GitHub Embed Card */}
      <div 
        style={githubCardStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.borderColor = '#444';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = '#222';
        }}
      >
        <div style={githubHeaderStyle}>
          <svg height="24" width="24" viewBox="0 0 24 24" fill="white">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <div>
            <h3 style={repoNameStyle}>Aegirom/Contagion</h3>
            <p style={{ color: '#666', fontSize: '0.7rem', margin: 0 }}>54 commits • Updated Mar 5</p>
          </div>
        </div>

        <p style={repoDescStyle}>
          Defensive cybersecurity platform for malware analysis with sandboxing, AI evaluation, and peer review.
        </p>

        <div style={statsContainerStyle}>
          <div style={statStyle}>
            <span style={{ fontSize: '0.9rem' }}>⭐</span>
            <span>0 stars</span>
          </div>
          <div style={statStyle}>
            <span style={{ fontSize: '0.9rem' }}>🔱</span>
            <span>0 forks</span>
          </div>
        </div>

        <a 
          href="https://github.com/Aegirom/Contagion" 
          target="_blank" 
          rel="noopener noreferrer"
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#333';
            e.currentTarget.style.borderColor = '#555';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#222';
            e.currentTarget.style.borderColor = '#333';
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          View on GitHub
        </a>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.98);
          }
        }
        
        @keyframes shine {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
}

export default App;
