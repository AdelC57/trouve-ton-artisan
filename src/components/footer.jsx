function Footer() {
  return (
    <footer className="bg-primary text-white mt-5">
      <div className="container py-4">
        <div className="row">
          
          {/* Colonne 1 : Coordonnées */}
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
          
          {/* Colonne 2 : Liens légaux */}
          <div className="col-md-6">
            <h5>Informations légales</h5>
            <nav className="d-flex flex-column gap-2">
              <a href="/mentions-legales" className="text-white text-decoration-none">
                Mentions légales
              </a>
              <a href="/donnees-personnelles" className="text-white text-decoration-none">
                Données personnelles
              </a>
              <a href="/accessibilite" className="text-white text-decoration-none">
                Accessibilité
              </a>
              <a href="/cookies" className="text-white text-decoration-none">
                Cookies
              </a>
            </nav>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;