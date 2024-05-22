import { it, expect } from 'vitest'
import { sub } from './math'


it('one minus one returns 0', () => {
    expect(sub(1, 1)).toEqual(0)
})