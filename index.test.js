const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const testInput = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const copy = { foo: 'foo', bar: 'bar', baz: 'baz' }
    expect(utils.trimProperties(input)).toEqual(copy)
    utils.trimProperties(input)
    expect(input).toEqual(testInput)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    let input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    let input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    utils.trimPropertiesMutation(input)
    expect(input).toEqual(expected)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const arr = [
      {integer: 3},
      {integer: 1},
      {integer: 7},
      {integer: 10}
    ]
    const find = utils.findLargestInteger(arr)
    expect(find).toEqual({integer: 10})
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  const call = (num) => {
    let count
    for(let i = num; i > 0; i--){
      count = counter.countDown();
    }
    return count
  }
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
      expect(call(1)).toEqual(3);
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
      expect(call(2)).toEqual(2);
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
      expect(call(5)).toEqual(0);
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  const call = (num) => {
    let season
    for(let i = num; i > 0; i--){
      season = seasons.next()
    }
    return season
  }
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(call(1)).toEqual("summer")
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    expect(call(2)).toEqual("fall")
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    expect(call(3)).toEqual("winter")
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    expect(call(4)).toEqual("spring")
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    expect(call(5)).toEqual("summer")
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    expect(call(40)).toEqual("spring")
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive(100)).toEqual(100);

  })
  test('[16] driving the car uses gas', () => {
    focus.drive(600)
    let gas = focus.tank
    expect(gas).toEqual(0)
  })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(600)
    expect(focus.tank).toEqual(0)
    expect(focus.drive(100)).toEqual("The tank is empty")
    focus.refuel(20)
    expect(focus.drive(100)).toEqual(700);
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(20)
    expect(focus.tank).toEqual(20)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
   const check = await utils.isEvenNumberAsync(2)
   expect(check).toBeTruthy()
  })
  test('[20] resolves false if passed an odd number', async () => {
    const check = await utils.isEvenNumberAsync(3)
    expect(check).toBeFalsy()
  })
})
