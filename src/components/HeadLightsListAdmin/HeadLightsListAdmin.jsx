import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAdverts, selectLoading, selectError } from "../../redux/adverts-redux/selectors";
import { fetchAdverts, removeAdvert } from "../../redux/adverts-redux/operations";
import Loader from "../Loader/Loader";
import "./HeadLightsListAdmin.scss";


const HeadLightsListAdmin = ({query}) => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(removeAdvert(id));
  };

  
  
  if (isLoading) {
    return <Loader />;
  }

  return (
    <section>
    <div className="headlights">
      {error && <p className="error">{error}</p>}
      {adverts.length === 0 ? (
        <p>Оголошень немає.</p>
      ) : (
        <ul className="headlights__list">
          {adverts.map((advert) => (
          <li className="headlights__item" key={advert._id}>
          <div className="headlights__img-thumb">
            <img className="headlights__img" 
            src={advert.photo[0]} alt={`photo of ${advert.compatibility}`} loading="lazy" width={250} />
          </div>
          <p className="headlights__compatibility block">{advert.compatibility}</p>
          <p className="headlights__partNumber block"><strong>Номер деталі:</strong> {advert.partNumber}</p>
          <p className="headlights__price block">{advert.price} грн </p>
          <Link className="headlights__button block" to={advert._id}>Детальніше</Link>
          <div className="headlights__buttons">
          <button onClick={() => handleRemove(advert._id)}>Видалити</button>
          <button >Змінити</button>
          </div>
        </li>
          ))}
        </ul>
      )}
    </div>
    </section>
  );
};

export default HeadLightsListAdmin;
