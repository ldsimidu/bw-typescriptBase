"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tipos básicos
let idade = 5;
const name = 'Lucas';
const isValid = true;
let idk = 5;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true, false];
const names = ['Lucas', 'Helena'];
// EXCLUSIVOS TS
// Tupla
// Usado para garantir ordem de elementos
const person = [1, '2'];
// Lista de Tuplas
const people = [
    [1, 'Lucas'],
    [2, 'Helena']
];
// Intersections
const productId = 1; // atribuir número ou string ou boolean
// Enum
// bom em situaçõe que possuímos um valor que sempre será atribuído a outro valor
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
// Torna processo mais didático
const direction = Direction.Up;
// Type Assertions
const productName = 'Boné';
//let itemId = productName as string;
let itemId = productName;
console.log(direction);
