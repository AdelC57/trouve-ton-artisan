import { useParams } from 'react-router-dom';
import { useState } from 'react';
import artisansData from '../data/datas.json';

/**
 * Page FicheArtisan
 * Affiche les détails complets d'un artisan et un formulaire de contact
 */
function FicheArtisan() {
  // Récupère l'ID de l'artisan depuis l'URL
  const { id } = useParams();
  
  // Trouve l'artisan correspondant dans les données
  const artisan = artisansData.find(a => a.id === id);
  
  // États pour le formulaire de contact
  const [nom, setNom] = useState('');
  const [objet, setObjet] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  // Si l'artisan n'existe pas, affiche un message d'erreur
  if (!artisan) {
    return (
      <main>
        <div className="alert alert-danger text-center" role="alert">
          Artisan non trouvé
        </div>
      </main>
    );
  }
  
  /**
   * Génère l'affichage des étoiles en fonction de la note
   * @param {string} note - Note de l'artisan
   * @returns {string} - Chaîne d'émojis étoiles
   */
  const afficherEtoiles = (note) => {
    const noteArrondie = Math.round(parseFloat(note));
    let etoiles = '';
    
    // Ajoute les étoiles pleines
    for (let i = 0; i < noteArrondie; i++) {
      etoiles += '⭐';
    }
    
    // Ajoute les étoiles vides
    for (let i = 0; i < (5 - noteArrondie); i++) {
      etoiles += '☆';
    }
    
    return etoiles;
  };
  
  /**
   * Gère la soumission du formulaire de contact
   * @param {Event} e - Événement de soumission
   */
  const handleSubmit = async (e) => {
    // Empêche le rechargement de la page
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      // Simulation d'envoi d'email (remplacé par MailDev en production)
      
      // Simule un délai d'envoi
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Message de succès
      setSubmitMessage('success');
      
      // Réinitialise le formulaire
      setNom('');
      setObjet('');
      setMessage('');
      
    } catch (error) {
      // Message d'erreur
      setSubmitMessage('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <main>
      <div className="row">
        <div className="col-lg-8 mx-auto">
          
          {/* Carte d'informations principales de l'artisan */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h1 className="card-title h2 mb-3">{artisan.name}</h1>
              
              {/* Note avec étoiles */}
              <p className="text-warning mb-2">
                {afficherEtoiles(artisan.note)} <span className="text-muted">({artisan.note}/5)</span>
              </p>
              
              {/* Spécialité avec badge */}
              <p className="mb-2">
                <strong>Spécialité :</strong> <span className="badge bg-primary">{artisan.specialty}</span>
              </p>
              
              {/* Localisation */}
              <p className="mb-0">
                <strong>Localisation :</strong> <span role="img" aria-label="localisation">📍</span> {artisan.location}
              </p>
            </div>
          </div>
          
          {/* Section "À propos" */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">À propos</h2>
              <p className="card-text">{artisan.about}</p>
              
              {/* Lien vers le site web (si disponible) */}
              {artisan.website && (
                <p className="mb-0">
                  <strong>Site web :</strong>{' '}
                  <a href={artisan.website} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    {artisan.website} <span role="img" aria-label="lien externe">🔗</span>
                  </a>
                </p>
              )}
            </div>
          </div>
          
          {/* Formulaire de contact */}
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="h4 mb-4">Formulaire de contact</h2>
              
              <form onSubmit={handleSubmit}>
                
                {/* Champ Nom et Prénom */}
                <div className="mb-3">
                  <label htmlFor="nom" className="form-label">
                    Nom et Prénom <span className="text-danger">*</span>
                  </label>
                  <input 
                    type="text"
                    id="nom"
                    className="form-control"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    required
                    placeholder="Jean Dupont"
                  />
                </div>
                
                {/* Champ Objet */}
                <div className="mb-3">
                  <label htmlFor="objet" className="form-label">
                    Objet <span className="text-danger">*</span>
                  </label>
                  <input 
                    type="text"
                    id="objet"
                    className="form-control"
                    value={objet}
                    onChange={(e) => setObjet(e.target.value)}
                    required
                    placeholder="Demande de devis"
                  />
                </div>
                
                {/* Champ Message */}
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Votre message <span className="text-danger">*</span>
                  </label>
                  <textarea 
                    id="message"
                    className="form-control"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows="6"
                    placeholder="Bonjour, je souhaiterais..."
                  />
                </div>
                
                {/* Bouton de soumission */}
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-success w-100"
                  style={{ backgroundColor: '#82b864', borderColor: '#82b864' }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Envoi en cours...
                    </>
                  ) : (
                    'Envoyer le message'
                  )}
                </button>
                
                {/* Messages de succès ou d'erreur */}
                {submitMessage === 'success' && (
                  <div className="alert alert-success mt-3" role="alert">
                    <strong>✅ Message envoyé avec succès !</strong><br />
                    Une réponse vous sera apportée sous 48h.
                  </div>
                )}
                
                {submitMessage === 'error' && (
                  <div className="alert alert-danger mt-3" role="alert">
                    <strong>❌ Erreur lors de l'envoi.</strong><br />
                    Veuillez réessayer.
                  </div>
                )}
                
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}

export default FicheArtisan;