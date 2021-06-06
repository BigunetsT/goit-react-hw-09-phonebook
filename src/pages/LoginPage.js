import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { authOperations } from '../redux/auth';
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
import '../styles.scss';

export default function LoginPage() {
  const [formData, setFormData] = useState({
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
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn(formData));
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className="wrapper">
      <h1 className="title">Сторінка входу</h1>
      <form onSubmit={handleSubmit} className="form" autoComplete="on">
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
          Ввійти
        </button>
      </form>
    </div>
  );
}
LoginPage.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  showPassword: PropTypes.bool,
};
