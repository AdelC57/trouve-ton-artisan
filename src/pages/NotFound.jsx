import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main>
      <div className="text-center py-5">
        <div className="display-1 text-primary fw-bold mb-4">404</div>
        <h1 className="h2 mb-3">Oups ! Page non trouvée</h1>
        <p className="lead text-muted mb-4">
          Désolé, la page que vous recherchez est introuvable ou a été déplacée.
        </p>
        
        <div className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary opacity-25">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        
        <Link to="/" className="btn btn-primary btn-lg">
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}

export default NotFound;