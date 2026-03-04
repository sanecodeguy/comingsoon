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
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
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
  };

  return (
    <div style={containerStyle}>
      <h1 style={textStyle}>{texts[textIndex]}</h1>
    </div>
  );
}

export default App;
