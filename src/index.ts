// Tipos básicos
let idade: number = 5;
const name: string = 'Lucas'
const isValid: boolean = true
let idk: any = 5;

const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true, false];
const names: string[] = ['Lucas', 'Helena'];

// EXCLUSIVOS TS

// Tupla
// Usado para garantir ordem de elementos
const person: [number, string] = [1, '2']

// Lista de Tuplas
const people: [number, string][] = [
    [1, 'Lucas'],
    [2, 'Helena']
]

// Intersections
const productId: string | number | boolean = 1 // atribuir número ou string ou boolean

// Enum
// bom em situaçõe que possuímos um valor que sempre será atribuído a outro valor
enum Direction {
    Up = 1,
    Down = 2
}
// Torna processo mais didático
const direction = Direction.Up

// Type Assertions
const productName: any = 'Boné'
//let itemId = productName as string;
let itemId = <string>productName

console.log(direction);