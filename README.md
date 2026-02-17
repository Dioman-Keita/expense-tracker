# 💸 Expense Tracker - Next.js 15

Une application moderne de gestion de finances personnelles construite avec **Next.js 15**, **Tailwind CSS** et une architecture **Server-First**.

---

## 🚀 Fonctionnalités

- **Tableau de Bord Dynamique** : Visualisation du solde total, des revenus et des dépenses.
- **Gestion Complète des Transactions** :
  - Ajout rapide via une modale interactive (React Portal).
  - Page dédiée pour les nouveaux enregistrements.
  - Suppression avec mise à jour instantanée de l’UI (revalidation du cache).
- **Navigation Immersive** : "Magic Navbar" flottante avec effet morphing au survol.
- **Historique Avancé** :
  - Recherche textuelle en temps réel.
  - Filtrage par type (Revenu/Dépense) et par catégorie via les URL SearchParams.
  - Pagination côté serveur pour des performances optimales.
- **Exportation de Données** : Génération et téléchargement de fichiers CSV via une API Route personnalisée.
- **Feedback Utilisateur** : Notifications toast (Sonner) et états de chargement automatiques.

---

## 🛠️ Stack Technique

- Framework : Next.js 15 (App Router)
- Langage : TypeScript
- Style : Tailwind CSS
- Icônes : Lucide React
- Notifications : Sonner
- Stockage : Système de fichiers local (JSON) — aucune base de données requise en développement local
- Package Manager : Bun

---

## 📦 Installation et Lancement

### 1. Cloner le projet

    git clone https://github.com/votre-username/expense-tracker.git
    cd expense-tracker

### 2. Installer les dépendances

    bun install

### 3. Lancer le serveur de développement

    bun dev

L’application est disponible sur :
http://localhost:3000

---

## 🏗️ Architecture

Le projet suit une Clean Architecture pour séparer les responsabilités :

- src/app : Routes, pages et API.
- src/features : Logique métier regroupée par domaine (Transactions).
- src/components/ui : Composants UI atomiques et réutilisables.
- src/lib/storage : Couche d’accès aux données (File System).
