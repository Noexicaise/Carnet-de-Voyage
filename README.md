# Carnet de voyage

Un carnet de voyage en ligne, gratuit et sans serveur : itinéraire jour par jour, photos, comptes rendus, carte,
météo, récap « Wrapped », livre souvenir, coffre-fort chiffré… Tout est publié depuis un téléphone, dans votre propre
dépôt GitHub (GitHub Pages). Interface publique en français, anglais et néerlandais.

## Démarrer

1. Créez un compte gratuit sur github.com.
2. Cliquez sur **Use this template** puis **Create a new repository** (dépôt **Public**), ou créez un dépôt public
   et déposez-y tous les fichiers de ce dossier (**Add file > Upload files**).
3. **Settings > Pages > Deploy from a branch > main / (root) > Save**.
4. Créez un token : **Settings (profil) > Developer settings > Fine-grained tokens**, accès à ce seul dépôt,
   **Contents : Read and write**.
5. Ouvrez `https://VOTRE-NOM.github.io/NOM-DU-DEPOT/#admin`, renseignez la **Connexion GitHub**,
   puis **Créer un nouveau voyage**.

Tant qu'aucun voyage n'existe, le carnet affiche un voyage de démonstration pour découvrir les fonctions.
Le guide pas à pas complet est dans `guide.pdf` (bouton « Ouvrir le guide » de l'Admin).

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | L'application complète (un seul fichier) |
| `sw.js`, `manifest.webmanifest` | Mode hors ligne et installation sur l'écran d'accueil |
| `icon.svg`, `apple-touch-icon.png`, `og.png` | Icônes et image d'aperçu des liens |
| `guide.pdf` | Guide pas à pas |
| `LICENSE` | Licence MIT |
| `.nojekyll` | Évite un traitement inutile par GitHub Pages |

Vos voyages, photos et comptes rendus sont créés par l'Admin dans le dossier `trips/` de votre dépôt.

## Confidentialité

- Le site gratuit est **public** : toute personne qui a l'adresse peut le lire. Ne publiez rien de confidentiel.
- Le carnet demande aux moteurs de recherche de ne pas l'indexer (`noindex`).
- Le token GitHub reste dans le navigateur de l'appareil ; case « Appareil partagé » pour qu'il ne soit pas conservé.
- Seul le coffre-fort est chiffré (AES-GCM, clé dérivée d'une phrase de passe qui n'est jamais envoyée).
- Les polices sont chargées depuis Google Fonts ; la carte utilise OpenStreetMap (voir ci-dessous).

## Limites de GitHub gratuit

Site publié 1 Go maximum, dépôt recommandé sous 1 Go, environ 100 Go de trafic par mois. L'Admin vous alerte
à 700 Mo. Voir le guide pour les solutions (un dépôt par année, Cloudflare Pages, stockage des photos sur R2).

## Besoin d'aide ?

Dans l'Admin, **Copier le diagnostic** produit un résumé sans aucune donnée secrète (version, navigateur, erreurs
récentes) à joindre à votre message.

## Crédits et licences des composants

- **OpenStreetMap** : données et tuiles de carte, © contributeurs OpenStreetMap, licence ODbL. Respectez la
  [politique d'usage des tuiles](https://operations.osmfoundation.org/policies/tiles/) : usage familial raisonnable.
- **Nominatim** (recherche de lieux) : usage modéré, environ une requête par seconde.
- **Leaflet** (affichage de la carte, chargé depuis jsDelivr) : licence BSD-2-Clause.
- **Open-Meteo** (prévisions) : gratuit pour un usage non commercial, licence CC BY 4.0.
- **Google Fonts** (polices) : licences libres (SIL OFL, Apache 2.0).

Le code du carnet est sous licence MIT (fichier `LICENSE`) : pensez à y remplacer `[Votre nom]`.
