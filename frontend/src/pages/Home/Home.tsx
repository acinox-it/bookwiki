import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export const Home = () => {
  useEffect(() => {
    document.title = 'BookWiki | Home';
  }, []);

  return (
    <div className="home">
      <div className="hero">
        <h1 className="hero-title">Welcome to BookWiki</h1>
        <p className="hero-subtitle">
          Your curated collection of technical books for software developers
        </p>
        <Link to="/books" className="cta-button">
          Browse Books
        </Link>
      </div>
      
      <div className="features">
        <div className="feature-card">
          <div className="feature-icon">📚</div>
          <h3>Curated Collection</h3>
          <p>Handpicked technical books covering programming, architecture, and best practices</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🔍</div>
          <h3>Easy Search</h3>
          <p>Find books by title, author, or filter by technology tags</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">📖</div>
          <h3>Detailed Info</h3>
          <p>Get comprehensive information including summaries, ISBNs, and publication years</p>
        </div>
      </div>
    </div>
  );
};
