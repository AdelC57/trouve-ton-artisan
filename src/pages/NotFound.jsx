function NotFound() {
  return (
    <main style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '100px', margin: '0' }}>404</h1>
      <p style={{ fontSize: '24px' }}>Oups ! Page non trouvée</p>
      <p>Désolé, la page que vous recherchez est introuvable ou a été déplacée.</p>
      <a href="/" style={{ 
        display: 'inline-block', 
        marginTop: '20px', 
        padding: '10px 20px', 
        background: '#0074c7', 
        color: 'white', 
        textDecoration: 'none',
        borderRadius: '5px'
      }}>
        Retour à l'accueil
      </a>
    </main>
  );
}

export default NotFound;