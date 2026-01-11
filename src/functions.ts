const sum1 = (x: number, y: number) => {
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
