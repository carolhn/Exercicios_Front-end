import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NameInput extends Component {
  render() {
    const { name, handleChange } = this.props;

    return (
      <div>
        <label htmlFor="name">
            Nome:
            <input
              id="name"
              name="name"
              type="text"
              onChange={ handleChange }
              value={ name }
            />
            </label>
      </div>
    )
  }
}

NameInput.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};