# 724 Events

## Description
L'application est le site d'une agence evenementielle.
## Pre-requis
- NodeJS  >= v16.14.1

## Installation
- `yarn install`

## Lancement de l'application
- `yarn start`

## Tests
- `yarn test`


<!--
dans page/index.js
    //Rajout des id:
    - id="nos-services"
    - id="nos-realisations"
    - id="notre-equipe"
    Permet de relier les éléments de la barre de navigation au section correspondant.

dans containers/slider/index.js  
    - changement de l'icone "<" pour trier dans le bon ordre. 
    - Ajout de l'élément +1 a index ainsi que "?" a "byDateDesc".
    - Ajout de l'attribut alt avec renseignement de l'image. 
    - Suppresion des <></>.
    - Changement de la key pour qu'elle soit unique pour chaque slide           "event.title" => "event.date".
    - Ajout de l'attribut alt avec renseignement de l'image 
    "alt="forum"" => "alt={event.title}".
    - Changement de la key pour qu'elle corresponde à la slide en cours " key={`${event.id}`}" => "key={_.date}".
    - Remplacement de idx par index pour indiquer sur quelle image on se trouve "checked={idx === radioIdx} => "checked={index === radioIdx}".
    - Ajout de readOnly pour retirer erreur console
    -Ajout de readOnly pour retirer erreur console

Dans containers/form/index.js 
    - Récupération de onSucces pour afficher la confirmation du message envoyé
          onSuccess();
-->
