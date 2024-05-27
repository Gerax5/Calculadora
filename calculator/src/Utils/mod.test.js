import { it, expect } from 'vitest'
import { mod } from './math'


it('módulo de números muy grandes', () => {
    let num1 = Number.MAX_SAFE_INTEGER;
    let num2 = Number.MAX_SAFE_INTEGER;
    expect(mod(num1, num2)).toEqual(0);
})

it('módulo de números negativos', () => {
    expect(mod(-1, -2)).toEqual(-1);
})

it('módulo con NaN', () => {
    expect(() => mod(NaN, 2)).toThrow("No se puede calcular el módulo con NaN");
})

it('módulo con Infinity', () => {
    expect(mod(Infinity, 2)).toEqual(NaN);
})

it('módulo por cero', () => {
    expect(() => mod(1, 0)).toThrow("No se puede dividir por cero");
})
