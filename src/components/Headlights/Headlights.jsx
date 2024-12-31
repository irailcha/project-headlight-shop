import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAdverts, selectLoading, selectError } from '../../redux/adverts-redux/selectors';
import { fetchAdverts } from '../../redux/adverts-redux/operations';
import "./Headlights.scss";
import { Link } from "react-router-dom";
import Loader from '../Loader/Loader';

const Headlights = ({query}) => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);


  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

const filteredAdverts = adverts.filter((advert)=> advert.compatibility.toLowerCase().includes(query.toLowerCase()) || advert.partNumber.toLowerCase().includes(query.toLowerCase()))



  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="headlights">
      {error && <p className="error">{error}</p>}
      {adverts.length === 0 ? (
        <p>Оголошень немає.</p>
      ) : (
        <ul className="headlights__list">
          {filteredAdverts.map((advert) => (
            <li className="headlights__item" key={advert._id}>
              <div className="headlights__img-thumb">
                <img className="headlights__img" 
                src={advert.photo[0]} alt={`photo of ${advert.compatibility}`} loading="lazy" width={250} />
              </div>
              <p className="headlights__compatibility block">{advert.compatibility}</p>
              <p className="headlights__partNumber block"><strong>Номер деталі:</strong> {advert.partNumber}</p>
              <p className="headlights__price block">{advert.price} грн </p>
              <Link className="headlights__button block" to={advert._id}>Детальніше</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Headlights;