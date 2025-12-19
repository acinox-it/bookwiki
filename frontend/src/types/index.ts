export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  isbn: string;
  tags: string[];
  summary: string;
  coverUrl: string;
}

export interface BookCardProps {
  book: Book;
}

export interface BookListProps {
  books: Book[];
  loading?: boolean;
}

export interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export interface TagFilterProps {
  tags: string[];
  selectedTag: string;
  onTagSelect: (tag: string) => void;
}
