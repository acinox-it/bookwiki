# BookWiki

BookWiki is a full-stack web application built with React (frontend) and Express.js (backend). It provides an interactive library of technical books with navigation, search, and detailed views.

## Features

- 📚 Browse a collection of technical books  
- 🔍 Search by title or author  
- 🏷️ Filter by technology tags  
- 📖 Detailed information with summaries, ISBN, and publication years  
- 📱 Fully responsive design  
- ⚡ Modern and fast technology stack  

## Tech Stack

### Frontend
- React 19 with TypeScript  
- React Router for navigation  
- Vite for build  
- CSS Modules for styling  

### Backend
- Node.js with Express.js  
- RESTful API architecture  
- CORS enabled  
- JSON data storage  

## Project Structure

```
bookwiki/
├── frontend/               # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   │   ├── BookCard/
│   │   │   ├── BookList/
│   │   │   ├── SearchBar/
│   │   │   ├── TagFilter/
│   │   │   └── Navbar/
│   │   ├── pages/         # Page components
│   │   │   ├── Home/
│   │   │   ├── Books/
│   │   │   └── BookDetail/
│   │   ├── services/      # API service layer
│   │   ├── types/         # TypeScript type definitions
│   │   └── App.tsx        # Main component
│   └── package.json
│
├── backend/               # Express.js backend API
│   ├── src/
│   │   ├── routes/       # API routes
│   │   ├── data/         # JSON data files
│   │   ├── middleware/   # Custom middleware
│   │   └── server.js     # Express server
│   └── package.json
│
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm  
- Git  

### Installation

1. Clone the repository:
```bash
git clone https://github.com/acinox-it/bookwiki.git
cd bookwiki
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

### Running the Application

#### Development Mode

1. Start the backend server:
```bash
cd backend
npm run dev
```
Backend runs at http://localhost:5000

2. In a new terminal, start the frontend:
```bash
cd frontend
npm run dev
```
Frontend runs at http://localhost:5173

#### Production Mode

1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Start the backend:
```bash
cd backend
npm start
```

## API Endpoints

- `GET /api/books` - Get all books (supports ?search and ?tag parameters)  
- `GET /api/books/:id` - Get a specific book by ID  
- `GET /api/books/meta/tags` - Get all available tags  
- `GET /api/health` - Health check endpoint  

## Environment Variables

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

### Backend (.env)
```env
PORT=5000
NODE_ENV=development
```

## Docker Deployment

Docker configuration is available for containerized deployment with Nginx Proxy Manager for HTTPS support.

## Contribution

This is a portfolio project. Feel free to fork and adapt it for your own use.

## License

MIT

## Author

Acinox - 2025