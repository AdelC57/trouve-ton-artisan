import { useParams } from 'react-router-dom';
import { useState } from 'react';
import artisansData from '../data/datas.json';

function FicheArtisan() {
  const { id } = useParams();
  const artisan = artisansData.find(a => a.id === id);
  
  // États pour le formulaire
  const [nom, setNom] = useState('');
  const [objet, setObjet] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  if (!artisan) {
    return <p>Artisan non trouvé</p>;
  }
  
  // Fonction d'affichage des étoiles
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
  
  // Gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      // Simulation d'envoi d'email (en attendant la vraie config)
      console.log('Email envoyé à:', artisan.email);
      console.log('De:', nom);
      console.log('Objet:', objet);
      console.log('Message:', message);
      
      // Simule un délai d'envoi
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage('✅ Message envoyé avec succès ! Une réponse vous sera apportée sous 48h.');
      
      // Réinitialise le formulaire
      setNom('');
      setObjet('');
      setMessage('');
      
    } catch (error) {
      setSubmitMessage('❌ Erreur lors de l\'envoi. Veuillez réessayer.');
      console.error('Erreur:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>{artisan.name}</h1>
      <p>{afficherEtoiles(artisan.note)} ({artisan.note}/5)</p>
      <p><strong>Spécialité :</strong> {artisan.specialty}</p>
      <p><strong>Localisation :</strong> 📍 {artisan.location}</p>
      
      <section style={{ marginTop: '30px' }}>
        <h2>À propos</h2>
        <p>{artisan.about}</p>
      </section>
      
      {artisan.website && (
        <p>
          <strong>Site web :</strong>{' '}
          <a href={artisan.website} target="_blank" rel="noopener noreferrer">
            {artisan.website}
          </a>
        </p>
      )}
      
      <section style={{ marginTop: '40px' }}>
        <h2>Formulaire de contact</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          <div>
            <label htmlFor="nom" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Nom et Prénom *
            </label>
            <input 
              type="text"
              id="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
              style={{ 
                width: '100%', 
                padding: '10px', 
                border: '1px solid #ccc',
                borderRadius: '5px'
              }}
            />
          </div>
          
          <div>
            <label htmlFor="objet" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Objet *
            </label>
            <input 
              type="text"
              id="objet"
              value={objet}
              onChange={(e) => setObjet(e.target.value)}
              required
              style={{ 
                width: '100%', 
                padding: '10px', 
                border: '1px solid #ccc',
                borderRadius: '5px'
              }}
            />
          </div>
          
          <div>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Votre message *
            </label>
            <textarea 
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="6"
              style={{ 
                width: '100%', 
                padding: '10px', 
                border: '1px solid #ccc',
                borderRadius: '5px',
                resize: 'vertical'
              }}
            />
          </div>
          
          <button 
            type="submit"
            disabled={isSubmitting}
            style={{ 
              padding: '12px 30px', 
              background: isSubmitting ? '#ccc' : '#82b864', 
              color: 'white', 
              border: 'none',
              borderRadius: '5px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
          </button>
          
          {submitMessage && (
            <p style={{ 
              padding: '10px', 
              background: submitMessage.includes('✅') ? '#d4edda' : '#f8d7da',
              border: `1px solid ${submitMessage.includes('✅') ? '#c3e6cb' : '#f5c6cb'}`,
              borderRadius: '5px',
              color: submitMessage.includes('✅') ? '#155724' : '#721c24'
            }}>
              {submitMessage}
            </p>
          )}
          
        </form>
      </section>
    </main>
  );
}

export default FicheArtisan;