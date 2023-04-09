# Installation du projet HARDHAT
Installez les dépendances :
npm install
ou
yarn add
Remplacer les variables du fichier .env par les votres.

ajouter les dépendances :
yarn add dotenv
yarn add @openzeppelin/contracts
yarn add istanbul ( facultatif pour le coverage)

# Compiler les contrats
npx hardhat compile
ou
yarn hardhat compile

# Déployer les contrats
yarn hardhat run scripts/deploy.js --network (réseau)

# Lancer les tests
Pour lancer les tests exécuter :
npm hardhat test
ou
yarn hardhat test

Il y a un fichier test permettant de vérifier les 2 smarts Contracts.
