import React from 'react';

const field = {
  email: {
    regex: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
    message: 'Insert a valid e-mail',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validateField(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('This field is required!');
      return false;
    } else if (field[type] && !field[type].regex.test(value)) {
      setError(field[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validateField(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validateField: () => validateField(value),
    onBlur: () => validateField(value),
  };
};

export default useForm;
