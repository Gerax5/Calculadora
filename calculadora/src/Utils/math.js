
export function add(a, b) {
    return Number(a) + Number(b);
}
  
export function sub(a, b) {
    return a - b;
}
  
  // Función de multiplicación
export function mul(a, b) {
    return a * b;
}
  

export function div(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        throw new Error("No se puede dividir por cero");
    }
}