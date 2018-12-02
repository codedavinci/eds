import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../Button'
import { color } from '@storybook/addon-knobs/react'
import { actions } from '@storybook/addon-actions'

import { wInfo } from '../../../utils'

const eventsFromObject = actions({ onClick: 'clicked', onMouseOver: 'hovered' })

storiesOf('Button', module)
  .addWithJSX(
    'with text',
    wInfo()(() => (
      <Button bg={color('bg', 'red')} {...eventsFromObject}>
        Hello Button
      </Button>
    ))
  )
  .addWithJSX('with some emoji', () => (
    <Button bg={color('bg', 'salmon')} {...eventsFromObject}>
      😀 😎 👍 💯
    </Button>
  ))
