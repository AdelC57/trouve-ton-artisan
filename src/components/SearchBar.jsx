import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = (e) => {
    e.preventDefault();
    
    if (searchTerm.trim() !== '') {
      navigate(`/recherche?q=${searchTerm}`);
    }
  };
  
  return (
    <form onSubmit={handleSearch} className="d-flex gap-2" style={{ width: '100%', maxWidth: '500px' }}>
      <input 
        type="text"
        placeholder="Rechercher un artisan (nom, spécialité, ville)..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control"
      />
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