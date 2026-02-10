import { useLocation } from 'react-router-dom';
import ArtisanCard from '../components/ArtisanCard';
import artisansData from '../data/datas.json';

/**
 * Page ListeArtisans
 * Affiche la liste des artisans filtrés par catégorie
 * Utilisée pour les pages : /batiment, /services, /fabrication, /alimentation
 */
function ListeArtisans() {
  // Récupère l'URL actuelle
  const location = useLocation();
  
  // Détermine la catégorie en fonction du chemin de l'URL
  let categorie = '';
  if (location.pathname === '/batiment') categorie = 'Bâtiment';
  if (location.pathname === '/services') categorie = 'Services';
  if (location.pathname === '/fabrication') categorie = 'Fabrication';
  if (location.pathname === '/alimentation') categorie = 'Alimentation';
  
  // Filtre les artisans par catégorie
  const artisansFiltres = artisansData.filter(artisan => 
    artisan.category === categorie
  );
  
  return (
    <main>
      {/* En-tête de la page */}
      <div className="text-center mb-5">
        <h1 className="display-5">Artisans - {categorie}</h1>
        <p className="lead">en Auvergne-Rhône-Alpes</p>
        <p className="text-muted">{artisansFiltres.length} artisan(s) trouvé(s)</p>
      </div>
      
      {/* Liste des artisans ou message si aucun résultat */}
      {artisansFiltres.length > 0 ? (
        <div className="row g-4">
          {/* Boucle sur les artisans filtrés */}
          {artisansFiltres.map((artisan) => (
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
      ) : (
        // Message si aucun artisan trouvé
        <div className="alert alert-info text-center" role="alert">
          Aucun artisan trouvé dans cette catégorie.
        </div>
      )}
    </main>
  );
}

export default ListeArtisans;