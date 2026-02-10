import { Link } from 'react-router-dom';

function ArtisanCard(props) {
  // Fonction qui génère les étoiles
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
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <h3 className="card-title h5">{props.nom}</h3>
        <p className="text-warning mb-2">
          {afficherEtoiles(props.note)} <span className="text-muted">({props.note}/5)</span>
        </p>
        <p className="card-text mb-1">
          <strong>Spécialité :</strong> {props.specialite}
        </p>
        <p className="card-text text-muted mb-3">
          <span role="img" aria-label="localisation">📍</span> {props.ville}
        </p>
        <Link to={`/artisan/${props.id}`} className="btn btn-primary">
          Voir le profil
        </Link>
      </div>
    </div>
  );
}

export default ArtisanCard;