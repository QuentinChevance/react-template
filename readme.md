# Template React.js (Typescript)

- Utilisation de [Vite](https://vitejs.dev/)
- Utilisation de Typescript
- Ajouter un paquet npm

## Création du projet

```
# npm 6.x
$ npm create vite@latest template-react --template react-ts

# npm 7+, extra double-dash is needed:
$ npm create vite@latest template-react -- --template react-ts
```

Voir plus [ici](https://vitejs.dev/guide/).

## Installation de Tailwind

```
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p
```

## Ajout d'un package

```
$ npm i react-router-dom

# ⚠️ Certains packages ont besoins de leur module de définition de types pour être utilisés avec Typescript ⚠️

$ npm i -D @types/react-router-dom
```
