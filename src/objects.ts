// Type

type Order = {
    productId: string
    price: number
}

type User = {
    firstName: string
    lastName?: string
    age: number
    email: string
    password: string
    order: Order[]
}

const user: User = {
    firstName: "Maria",
    age: 18,
    email: "maria.helena@dow.com",
    password: "123456",
    order: [
        {
            productId: '1',
            price: 10
        }
    ]
};

const printLog = (message: string) => {}
printLog(user.lastName!)
// reclama pois lastName pode ser string ou undefined por ser opcional
// colocando ! no final reaiza um bypass

// Unions
type Author = {
    books: string[]
}

const author: Author & User = {
    firstName: 'Lucas',
    email: 'lucas@dow.com',
    password: '123',
    age: 20,
    order: [{productId: '1', price: 40}],
    books: ['A noite estrelada', 'Uma lua brilhante']
}


// Interfaces

interface UserInterface {
    readonly firstName: string
    email: string
}

const emailUser: UserInterface = {
    email: 'lucas@dow.com',
    firstName: "Lucas"
};

// emailUser.firstName = '12' -> erro por conta do readonly

interface AuthorInterface {
    books: string[]
}

const newAuthor: AuthorInterface & UserInterface = {
    firstName: 'a',
    email: 'b',
    books: ['12']
}

// Assinalar uma intersection
type Grade = number | string;
const grade: Grade = 1
