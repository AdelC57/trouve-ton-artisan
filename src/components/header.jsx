import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

/**
 * Composant Header
 * Affiche le logo, le menu de navigation et la barre de recherche
 * Présent sur toutes les pages
 */
function Header() {
  return (
    <header className="bg-light border-bottom border-primary border-3">
      <div className="container py-3">
        
        {/* Première ligne : Logo et Navigation */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          
          {/* Logo cliquable (retour à l'accueil) */}
          <Link to="/" className="text-decoration-none">
            <div>
              <h1 className="h3 mb-0 text-dark">Trouve ton artisan !</h1>
              <p className="small text-primary mb-0">Avec la région Auvergne-Rhône-Alpes</p>
            </div>
          </Link>
          
          {/* Menu de navigation par catégorie */}
          {/* Caché sur mobile (d-none), visible sur tablette+ (d-md-flex) */}
          <nav className="d-none d-md-flex gap-3">
            <Link to="/batiment" className="btn btn-outline-primary">
              Bâtiment
            </Link>
            <Link to="/services" className="btn btn-outline-primary">
              Services
            </Link>
            <Link to="/fabrication" className="btn btn-outline-primary">
              Fabrication
            </Link>
            <Link to="/alimentation" className="btn btn-outline-primary">
              Alimentation
            </Link>
          </nav>
          
        </div>
        
        {/* Deuxième ligne : Barre de recherche centrée */}
        <div className="d-flex justify-content-center">
          <SearchBar />
        </div>
        
      </div>
    </header>
  );
}

export default Header;