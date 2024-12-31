import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { createAdvert } from '../../redux/adverts-redux/operations';
import './AdvertForm.scss';


const advertSchema = Yup.object().shape({
  compatibility: Yup.string().required('Це поле обов\'язкове'),
  state: Yup.string().required('Це поле обов\'язкове'),
  typeOfLamps: Yup.string().required('Це поле обов\'язкове'),
  isOriginal: Yup.boolean().required('Це поле обов\'язкове'),
  partNumber: Yup.string().required('Це поле обов\'язкове'),
  material: Yup.string().required('Це поле обов\'язкове'),
  typeOfGlass: Yup.string().required('Це поле обов\'язкове'),
  price: Yup.number().required('Це поле обов\'язкове').min(0, 'Ціна не може бути від\'ємною'),
  photo: Yup.array()
  .min(1, 'Має бути хоча б одне фото')
  .test("fileFormat", "Файли мають бути у форматі JPEG, WEBP або PNG", (value) =>
    value.every((file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type))
  )
  .test("fileSize", "Розмір файлу не має перевищувати 5 МБ", (value) =>
    value.every((file) => file.size <= 5 * 1024 * 1024)
  ),
  videoUrl: Yup.string().url('Невірне посилання на відео'),
  description: Yup.string().required('Це поле обов\'язкове'),
});

const AdvertForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    const formData = new FormData();
    
    // Додаємо всі поля до FormData
    formData.append('compatibility', values.compatibility);
    formData.append('state', values.state);
    formData.append('typeOfLamps', values.typeOfLamps);
    formData.append('isOriginal', values.isOriginal);
    formData.append('partNumber', values.partNumber);
    formData.append('material', values.material);
    formData.append('typeOfGlass', values.typeOfGlass);
    formData.append('price', values.price);
    formData.append('description', values.description);

    // Додаємо фото
    values.photo.forEach((file) => {
      formData.append("photo", file);
    });

    // Додаємо відео
    if (values.videoUrl) {
      formData.append('videoUrl', values.videoUrl);
    }

    try {
      // Викликаємо action для додавання оголошення
      await dispatch(createAdvert(formData));
      alert('Оголошення додано!');
    } catch (error) {
      alert('Сталася помилка при додаванні оголошення');
    }
  };
  const validateFiles = (files) => {
    if (!files.length) return 'Має бути хоча б одне фото';
    for (let file of files) {
      if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
        return 'Файли мають бути у форматі JPEG, WEBP або PNG';
      }
      if (file.size > 5 * 1024 * 1024) {
        return 'Розмір файлу не має перевищувати 5 МБ';
      }
    }
    return undefined;
  };
  



  return (
    <section className="form-container">
      <Formik
        initialValues={{
          compatibility: '',
          state: '',
          typeOfLamps: '',
          isOriginal: false,
          partNumber: '',
          material: '',
          typeOfGlass: '',
          price: 0,
          photo: [],
          videoUrl: '',
          description: '',
        }}
        validationSchema={advertSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, setErrors }) => (
          <Form>
            <div>
              <label htmlFor="compatibility">Сумісність</label>
              <Field name="compatibility" type="text" />
              <ErrorMessage name="compatibility" component="div" className="error-message" />
            </div>
            <div>
              <label htmlFor="state">Стан</label>
              <Field name="state" type="text" />
              <ErrorMessage name="state" component="div" className="error-message" />
            </div>
            <div>
              <label htmlFor="typeOfLamps">Тип ламп</label>
              <Field name="typeOfLamps" type="text" />
              <ErrorMessage name="typeOfLamps" component="div" className="error-message" />
            </div>
            <div>
              <label htmlFor="isOriginal">Оригінальність</label>
              <Field type="checkbox" name="isOriginal" />
              <ErrorMessage name="isOriginal" component="div" className="error-message" />
            </div>
            <div>
              <label htmlFor="partNumber">Номер деталі</label>
              <Field name="partNumber" type="text" />
              <ErrorMessage name="partNumber" component="div" className="error-message" />
            </div>
            <div>
              <label htmlFor="material">Матеріал</label>
              <Field name="material" type="text" />
              <ErrorMessage name="material" component="div" className="error-message" />
            </div>
            <div>
              <label htmlFor="typeOfGlass">Тип скла</label>
              <Field name="typeOfGlass" type="text" />
              <ErrorMessage name="typeOfGlass" component="div" className="error-message" />
            </div>
            <div>
              <label htmlFor="price">Ціна</label>
              <Field name="price" type="number" />
              <ErrorMessage name="price" component="div" className="error-message" />
            </div>
            <div>
              <label htmlFor="photo">Фото</label>
              <input
                name="photo"
                type="file"
                multiple
                onChange={(event) => {
                  const files = Array.from(event.currentTarget.files);
                  const error = validateFiles(files);
                  if (error) {
                    setFieldValue('photo', []);
                    setErrors({ photo: error });
                  } else {
                    setFieldValue('photo', files);
                  }
                }}
              />
              <ErrorMessage name="photo" component="div" className="error-message" />
            </div>
            <div>
              <label htmlFor="videoUrl">Посилання на відео</label>
              <Field name="videoUrl" type="url" />
              <ErrorMessage name="videoUrl" component="div" className="error-message" />
            </div>
            <div>
              <label htmlFor="description">Опис</label>
              <Field name="description" as="textarea" />
              <ErrorMessage name="description" component="div" className="error-message" />
            </div>
            <button type="submit">Додати оголошення</button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default AdvertForm;
