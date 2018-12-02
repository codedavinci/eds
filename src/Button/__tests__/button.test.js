import React from 'react'
import Button from '../Button'

describe('<Button />', () => {
  it('should render', () => {
    const btn = shallow(<Button>Hello</Button>)
    expect(btn).toMatchSnapshot()
  })
})
