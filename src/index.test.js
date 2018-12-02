import * as Eds from './index'

describe('Eds', () => {
  it('should have exports', () => {
    expect(typeof Eds).toBe('object')
  })

  it('should not do undefined exports', () => {
    Object.keys(Eds).forEach(exportKey => {
      expect(Boolean(Eds[exportKey])).toBe(true)
    })
  })
})
