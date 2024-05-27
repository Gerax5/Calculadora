import { it, expect } from 'vitest'
import { sub } from './math'


it('one minus one returns 0', () => {
    expect(sub(1, 1)).toEqual(0)
})


it('resta de números muy grandes', () => {
    let num1 = Number.MAX_SAFE_INTEGER;
    let num2 = Number.MAX_SAFE_INTEGER;
    expect(sub(num1, num2)).toEqual(0);
})

it('resta de números negativos', () => {
    expect(sub(-1, -2)).toEqual(1);
})

it('resta con NaN', () => {
    expect(() => sub(NaN, 2)).toThrow("No se puede restar un número con NaN");
})

it('resta con Infinity', () => {
    expect(sub(Infinity, 2)).toEqual(Infinity);
})
