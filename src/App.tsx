import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
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
    padding: '1rem',
  };

  const textStyle: React.CSSProperties = {
    fontSize: 'clamp(3rem, 15vw, 12rem)',
    fontWeight: 900,
    letterSpacing: '-0.05em',
    userSelect: 'none',
    background: 'linear-gradient(90deg, #ffffff, #e0e0e0, #ffffff)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    animation: `${fadeClass === 'fade-in' ? 'fadeIn 1s ease-in-out' : 'fadeOut 0.5s ease-in-out'}, shine 3s linear infinite`,
    marginBottom: '2rem',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    maxWidth: '100vw',
    padding: '0 0.5rem',
  };

  const githubCardStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '450px',
    backgroundColor: '#111111',
    border: '1px solid #222',
    borderRadius: '10px',
    padding: '1.2rem',
    boxShadow: '0 8px 20px -8px rgba(255,255,255,0.1)',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
    margin: '0 1rem',
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

  const footerStyle: React.CSSProperties = {
    marginTop: '2rem',
    padding: '2rem',
    textAlign: 'center',
  };

  const footerLinkStyle: React.CSSProperties = {
    color: '#666',
    textDecoration: 'none',
    margin: '0 1rem',
    fontSize: '0.9rem',
    transition: 'color 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <h1 style={textStyle}>{texts[textIndex]}</h1>

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
            <p style={{ color: '#666', fontSize: '0.7rem', margin: 0 }}>54 commits Updated Mar 5</p>
          </div>
        </div>

        <p style={repoDescStyle}>
          Defensive cybersecurity platform for malware analysis with sandboxing, AI evaluation, and peer review.
        </p>

        <div style={statsContainerStyle}>
          <div style={statStyle}>
            <span style={{ fontSize: '0.9rem' }}>0 stars</span>
          </div>
          <div style={statStyle}>
            <span style={{ fontSize: '0.9rem' }}>1 forks</span>
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

      
      <footer style={footerStyle}>
        <Link to="/privacy-policy" style={footerLinkStyle}>Privacy Policy</Link>
        <Link to="/terms-of-service" style={footerLinkStyle}>Terms of Service</Link>
        <Link to="/disclaimer" style={footerLinkStyle}>Disclaimer</Link>
        <Link to="/contact" style={footerLinkStyle}>Contact</Link>
        <Link to="/ad-personalization" style={footerLinkStyle}>Ad Personalization</Link>
        <Link to="/advertiser-disclosure" style={footerLinkStyle}>Advertiser Disclosure</Link>
        <p style={{ color: '#444', fontSize: '0.8rem', marginTop: '1rem' }}>
          Contagion Project - Defensive Cybersecurity Platform
        </p>
        <p style={{ color: '#444', fontSize: '0.8rem' }}>
          Email: admin@contagion.dev | help@contagion.dev | security@contagion.dev
        </p>
      </footer>

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

function PrivacyPolicy() {
  const [textIndex, setTextIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const texts = ["Contagion", "Coming Soon", "Privacy Policy"];

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
    padding: '1rem',
  };

  const textStyle: React.CSSProperties = {
    fontSize: 'clamp(3rem, 15vw, 12rem)',
    fontWeight: 900,
    letterSpacing: '-0.05em',
    userSelect: 'none',
    background: 'linear-gradient(90deg, #ffffff, #e0e0e0, #ffffff)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    animation: `${fadeClass === 'fade-in' ? 'fadeIn 1s ease-in-out' : 'fadeOut 0.5s ease-in-out'}, shine 3s linear infinite`,
    marginBottom: '2rem',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    maxWidth: '100vw',
    padding: '0 0.5rem',
  };

  const contentCardStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '800px',
    backgroundColor: '#111111',
    border: '1px solid #222',
    borderRadius: '10px',
    padding: '2rem',
    boxShadow: '0 8px 20px -8px rgba(255,255,255,0.1)',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
    margin: '0 1rem',
  };

  const sectionTitleStyle: React.CSSProperties = {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 700,
    marginTop: '2rem',
    marginBottom: '1rem',
    borderBottom: '1px solid #222',
    paddingBottom: '0.5rem',
  };

  const sectionStyle: React.CSSProperties = {
    color: '#aaa',
    fontSize: '1rem',
    lineHeight: 1.8,
    marginBottom: '1.5rem',
  };

  const navButtonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#222',
    color: 'white',
    textDecoration: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: 500,
    border: '1px solid #333',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    gap: '0.5rem',
    marginTop: '2rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={textStyle}>{texts[textIndex]}</h1>

      <div
        style={contentCardStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.borderColor = '#444';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = '#222';
        }}
      >
        <h2 style={sectionTitleStyle}>Privacy Policy for Contagion</h2>
        <p style={sectionStyle}>
          Last Updated: March 2026
        </p>

        <p style={sectionStyle}>
          At Contagion (the "Contagion Project", "we", "our", or "us"), we respect and prioritize your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.
        </p>

        <h3 style={sectionTitleStyle}>1. Information We Collect</h3>
        <p style={sectionStyle}>
          We collect information you provide directly to us, including:
        </p>
        <ul style={{ ...sectionStyle, paddingLeft: '2rem' }}>
          <li>Email address when you subscribe to updates</li>
          <li>GitHub profile information when you interact with our repositories</li>
          <li>Usage data and cookies through Google AdSense and analytics tools</li>
        </ul>

        <h3 style={sectionTitleStyle}>2. How We Use Your Information</h3>
        <p style={sectionStyle}>
          We use the information we collect to:
        </p>
        <ul style={{ ...sectionStyle, paddingLeft: '2rem' }}>
          <li>Provide and improve our cybersecurity platform</li>
          <li>Send you updates about Contagion and related security research</li>
          <li>Demonstrate defensive cybersecurity capabilities</li>
          <li>Monitor and prevent security threats</li>
        </ul>

        <h3 style={sectionTitleStyle}>3. Google AdSense</h3>
        <p style={sectionStyle}>
          We use Google AdSense to serve advertisements on our site. Google uses cookies to serve ads based on your visits to our site and other websites. You can opt out of Google AdSense by visiting the <a href="https://www.google.com/privacy.html" target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', textDecoration: 'none' }}>Google Privacy Policy</a>.
        </p>

        <h3 style={sectionTitleStyle}>4. Data Security</h3>
        <p style={sectionStyle}>
          We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
        </p>

        <h3 style={sectionTitleStyle}>5. Third-Party Links</h3>
        <p style={sectionStyle}>
          Our site may contain links to third-party websites, including GitHub and other cybersecurity resources. We are not responsible for the privacy practices of these external sites.
        </p>

        <h3 style={sectionTitleStyle}>6. Changes to This Policy</h3>
        <p style={sectionStyle}>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated effective date.
        </p>

        <h3 style={sectionTitleStyle}>7. Contact Us</h3>
        <p style={sectionStyle}>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p style={{ ...sectionStyle, fontWeight: 600, color: '#fff' }}>
          Email: security@contagion.dev
        </p>
        <p style={{ ...sectionStyle, fontWeight: 600, color: '#fff' }}>
          Email: admin@contagion.dev
        </p>
      </div>

      <Link to="/" style={navButtonStyle}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
          <path d="M10 17l5-5-5-5v10zm-5-7h2v10H5V10zm14 0h2v10h-2V10z"/>
        </svg>
        Back to Home
      </Link>

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

