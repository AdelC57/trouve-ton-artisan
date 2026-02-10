// Import des dépendances React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import des composants
import Header from './components/Header';
import Footer from './components/Footer';

// Import des pages
import Home from './pages/Home';
import ListeArtisans from './pages/ListeArtisans';
import FicheArtisan from './pages/FicheArtisan';
import Recherche from './pages/Recherche';
import NotFound from './pages/NotFound';
import MentionsLegales from './pages/MentionsLegales';
import DonneesPersonnelles from './pages/DonneesPersonnelles';
import Accessibilite from './pages/Accessibilite';
import Cookies from './pages/Cookies';

/**
 * Composant principal de l'application
 * Gère le routing et la structure globale (Header, contenu, Footer)
 */
function App() {
  return (
    <BrowserRouter>
      {/* Header présent sur toutes les pages */}
      <Header />
      
      {/* Définition des routes de l'application */}
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<Home />} />
        
        {/* Page de résultats de recherche */}
        <Route path="/recherche" element={<Recherche />} />
        
        {/* Page détail d'un artisan (dynamique avec :id) */}
        <Route path="/artisan/:id" element={<FicheArtisan />} />
        
        {/* Pages par catégorie */}
        <Route path="/batiment" element={<ListeArtisans />} />
        <Route path="/services" element={<ListeArtisans />} />
        <Route path="/fabrication" element={<ListeArtisans />} />
        <Route path="/alimentation" element={<ListeArtisans />} />
        
        {/* Pages légales */}
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/donnees-personnelles" element={<DonneesPersonnelles />} />
        <Route path="/accessibilite" element={<Accessibilite />} />
        <Route path="/cookies" element={<Cookies />} />
        
        {/* Page 404 pour toutes les autres routes */}
        <Route path="*" element={<NotFound />} />
        
        {/* Page 404 pour toutes les autres routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      {/* Footer présent sur toutes les pages */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;