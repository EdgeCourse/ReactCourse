import * as React from 'react';


const INITIAL_STATE = {
  email: '',
  password: '',
};

const VALIDATION = {
  email: [
    {
      isValid: (value) => !!value,
      message: 'Is required.',
    },
    {
      isValid: (value) => /\S+@\S+\.\S+/.test(value),
      message: 'Needs to be an email.',
    },
  ],
  password: [
    {
      isValid: (value) => !!value,
      message: 'Is required.',
    },
  ],
};

const getErrorFields = (form) =>
  Object.keys(form).reduce((acc, key) => {
    if (!VALIDATION[key]) return acc;

    const errorsPerField = VALIDATION[key]
      // get a list of potential errors for each field
      // by running through all the checks
      .map((validation) => ({
        isValid: validation.isValid(form[key]),
        message: validation.message,
      }))
      // only keep the errors
      .filter((errorPerField) => !errorPerField.isValid);

    return { ...acc, [key]: errorsPerField };
  }, {});


const getDirtyFields = (form) =>
  Object.keys(form).reduce((acc, key) => {
    // check all form fields that have changed
    const isDirty = form[key] !== INITIAL_STATE[key];

    return { ...acc, [key]: isDirty };
  }, {});

const LoginForm = () => {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const [form, setForm] = React.useState(INITIAL_STATE);
 

const dirtyFields = getDirtyFields(form);


const hasChanges = Object.values(dirtyFields).every(
    (isDirty) => !isDirty
  );

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailRef.current.value
    const password = passwordRef.current.value

    alert(email + ' ' + password);
  };

const errorFields = getErrorFields(form);
  console.log(errorFields);

  return (

    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={form.email}
          onChange={handleChange}
		  class="form-control"
        />
        {errorFields.email?.length ? (
          <span style={{ color: 'red' }}>
            {errorFields.email[0].message}
          </span>
        ) : null}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        class="form-control"
		/>
        {errorFields.password?.length ? (
          <span style={{ color: 'red' }}>
            {errorFields.password[0].message}
          </span>
        ) : null}
      </div>
	  <button disabled={hasChanges} type="submit">
	  
        Submit
      </button>
    </form>
  );
};



export default LoginForm ;