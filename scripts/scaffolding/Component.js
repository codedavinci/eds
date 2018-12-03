import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { safeRest } from '../../utils'

const Styled$COMPONENT$ = styled.button`
  background-color: lightpink;
`

const $COMPONENT$ = ({ ...rest }) => {
  const safeProps = safeRest(rest)

  return <Styled$COMPONENT$ {...safeProps}>Hello</Styled$COMPONENT$>
}

$COMPONENT$.propTypes = {}

$COMPONENT$.defaultProps = {}

$COMPONENT$.displayName = '$COMPONENT$'

export default $COMPONENT$
