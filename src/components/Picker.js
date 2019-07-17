import React from 'react'
import PropTypes from 'prop-types'

const Picker = ({ value, onSubmit }) => (
  <span>
    <h1>{value}</h1>
    <form onSubmit={onSubmit}>
      <div>
        <label>title</label>
        <input></input>
      </div>
      <div>
        <label>brand</label>
        <input></input>
      </div>
      <button type="submit">Save</button>
    </form>
  </span>
)

Picker.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default Picker
