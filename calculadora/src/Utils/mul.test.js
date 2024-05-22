import { it, expect } from 'vitest'
import { mul } from './math'


it('one time two returns 2', () => {
    expect(mul(1, 2)).toEqual(2)
})