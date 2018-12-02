import React from 'react'
import Button from '../Button'

describe('<Button />', () => {
  const defaultProps = {
    bg: 'pink',
    children: 'Hello',
  }

  it('should render', () => {
    const btn = shallow(<Button {...defaultProps} />)
    expect(btn).toMatchSnapshot()
  })
})
