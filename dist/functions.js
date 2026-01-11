"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum1 = (x, y) => {
    return x + y;
};
const sum2 = (x, y) => {
    return x + y.toString();
};
console.log(sum1(1, 2));
console.log(sum2(1, 2));
// VOID
// quando colocamos o type: void, quer dizer que esta função não irá retornar nenhum valor
const log = (message) => {
    console.log(message);
};
