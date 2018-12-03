import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { safeRest } from '../../utils'

const StyledLink = styled.button`
  background-color: lightpink;
`

const Link = ({ ...rest }) => {
  const safeProps = safeRest(rest)

  return <StyledLink {...safeProps}>Hello</StyledLink>
}

Link.propTypes = {}

Link.defaultProps = {}

Link.displayName = 'Link'

export default Link
