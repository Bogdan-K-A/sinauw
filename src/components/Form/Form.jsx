import { useRef, useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';

import { Button } from '../Button';
import { AiOutlineCloseCircle } from 'react-icons/ai';

//StyledComponent
import { StyledForm, StyledInput, WrapperError } from './Form.styled';
import { useTranslation } from 'react-i18next';

const Form = ({ onClick }) => {
  const { t, i18n } = useTranslation();
  const [currentMask, setCurrentMask] = useState('');
  const [phone, setPhone] = useState(undefined);
  const phoneInput = useRef(null);

  const maskPhone = () => {
    switch (i18n.language) {
      case 'RU':
        setCurrentMask('+7 (999) 999-9999');
        break;

      case 'UA':
        setCurrentMask('+380 (99) 999-9999');
        break;

      default:
        return setCurrentMask('+1 (999) 999-9999');
    }
  };

  useEffect(() => {
    maskPhone();
  }, [i18n.language]);

  const handlePhoneChange = event => {
    const { value } = event.target;
    setPhone(value !== '' ? value : undefined);
  };

  return (
    <Formik
      initialValues={{ name: '', phone: '', email: '', password: '' }}
      onSubmit={(values, { resetForm }) => {
        if (values) {
          resetForm({ name: '', phone: '', email: '', password: '' });
          return alert(JSON.stringify(values, null, 2));
        }
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Обов'язкове поле"),
        phone: Yup.string()
          .matches(/^[0-9]*$/, t('modal.phoneNumeric'))
          .required(t('modal.phoneRequired'))
          .min(10, t('modal.phoneLength'))
          .max(10, t('modal.phoneLength')),
        // email: Yup.string()
        //   .email(t('modal.emailValid'))
        //   .required(t('modal.emailRequired')),
        // password: Yup.string()
        //   .min(8, t('modal.passwordLength'))
        //   .required(t('modal.passwordRequired')),
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;

        return (
          <StyledForm onSubmit={handleSubmit}>
            <AiOutlineCloseCircle
              onClick={onClick}
              style={{ cursor: 'pointer' }}
            />
            <h2>{t('modal.h2')}</h2>

            <div>
              <StyledInput
                placeholder="Name"
                id="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <WrapperError>{errors.name}</WrapperError>
              ) : (
                <WrapperError />
              )}
            </div>

            <div>
              <StyledInput
                mask={currentMask}
                placeholder="Phone"
                id="phone"
                type="tel"
                value={phone !== undefined ? phone : ''}
                onChange={handlePhoneChange}
                onBlur={handleBlur}
                ref={phoneInput}
              />

              {errors.phone && touched.phone ? (
                <WrapperError>{errors.phone}</WrapperError>
              ) : (
                <WrapperError />
              )}
            </div>

            {/* <div>
              <StyledInput
                placeholder={t('modal.emailPlaceholder')}
                id="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <WrapperError>{errors.email}</WrapperError>
              ) : (
                <WrapperError />
              )}
            </div> */}

            {/* <div>
              <StyledInput
                placeholder={t('modal.passwordPlaceholder')}
                id="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <WrapperError>{errors.password}</WrapperError>
              ) : (
                <WrapperError />
              )}
            </div> */}
            <Button type="submit">{t('modal.btn')}</Button>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default Form;
