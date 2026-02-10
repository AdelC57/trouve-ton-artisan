import { useSearchParams } from 'react-router-dom';
import ArtisanCard from '../components/ArtisanCard';
import artisansData from '../data/datas.json';

function Recherche() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  // Filtre les artisans par nom, spécialité ou ville
  const resultats = artisansData.filter(artisan => {
    const searchLower = query.toLowerCase();
    return (
      artisan.name.toLowerCase().includes(searchLower) ||
      artisan.specialty.toLowerCase().includes(searchLower) ||
      artisan.location.toLowerCase().includes(searchLower)
    );
  });
  
  return (
    <main>
      <h1>Résultats de recherche</h1>
      <p>Recherche : <strong>"{query}"</strong></p>
      <p>{resultats.length} artisan(s) trouvé(s)</p>
      
      {resultats.length > 0 ? (
        resultats.map((artisan) => (
          <ArtisanCard 
            key={artisan.id}
            id={artisan.id}
            nom={artisan.name}
            note={artisan.note}
            specialite={artisan.specialty}
            ville={artisan.location}
          />
        ))
      ) : (
        <p>Aucun artisan ne correspond à votre recherche.</p>
      )}
    </main>
  );
}

export default Recherche;