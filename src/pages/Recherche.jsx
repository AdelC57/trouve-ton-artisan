import { useSearchParams } from 'react-router-dom';
import ArtisanCard from '../components/ArtisanCard';
import artisansData from '../data/datas.json';

function Recherche() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
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
      <div className="text-center mb-5">
        <h1 className="display-5">Résultats de recherche</h1>
        <p className="lead">Recherche : <strong>"{query}"</strong></p>
        <p className="text-muted">{resultats.length} artisan(s) trouvé(s)</p>
      </div>
      
      {resultats.length > 0 ? (
        <div className="row g-4">
          {resultats.map((artisan) => (
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
        <div className="alert alert-warning text-center" role="alert">
          <h4 className="alert-heading">Aucun résultat</h4>
          <p>Aucun artisan ne correspond à votre recherche "<strong>{query}</strong>".</p>
          <hr />
          <p className="mb-0">Essayez avec un autre mot-clé (nom, spécialité ou ville).</p>
        </div>
      )}
    </main>
  );
}

export default Recherche;