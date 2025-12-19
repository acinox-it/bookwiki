import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import type { Book } from '../../types';
import './BookDetail.css';

export const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const data = await api.getBook(parseInt(id));
        setBook(data);
        document.title = `BookWiki | ${data.title}`;
      } catch (err) {
        setError('Book not found');
        document.title = 'BookWiki | Book Not Found';
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return (
      <div className="book-detail-page">
        <div className="loading-detail">Loading book details...</div>
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="book-detail-page">
        <div className="error-detail">
          <h2>{error || 'Book not found'}</h2>
          <Link to="/books" className="back-button">Back to Books</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="book-detail-page">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>

      <div className="book-detail-content">
        <div className="book-detail-image">
          <img 
            src={book.coverUrl} 
            alt={book.title}
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/400x600?text=No+Cover';
            }}
          />
        </div>

        <div className="book-detail-info">
          <h1 className="book-detail-title">{book.title}</h1>
          
          <div className="book-meta">
            <div className="meta-item">
              <span className="meta-label">Author:</span>
              <span className="meta-value">{book.author}</span>
            </div>
            
            <div className="meta-item">
              <span className="meta-label">Year:</span>
              <span className="meta-value">{book.year}</span>
            </div>
            
            <div className="meta-item">
              <span className="meta-label">ISBN:</span>
              <span className="meta-value">{book.isbn}</span>
            </div>
          </div>

          <div className="book-tags-section">
            <h3>Tags</h3>
            <div className="book-detail-tags">
              {book.tags.map((tag, index) => (
                <span key={index} className="detail-tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="book-summary-section">
            <h3>Summary</h3>
            <p className="book-summary">{book.summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
