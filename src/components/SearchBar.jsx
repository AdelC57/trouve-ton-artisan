import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = (e) => {
    e.preventDefault();
    
    if (searchTerm.trim() !== '') {
      // Redirige vers une page de résultats avec le terme de recherche
      navigate(`/recherche?q=${searchTerm}`);
    }
  };
  
  return (
    <form onSubmit={handleSearch} style={{ display: 'flex', gap: '10px' }}>
      <input 
        type="text"
        placeholder="Rechercher un artisan (nom, spécialité, ville)..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ 
          padding: '10px', 
          border: '1px solid #ccc', 
          borderRadius: '5px',
          width: '300px'
        }}
      />
      <button 
        type="submit"
        style={{ 
          padding: '10px 20px', 
          background: '#cd2c2e', 
          color: 'white', 
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Rechercher
      </button>
    </form>
  );
}

export default SearchBar;