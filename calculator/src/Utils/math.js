
export function add(a, b) {
    return Number(a) + Number(b);
}
  
export function sub(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw new Error("No se puede restar un número con NaN");
    }
    return Number(a) - Number(b);
}
  

export function mul(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw new Error("No se puede multiplicar un número con NaN");
    }
    return Number(a) * Number(b);
}
  

export function div(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw new Error("No se puede dividir un número con NaN");
    }
    if (b !== 0) {
        return a / b;
    } else {
        throw new Error("No se puede dividir por cero");
    }
}

export function mod(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw new Error("No se puede calcular el módulo con NaN");
    }
    if (b !== 0) {
        return a % b;
    } else {
        throw new Error("No se puede dividir por cero");
    }
}
