import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Header() {
  return (
    <header style={{ background: '#f1f8fc', padding: '20px', borderBottom: '2px solid #0074c7' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Première ligne : Logo et menu */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          
          {/* Logo cliquable */}
          <Link to="/" style={{ textDecoration: 'none', color: '#384050' }}>
            <div>
              <h1 style={{ margin: '0', fontSize: '24px' }}>Trouve ton artisan !</h1>
              <p style={{ margin: '0', fontSize: '14px', color: '#0074c7' }}>Avec la région Auvergne-Rhône-Alpes</p>
            </div>
          </Link>
          
          {/* Menu de navigation */}
          <nav>
            <Link to="/batiment" style={{ margin: '0 15px', textDecoration: 'none', color: '#0074c7', fontWeight: 'bold' }}>
              Bâtiment
            </Link>
            <Link to="/services" style={{ margin: '0 15px', textDecoration: 'none', color: '#0074c7', fontWeight: 'bold' }}>
              Services
            </Link>
            <Link to="/fabrication" style={{ margin: '0 15px', textDecoration: 'none', color: '#0074c7', fontWeight: 'bold' }}>
              Fabrication
            </Link>
            <Link to="/alimentation" style={{ margin: '0 15px', textDecoration: 'none', color: '#0074c7', fontWeight: 'bold' }}>
              Alimentation
            </Link>
          </nav>
          
        </div>
        
        {/* Deuxième ligne : Barre de recherche */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SearchBar />
        </div>
        
      </div>
    </header>
  );
}

export default Header;