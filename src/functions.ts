// Quais parâmetros pode receber e quais valores pode retornar com interface
interface MathFunc {
    //toda função MathFunc precisa receber x e y como número e precisa retornar um número
    (x: number, y: number): number
}

const sum1: MathFunc = (x: number, y: number): number => {
    return x + y;
}

const sum2 = (x: number, y: number): string | number => {
    return x + y.toString();
}

console.log(sum1(1, 2));
console.log(sum2(1, 2));

// VOID
// quando colocamos o type: void, quer dizer que esta função não irá retornar nenhum valor
const log = (message: string): void => {
    console.log(message)
}

const sub: MathFunc = (x: number, y: number): number => {
    return x - y;
}