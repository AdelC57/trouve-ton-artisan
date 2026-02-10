# Trouve ton Artisan - Région Auvergne-Rhône-Alpes

Plateforme web permettant de trouver et contacter des artisans qualifiés en région Auvergne-Rhône-Alpes.

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/) (version 18 ou supérieure)
- [npm](https://www.npmjs.com/) (inclus avec Node.js)
- [Git](https://git-scm.com/)

## 🚀 Installation

1. **Cloner le repository**
```bash
git clone https://github.com/AdelC57/trouve-ton-artisan
cd trouve-ton-artisan
```

2. **Installer les dépendances**
```bash
npm install
```

## 💻 Lancement du projet

### Mode développement
```bash
npm run dev
```

Le site sera accessible à l'adresse : `http://localhost:5173`

### Build de production
```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`

## 📧 Serveur de mail local (MailDev)

Pour tester l'envoi d'emails en local :

1. **Installer MailDev globalement**
```bash
npm install -g maildev
```

2. **Lancer MailDev**
```bash
maildev
```

3. **Accéder à l'interface MailDev**

Ouvrez `http://localhost:1080` dans votre navigateur pour voir les emails capturés.

## 🛠️ Technologies utilisées

- **React** 18 - Framework JavaScript
- **React Router** - Navigation entre les pages
- **Bootstrap** 5 - Framework CSS
- **Sass** - Préprocesseur CSS
- **Vite** - Build tool et serveur de développement

## 📁 Structure du projet
```
trouve-ton-artisan/
├── public/              # Fichiers statiques
├── src/
│   ├── components/      # Composants réutilisables
│   ├── pages/          # Pages de l'application
│   ├── styles/         # Fichiers Sass
│   ├── data/           # Données JSON
│   ├── App.jsx         # Composant principal
│   └── main.jsx        # Point d'entrée
├── index.html          # Template HTML
├── package.json        # Dépendances du projet
└── README.md           # Ce fichier
```

## 🎨 Fonctionnalités

- ✅ Recherche d'artisans par nom, spécialité ou ville
- ✅ Filtrage par catégorie (Bâtiment, Services, Fabrication, Alimentation)
- ✅ Affichage des artisans du mois
- ✅ Fiche détaillée de chaque artisan
- ✅ Formulaire de contact
- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Accessibilité WCAG 2.1

## 📝 Commandes utiles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Compile le projet pour la production |
| `npm run preview` | Prévisualise le build de production |

## 🔐 Sécurité

Les bonnes pratiques de sécurité suivantes ont été mises en place :
- Validation des entrées utilisateur (formulaires)
- Protection contre les injections XSS
- Utilisation de React (échappement automatique)
- Pas de stockage de données sensibles côté client

## 📄 Licence

Projet réalisé dans le cadre d'une formation - Région Auvergne-Rhône-Alpes

## 👨‍💻 Auteur

ADEL

## 📞 Contact

Pour toute question : contact@auvergnerhonealpes.fr