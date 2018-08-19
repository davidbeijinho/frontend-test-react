import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ onChange, label, name, value }) => (
  <label className="formLabel" htmlFor={`formInput-${name}`}>
    {label}
    <input
      className="formInput"
      id={`formInput-${name}`}
      name={name}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

FormInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormInput;