function TermsOfService() {
  const [textIndex, setTextIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const texts = ["Contagion", "Coming Soon", "Terms of Service"];

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
    padding: '1rem',
  };

  const textStyle: React.CSSProperties = {
    fontSize: 'clamp(3rem, 15vw, 12rem)',
    fontWeight: 900,
    letterSpacing: '-0.05em',
    userSelect: 'none',
    background: 'linear-gradient(90deg, #ffffff, #e0e0e0, #ffffff)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    animation: `${fadeClass === 'fade-in' ? 'fadeIn 1s ease-in-out' : 'fadeOut 0.5s ease-in-out'}, shine 3s linear infinite`,
    marginBottom: '2rem',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    maxWidth: '100vw',
    padding: '0 0.5rem',
  };

  const contentCardStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '800px',
    backgroundColor: '#111111',
    border: '1px solid #222',
    borderRadius: '10px',
    padding: '2rem',
    boxShadow: '0 8px 20px -8px rgba(255,255,255,0.1)',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
    margin: '0 1rem',
  };

  const sectionTitleStyle: React.CSSProperties = {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 700,
    marginTop: '2rem',
    marginBottom: '1rem',
    borderBottom: '1px solid #222',
    paddingBottom: '0.5rem',
  };

  const sectionStyle: React.CSSProperties = {
    color: '#aaa',
    fontSize: '1rem',
    lineHeight: 1.8,
    marginBottom: '1.5rem',
  };

  const navButtonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#222',
    color: 'white',
    textDecoration: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: 500,
    border: '1px solid #333',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    gap: '0.5rem',
    marginTop: '2rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={textStyle}>{texts[textIndex]}</h1>

      <div
        style={contentCardStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.borderColor = '#444';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = '#222';
        }}
      >
        <h2 style={sectionTitleStyle}>Terms of Service for Contagion</h2>
        <p style={sectionStyle}>
          Last Updated: March 2026
        </p>

        <p style={sectionStyle}>
          By accessing or using the Contagion website and services (the "Contagion Project"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
        </p>

        <h3 style={sectionTitleStyle}>1. Use License</h3>
        <p style={sectionStyle}>
          Permission is granted to temporarily view the materials (information or software) on the Contagion website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul style={{ ...sectionStyle, paddingLeft: '2rem' }}>
          <li>Modify or copy the materials</li>
          <li>Use the materials for any public or commercial purpose</li>
          <li>Attempt to decompile or reverse engineer any software on the site</li>
          <li>Remove any copyright or other proprietary notations from the materials</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
        </ul>

        <h3 style={sectionTitleStyle}>2. Disclaimer</h3>
        <p style={sectionStyle}>
          The materials on Contagion's website are provided on an "as is" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
        </p>

        <h3 style={sectionTitleStyle}>3. Contagion Project Purpose</h3>
        <p style={sectionStyle}>
          Contagion is a defensive cybersecurity platform for malware analysis with sandboxing, AI evaluation, and peer review. The materials displayed or performed on Contagion's website are for informational purposes only and relate to defensive security research, educational purposes, and cybersecurity best practices.
        </p>

        <h3 style={sectionTitleStyle}>4. Revisions and Errata</h3>
        <p style={sectionStyle}>
          The materials appearing on Contagion's website could include technical, typographical, or photographic errors. Contagion does not warrant that any of the materials on its website are accurate, complete, or current. Contagion may make changes to the materials contained on its website at any time without notice.
        </p>

        <h3 style={sectionTitleStyle}>5. Links</h3>
        <p style={sectionStyle}>
          Contagion has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Contagion of the site. Use of any such linked website is at the user's own risk.
        </p>

        <h3 style={sectionTitleStyle}>6. Modifications</h3>
        <p style={sectionStyle}>
          Contagion may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
        </p>

        <h3 style={sectionTitleStyle}>7. Governing Law</h3>
        <p style={sectionStyle}>
          These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </p>

        <h3 style={sectionTitleStyle}>8. Contact Us</h3>
        <p style={sectionStyle}>
          If you have any questions about these Terms of Service, please contact us at:
        </p>
        <p style={{ ...sectionStyle, fontWeight: 600, color: '#fff' }}>
          Email: admin@contagion.dev
        </p>
        <p style={{ ...sectionStyle, fontWeight: 600, color: '#fff' }}>
          Email: help@contagion.dev
        </p>
      </div>

      <Link to="/" style={navButtonStyle}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
          <path d="M10 17l5-5-5-5v10zm-5-7h2v10H5V10zm14 0h2v10h-2V10z"/>
        </svg>
        Back to Home
      </Link>

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

function Disclaimer() {
  const [textIndex, setTextIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const texts = ["Contagion", "Coming Soon", "Disclaimer"];

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
    padding: '1rem',
  };

  const textStyle: React.CSSProperties = {
    fontSize: 'clamp(3rem, 15vw, 12rem)',
    fontWeight: 900,
    letterSpacing: '-0.05em',
    userSelect: 'none',
    background: 'linear-gradient(90deg, #ffffff, #e0e0e0, #ffffff)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    animation: `${fadeClass === 'fade-in' ? 'fadeIn 1s ease-in-out' : 'fadeOut 0.5s ease-in-out'}, shine 3s linear infinite`,
    marginBottom: '2rem',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    maxWidth: '100vw',
    padding: '0 0.5rem',
  };

  const contentCardStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '800px',
    backgroundColor: '#111111',
    border: '1px solid #222',
    borderRadius: '10px',
    padding: '2rem',
    boxShadow: '0 8px 20px -8px rgba(255,255,255,0.1)',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
    margin: '0 1rem',
  };

  const sectionTitleStyle: React.CSSProperties = {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 700,
    marginTop: '2rem',
    marginBottom: '1rem',
    borderBottom: '1px solid #222',
    paddingBottom: '0.5rem',
  };

  const sectionStyle: React.CSSProperties = {
    color: '#aaa',
    fontSize: '1rem',
    lineHeight: 1.8,
    marginBottom: '1.5rem',
  };

  const navButtonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#222',
    color: 'white',
    textDecoration: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: 500,
    border: '1px solid #333',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    gap: '0.5rem',
    marginTop: '2rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={textStyle}>{texts[textIndex]}</h1>

      <div
        style={contentCardStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.borderColor = '#444';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = '#222';
        }}
      >
        <h2 style={sectionTitleStyle}>Disclaimer for Contagion</h2>
        <p style={sectionStyle}>
          Last Updated: March 2026
        </p>

        <h3 style={sectionTitleStyle}>1. Information Disclaimer</h3>
        <p style={sectionStyle}>
          The information on this website is provided for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
        </p>

        <h3 style={sectionTitleStyle}>2. Cybersecurity Research Disclaimer</h3>
        <p style={sectionStyle}>
          Contagion is a defensive cybersecurity platform designed for malware analysis, sandboxing, AI evaluation, and peer review. All activities conducted through this platform are for legitimate security research, education, and defensive purposes only.
        </p>
        <p style={sectionStyle}>
          We do NOT support or endorse any malicious, illegal, or harmful activities. Our platform is strictly for:
        </p>
        <ul style={{ ...sectionStyle, paddingLeft: '2rem' }}>
          <li>Security researchers analyzing malware behavior</li>
          <li>Educational purposes in cybersecurity training</li>
          <li>Defensive security assessments and threat modeling</li>
          <li>Peer review of security vulnerabilities and patches</li>
        </ul>

        <h3 style={sectionTitleStyle}>3. Limitations</h3>
        <p style={sectionStyle}>
          In no event shall Contagion or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Contagion's website.
        </p>

        <h3 style={sectionTitleStyle}>4. Revisions</h3>
        <p style={sectionStyle}>
          The materials appearing on Contagion's website could include technical, typographical, or photographic errors. Contagion does not warrant that any of the materials on its website are accurate, complete, or current. Contagion may make changes to the materials contained on its website at any time without notice.
        </p>

        <h3 style={sectionTitleStyle}>5. Google AdSense Disclaimer</h3>
        <p style={sectionStyle}>
          Contagion uses Google AdSense to serve advertisements. Google AdSense uses cookies to serve ads based on a user's prior visits to this website or other websites. Google's use of the DART cookie enables it to serve ads to users based on their visit to this site and other sites on the Internet.
        </p>

        <h3 style={sectionTitleStyle}>6. Accuracy of Materials</h3>
        <p style={sectionStyle}>
          The materials appearing on Contagion's website could include technical, typographical, or photographic errors. Contagion does not warrant that any of the materials on its website are accurate, complete, or current. Contagion may make changes to the materials contained on its website at any time without notice.
        </p>

        <h3 style={sectionTitleStyle}>7. Contact Us</h3>
        <p style={sectionStyle}>
          If you have any questions about this Disclaimer, please contact us at:
        </p>
        <p style={{ ...sectionStyle, fontWeight: 600, color: '#fff' }}>
          Email: security@contagion.dev
        </p>
        <p style={{ ...sectionStyle, fontWeight: 600, color: '#fff' }}>
          Email: admin@contagion.dev
        </p>
      </div>

      <Link to="/" style={navButtonStyle}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
          <path d="M10 17l5-5-5-5v10zm-5-7h2v10H5V10zm14 0h2v10h-2V10z"/>
        </svg>
        Back to Home
      </Link>

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

