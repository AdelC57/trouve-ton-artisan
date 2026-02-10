import { Link } from 'react-router-dom';

/**
 * Composant ArtisanCard
 * Affiche une carte résumée d'un artisan avec ses informations principales
 * Cliquable pour accéder à la fiche complète
 * 
 * @param {Object} props - Propriétés du composant
 * @param {string} props.id - ID de l'artisan
 * @param {string} props.nom - Nom de l'artisan ou de l'entreprise
 * @param {string} props.note - Note sur 5
 * @param {string} props.specialite - Spécialité de l'artisan
 * @param {string} props.ville - Localisation de l'artisan
 */
function ArtisanCard(props) {
  /**
   * Génère l'affichage des étoiles en fonction de la note
   * @param {string} note - Note de l'artisan (peut être décimale)
   * @returns {string} - Chaîne d'émojis étoiles (pleines et vides)
   */
  const afficherEtoiles = (note) => {
    // Convertit la note en nombre et arrondit
    const noteArrondie = Math.round(parseFloat(note));
    let etoiles = '';
    
    // Ajoute les étoiles pleines
    for (let i = 0; i < noteArrondie; i++) {
      etoiles += '⭐';
    }
    
    // Ajoute les étoiles vides pour compléter jusqu'à 5
    for (let i = 0; i < (5 - noteArrondie); i++) {
      etoiles += '☆';
    }
    
    return etoiles;
  };

  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        {/* Nom de l'artisan */}
        <h3 className="card-title h5">{props.nom}</h3>
        
        {/* Note avec étoiles */}
        <p className="text-warning mb-2">
          {afficherEtoiles(props.note)} <span className="text-muted">({props.note}/5)</span>
        </p>
        
        {/* Spécialité */}
        <p className="card-text mb-1">
          <strong>Spécialité :</strong> {props.specialite}
        </p>
        
        {/* Localisation */}
        <p className="card-text text-muted mb-3">
          <span role="img" aria-label="localisation">📍</span> {props.ville}
        </p>
        
        {/* Bouton vers la fiche complète */}
        <Link to={`/artisan/${props.id}`} className="btn btn-primary">
          Voir le profil
        </Link>
      </div>
    </div>
  );
}

export default ArtisanCard;