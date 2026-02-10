import { useParams } from 'react-router-dom';
import { useState } from 'react';
import artisansData from '../data/datas.json';

function FicheArtisan() {
  const { id } = useParams();
  const artisan = artisansData.find(a => a.id === id);
  
  const [nom, setNom] = useState('');
  const [objet, setObjet] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  if (!artisan) {
    return (
      <main>
        <div className="alert alert-danger text-center" role="alert">
          Artisan non trouvé
        </div>
      </main>
    );
  }
  
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
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      console.log('Email envoyé à:', artisan.email);
      console.log('De:', nom);
      console.log('Objet:', objet);
      console.log('Message:', message);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage('success');
      setNom('');
      setObjet('');
      setMessage('');
      
    } catch (error) {
      setSubmitMessage('error');
      console.error('Erreur:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <main>
      <div className="row">
        <div className="col-lg-8 mx-auto">
          
          {/* En-tête artisan */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h1 className="card-title h2 mb-3">{artisan.name}</h1>
              <p className="text-warning mb-2">
                {afficherEtoiles(artisan.note)} <span className="text-muted">({artisan.note}/5)</span>
              </p>
              <p className="mb-2">
                <strong>Spécialité :</strong> <span className="badge bg-primary">{artisan.specialty}</span>
              </p>
              <p className="mb-0">
                <strong>Localisation :</strong> <span role="img" aria-label="localisation">📍</span> {artisan.location}
              </p>
            </div>
          </div>
          
          {/* À propos */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h4 mb-3">À propos</h2>
              <p className="card-text">{artisan.about}</p>
              
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