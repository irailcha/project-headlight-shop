import React from 'react';
import './OrderPage.scss';
import { useNavigate } from 'react-router-dom';
import { IoChevronBackSharp } from "react-icons/io5";


const OrderPage = () => {
    const navigate=useNavigate();
  return (
    <>
  <button className="btn-back" onClick={()=> navigate(-1)}><IoChevronBackSharp /> Hа попередню</button>
    <div className="order">
      <h2 className="order__title">Замовлення фари</h2>

      <div className="order__info">
        <p>
          <strong>Оплата:</strong> замовити можна по <strong>повній оплаті</strong> або по <strong>накладеному платежу з передоплатою 10%</strong> на карту <strong>Моно</strong> або <strong>ПриватБанк</strong>.
        </p>
        <p>
          Оплата на розрахунковий рахунок поки не доступна.
        </p>
        <p>
          <strong>Відправка:</strong> здійснюється <strong>Новою поштою</strong>.
        </p>
      </div>
      </div>
        </>
  );
};

export default OrderPage;

