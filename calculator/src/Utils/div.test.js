import { it, expect } from 'vitest'
import { div } from './math'


it('división de números muy grandes', () => {
    let num1 = Number.MAX_SAFE_INTEGER;
    let num2 = Number.MAX_SAFE_INTEGER;
    expect(div(num1, num2)).toEqual(1);
})

it('división de números negativos', () => {
    expect(div(-1, -2)).toEqual(0.5);
})

it('división con NaN', () => {
    expect(() => div(NaN, 2)).toThrow("No se puede dividir un número con NaN");
})

it('división con Infinity', () => {
    expect(div(Infinity, 2)).toEqual(Infinity);
})

it('división por cero', () => {
    expect(() => div(1, 0)).toThrow("No se puede dividir por cero");
})