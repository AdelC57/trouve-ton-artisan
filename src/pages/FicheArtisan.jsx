import { useParams } from 'react-router-dom';
import artisansData from '../data/datas.json';

function FicheArtisan() {
  // Récupère l'ID depuis l'URL
  const { id } = useParams();
  
  // Trouve l'artisan correspondant
  const artisan = artisansData.find(a => a.id === id);
  
  // Si l'artisan n'existe pas
  if (!artisan) {
    return <p>Artisan non trouvé</p>;
  }
  
  return (
    <main>
      <h1>{artisan.name}</h1>
      <p>⭐ {artisan.note}/5</p>
      <p><strong>Spécialité :</strong> {artisan.specialty}</p>
      <p><strong>Localisation :</strong> 📍 {artisan.location}</p>
      
      <section>
        <h2>À propos</h2>
        <p>{artisan.about}</p>
      </section>
      
      {artisan.website && (
        <p><strong>Site web :</strong> <a href={artisan.website} target="_blank" rel="noopener noreferrer">{artisan.website}</a></p>
      )}
      
      <section>
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Nom et Prénom" required />
          <input type="text" placeholder="Objet" required />
          <textarea placeholder="Votre message" rows="5" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </section>
    </main>
  );
}

export default FicheArtisan;