# 📦 Suivi de Colis — La Poste (Projet démo Next.js)

Site web de suivi de colis inspiré de La Poste française, construit avec **Next.js 14**, **Tailwind CSS** et des données **mock** (aucune API réelle).

---

## 🚀 Installation sur Windows 11

### Étape 1 — Prérequis

#### Installer Node.js
1. Rendez-vous sur [https://nodejs.org](https://nodejs.org)
2. Téléchargez la version **LTS** (ex. 20.x ou 22.x)
3. Exécutez l'installeur `.msi` → laissez toutes les options par défaut
4. Redémarrez votre terminal après installation

#### Vérifier l'installation
Ouvrez **PowerShell** ou **CMD** et tapez :
```
node -v
npm -v
```
Vous devez voir les numéros de version (ex. `v20.11.0` et `10.x.x`).

---

### Étape 2 — Extraire le projet

1. Dézippez l'archive `suivi-colis.zip` dans le dossier de votre choix
   Ex. : `C:\Projets\suivi-colis\`
2. Ouvrez **PowerShell** dans ce dossier :
   - Clic droit sur le dossier → **"Ouvrir dans le Terminal"**
   - Ou : `Win + X` → Terminal → `cd C:\Projets\suivi-colis`

---

### Étape 3 — Installer les dépendances

Dans PowerShell, dans le dossier `suivi-colis` :

```powershell
npm install
```

⏳ Attendez la fin de l'installation (cela peut prendre 1-2 minutes selon votre connexion).

---

### Étape 4 — Lancer le serveur de développement

```powershell
npm run dev
```

Vous devriez voir :
```
▲ Next.js 14.x.x
- Local: http://localhost:3000
- Ready in Xs
```

---

### Étape 5 — Ouvrir dans le navigateur

Rendez-vous sur **[http://localhost:3000](http://localhost:3000)**

---

## 🧪 Numéros de suivi de test

| Numéro | Statut |
|--------|--------|
| `6V12345678901` | 🛵 En cours de livraison |
| `6V98765432109` | ✅ Livré |
| `6V11223344556` | 🚚 En transit |
| `6V55667788990` | ⚠️ Avis de passage |

Ces numéros sont disponibles directement sur la page d'accueil en cliquant sur les boutons de démo.

---

## 📁 Structure du projet

```
suivi-colis/
├── src/
│   ├── app/
│   │   ├── layout.jsx          ← Layout global (Header + Footer)
│   │   ├── page.jsx            ← Page d'accueil
│   │   ├── globals.css         ← Styles globaux + polices
│   │   ├── tracking/[id]/
│   │   │   └── page.jsx        ← Page de résultat de suivi
│   │   ├── faq/
│   │   │   └── page.jsx        ← FAQ avec accordéon
│   │   ├── contact/
│   │   │   └── page.jsx        ← Formulaire de contact
│   │   └── mentions-legales/
│   │       └── page.jsx        ← Mentions légales
│   ├── components/
│   │   ├── Header.jsx          ← Navigation (avec menu mobile)
│   │   ├── Footer.jsx          ← Pied de page
│   │   ├── TrackingForm.jsx    ← Formulaire de recherche
│   │   └── TrackingTimeline.jsx← Timeline & détails du colis
│   └── lib/
│       └── mockData.js         ← Données fictives des colis
├── package.json
├── next.config.mjs
├── tailwind.config.js
└── postcss.config.js
```

---

## 🛠️ Commandes disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Compile le projet pour la production |
| `npm start` | Démarre le serveur de production (après build) |

---

## 🎨 Stack technique

- **Next.js 14** — App Router
- **Tailwind CSS** — Utility-first CSS
- **Google Fonts** — Sora + DM Sans
- **Données mock** — Aucune API externe requise

---

## ❓ Problèmes courants sur Windows 11

### `npm` n'est pas reconnu
→ Relancez PowerShell **après** avoir installé Node.js

### Erreur de politique d'exécution PowerShell
Si vous voyez `cannot be loaded because running scripts is disabled` :
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```
Puis relancez `npm run dev`.

### Port 3000 déjà utilisé
Utilisez un autre port :
```powershell
npm run dev -- -p 3001
```
Puis allez sur http://localhost:3001

---

## 📝 Personnalisation

Pour **ajouter un colis mock**, éditez `src/lib/mockData.js` et ajoutez une entrée dans `mockParcels` en suivant la même structure.

Pour **changer les couleurs**, modifiez `tailwind.config.js` → section `colors.laposte`.
