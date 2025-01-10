import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { sendMessage } from "../../redux/message-redux/operations";
import * as Yup from "yup";
import "./ChatForm.scss";
import { IoMdClose } from "react-icons/io";
import { RiSendPlaneFill } from "react-icons/ri";
import Alert from "@mui/material/Alert";

const chatSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, "Невірний формат номера телефону")
    .required("Це поле обов'язкове"),
  message: Yup.string().required("Це поле обов'язкове"),
});

const ChatForm = ({ onClose, advertId }) => {
  const dispatch = useDispatch();
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="chat-modal">
      <button type="button" className="chat-modal__close" onClick={onClose}>
        <IoMdClose />
      </button>
      <Formik
        initialValues={{
          phone: "",
          message: "",
        }}
        validationSchema={chatSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            await dispatch(sendMessage({ advertId, ...values }));
            resetForm();
            setShowSuccess(true); // Показуємо сповіщення
            setTimeout(() => setShowSuccess(false), 3000); // Ховаємо через 3 секунди
          } catch (error) {
            console.error("Помилка при відправленні повідомлення:", error);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form id="chatForm" className="chatForm">
            {showSuccess && (
              <Alert
                icon={<RiSendPlaneFill fontSize="inherit" />}
                severity="success"
                className="success-alert"
              >
                Повідомлення успішно відправлено!
                Протягом декількох хвилин з Вами зв'яжеться наш спеціаліст!
              </Alert>
            )}
            <div>
              <label htmlFor="phone">Ваш номер телефону:</label>
              <Field
                className="chatForm__phone"
                type="text"
                id="phone"
                name="phone"
                placeholder="+380123456789"
              />
              <ErrorMessage name="phone" component="div" className="error-message" />
            </div>
            <div>
              <label htmlFor="message">Ваше запитання:</label>
              <Field
                className="chatForm__message"
                as="textarea"
                id="message"
                name="message"
                placeholder="Введіть ваше запитання"
              />
              <ErrorMessage name="message" component="div" className="error-message" />
            </div>
            <button type="submit" className="chatForm__send" disabled={isSubmitting}>
              {isSubmitting ? "Відправлення..." : "Відправити"} <RiSendPlaneFill />
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChatForm;
