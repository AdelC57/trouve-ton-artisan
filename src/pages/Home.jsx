import ArtisanCard from '../components/ArtisanCard';
import artisansData from '../data/datas.json';

function Home() {
  const artisansDuMois = artisansData.filter(artisan => artisan.top === true);
  
  return (
    <main>
      <h1>Trouve ton artisan !</h1>
      <p>Avec la région Auvergne-Rhône-Alpes</p>
      
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
            id={artisan.id}
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