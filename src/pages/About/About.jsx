import React from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";
import './About.scss';
import image from '../../assets/images/Designer (12).png';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about">
    <button className="btn-back" onClick={()=> navigate('/')}><IoChevronBackSharp /> Hа головну</button>
      
          <h1 className="about__title">Про нас</h1>
          <div className="about-container">

          <div className="about-container-first">
            <div className="block-1">
          <p>
            Ласкаво просимо до магазину <strong>Avtogalogen</strong>!
          </p>
          <p>
            Ми працюємо для вас з <strong>2022 року</strong>, спеціалізуючись на продажу якісного автоосвітлення. Наші товари можна знайти на популярних платформах <strong>OLX</strong>, <strong>RIA.com</strong> та інших, де ми вже здобули довіру багатьох задоволених клієнтів.
          </p>
          </div>
          <div className="block-3">
          <div className="block-2">
          <p>
            Ми цінуємо кожного клієнта і робимо все можливе, щоб забезпечити високий рівень обслуговування.
          </p>
          <p>
            Обираючи <strong>Avtogalogen</strong>, ви отримуєте якісне освітлення для вашого авто та надійного партнера для подальшої співпраці.
          </p>
          <p>Дякуємо, що обираєте нас!</p>

         
          </div>
          <img className="emploee" src={image} alt="emploee" width={350}/>
          </div>
          </div>
        <div className="about-container-second">
          <p>У нас ви отримаєте:</p>
          <ul>
            <li><strong>Професійну консультацію</strong> від фахівців, які допоможуть обрати ідеальний варіант для вашого авто.</li>
            <li><strong>Відеоогляд товару</strong> — перед покупкою ви можете побачити детальний огляд конкретної деталі.</li>
            <li><strong>Зручну оплату</strong>: як повну передоплату, так і накладений платіж при отриманні.</li>
            <li><strong>Гарантію на встановлення</strong> терміном <strong>14 днів</strong>, щоб ви могли бути впевнені у якості.</li>
            <li><strong>Самовивіз у м. Дніпро</strong> — завітайте до нас особисто, щоб отримати товар швидко та зручно.</li>
            <li><strong>Можливість поставити питання</strong> — через <strong>Telegram</strong>, <strong>Viber</strong> або <strong>WhatsApp</strong>, а також за телефонами:
              <ul>
                <li><strong>+380970019526</strong></li>
                <li><strong>+380632327368</strong></li>
              </ul>
            </li>
          </ul>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default About;
