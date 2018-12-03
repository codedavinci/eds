import React from 'react'
import { Link } from '../'

describe('Link', () => {
  const doShallow = (props = {}) => shallow(<Link {...props} />)

  it('should export', () => {
    expect(typeof Link).toBeTruthy()
  })

  it('renders', () => {
    const link = doShallow()

    expect(link).toMatchSnapshot()
  })

  it('does other things', () => {
    const link = doShallow()

    expect(link).toExist()
  })

  it('passes additional attributes to the element', () => {
    const link = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(link).toHaveProp('id', 'the-id')
    expect(link).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const link = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(link).not.toHaveProp('className', 'my-custom-class')
    expect(link).not.toHaveProp('style')
  })
})
