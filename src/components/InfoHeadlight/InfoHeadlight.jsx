import React, { useEffect } from 'react';
import { getOneAdvert } from '../../redux/adverts-redux/operations';
import { useParams } from 'react-router-dom';
import { selectAdvert } from '../../redux/adverts-redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import './InfoHeadlight.scss';
import SimpleLightBox from '../SimpleLighBox/SimpleLightBox';
import Loader from '../Loader/Loader';

const InfoHeadlight = () => {
  const dispatch = useDispatch();
  const { advertId } = useParams();
  const advert = useSelector(selectAdvert);

  useEffect(() => {
    dispatch(getOneAdvert(advertId));
  }, [dispatch, advertId]);

  if (!advert) {
    return <p><Loader/></p>;
  }

  const {
    compatibility,
    state,
    typeOfLamps,
    isOriginal,
    partNumber,
    material,
    typeOfGlass,
    price,
    photo = [],
    description,
  } = advert;


  

  return (
    <section className="info">
      <div className="info__first-section">
        <div className="info__first-section__thumb-img">
        {photo[0] && <img src={photo[0]} className='info__first-section__main-img' alt="Головне фото" width='100%' />}
        </div>
       <SimpleLightBox photo={photo}/>
      </div>
      <div className="info__second-section">
        <h2>{compatibility}</h2>
        <h3><strong className='info__second-section-title'>Номер деталі:</strong> {partNumber}</h3>
        <p className="info__second-section-price">{price} грн</p>
        <p><strong className='info__second-section-title'>Стан:</strong>  {state}</p>
        <p><strong className='info__second-section-title'>Тип лампи:</strong>  {typeOfLamps}</p>
        <p><strong className='info__second-section-title'>Оригінальна деталь:</strong>  {isOriginal ? 'Так' : 'Ні'}</p>
        <p><strong className='info__second-section-title'>Матеріал:</strong>  {material}</p>
        <p><strong className='info__second-section-title'>Тип скла:</strong>  {typeOfGlass}</p>
        <p>{description}</p>
        <div className='info__buttons'>
        <button className="info__buttons-order">Замовити</button>
        <button className="info__buttons-ask">Є питання?</button>
        </div>
      </div>
    </section>
  );
};

export default InfoHeadlight;
