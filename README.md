# Carnet de voyage

Un carnet de voyage en ligne, gratuit : itinéraire jour par jour, photos et comptes rendus publiés depuis un téléphone.
Interface en français, anglais et néerlandais. Version imprimable / PDF intégrée.

## Démarrer (5 étapes)

1. Créez un compte gratuit sur github.com.
2. Cliquez sur **Use this template** puis **Create a new repository** (dépôt **Public**).
   Sans ce bouton : créez un dépôt public et déposez-y les fichiers de ce dossier avec **Add file > Upload files**.
3. Dans le dépôt : **Settings > Pages > Deploy from a branch > main / (root) > Save**.
4. Créez un token : **Settings (profil) > Developer settings > Fine-grained tokens**, accès à ce seul dépôt, **Contents : Read and write**.
5. Ouvrez `https://VOTRE-NOM.github.io/NOM-DU-DEPOT/#admin`, remplissez **Connexion GitHub**, puis **Nouveau voyage**.

Le guide détaillé pas à pas est fourni séparément.

## Fichiers

- `index.html` : toute l'application.
- `og.png`, `icon.svg`, `apple-touch-icon.png` : image d'aperçu et icônes.
- `sw.js`, `manifest.webmanifest` : mode hors ligne et installation sur l'écran d'accueil.
- `.nojekyll` : évite un traitement inutile par GitHub Pages.

Les voyages, photos et comptes rendus sont créés par la page `#admin` dans le dossier `trips/`.
Le site est public : ne publiez rien de confidentiel.
