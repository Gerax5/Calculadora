import { describe, it, expect } from 'vitest'
import { div } from './math'


it('one div two returns 0.5', () => {
    expect(div(1, 2)).toEqual(0.5)
})

it('one div 0 throws Error', () => {
    expect(() => div(1, 0)).toThrow("No se puede dividir por cero")
})