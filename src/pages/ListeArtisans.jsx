import { useLocation } from 'react-router-dom';
import ArtisanCard from '../components/ArtisanCard';
import artisansData from '../data/datas.json';

function ListeArtisans() {
  const location = useLocation();
  
  let categorie = '';
  if (location.pathname === '/batiment') categorie = 'Bâtiment';
  if (location.pathname === '/services') categorie = 'Services';
  if (location.pathname === '/fabrication') categorie = 'Fabrication';
  if (location.pathname === '/alimentation') categorie = 'Alimentation';
  
  // Filtre les artisans par catégorie (comparaison directe)
  const artisansFiltres = artisansData.filter(artisan => 
    artisan.category === categorie
  );
  
  return (
    <main>
      <h1>Artisans - {categorie}</h1>
      <p>Trouver un artisan près de chez vous !</p>
      
      {artisansFiltres.length > 0 ? (
        artisansFiltres.map((artisan) => (
          <ArtisanCard 
            key={artisan.id}
            nom={artisan.name}
            note={artisan.note}
            specialite={artisan.specialty}
            ville={artisan.location}
          />
        ))
      ) : (
        <p>Aucun artisan trouvé dans cette catégorie.</p>
      )}
    </main>
  );
}

export default ListeArtisans;