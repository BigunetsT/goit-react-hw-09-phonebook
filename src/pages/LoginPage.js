import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

class LoginPage extends Component {
  static propTypes = {
    state: PropTypes.shape({
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      showPassword: PropTypes.bool,
    }),
    onSubmit: PropTypes.func,
  };
  state = {
    email: '',
    password: '',
    showPassword: false,
  };
  handleClickShowPassword = () => {
    this.setState({ ...this.state, showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleChange = prop => event => {
    this.setState({ ...this.state, [prop]: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ email: '', password: '', showPassword: false });
  };

  render() {
    const { email, password, showPassword } = this.state;

    return (
      <div className="wrapper">
        <h1 className="title">Сторінка входу</h1>
        <form onSubmit={this.handleSubmit} className="form" autoComplete="on">
          <TextField
            id="outlined-basic"
            label="Пошта"
            variant="outlined"
            value={email}
            name="email"
            onChange={this.handleChange('email')}
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Пароль
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              name="password"
              onChange={this.handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
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
}
const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginPage);
