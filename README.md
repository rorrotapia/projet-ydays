# Projet Ydays

Ce projet est basé sur ReactJS


## 1. Instalation de Ingress Controller
Télechargerment du repo ingress nginx
```
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
```
Installation d'ingress controller
```
helm install nginx-ingress ingress-nginx/ingress-nginx --namespace projet-ydays --create-namespace --set controller.replicaCount=2 --set controller.nodeSelector."kubernetes\.io/os"=linux
```

## 2. BONUS: Instalation de certificat ssl
```
helm repo add jetstack https://charts.jetstack.io
helm install cert-manager jetstack/cert-manager --namespace cert-manager --create-namespace --version v1.4.0 --set installCRDs=true
```

## 3. BONUS: Déploiement du projet via chart Helm
#### a. Installation du projet
Lancez la commande suivante pour installer le projet
```
helm install projet ./projet-cloud -n projet-cloud
```

#### b. Fichiers manifests
Le chart contient principalement les éléments suivants:

- un fichier *deploy.yaml*  utilisé pour la création du service et déploiement de l'app
- un fichier *ingress.yaml* utilisé pour la création de l'ingress + certificat + clusterissuer
- un fichier *values.yaml* utilisé pour substituer les variables par des valeurs dynamiques

## Membres

- Rodrigo Tapia
- Maksymilian Czadowski


