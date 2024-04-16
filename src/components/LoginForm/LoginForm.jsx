import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button';
import css from './LoginForm.module.css';

const LoginForm = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = evt => {
    evt.preventDefault();

    console.log(`Name: ${name} Password: ${password}`);
    closeModal();
    navigate('/products', { replace: true });
  };
  const handleInputChange = evt => {
    switch (evt.target.name) {
      case 'name':
        setName(evt.target.value);
        break;
      case 'password':
        setPassword(evt.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <h2 className={css.title}>Registration:</h2>
      <form className={css.loginForm} onSubmit={handleSubmit}>
        <label className={css.formLabel}>
          Name
          <input type="text" name="name" onChange={handleInputChange} />
        </label>
        <label className={css.formLabel}>
          Password
          <input type="text" name="password" onChange={handleInputChange} />
        </label>
        <Button onClick={() => null} type={'submit'}>
          Register
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