function Contact() {
  const [textIndex, setTextIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const texts = ["Contagion", "Coming Soon", "Contact Us"];

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
    padding: '1rem',
  };

  const textStyle: React.CSSProperties = {
    fontSize: 'clamp(3rem, 15vw, 12rem)',
    fontWeight: 900,
    letterSpacing: '-0.05em',
    userSelect: 'none',
    background: 'linear-gradient(90deg, #ffffff, #e0e0e0, #ffffff)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    animation: `${fadeClass === 'fade-in' ? 'fadeIn 1s ease-in-out' : 'fadeOut 0.5s ease-in-out'}, shine 3s linear infinite`,
    marginBottom: '2rem',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    maxWidth: '100vw',
    padding: '0 0.5rem',
  };

  const contentCardStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '800px',
    backgroundColor: '#111111',
    border: '1px solid #222',
    borderRadius: '10px',
    padding: '2rem',
    boxShadow: '0 8px 20px -8px rgba(255,255,255,0.1)',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
    margin: '0 1rem',
  };

  const sectionTitleStyle: React.CSSProperties = {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 700,
    marginTop: '2rem',
    marginBottom: '1rem',
    borderBottom: '1px solid #222',
    paddingBottom: '0.5rem',
  };

  const sectionStyle: React.CSSProperties = {
    color: '#aaa',
    fontSize: '1rem',
    lineHeight: 1.8,
    marginBottom: '1.5rem',
  };

  const emailCardStyle: React.CSSProperties = {
    backgroundColor: '#1a1a1a',
    border: '1px solid #333',
    borderRadius: '8px',
    padding: '1.5rem',
    marginBottom: '1rem',
    transition: 'all 0.3s ease',
  };

  const emailLabelStyle: React.CSSProperties = {
    color: '#888',
    fontSize: '0.85rem',
    marginBottom: '0.3rem',
  };

  const emailValueStyle: React.CSSProperties = {
    color: '#0066cc',
    fontSize: '1.1rem',
    fontWeight: 600,
    textDecoration: 'none',
  };

  const navButtonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#222',
    color: 'white',
    textDecoration: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: 500,
    border: '1px solid #333',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    gap: '0.5rem',
    marginTop: '2rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={textStyle}>{texts[textIndex]}</h1>

      <div
        style={contentCardStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.borderColor = '#444';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = '#222';
        }}
      >
        <h2 style={sectionTitleStyle}>Contact Contagion</h2>
        <p style={sectionStyle}>
          Thank you for your interest in Contagion! Our team is dedicated to advancing defensive cybersecurity capabilities. Below are the appropriate contact information for your inquiries:
        </p>

        <h3 style={sectionTitleStyle}>General Inquiries</h3>
        <div style={emailCardStyle}>
          <div style={emailLabelStyle}>Email</div>
          <a href="mailto:admin@contagion.dev" style={emailValueStyle}>
            admin@contagion.dev
          </a>
        </div>

        <h3 style={sectionTitleStyle}>Support & Help</h3>
        <div style={emailCardStyle}>
          <div style={emailLabelStyle}>Email</div>
          <a href="mailto:help@contagion.dev" style={emailValueStyle}>
            help@contagion.dev
          </a>
        </div>

        <h3 style={sectionTitleStyle}>Security Reports</h3>
        <div style={emailCardStyle}>
          <div style={emailLabelStyle}>Email</div>
          <a href="mailto:security@contagion.dev" style={emailValueStyle}>
            security@contagion.dev
          </a>
          <p style={{ ...sectionStyle, marginTop: '0.5rem', color: '#888' }}>
            For vulnerability disclosures and security concerns
          </p>
        </div>

        <h3 style={sectionTitleStyle}>Community</h3>
        <p style={sectionStyle}>
          You can also join our community discussions on GitHub:
        </p>
        <a
          href="https://github.com/Aegirom/Contagion"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...emailValueStyle, display: 'block', marginTop: '0.5rem' }}
        >
          github.com/Aegirom/Contagion
        </a>

        <h3 style={sectionTitleStyle}>Office Hours</h3>
        <p style={sectionStyle}>
          We are currently building our platform and will be offering community office hours soon.
          Stay tuned for updates on our GitHub repository!
        </p>

        <h3 style={sectionTitleStyle}>Response Time</h3>
        <p style={sectionStyle}>
          We strive to respond to all inquiries within 24-48 hours. For urgent security concerns,
          please use the security@contagion.dev address.
        </p>
      </div>

      <Link to="/" style={navButtonStyle}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
          <path d="M10 17l5-5-5-5v10zm-5-7h2v10H5V10zm14 0h2v10h-2V10z"/>
        </svg>
        Back to Home
      </Link>

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

