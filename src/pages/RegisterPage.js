import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { authOperations } from '../redux/auth';
import '../styles.scss';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleChange = name => event => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register(formData));
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className="wrapper">
      <h1 className="title">Сторінка реєстрації</h1>
      <form onSubmit={handleSubmit} className="form" autoComplete="on">
        <TextField
          id="outlined-basic"
          label="Ім'я"
          variant="outlined"
          name="name"
          onChange={handleChange('name')}
        />
        <TextField
          id="outlined-basic"
          label="Пошта"
          variant="outlined"
          name="email"
          onChange={handleChange('email')}
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>

        <button type="submit" className="formBtn">
          Зареєструватися
        </button>
      </form>
    </div>
  );
}

RegisterPage.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  showPassword: PropTypes.bool,
};
