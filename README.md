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

Dans page/index.js
    //Rajout des id:
    - id="nos-services"
    - id="nos-realisations"
    - id="notre-equipe"
    Permet de relier les éléments de la barre de navigation au section correspondant.

Dans containers/slider/index.js  
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

Dans pages/home/index.js
    - Changement de variable "const { last } = useData()"
    - Création de la variable last pour la récupération des dates pour les prestation
    - Changement:   
        <EventCard
            imageSrc={last?.cover}
            title={last?.title}
            date={new Date(last?.date)}
            small
            label="boom"
        />

    - Rajout des liens réseaux sociaux
    - rajout de "target="blank" qui permet l'ouverture d'une nouvelle fenetre

Dans pages/home/index.test.js
    -"timeout" délai d'expiration de 2000ms dépassé = erreur asynchrone

Dans containers/form/index.js 
    - Récupération de onSucces pour afficher la confirmation du message envoyé
          onSuccess();

Dans containers/form/index.test.js  
    - yarn test —watch
    - Modification:
       at waitForWrapper (node_modules/@testing-library/dom/dist/wait-for.js:187:27)
      at findByText (node_modules/@testing-library/dom/dist/query-helpers.js:101:33)
      at Object.<anonymous> (src/containers/Form/index.test.js:25:20) 

    - Rajout de waitFor  dans l'import "  ReferenceError: waitFor is not defined "
    -"timeout" délai d'expiration de 2000ms dépassé = erreur asynchrone

Dans helpers/date/index.js
    - Rajout +1 au tableau car 0 n'existe pas début a 1

Dans components/icon/index.test.js
    - partie facebook a completer, exemple sur twitch. 
    - création de "FBicon"
    - Rajout des modifications dans components/icon/index.js
    - data-testid="FBicon"

Dans components/logo/index.js
    - On retravaille le code "<text>" pour erreur console
      <text fill="url(#paint5_linear_56_57)" 
      style={{ 'font-family': 'Kalimati', 'font-size': '39px', 'font-weight': 700, 'white-space': 'pre' }} 
      x="-1.125" y="44.995">724
      </text>

      pour avoir
            style={{ 
        fontfamily: 'Kalimati', 
        fontsize: 40, 
        fontweight: 700, 
        whitespace: 'pre'
       }} 

 Dans containers/events/index.test.js
    - erreur yarn "expect(await screen.queryByText("Forum #productCON")).not.toBeInTheDocument();"
    - modification "expect(await screen.queryByText("Forum #productCON")).toBeInTheDocument();"

-->