function AdPersonalization() {
  const [textIndex, setTextIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const texts = ["Contagion", "Coming Soon", "Ad Personalization"];

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
    padding: '1rem',
  };

  const textStyle: React.CSSProperties = {
    fontSize: 'clamp(3rem, 15vw, 12rem)',
    fontWeight: 900,
    letterSpacing: '-0.05em',
    userSelect: 'none',
    background: 'linear-gradient(90deg, #ffffff, #e0e0e0, #ffffff)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    animation: `${fadeClass === 'fade-in' ? 'fadeIn 1s ease-in-out' : 'fadeOut 0.5s ease-in-out'}, shine 3s linear infinite`,
    marginBottom: '2rem',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    maxWidth: '100vw',
    padding: '0 0.5rem',
  };

  const contentCardStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '800px',
    backgroundColor: '#111111',
    border: '1px solid #222',
    borderRadius: '10px',
    padding: '2rem',
    boxShadow: '0 8px 20px -8px rgba(255,255,255,0.1)',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
    margin: '0 1rem',
  };

  const sectionTitleStyle: React.CSSProperties = {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 700,
    marginTop: '2rem',
    marginBottom: '1rem',
    borderBottom: '1px solid #222',
    paddingBottom: '0.5rem',
  };

  const sectionStyle: React.CSSProperties = {
    color: '#aaa',
    fontSize: '1rem',
    lineHeight: 1.8,
    marginBottom: '1.5rem',
  };

  const linkStyle: React.CSSProperties = {
    color: '#0066cc',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const navButtonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#222',
    color: 'white',
    textDecoration: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: 500,
    border: '1px solid #333',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    gap: '0.5rem',
    marginTop: '2rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={textStyle}>{texts[textIndex]}</h1>

      <div
        style={contentCardStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.borderColor = '#444';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = '#222';
        }}
      >
        <h2 style={sectionTitleStyle}>Ad Personalization</h2>
        <p style={sectionStyle}>
          Last Updated: March 2026
        </p>

        <h3 style={sectionTitleStyle}>About Ad Personalization</h3>
        <p style={sectionStyle}>
          Google AdSense uses cookies and similar technologies to personalize ads based on your interests and browsing history. This helps advertisers show you more relevant ads and helps publishers monetize their content.
        </p>

        <h3 style={sectionTitleStyle}>How Ad Personalization Works</h3>
        <p style={sectionStyle}>
          When you visit websites that display Google ads, Google may collect information about your browsing behavior through:
        </p>
        <ul style={{ ...sectionStyle, paddingLeft: '2rem' }}>
          <li>Cookies stored in your browser</li>
          <li>Unique advertising identifiers on mobile devices</li>
          <li>IP address and device information</li>
          <li>Pages you visit and interactions with ads</li>
        </ul>

        <h3 style={sectionTitleStyle}>Control Your Ad Experience</h3>
        <p style={sectionStyle}>
          You can control how Google personalizes ads for you through the following methods:
        </p>
        <ul style={{ ...sectionStyle, paddingLeft: '2rem' }}>
          <li>
            <a
              href="https://adssettings.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Google Ad Settings
            </a>
            - Manage your ad personalization preferences directly
          </li>
          <li>
            <a
              href="https://www.google.com/privacy.html"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Google Privacy Policy
            </a>
            - Learn more about Google's privacy practices
          </li>
          <li>
            <a
              href="https://support.google.com/ads/answer/2662922"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Opt-out of personalized advertising
            </a>
          </li>
        </ul>

        <h3 style={sectionTitleStyle}>Contagion's Ad Practices</h3>
        <p style={sectionStyle}>
          Contagion uses Google AdSense to display advertisements on our website. We do not have access to or control over the cookies used by Google. For more information about how we handle user data, please refer to our <Link to="/privacy-policy" style={linkStyle}>Privacy Policy</Link>.
        </p>

        <h3 style={sectionTitleStyle}>Third-Party Advertisers</h3>
        <p style={sectionStyle}>
          Our website may feature ads served by third-party advertising networks. These third parties may use cookies, web beacons, or similar technologies to collect information about your browsing activities on our site and other websites to provide targeted advertisements.
        </p>
        <p style={sectionStyle}>
          To opt out of targeted advertising from participating companies, visit:
        </p>
        <ul style={{ ...sectionStyle, paddingLeft: '2rem' }}>
          <li>
            <a
              href="https://www.aboutads.info/choices/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Digital Advertising Alliance (DAA)
            </a>
          </li>
          <li>
            <a
              href="https://www.networkadvertising.org/choices/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Network Advertising Initiative (NAI)
            </a>
          </li>
        </ul>

        <h3 style={sectionTitleStyle}>Contact Us</h3>
        <p style={sectionStyle}>
          If you have questions about our ad practices or this Ad Personalization page, please contact us at:
        </p>
        <p style={{ ...sectionStyle, fontWeight: 600, color: '#fff' }}>
          Email: admin@contagion.dev
        </p>
      </div>

      <Link to="/" style={navButtonStyle}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
          <path d="M10 17l5-5-5-5v10zm-5-7h2v10H5V10zm14 0h2v10h-2V10z"/>
        </svg>
        Back to Home
      </Link>

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

