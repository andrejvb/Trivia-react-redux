import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionSaveUser } from '../redux/actions';

class Login extends Component {
  state = {
    name: '',
    gravatarEmail: '',
    disable: true,
  };

  validate = () => {
    const { name, gravatarEmail } = this.state;
    const min = 6;
    const validateName = name.length > min;
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\)?$/i;
    const validateEmail = regex.test(gravatarEmail);
    this.setState({
      disable: !(validateName && validateEmail),
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.validate);
  };

  render() {
    const { name, gravatarEmail, disable } = this.state;
    const { dispatch, history } = this.props;
    return (
      <section>
        <label htmlFor="input-name">
          Nome
          <input
            id="input-name"
            name="name"
            type="text"
            value={ name }
            data-testid="input-player-name"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="input-email">
          Email
          <input
            id="input-email"
            name="gravatarEmail"
            value={ gravatarEmail }
            type="email"
            data-testid="input-gravatar-email"
            onChange={ this.handleChange }
          />
        </label>

        <button
          type="button"
          disabled={ disable }
          data-testid="btn-play"
          onClick={ () => dispatch(actionSaveUser(this.state)) }
        >
          Play
        </button>

        <button
          type="button"
          data-testid="btn-settings"
          onClick={ () => history.push('/settings') }
        >
          Configuração
        </button>

      </section>
    );
  }
}
export default connect()(Login);

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};