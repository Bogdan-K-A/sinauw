import { Formik } from 'formik';
import * as Yup from 'yup';

import { Button } from '../Button';
import { AiOutlineCloseCircle } from 'react-icons/ai';

//StyledComponent
import { StyledForm, StyledInput, WrapperError } from './Form.styled';
import { useTranslation } from 'react-i18next';

const Form = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { resetForm }) => {
        if (values) {
          resetForm({ email: '', password: '' });
          return alert(JSON.stringify(values, null, 2));
        }
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string('Enter your email')
          .email('Enter a valid email')
          .required('This is a required field'),
        password: Yup.string('Enter your password')
          .min(8, 'Password should be of minimum 8 length')
          .required('Password is required'),
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
            <AiOutlineCloseCircle onClick={onClick} />
            <h2>{t('modal.h2')}</h2>

            <div>
              <StyledInput
                placeholder="Email"
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
            </div>

            <div>
              <StyledInput
                placeholder="Password"
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
            </div>
            <Button type="submit">{t('modal.btn')}</Button>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default Form;
