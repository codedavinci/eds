import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ bg, children, ...rest }) => (
  <button style={{ backgroundColor: bg }} {...rest}>
    {children}
  </button>
)

Button.propTypes = {
  bg: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
}

Button.displayName = 'Button'

export default Button
