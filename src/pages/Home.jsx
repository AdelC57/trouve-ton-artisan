import ArtisanCard from '../components/ArtisanCard';
import artisansData from '../data/datas.json';

function Home() {
  // Filtre uniquement les artisans du mois (top: true)
  const artisansDuMois = artisansData.filter(artisan => artisan.top === true);
  
  return (
    <main>
      <section>
        <h2>Comment trouver mon artisan ?</h2>
        <div>
          <p><strong>1.</strong> Choisir la catégorie d'artisanat dans le menu.</p>
          <p><strong>2.</strong> Choisir un artisan.</p>
          <p><strong>3.</strong> Le contacter via le formulaire de contact.</p>
          <p><strong>4.</strong> Une réponse sera apportée sous 48h.</p>
        </div>
      </section>
      
      <section>
        <h2>Les trois artisans du mois</h2>
        {artisansDuMois.map((artisan) => (
          <ArtisanCard 
            key={artisan.id}
            nom={artisan.name}
            note={artisan.note}
            specialite={artisan.specialty}
            ville={artisan.location}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;