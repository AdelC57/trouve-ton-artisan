import { Link } from 'react-router-dom';
import { useState } from 'react';
import SearchBar from './SearchBar';

/**
 * Composant Header
 * Affiche le logo, le menu de navigation (responsive avec hamburger) et la barre de recherche
 * Présent sur toutes les pages
 */
function Header() {
  // État pour gérer l'ouverture/fermeture du menu mobile
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-light border-bottom border-primary border-3">
      <div className="container py-3">
        
        {/* Première ligne : Logo et bouton hamburger */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          
          {/* Logo cliquable (retour à l'accueil) */}
          <Link to="/" className="text-decoration-none">
            <div>
              <h1 className="h3 mb-0 text-dark">Trouve ton artisan !</h1>
              <p className="small text-primary mb-0">Avec la région Auvergne-Rhône-Alpes</p>
            </div>
          </Link>
          
          {/* Bouton hamburger (visible uniquement sur mobile) */}
          <button
            className="btn btn-primary d-md-none"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu de navigation"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
          
          {/* Menu de navigation (desktop) */}
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
        
        {/* Menu mobile (collapse) */}
        {menuOpen && (
          <nav className="d-md-none mb-3">
            <div className="d-flex flex-column gap-2">
              <Link 
                to="/batiment" 
                className="btn btn-outline-primary"
                onClick={() => setMenuOpen(false)}
              >
                Bâtiment
              </Link>
              <Link 
                to="/services" 
                className="btn btn-outline-primary"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/fabrication" 
                className="btn btn-outline-primary"
                onClick={() => setMenuOpen(false)}
              >
                Fabrication
              </Link>
              <Link 
                to="/alimentation" 
                className="btn btn-outline-primary"
                onClick={() => setMenuOpen(false)}
              >
                Alimentation
              </Link>
            </div>
          </nav>
        )}
        
        {/* Barre de recherche */}
        <div className="d-flex justify-content-center">
          <SearchBar />
        </div>
        
      </div>
    </header>
  );
}

export default Header;