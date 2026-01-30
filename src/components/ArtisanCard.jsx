import { Link } from 'react-router-dom';

function ArtisanCard(props) {
  const afficherEtoiles = (note) => {
    const noteArrondie = Math.round(parseFloat(note));
    let etoiles = '';
    
    for (let i = 0; i < noteArrondie; i++) {
      etoiles += '⭐';
    }
    
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
      <Link to={`/artisan/${props.id}`}>
        <button>Voir le profil</button>
      </Link>
    </div>
  );
}

export default ArtisanCard;