function AdvertiserDisclosure() {
  const [textIndex, setTextIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const texts = ["Contagion", "Coming Soon", "Advertiser Disclosure"];

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
    padding: '1rem',
  };

  const textStyle: React.CSSProperties = {
    fontSize: 'clamp(3rem, 15vw, 12rem)',
    fontWeight: 900,
    letterSpacing: '-0.05em',
    userSelect: 'none',
    background: 'linear-gradient(90deg, #ffffff, #e0e0e0, #ffffff)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    animation: `${fadeClass === 'fade-in' ? 'fadeIn 1s ease-in-out' : 'fadeOut 0.5s ease-in-out'}, shine 3s linear infinite`,
    marginBottom: '2rem',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    maxWidth: '100vw',
    padding: '0 0.5rem',
  };

  const contentCardStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '800px',
    backgroundColor: '#111111',
    border: '1px solid #222',
    borderRadius: '10px',
    padding: '2rem',
    boxShadow: '0 8px 20px -8px rgba(255,255,255,0.1)',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
    margin: '0 1rem',
  };

  const sectionTitleStyle: React.CSSProperties = {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 700,
    marginTop: '2rem',
    marginBottom: '1rem',
    borderBottom: '1px solid #222',
    paddingBottom: '0.5rem',
  };

  const sectionStyle: React.CSSProperties = {
    color: '#aaa',
    fontSize: '1rem',
    lineHeight: 1.8,
    marginBottom: '1.5rem',
  };

  const linkStyle: React.CSSProperties = {
    color: '#0066cc',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const navButtonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#222',
    color: 'white',
    textDecoration: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: 500,
    border: '1px solid #333',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    gap: '0.5rem',
    marginTop: '2rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={textStyle}>{texts[textIndex]}</h1>

      <div
        style={contentCardStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.borderColor = '#444';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = '#222';
        }}
      >
        <h2 style={sectionTitleStyle}>Advertiser Disclosure</h2>
        <p style={sectionStyle}>
          Last Updated: March 2026
        </p>

        <h3 style={sectionTitleStyle}>About Our Advertising</h3>
        <p style={sectionStyle}>
          Contagion displays advertisements through Google AdSense, a third-party advertising network operated by Google LLC. This page provides information about the advertisers and the advertising practices used on our website.
        </p>

        <h3 style={sectionTitleStyle}>Advertising Partners</h3>
        <p style={sectionStyle}>
          Our website displays ads provided by Google's advertising network. Google AdSense connects advertisers with publishers to display relevant advertisements. The advertisements you see are determined by:
        </p>
        <ul style={{ ...sectionStyle, paddingLeft: '2rem' }}>
          <li>Your browsing history and interests</li>
          <li>Content of the pages you visit</li>
          <li>Location-based targeting</li>
          <li>Time of day and device type</li>
        </ul>

        <h3 style={sectionTitleStyle}>Advertiser Information</h3>
        <p style={sectionStyle}>
          The advertisers on our site are managed through Google AdSense. We do not have direct relationships with individual advertisers. To learn more about specific advertisers or to report an ad, please visit:
        </p>
        <ul style={{ ...sectionStyle, paddingLeft: '2rem' }}>
          <li>
            <a
              href="https://support.google.com/adsense/answer/160050"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Google AdSense Help
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/adsense/adformats"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Google AdSense Ad Formats
            </a>
          </li>
        </ul>

        <h3 style={sectionTitleStyle}>Ad Classification</h3>
        <p style={sectionStyle}>
          Google classifies ads into various categories. Some ads may be labeled as "Ad" or "Advertisement" to clearly distinguish them from our editorial content. We do not endorse or guarantee the products, services, or claims made by advertisers.
        </p>

        <h3 style={sectionTitleStyle}>Reporting Concerns</h3>
        <p style={sectionStyle}>
          If you see an inappropriate or misleading advertisement on our site, please help us maintain high advertising standards by reporting it:
        </p>
        <ul style={{ ...sectionStyle, paddingLeft: '2rem' }}>
          <li>
            <a
              href="https://support.google.com/adsense/troubleshooting/1722050"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Report inappropriate ads to Google
            </a>
          </li>
          <li>
            Contact us at: admin@contagion.dev
          </li>
        </ul>

        <h3 style={sectionTitleStyle}>Revenue and Sponsorship</h3>
        <p style={sectionStyle}>
          Advertising revenue helps support Contagion's mission to provide a defensive cybersecurity platform. The advertisements displayed are contextual and relevant to the content on our pages. We are a participant in the Google AdSense program and comply with their policies and guidelines.
        </p>

        <h3 style={sectionTitleStyle}>Policy Compliance</h3>
        <p style={sectionStyle}>
          Contagion is committed to complying with Google's advertising policies. We do not:
        </p>
        <ul style={{ ...sectionStyle, paddingLeft: '2rem' }}>
          <li>Click on our own advertisements</li>
          <li>Use invalid clicks or impressions</li>
          <li>Place ads in a way that encourages accidental clicks</li>
          <li>Host prohibited content as defined by Google policies</li>
        </ul>

        <h3 style={sectionTitleStyle}>Contact Us</h3>
        <p style={sectionStyle}>
          For questions about our advertiser disclosure or advertising practices, please contact us at:
        </p>
        <p style={{ ...sectionStyle, fontWeight: 600, color: '#fff' }}>
          Email: admin@contagion.dev
        </p>
      </div>

      <Link to="/" style={navButtonStyle}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
          <path d="M10 17l5-5-5-5v10zm-5-7h2v10H5V10zm14 0h2v10h-2V10z"/>
        </svg>
        Back to Home
      </Link>

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

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', width: '100%', backgroundColor: 'black' }}>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ad-personalization" element={<AdPersonalization />} />
        <Route path="/advertiser-disclosure" element={<AdvertiserDisclosure />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
