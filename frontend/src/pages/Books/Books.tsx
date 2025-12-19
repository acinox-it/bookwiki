import { useState, useEffect } from 'react';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { TagFilter } from '../../components/TagFilter/TagFilter';
import { BookList } from '../../components/BookList/BookList';
import { api } from '../../services/api';
import type { Book } from '../../types';
import './Books.css';

export const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'BookWiki | Books';
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [booksData, tagsData] = await Promise.all([
          api.getBooks(),
          api.getTags()
        ]);
        setBooks(booksData);
        setFilteredBooks(booksData);
        setTags(tagsData);
      } catch (err) {
        setError('Failed to load books. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let result = [...books];

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(book =>
        book.title.toLowerCase().includes(searchLower) ||
        book.author.toLowerCase().includes(searchLower)
      );
    }

    if (selectedTag) {
      result = result.filter(book =>
        book.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
      );
    }

    setFilteredBooks(result);
  }, [searchTerm, selectedTag, books]);

  if (error) {
    return (
      <div className="books-page">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="books-page">
      <div className="books-header">
        <h1>Browse Books</h1>
        <p className="books-count">
          {loading ? 'Loading...' : `${filteredBooks.length} book${filteredBooks.length !== 1 ? 's' : ''} found`}
        </p>
      </div>

      <SearchBar 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
      />

      <TagFilter 
        tags={tags} 
        selectedTag={selectedTag} 
        onTagSelect={setSelectedTag} 
      />

      <BookList books={filteredBooks} loading={loading} />
    </div>
  );
};
