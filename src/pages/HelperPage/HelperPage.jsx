import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBackSharp } from "react-icons/io5";
import Section from '../../components/HelpInfo/Section/Section';
import HeadlightList from '../../components/HelpInfo/HeadlightList/HeadlightList';
import './HelperPage.scss';


const HelperPage = () => {
  const navigate=useNavigate();

  const frontHeadlights = [
    { title: 'Галоген', link: '/galogen' },
    { title: 'Ксенон',link: '/xenon' },
    { title: 'LED',  link: '/led' },
    { title: 'Лазер', link: '/laser' },
  ];


  const typesOfLights=[
    { title: 'Передні фари',  link: '/headlight' },
    { title: 'Задні ліхтарі', link: '/backlight' },
    { title: 'Протитуманні ліхтарі', link: '/foglight' },
  ]

  return (
    <div className="helper">
       <button className="btn-back" onClick={()=> navigate('/')}><IoChevronBackSharp /> Hа головну</button>

      <h1 className="helper__title">Все про фари та освітлення для вашого автомобіля</h1>
<div className='helper__container'>
      <Section title="Види освітлення">
      <HeadlightList headlights={frontHeadlights} />
      </Section>

      <Section title="Види фар">
      <HeadlightList headlights={typesOfLights} />
      </Section>



      <Section title="Як вибрати фари?">
        <ul>
          <li>Перевіряйте сумісність з вашим автомобілем.</li>
          <li>Враховуйте умови, в яких ви найчастіше їздите:</li>
          <ul>
            <li>Траса: категорія транспорту залежить від вашого міста.</li>
            <li>Місто: використовуйте світлові засоби залежно від вашого міста.</li>
          </ul>
          <li>Уважно перевіряйте сертифікацію (ECE або DOT).</li>
          <li>Обирайте надійні бренди: Philips, Osram, Hella тощо.</li>
        </ul>
      </Section>

      <Section title="Догляд за фарами">
        <ul>
          <li>Регулярно очищуйте фари від бруду та пилу.</li>
          <li>Перевіряйте налаштування світлового пучка.</li>
          <li>Замінюйте лампи парами, щоб уникнути різної яскравості.</li>
        </ul>
      </Section>

      <Section title="Чому важливо вибрати якісне освітлення?">
        <ul>
          <li>Безпека: якісне освітлення зменшує ризик аварій.</li>
          <li>Комфорт: хороші фари знижують напруження очей під час нічної їзди.</li>
          <li>Довговічність: якісні лампи працюють довше, що економить кошти.</li>
        </ul>
      </Section>

      <Section title="Законодавчі вимоги щодо фар">
  <ul>
    <li>Фари повинні відповідати стандартам ECE або DOT.</li>
    <li>Заборонено використовувати ксенонові лампи в нерозрахованих для них фарах.</li>
    <li>Денні ходові вогні повинні бути увімкнені відповідно до ПДР вашої країни.</li>
    <li>Заборонено використання надто яскравого світла, яке засліплює інших водіїв.</li>
    <li>Перевіряйте правильне регулювання світлового пучка, щоб уникнути штрафів.</li>
  </ul>
</Section>

      </div>
    </div>
  );
};

export default HelperPage;
