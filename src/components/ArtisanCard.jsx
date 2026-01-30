function ArtisanCard(props) {
  // Fonction qui génère les étoiles en gérant les décimales
  const afficherEtoiles = (note) => {
    // Convertit la note en nombre et arrondit (4.5 devient 5, 4.2 devient 4)
    const noteArrondie = Math.round(parseFloat(note));
    let etoiles = '';
    
    // Boucle pour les étoiles pleines
    for (let i = 0; i < noteArrondie; i++) {
      etoiles += '⭐';
    }
    
    // Boucle pour les étoiles vides
    for (let i = 0; i < (5 - noteArrondie); i++) {
      etoiles += '☆';
    }
    
    return etoiles;
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
      <h3>{props.nom}</h3>
      <p>{afficherEtoiles(props.note)} ({props.note}/5)</p>
      <p>{props.specialite}</p>
      <p>📍 {props.ville}</p>
      <button>Voir le profil</button>
    </div>
  );
}

export default ArtisanCard;