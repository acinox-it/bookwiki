const express = require('express');
const router = express.Router();
const books = require('../data/books.json');

// GET all books with optional search and filter
router.get('/', (req, res) => {
  try {
    const { search, tag } = req.query;
    let filteredBooks = [...books];

    // Search by title or author
    if (search) {
      const searchLower = search.toLowerCase();
      filteredBooks = filteredBooks.filter(book =>
        book.title.toLowerCase().includes(searchLower) ||
        book.author.toLowerCase().includes(searchLower)
      );
    }

    // Filter by tag
    if (tag) {
      filteredBooks = filteredBooks.filter(book =>
        book.tags.some(t => t.toLowerCase() === tag.toLowerCase())
      );
    }

    res.json(filteredBooks);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching books' });
  }
});

// GET single book by ID
router.get('/:id', (req, res) => {
  try {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);

    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching book' });
  }
});

// GET all unique tags
router.get('/meta/tags', (req, res) => {
  try {
    const tags = [...new Set(books.flatMap(book => book.tags))].sort();
    res.json(tags);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tags' });
  }
});

module.exports = router;
