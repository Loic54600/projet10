import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);

  const byDateDesc = data?.focus.sort((dataA, dataB) =>
    /* changement de l'icone "<" pour trier dans le bon ordre  */
    new Date(dataA.date) > new Date(dataB.date) ? -1 : 1
  );
  const nextCard = () => {
    setTimeout(
      /* ajout de l'élément +1 a index ainsi que "?" a "byDateDesc" */
      () => setIndex(index + 1 < byDateDesc?.length ? index + 1 : 0),
      2000
    );
  };
  useEffect(() => {
    nextCard();
  });

  return (
    <div className="SlideCardList">
      {/* Suppresion des <></> */}
      {byDateDesc?.map((event, idx) => (
        // Changement de la key pour qu'elle soit unique pour chaque slide "event.title" => "event.date"
        <div key={event.date}>
          <div
            className={`SlideCard SlideCard--${index === idx ? "display" : "hide"
              }`}
          >
            {/* Ajout de l'attribut alt avec renseignement de l'image "alt="forum"" => "alt={event.title}"  */}
            <img src={event.cover} alt={event.title} />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
                  // Changement de la key pour qu'elle corresponde à la slide en cours " key={`${event.id}`}" => "key={_.date}"
                  key={_.date}
                  type="radio"
                  name="radio-button"
                  // Remplacement de idx par index pour indiquer sur quelle image on se trouve "checked={idx === radioIdx} => "checked={index === radioIdx}"*/
                  checked={index === radioIdx}
                  // Ajout de readOnly pour retirer erreur console
                  readOnly
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;