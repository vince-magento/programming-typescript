const a = 1;
const b = 3;

function count(a: number, b: number) {
    return a + b
}

// types (blz 17)
let anything: any;
let idontknow: unknown;
const bool: boolean = true;
const million: number = 1_000_000;
const bignumber: bigint = 123n; // not fully supported
const nameS: string = 'henk';
const symbol: unique symbol = Symbol('a');
const obj: { b: string } = { b: 'x' };
const arr: number[] = [1];
const arrUnion: (string | number)[] = ['b', 1] // bad practice tho not homogeneous
const tupple: readonly [string, number] = ['vince', 29]; // tupples with readonly blz 37 
const tuppleOtherFormal: Readonly<[string, number]> = ['vince', 29];
const tuppleOptional: [number, number?][] = [ // optional tupple
    [3.75],
    [2.90, 90]
];
const tuppleMin: [string, ...string[]] = ['vince', 'henk']; // rest elements with minumum length


// shaping objects (blz 26)
let d: {
    firstName: string
    lastName: string
} = {
    firstName: 'john',
    lastName: 'barrowman'
}

class Person {
    constructor(
        public firstName: string, // public is same as this
        public lastName: string,
    ) { }
}

d = new Person('matt', 'smith');

// optional assignment (blz 27) 
let optionObj: {
    readonly b: number; // mark as read-only
    c?: string;
    [seatNumber: number]: boolean; // Index Signatures
}

optionObj = {
    b: 2
}

// Type alias (blz 30)
type Age = number;

type PersonType = {
    name: string
    age: Age
}

// Union and intersection types (blz 32)
type Cat = { name: string, purrs: boolean };
type Dog = { name: string, barks: boolean };
type CatVariation = Cat & {
    grumpy: boolean;
}

type CatOrDogOrBoth = Cat | Dog; // union
type CatAndDog = Cat & Dog; // intersection



// A function that returns void (blz 38)
const voidFunc = (): void => {
    let a = 2 + 2;
}

// A function that returns never (blz 38)
const neverFunc = (): never => {
    throw TypeError('I always error');
}


// enum (blz 40)
enum Language {
    Enlish, // = 0
    Spanish, // = 1
}

enum Language {
    Russian = 2 // merging enums require explicit typing
}

enum Color {
    Red = '#c10000',
    Blue = '#007ac1'
}

const myFirstLanguage = Language.Russian; // logs 2
const enumFunc = (color: Language) => {
    return 'that is an existing color';
}

// Arrow function with optional parameter, default param and not required return type (blz 47)
const greet = (name: string, age?: number, gender = 'male'): string => 'test';

// variadic functions with non empty numbers array (blz 49)
const sumVariadicSafe = (...numbers: [number, ...number[]]): number => {
    return numbers.reduce((total, n) => total + n, 0);
}
sumVariadicSafe(10, 20);
sumVariadicSafe.apply(null, [10, 20]);
sumVariadicSafe.call(null, 10, 20);
sumVariadicSafe.bind(null, 10, 20)();


// rest param used in console.log interface (blz 49)
interface Console {
    log(message?: any, ...optionalParams: any[]): void;
}

// Generator function with yield param (blz 52) 
function* generateSequence() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const generator = generateSequence();

console.log(generator.next()); // { value: 0, done: false }
console.log(generator.next()); // { value: 1, done: false }

// Call signature (blz 56)
type MyFunctionType = (x: number, y: number) => number;
//full call signature - overloaded function
type AddFunction = {
    (x: number, y: number): number;
    (x: number, y: number, z: number): number;
    (x: number, y: number, z?: number): number;
}
const add: AddFunction = (x: number, y: number, z?: number): number => 2;

// generic type function (blz 67) 
type Filter = <T>(array: T[], f: (item: T) => boolean) => T[];  // T is convention next one should be U

type FilterBound<T> = { // explicit bound generic
    (array: T[], f: (item: T) => boolean): T[]
}
let filter: Filter = (array, f) => array.filter((i) => (f(i)));
let filterBound: FilterBound<number> = (array, f) => array.filter((i) => (f(i)));

filter([1, 2, 3], n => n > 2);
filterBound([1, 2, 3], n => n > 2);

let promise = new Promise<number>(resolve => resolve(45)); // promise also takes generic (blz 73)
promise.then(result => result * 4);

// Need practice blz 76 - 82
type MyEvent<T = HTMLElement> = {
    target: T | null,
    type: string,
}

let myEvent: MyEvent = {
    target: document.getElementById('.test'),
    type: 'test'
}

interface MyEventInterface<T = HTMLElement> { // interface generics 
    readonly target: T | null,
    type: string,
}
// Classes and interfaces (blz 94)
class EventClass<T = HTMLElement> implements MyEventInterface<T> {
    target: T | null;
    type: string;

    constructor(target: T | null, type: string) {
        this.target = target;
        this.type = type;
    }
}

abstract class Piece { // abstract can not be instantiated (blz 86)
    constructor(private pos: 4) { };
    abstract canMoveTo(position: number): boolean;
};

class Knight extends Piece {
    canMoveTo(position: number): boolean {
        return true
    }

    add(value: number): this { // knight.add(1).add(3) (blz 90)
        return this;
    }

    static create(messages: string[]) {
        return messages;
    }

};
const knight = new Knight(4);

// Polymorhism with interfaces (blz 100)
interface MyMap<K, V> {
    get(key: K): V
    set(key: K, value: V): void;
}
class MyMapClass<K extends { toString(): string }, V> implements MyMap<K, V> {
    private map: { [key: string]: V } = {};

    constructor(initialKey: K, initialValue: V) {
        this.set(initialKey, initialValue);
    }

    get(key: K): V {
        return this.map[key.toString()];
    }

    set(key: K, value: V): void {
        this.map[key.toString()] = value;
    }
}
let myMap = new MyMapClass<string, number>('k', 1);

// simulate final classes (blz 108)
class FinalClass {
    private constructor(private messages: string[]) { }
    static create(messages: string[]) {
        return new FinalClass(messages);
    }
}
let finalClass = FinalClass.create(['yesyes']);