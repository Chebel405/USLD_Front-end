# USLD_Front-end

Ce projet constitue la partie **front-end** de l'application de gestion des patients en USLD (Unité de Soins de Longue Durée). Il a été développé avec **Angular v19**, en suivant une architecture modulaire et évolutive.

## 🎯 Objectifs de l'application

- Ajouter différents types de patients :
  - Patient USLD
  - Patient Alzheimer
  - Patient Sans Soin
- Permettre une gestion future : édition, affichage et suppression
- Interface claire et réactive
- Communication avec un **backend Java Spring Boot** via API REST

---

## 🧰 Technologies utilisées

- Angular 19
- TypeScript
- Angular Router
- Reactive Forms
- HttpClientModule
- CSS

---

## 📁 Architecture du projet

src/
├── app/
│ ├── models/ # Interfaces pour les types de patients
│ ├── services/ # Services pour appel API REST
│ ├── components/
│ │ └── patients/
│ │ └── usld/
│ │ ├── add-patient-usld/ # Formulaire d'ajout de patient USLD
│ │ └── usld.routes.ts # Routes liées à USLD
│ ├── app.config.ts # Configuration globale (routes, http)
│ └── app.routes.ts # Définition des routes principales
├── index.html
└── main.ts
---

## ▶️ Lancer le projet

```bash
npm install
ng serve
