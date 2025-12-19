import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { Books } from './pages/Books/Books';
import { BookDetail } from './pages/BookDetail/BookDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:id" element={<BookDetail />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2025 BookWiki - Un projet portfolio par acinox</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
