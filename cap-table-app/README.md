# Cap Table Frontend

Application frontend pour gérer les actionnaires et les émissions d’actions dans une entreprise. Projet réalisé dans le cadre d’un test technique pour un stage frontend.

## Table des matières
- [Description](#description)
- [Architecture](#architecture)
- [Philosophie des composants](#philosophie-des-composants)
- [Design System](#design-system)
- [Gestion d'état](#gestion-détat)
- [Setup](#setup)
- [Mock API](#mock-api)
- [Tests](#tests)
- [Storybook](#storybook)
- [Améliorations possibles](#améliorations-possibles)

## Description
Cette application permet de gérer une table de capitalisation (Cap Table) avec deux rôles :

### Admin
- Se connecter
- Voir le tableau des actionnaires
- Voir la répartition des parts (diagramme circulaire)
- Ajouter un actionnaire
- Émettre des actions

### Actionnaire
- Se connecter
- Voir le nombre total d’actions
- Voir la liste des émissions
- Télécharger un certificat PDF (mock)

## Architecture
src/
components/ # Composants réutilisables (AppButton, FormField, etc.)
pages/ # Pages principales (DashboardAdmin, DashboardShareholder, Login)
layouts/ # Layouts (DashboardLayout)
tests/ # Tests unitaires
storybook/ # Configuration Storybook

## Philosophie des composants

- **Réutilisables** : tous les composants (AppButton, FormField, DataTable) sont conçus pour être utilisés dans plusieurs pages.
- **Simplicité** : composants petits et focalisés sur une seule responsabilité.
- **UI Kit Storybook** : chaque composant est documenté avec ses variants (primary, secondary, disabled) s'il en possède.

## Design System

### Couleurs
- **Primary**: #1976d2
- **Secondary**: #dc004e
- **Error**: #f44336
- **Background**: #f5f5f5

### Spacing
- 0 → 0px
- 1 → 4px
- 2 → 8px
- 3 → 16px
- 4 → 32px
- 5 → 64px

### Typographie
- **h1**: font-size 2rem, font-weight 700
- **body1**: font-size 1rem, font-weight 400

### Composants
- AppButton
- AppCard
- DataTable
- FormField
- AppModal
- PieChart
- DashboardLayout

### Prompts IA

- Prompt utilisé pour générer **AppButton** : `"Generate a reusable React button component with Material UI v3, with primary, secondary, and disabled states, accepting onClick, label, and icon props."`
- Prompt utilisé pour générer **AppCard** : `"Generate a reusable React card component with Material UI v3, with a title, content area, and optional action buttons, fully customizable via props."`
- Prompt utilisé pour générer **DataTable** : `"Generate a responsive React table component with Material UI v3, supporting dynamic columns, sorting, pagination, and selectable rows."`
- Prompt utilisé pour générer **FormField** : `"Generate a reusable React form input component with Material UI v3, supporting text, number, and email inputs, with validation error messages and helper text."`
- Prompt utilisé pour générer **AppModal** : `"Generate a reusable React modal component with Material UI v3, supporting title, content, actions buttons, and open/close control via props."`
- Prompt utilisé pour générer **PieChart** : `"Generate a reusable PieChart component using Chart.js or Recharts in React, with dynamic data and customizable colors."`
- Prompt utilisé pour générer **DashboardLayout** : `"Generate a responsive React dashboard layout using Material UI v3, with a sidebar, header, main content area, and support for nested pages."`
- Prompt utilisé pour générer **LoginPage** : `"Generate a React login page using Material UI v3, with email and password fields, login button, form validation, and responsive design."`
- Prompt utilisé pour générer **AdminDashboard** : `"Generate a React admin dashboard page using Material UI v3, with a DataTable of shareholders, a PieChart showing shares distribution, buttons to add shareholders and issue shares via modal, using DashboardLayout."`
- Prompt utilisé pour générer **ShareholderDashboard** : `"Generate a React shareholder dashboard page using Material UI v3, displaying total number of shares, list of issuances in a DataTable, and a button to download a mock certificate PDF, using DashboardLayout."`

## Gestion d'état

- Utilisation de **Zustand** pour gérer l’état global (liste des actionnaires, émissions) (Non implémenté).
- Les appels API sont faits via **axios**.
- Les données sont préparées pour une future intégration full-stack.

## Setup

1. Cloner le repo
git clone <repo-url>

2. Installer les dépendances
npm install
# ou yarn install

3. Lancer Storybook
npm run storybook
# Storybook sera disponible sur http://localhost:6006

4. Lancer le test unitaire
npm test

## Mock API

- Auth : POST /api/token/ → retourne access, role, user_id
- Shareholders : GET /api/shareholders/, POST /api/shareholders/
- Issuances : GET /api/issuances/, POST /api/issuances/
- Certificat : GET /api/issuances/<id>/certificate/
- Mocked via **MSW** pour simuler le backend

## Tests

- Composants testés :
  - FormField (validation)
- Lancer les tests :
npm test

## Storybook

Voir tous les composants et le design system ici : [Storybook public](https://storybook-static-gpunzp61p-chedjou-oss-projects.vercel.app)

## Améliorations possibles

- Intégration de Zustang
- Création des services pour les API call via axios
- Consultation des versions react pour les dépendances utiles au test
- Les composants et pages ne sont pas dans le projet local (uniquement dans le Storybook)
- Création du composant de validation d'émission IssueSharesModal 
- Gestion des erreurs via ErrorBoundary
- Notifications Toast
- Audit log
