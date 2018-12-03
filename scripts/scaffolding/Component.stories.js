import React from 'react'
import { storiesOf } from '@storybook/react'
import { color } from '@storybook/addon-knobs/react'
import { actions } from '@storybook/addon-actions'

import $COMPONENT$ from '../$COMPONENT$'

import { wInfo } from '../../../utils'

const eventsFromObject = actions({ onClick: 'clicked', onMouseOver: 'hovered' })

storiesOf('$COMPONENT$', module).addWithJSX(
  'descriptive text about',
  wInfo('Some styled info goes here')(() => (
    <$COMPONENT$ {...eventsFromObject} />
  ))
)
