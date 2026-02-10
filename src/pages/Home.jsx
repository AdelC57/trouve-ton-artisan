import ArtisanCard from '../components/ArtisanCard';
import artisansData from '../data/datas.json';

/**
 * Page d'accueil
 * Affiche la section "Comment trouver mon artisan" et les 3 artisans du mois
 */
function Home() {
  // Filtre uniquement les artisans avec top: true (artisans du mois)
  const artisansDuMois = artisansData.filter(artisan => artisan.top === true);
  
  return (
    <main>
      {/* Section Hero - Titre principal */}
      <div className="text-center mb-5">
        <h1 className="display-4 mb-3">Trouve ton artisan !</h1>
        <p className="lead text-primary">Avec la région Auvergne-Rhône-Alpes</p>
      </div>
      
      {/* Section "Comment ça marche" - Les 4 étapes */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Comment trouver mon artisan ?</h2>
        <div className="row g-4">
          
          {/* Étape 1 */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 text-center border-primary">
              <div className="card-body">
                <div className="display-4 text-primary mb-3">1</div>
                <p className="card-text">Choisir la catégorie d'artisanat dans le menu.</p>
              </div>
            </div>
          </div>
          
          {/* Étape 2 */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 text-center border-primary">
              <div className="card-body">
                <div className="display-4 text-primary mb-3">2</div>
                <p className="card-text">Choisir un artisan.</p>
              </div>
            </div>
          </div>
          
          {/* Étape 3 */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 text-center border-primary">
              <div className="card-body">
                <div className="display-4 text-primary mb-3">3</div>
                <p className="card-text">Le contacter via le formulaire de contact.</p>
              </div>
            </div>
          </div>
          
          {/* Étape 4 */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 text-center border-primary">
              <div className="card-body">
                <div className="display-4 text-primary mb-3">4</div>
                <p className="card-text">Une réponse sera apportée sous 48h.</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      
      {/* Section Artisans du mois */}
      <section>
        <h2 className="text-center mb-4">Les trois artisans du mois</h2>
        <div className="row g-4">
          {/* Boucle sur les 3 artisans du mois */}
          {artisansDuMois.map((artisan) => (
            <div key={artisan.id} className="col-md-6 col-lg-4">
              <ArtisanCard 
                id={artisan.id}
                nom={artisan.name}
                note={artisan.note}
                specialite={artisan.specialty}
                ville={artisan.location}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;