# FirstAngular – Demo Product App

Cette application est une **démo Angular simple** permettant d’afficher et de gérer des produits à partir d’une API backend.

Elle utilise :
- Angular (v20+)
- HttpClient
- Un ProductService pour communiquer avec l’API
- Une page Home
- Une page Products (liste + suppression)

## Structure principale

src/app/

home/
products/
services/
app.component.ts
app-routing.module.ts

## Product Service

Le service communique avec le backend à l’adresse :

http://localhost:8083/products

Fonctions disponibles :
- Récupérer tous les produits
- Supprimer un produit par son id

## Lancer l'application

ng serve

Puis ouvrir : http://localhost:4200/

Le backend doit être lancé sur le port 8083.

## Fonctionnalités

- Page d’accueil
- Liste des produits
- Suppression de produits
- Architecture simple

## Objectif

Application de démonstration pour comprendre :
- Les services Angular
- Les appels API REST
- Le routing
- La structure d’une application Angular simple
"""

