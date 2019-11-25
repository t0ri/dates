// require('../src/index')
const Deight = require('../src/index')

test('Deight creates a Date object', () => {
  expect(new Deight('2/19/98').date).toBeInstanceOf(Date)
  expect(new Deight('2/19/98').date).toMatchObject(new Date('2/19/98'))
})
