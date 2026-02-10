import { Link } from 'react-router-dom';

/**
 * Composant Footer
 * Affiche les coordonnées de la région et les liens vers les pages légales
 * Présent sur toutes les pages
 */
function Footer() {
  return (
    <footer className="bg-primary text-white mt-5">
      <div className="container py-4">
        <div className="row">
          
          {/* Colonne 1 : Coordonnées de la région */}
          <div className="col-md-6 mb-3 mb-md-0">
            <h5>Région Auvergne-Rhône-Alpes</h5>
            <p className="mb-1">101 cours Charlemagne</p>
            <p className="mb-1">CS 20033</p>
            <p className="mb-1">69269 LYON CEDEX 02</p>
            <p className="mb-1">France</p>
            <p className="mb-0">
              <strong>📞 04 26 73 40 00</strong>
            </p>
          </div>
          
          {/* Colonne 2 : Liens vers les pages légales */}
          <div className="col-md-6">
            <h5>Informations légales</h5>
            <nav className="d-flex flex-column gap-2">
              <Link to="/mentions-legales" className="text-white text-decoration-none">
                Mentions légales
              </Link>
              <Link to="/donnees-personnelles" className="text-white text-decoration-none">
                Données personnelles
              </Link>
              <Link to="/accessibilite" className="text-white text-decoration-none">
                Accessibilité
              </Link>
              <Link to="/cookies" className="text-white text-decoration-none">
                Cookies
              </Link>
            </nav>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;