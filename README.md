# BookWiki

BookWiki est une application web full-stack construite avec React (frontend) et Express.js (backend). Elle propose une bibliothèque interactive de livres techniques avec navigation, recherche et vues détaillées.

## Fonctionnalités

- 📚 Parcourir une collection de livres techniques
- 🔍 Recherche par titre ou auteur
- 🏷️ Filtrer par tags de technologie
- 📖 Informations détaillées avec résumés, ISBN et années de publication
- 📱 Design entièrement responsive
- ⚡ Stack technologique moderne et rapide

## Stack Technique

### Frontend
- React 19 avec TypeScript
- React Router pour la navigation
- Vite pour le build
- CSS Modules pour le style

### Backend
- Node.js avec Express.js
- Architecture API RESTful
- CORS activé
- Stockage de données JSON

## Structure du Projet

```
bookwiki/
├── frontend/               # Application React frontend
│   ├── src/
│   │   ├── components/    # Composants UI réutilisables
│   │   │   ├── BookCard/
│   │   │   ├── BookList/
│   │   │   ├── SearchBar/
│   │   │   ├── TagFilter/
│   │   │   └── Navbar/
│   │   ├── pages/         # Composants de pages
│   │   │   ├── Home/
│   │   │   ├── Books/
│   │   │   └── BookDetail/
│   │   ├── services/      # Couche de service API
│   │   ├── types/         # Définitions de types TypeScript
│   │   └── App.tsx        # Composant principal
│   └── package.json
│
├── backend/               # API Express.js backend
│   ├── src/
│   │   ├── routes/       # Routes API
│   │   ├── data/         # Fichiers de données JSON
│   │   ├── middleware/   # Middleware personnalisé
│   │   └── server.js     # Serveur Express
│   └── package.json
│
└── README.md
```

## Démarrage

### Prérequis

- Node.js 18+ et npm
- Git

### Installation

1. Cloner le dépôt :
```bash
git clone https://github.com/acinox-it/bookwiki.git
cd bookwiki
```

2. Installer les dépendances backend :
```bash
cd backend
npm install
```

3. Installer les dépendances frontend :
```bash
cd ../frontend
npm install
```

### Lancer l'Application

#### Mode Développement

1. Démarrer le serveur backend :
```bash
cd backend
npm run dev
```
Le backend fonctionnera sur http://localhost:5000

2. Dans un nouveau terminal, démarrer le frontend :
```bash
cd frontend
npm run dev
```
Le frontend fonctionnera sur http://localhost:5173

#### Mode Production

1. Builder le frontend :
```bash
cd frontend
npm run build
```

2. Démarrer le backend :
```bash
cd backend
npm start
```

## Endpoints API

- `GET /api/books` - Obtenir tous les livres (supporte ?search et ?tag en paramètres)
- `GET /api/books/:id` - Obtenir un livre spécifique par ID
- `GET /api/books/meta/tags` - Obtenir tous les tags disponibles
- `GET /api/health` - Endpoint de vérification de santé

## Variables d'Environnement

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

### Backend (.env)
```
PORT=5000
NODE_ENV=development
```

## Déploiement Docker

La configuration Docker est disponible pour un déploiement conteneurisé avec Nginx Proxy Manager pour le support HTTPS.

## Contribution

Il s'agit d'un projet portfolio. N'hésitez pas à le forker et l'adapter pour votre propre usage.

## Licence

MIT

## Auteur

Acinox - 2025
