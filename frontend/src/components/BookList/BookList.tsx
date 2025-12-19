import type { Book } from '../../types';
import { BookCard } from '../BookCard/BookCard';
import './BookList.css';

interface BookListProps {
  books: Book[];
  loading?: boolean;
}

export const BookList = ({ books, loading }: BookListProps) => {
  if (loading) {
    return <div className="loading">Loading books...</div>;
  }

  if (books.length === 0) {
    return <div className="no-results">No books found. Try adjusting your search or filters.</div>;
  }

  return (
    <div className="book-list">
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};
