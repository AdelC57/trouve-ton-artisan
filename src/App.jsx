import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ListeArtisans from './pages/ListeArtisans';
import FicheArtisan from './pages/FicheArtisan';
import Recherche from './pages/Recherche';
import NotFound from './pages/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recherche" element={<Recherche />} />
        <Route path="/artisan/:id" element={<FicheArtisan />} />
        <Route path="/batiment" element={<ListeArtisans />} />
        <Route path="/services" element={<ListeArtisans />} />
        <Route path="/fabrication" element={<ListeArtisans />} />
        <Route path="/alimentation" element={<ListeArtisans />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;