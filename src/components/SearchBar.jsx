import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Composant SearchBar
 * Barre de recherche permettant de chercher un artisan par nom, spécialité ou ville
 * Redirige vers la page de résultats avec le terme de recherche
 */
function SearchBar() {
  // État pour stocker le terme de recherche saisi par l'utilisateur
  const [searchTerm, setSearchTerm] = useState('');
  
  // Hook pour la navigation programmatique
  const navigate = useNavigate();
  
  /**
   * Gère la soumission du formulaire de recherche
   * @param {Event} e - Événement de soumission du formulaire
   */
  const handleSearch = (e) => {
    // Empêche le rechargement de la page
    e.preventDefault();
    
    // Redirige vers la page de résultats si le champ n'est pas vide
    if (searchTerm.trim() !== '') {
      navigate(`/recherche?q=${searchTerm}`);
    }
  };
  
  return (
    <form onSubmit={handleSearch} className="d-flex gap-2" style={{ width: '100%', maxWidth: '500px' }}>
      {/* Champ de saisie */}
      <input 
        type="text"
        placeholder="Rechercher un artisan (nom, spécialité, ville)..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control"
      />
      
      {/* Bouton de soumission */}
      <button 
        type="submit"
        className="btn text-white"
        style={{ backgroundColor: '#cd2c2e' }}
      >
        Rechercher
      </button>
    </form>
  );
}

export default SearchBar;