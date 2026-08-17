# SELMA — Société des Moulins Sidi Tlil

Site corporate officiel (React + Vite + Tailwind CSS) de la Société des
Moulins Sidi Tlil, entreprise agroalimentaire tunisienne spécialisée dans
la transformation des céréales, basée à Thélepte (Kasserine).

## Démarrage

```bash
npm install
npm run dev       # serveur de développement
npm run build     # build de production dans /dist
npm run preview   # prévisualiser le build
```

## Ajouter le logo officiel

Le site tente de charger `/public/logo.png`. Tant que ce fichier n'existe
pas, un repère de marque dessiné (grain stylisé + "SELMA") s'affiche à la
place, dans la navbar et le footer.

Pour utiliser le vrai logo : déposez le fichier dans `public/logo.png`
(fond transparent recommandé, hauteur ≥ 200px). Aucune autre modification
n'est nécessaire — `src/components/Logo.jsx` bascule automatiquement.

## Structure

```text
src/
├── assets/
├── components/        # un dossier par section (Navbar, Hero, About, …)
├── data/siteData.js    # images, produits, étapes du process — modifiable ici
├── hooks/
├── i18n/
│   ├── index.js
│   └── locales/fr.json, ar.json
├── App.jsx
├── main.jsx
└── index.css
```

## Contenu multilingue (FR / AR)

Toutes les chaînes de texte sont dans `src/i18n/locales/fr.json` et
`ar.json`. Pour ajouter l'anglais plus tard :

1. créer `src/i18n/locales/en.json` (copier la structure de `fr.json`) ;
2. l'enregistrer dans `src/i18n/index.js` (`resources.en`) ;
3. ajouter un bouton "EN" dans `LanguageSwitcher.jsx`.

Le mode `dir="rtl"` est appliqué automatiquement à `<html>` lorsque
l'arabe est sélectionné (`src/hooks/useLanguageDirection.js`).

## Images

Toutes les URLs d'images sont centralisées dans `src/data/siteData.js`
(section `IMAGES`). Elles proviennent d'Unsplash (libres de droits). Pour
les remplacer par des photos officielles de l'entreprise : déposez les
fichiers dans `src/assets/` et remplacez les valeurs correspondantes dans
`siteData.js`.

## Formulaire de contact

Le formulaire (`src/components/Contact/Contact.jsx`) valide les champs
côté frontend mais n'envoie rien à un backend réel — aucun service
d'envoi n'a été fourni. Avant mise en production, branchez un service
(Formspree, EmailJS, une API interne, etc.) dans la fonction
`handleSubmit`.

## Déploiement sur Vercel

1. Poussez ce dossier sur un dépôt Git (GitHub/GitLab/Bitbucket).
2. Importez le dépôt sur [vercel.com](https://vercel.com/new).
3. Vercel détecte Vite automatiquement (`vercel.json` fourni). Build
   command : `npm run build`, output : `dist`.
4. Déployez — aucune variable d'environnement n'est requise.

## Informations à ne pas inventer

Conformément au brief, le site n'affiche aucun chiffre de production,
nombre d'employés, chiffre d'affaires, certification, client, partenaire
ou récompense qui n'a pas été fourni par l'entreprise. Si ces
informations deviennent disponibles, elles peuvent être ajoutées dans
`src/i18n/locales/*.json` (section `about`) et `src/data/siteData.js`.
