import React from 'react';
import { Field, reduxForm } from 'redux-form';

import * as validate_api from '../../apis/validate';

import './index.css';

const validate = values => {
  const errors = {};

  const errorText = {
    required: 'Required',
    name:
      'Value should contain only small and capital letters, no numbers, special characters',
    email: 'Value should be a valid email'
  };

  if (!values.firstname) {
    errors.firstname = errorText.required;
  } else if (!isCapital(values.firstname)) {
    errors.firstname = errorText.name;
  }

  if (!values.lastname) {
    errors.lastname = errorText.required;
  } else if (!isCapital(values.lastname)) {
    errors.lastname = errorText.name;
  }

  if (!values.email) {
    errors.email = errorText.required;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = errorText.email;
  }

  return errors;

  function isCapital(str) {
    return /^[A-Z][a-z]*$/.test(str);
  }
};

const asyncValidate = (values, dispatch) => {
  return validate_api.iban(values.iban).catch(() => {
    throw { iban: 'IBAN should be valid' };
  });
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
    </div>
    <div>{touched && error && <span>{error}</span>}</div>
  </div>
);

const Comp = props => {
  const { handleSubmit, submitting, onSubmit } = props;

  return (
    <div className="register-form">
      <h1>Register Account</h1>
      <form
        onSubmit={handleSubmit((...args) => {
          const errors = validate(...args);

          if (Object.keys(errors).length === 0) onSubmit();

          return errors;
        })}>
        <Field
          name="firstname"
          type="text"
          component={renderField}
          label="First name"
        />
        <Field
          name="lastname"
          type="text"
          component={renderField}
          label="Last name"
        />
        <Field
          name="email"
          type="email"
          component={renderField}
          label="Email"
        />
        <Field name="iban" type="text" component={renderField} label="IBAN" />
        <div className="buttons">
          <button type="submit" disabled={submitting}>
            Submit
          </button>
        </div>
        <div className="clear" />
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'register',
  validate,
  asyncValidate,
  asyncBlurFields: ['iban']
})(Comp);
