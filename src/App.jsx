// Les composants importé
import Header from "./components/header";
import Footer from "./components/footer";
import ArtisanCard from "./components/ArtisanCard";
import artisansData from './data/datas.json';

function App() {
  /* Filtrer les artisan du mois */
  const artisansDuMois = artisansData.filter(artisan => artisan.top === true)
  return (
    <div>
      <Header />
       <main>
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
      </main>

      <Footer />
    </div>
  );
}

export default App;
