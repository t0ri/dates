// require('../src/index')
const Deight = require('../src/index')

test('Deight creates a Date object', () => {
  expect(new Deight('2/19/98').date).toBeInstanceOf(Date)
  expect(new Deight('2/19/98').date).toMatchObject(new Date('2/19/98'))
})

describe('Deight getters return', () => {
  test('full year', () => {
    expect(new Deight('2/19/98').year).toBe(1998)
  })

  test('month name', () => {
    expect(new Deight('2/19/98').month).toBe('February')
  })

  test('weekday name', () => {
    expect(new Deight('2/19/98').weekday).toBe('Thursday')
  })

  test('day of month', () => {
    expect(new Deight('2/19/98').day).toBe(19)
  })
})
