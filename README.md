# EUROTRANSFER ⚽

Média d'information football **indépendant, privé, sans publicité, sans abonnement et sans monétisation**.
Le site regroupe l'actualité du ballon rond (transferts, mercato, matchs, faits divers, compétitions européennes) réécrite et sourcée, ainsi qu'une rubrique d'**informations locales** rédigées par l'administrateur.

Site 100 % statique (HTML / CSS / JavaScript, sans dépendance, sans build) — **hébergement gratuit sur GitHub Pages**.
**Thème clair éditorial** (blanc / gris clair / quasi-noir + accent rouge), typographie presse (Oswald + Lora).

---

## 🗂 Structure des fichiers

```
eurotransfer/
├── index.html                 # Accueil (Une + sections + sidebar)
├── transferts.html            # Rubrique Transferts
├── mercato.html               # Rubrique Mercato
├── matchs.html                # Matchs & Résultats
├── faits-divers.html          # Faits divers
├── competitions.html          # Compétitions européennes
├── actualites-locales.html    # Actualités locales (rédaction)
├── recherche.html             # Résultats de recherche
├── article.html               # Gabarit d'article (?id=...)
├── a-propos.html              # À propos & charte
├── admin.html                 # ⭐ Espace admin (formulaire → data.js)
├── favicon.svg
├── .nojekyll                  # Indispensable pour GitHub Pages
└── assets/
    ├── css/styles.css         # Thème clair + responsive
    └── js/
        ├── data.js            # ⭐ Base de données des articles
        └── app.js             # Moteur (rendu, recherche, filtres, tri, pagination)
```

## ✨ Fonctionnalités

- Thème clair éditorial, responsive mobile & desktop, menu latéral sur mobile
- **Images / photos** par article (lien externe ou photo importée et compressée)
- Barre de recherche, filtrage par catégorie et par date, tri « Plus récents / Plus consultés »
- Pagination, bandeau défilant « Direct », barre latérale « Les plus lus », bouton retour en haut
- Article complet : titre, catégorie, **date + heure précises**, source, contenu, encadré source, image
- Rubrique **Actualités locales** signée « Rédaction EUROTRANSFER »

---

## ✍️ Ajouter un article — méthode facile : `admin.html`

Ouvre **`ton-site/admin.html`** (page privée, non listée dans le menu, non indexée) :

1. Remplis le formulaire : titre, catégorie, **date + heure**, source, sous-titre, contenu, et **une image** (colle un lien, ou importe une photo qui sera compressée automatiquement). Un **aperçu en direct** s'affiche.
2. « Ajouter à la file » pour préparer plusieurs articles (optionnel).
3. **Télécharger data.js** : le fichier contient tous tes anciens articles **+** les nouveaux.
4. Publie via GitHub (voir plus bas).

---

## ✍️ Ajouter un article — à la main (alternative)

Tout se passe dans **un seul fichier** : `assets/js/data.js`. Copie un bloc, colle-le en haut du tableau `ARTICLES`, modifie :

```js
{
  id: "identifiant-unique-sans-espaces",
  title: "Titre de l'article",
  category: "Transferts",              // Transferts | Mercato | Matchs |
                                       // Faits divers | Compétitions | Locale
  source: "L'Équipe",                  // ou "Rédaction EUROTRANSFER"
  sourceUrl: "https://...",            // "" pour un article original
  date: "2026-07-15",                  // AAAA-MM-JJ
  time: "18:30",                       // HH:MM
  dateLabel: "15 juillet 2026 à 18h30",
  views: 1200,
  featured: false,                     // true = Une de l'accueil
  image: "",                           // lien d'image (facultatif) ; vide = visuel auto
  lead: "Phrase d'accroche.",
  body: [ "Paragraphe 1...", "Paragraphe 2..." ]
}
```

---

## 🚀 Hébergement gratuit sur GitHub Pages

> GitHub Pages : gratuit, ~1 Go par site, 100 Go de trafic/mois — largement suffisant pour un site perso. Mise à jour automatique à chaque modification.

### Installation (une seule fois)

1. Crée un compte sur **github.com**, puis un dépôt (**github.com/new**), ex. `eurotransfer`.
2. **Add file → Upload files**, glisse **tout le contenu** du dossier (les `.html`, le dossier `assets`, `.nojekyll`, `favicon.svg`), puis **Commit changes**.
   *(Astuce : le fichier `.nojekyll` peut être invisible sur ton ordinateur ; s'il manque, crée-le directement sur GitHub via « Add file → Create new file » en le nommant `.nojekyll` et en laissant le contenu vide.)*
3. Dans le dépôt : **Settings → Pages**. Sous « Build and deployment », Source = **Deploy from a branch**, Branche = **main**, dossier = **/ (root)**. Sauvegarde.
4. Patiente ~1 min : GitHub affiche l'adresse de ton site (`https://ton-pseudo.github.io/eurotransfer/`).

### Publier un article ensuite (la routine)

1. `admin.html` → rédige → **Télécharger data.js**.
2. Sur GitHub, ouvre `assets/js/` → **Add file → Upload files** → dépose le nouveau `data.js` (il remplace l'ancien) → **Commit changes**.
3. Le site se met à jour **tout seul** en ~1 min.

> Les fichiers `vercel.json` et `netlify.toml` sont inclus si un jour tu veux héberger ailleurs, mais ils ne servent pas pour GitHub Pages.

### Test en local (facultatif)

```bash
python3 -m http.server 8000   # puis http://localhost:8000
```

---

## 🖼️ À propos des images

- **Lien d'image** : idéal, garde le site léger. Colle l'URL d'une image déjà en ligne.
- **Photo importée** : pratique (photo de ton téléphone), intégrée directement au site sans hébergement externe. Elle est compressée automatiquement, mais alourdit un peu `data.js` — pour un usage intensif, privilégie les liens.

## 📝 Notes

- Les articles fournis sont des **exemples** à remplacer par tes contenus.
- EUROTRANSFER n'est affilié à aucun des médias cités ; leurs noms n'apparaissent qu'à titre de source.
- Aucune donnée collectée, aucun traceur, aucune dépendance (hors polices Google Fonts, remplaçables).
