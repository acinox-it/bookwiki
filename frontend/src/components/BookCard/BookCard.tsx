import { Link } from 'react-router-dom';
import type { Book } from '../../types';
import './BookCard.css';

interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => {
  return (
    <Link to={`/books/${book.id}`} className="book-card">
      <div className="book-card-image">
        <img 
          src={book.coverUrl} 
          alt={book.title}
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/200x300?text=No+Cover';
          }}
        />
      </div>
      <div className="book-card-content">
        <h3 className="book-card-title">{book.title}</h3>
        <p className="book-card-author">{book.author}</p>
        <p className="book-card-year">{book.year}</p>
        <div className="book-card-tags">
          {book.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
};
