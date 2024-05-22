import { it, expect } from 'vitest'
import { add } from './math'

it('suma basica', () => {
    expect(add(5, 5)).toEqual(10);
})


it('suma de números muy grandes', () => {
    let num1 = Number.MAX_SAFE_INTEGER;
    let num2 = Number.MAX_SAFE_INTEGER;
    expect(add(num1, num2)).toEqual(num1 + num2);
})

it('suma de números negativos', () => {
    expect(add(-1, -2)).toEqual(-3);
})

it('suma con NaN', () => {
    expect(add(NaN, 2)).toBeNaN();
})

it('suma con Infinity', () => {
    expect(add(Infinity, 2)).toEqual(Infinity);
})