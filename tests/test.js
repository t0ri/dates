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

  test('hours', () => {
    expect(new Deight('2/19/1998 13:15:30').hours).toBe(13)
  })

  test('minutes', () => {
    expect(new Deight('2/19/1998 13:15:30').minutes).toBe(15)
  })

  test('seconds', () => {
    expect(new Deight('2/19/1998 13:15:30').seconds).toBe(30)
  })
})

describe('format masks', () => {
  describe('date options', () => {
    test('year (y)', () => {
      expect(new Deight('2/19/1998 13:15:30').format('y')).toBe('98')
    })

    test('year (Y)', () => {
      expect(new Deight('2/19/1998 13:15:30').format('Y')).toBe('1998')
    })

    test('month (m)', () => {
      expect(new Deight('2/19/1998 13:15:30').format('m')).toBe('Feb')
    })

    test('month (M)', () => {
      expect(new Deight('2/19/1998 13:15:30').format('M')).toBe('February')
    })

    test('day (d)', () => {
      expect(new Deight('2/19/1998 13:15:30').format('d')).toBe('19')
    })

    test('day (D)', () => {
      expect(new Deight('2/1/1998 13:15:30').format('D')).toBe('01')
    })
  })

  describe('time options', () => {
    test('hour (h)', () => {
      expect(new Deight('2/19/1998 1:15:30').format('h')).toBe('1')
    })

    test('hour (H)', () => {
      expect(new Deight('2/19/1998 13:15:30').format('H')).toBe('13')
      expect(new Deight('2/19/1998 1:15:30').format('H')).toBe('01')
    })

    test('minute (i)', () => {
      expect(new Deight('2/19/1998 13:01:30').format('i')).toBe('1')
    })

    test('minute (I)', () => {
      expect(new Deight('2/19/1998 13:15:30').format('I')).toBe('15')
    })

    test('seconds (s)', () => {
      expect(new Deight('2/19/1998 13:15:03').format('s')).toBe('3')
    })

    test('seconds (S)', () => {
      expect(new Deight('2/1/1998 13:15:31').format('S')).toBe('31')
    })
  })

  describe('does long masks', () => {
    test('date', () => {
      expect(new Deight('2/19/1998 13:15:30').format('y/m/d')).toBe('98/Feb/19')
      expect(new Deight('2/19/1998 13:15:30').format('Y-m/d')).toBe('1998-Feb/19')
      expect(new Deight('2/19/1998 13:15:30').format('M/D/Y')).toBe('February/19/1998')
      expect(new Deight('2/19/1998 13:15:30').format('y/m/d')).toBe('98/Feb/19')
      expect(new Deight('2/19/1998 13:15:30').format('M d, Y')).toBe('February 19, 1998')
    })

    test('time', () => {
      expect(new Deight('2/19/1998 13:15:30').format('H:I:S')).toBe('13:15:30')
      expect(new Deight('2/19/1998 13:15:30').format('h:i:s')).toBe('13:15:30')
      expect(new Deight('2/19/1998 1:01:30').format('H:i:S')).toBe('01:1:30')
    })

    test('default', () => {
      expect(new Deight('2/19/1998 13:15:30').format()).toBe('February 19, 1998')
    })
  })

  describe('when', () => {
    describe('ago', () => {
      test('days', () => {
        expect(new Deight('12/1/2019').when('12/3/2019')).toBe('2 days ago')
      })

      test('months', () => {
        expect(new Deight('2/19/1998').when('12/19/1998')).toBe('10 months ago')
      })

      test('years', () => {
        expect(new Deight('2/19/1998').when('2/18/2019')).toBe('21 years ago')
      })
    })

    describe('from now', () => {
      test('days', () => {
        expect(new Deight('2/28/1998').when('2/19/1998')).toBe('9 days from now')
      })

      test('months', () => {
        expect(new Deight('12/18/1998').when('2/19/1998')).toBe('10 months from now')
      })

      test('years', () => {
        expect(new Deight('2/18/2019').when('2/19/1998')).toBe('21 years from now')
      })
    })
  })
})
