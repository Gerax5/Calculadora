import { it, expect } from 'vitest'
import { mul } from './math'


it('multiplicación de números muy grandes', () => {
    let num1 = Number.MAX_SAFE_INTEGER;
    let num2 = Number.MAX_SAFE_INTEGER;
    expect(mul(num1, num2)).toEqual(num1 * num2);
})

it('multiplicación de números negativos', () => {
    expect(mul(-1, -2)).toEqual(2);
})

it('multiplicación con NaN', () => {
    expect(() => mul(NaN, 2)).toThrow("No se puede multiplicar un número con NaN");
})

it('multiplicación con Infinity', () => {
    expect(mul(Infinity, 2)).toEqual(Infinity);
})