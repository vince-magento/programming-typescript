/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\nconst a = 1;\nconst b = 3;\nfunction count(a, b) {\n    return a + b;\n}\n// types (blz 17)\nlet anything;\nlet idontknow;\nconst bool = true;\nconst million = 1000000;\nconst bignumber = 123n; // not fully supported\nconst nameS = 'henk';\nconst symbol = Symbol('a');\nconst obj = { b: 'x' };\nconst arr = [1];\nconst arrUnion = ['b', 1]; // bad practice tho not homogeneous\nconst tupple = ['vince', 29]; // tupples with readonly blz 37 \nconst tuppleOtherFormal = ['vince', 29];\nconst tuppleOptional = [\n    [3.75],\n    [2.90, 90]\n];\nconst tuppleMin = ['vince', 'henk']; // rest elements with minumum length\n// shaping objects (blz 26)\nlet d = {\n    firstName: 'john',\n    lastName: 'barrowman'\n};\nclass Person {\n    firstName;\n    lastName;\n    constructor(firstName, // public is same as this\n    lastName) {\n        this.firstName = firstName;\n        this.lastName = lastName;\n    }\n}\nd = new Person('matt', 'smith');\n// optional assignment (blz 27) \nlet optionObj;\noptionObj = {\n    b: 2\n};\n// A function that returns void (blz 38)\nconst voidFunc = () => {\n    let a = 2 + 2;\n};\n// A function that returns never (blz 38)\nconst neverFunc = () => {\n    throw TypeError('I always error');\n};\n// enum (blz 40)\nvar Language;\n(function (Language) {\n    Language[Language[\"Enlish\"] = 0] = \"Enlish\";\n    Language[Language[\"Spanish\"] = 1] = \"Spanish\";\n})(Language || (Language = {}));\n(function (Language) {\n    Language[Language[\"Russian\"] = 2] = \"Russian\"; // merging enums require explicit typing\n})(Language || (Language = {}));\nvar Color;\n(function (Color) {\n    Color[\"Red\"] = \"#c10000\";\n    Color[\"Blue\"] = \"#007ac1\";\n})(Color || (Color = {}));\nconst myFirstLanguage = Language.Russian; // logs 2\nconst enumFunc = (color) => {\n    return 'that is an existing color';\n};\n// Arrow function with optional parameter, default param and not required return type (blz 47)\nconst greet = (name, age, gender = 'male') => 'test';\n// variadic functions with non empty numbers array (blz 49)\nconst sumVariadicSafe = (...numbers) => {\n    return numbers.reduce((total, n) => total + n, 0);\n};\nsumVariadicSafe(10, 20);\nsumVariadicSafe.apply(null, [10, 20]);\nsumVariadicSafe.call(null, 10, 20);\nsumVariadicSafe.bind(null, 10, 20)();\n// Generator function with yield param (blz 52) \nfunction* generateSequence() {\n    let i = 0;\n    while (true) {\n        yield i++;\n    }\n}\nconst generator = generateSequence();\nconsole.log(generator.next()); // { value: 0, done: false }\nconsole.log(generator.next()); // { value: 1, done: false }\nconst add = (x, y, z) => 2;\nlet filter = (array, f) => array.filter((i) => (f(i)));\nlet filterBound = (array, f) => array.filter((i) => (f(i)));\nfilter([1, 2, 3], n => n > 2);\nfilterBound([1, 2, 3], n => n > 2);\nlet promise = new Promise(resolve => resolve(45)); // promise also takes generic (blz 73)\npromise.then(result => result * 4);\nlet myEvent = {\n    target: document.getElementById('.test'),\n    type: 'test'\n};\n// Classes and interfaces (blz 94)\nclass EventClass {\n    target;\n    type;\n    constructor(target, type) {\n        this.target = target;\n        this.type = type;\n    }\n}\nclass Piece {\n    pos;\n    constructor(pos) {\n        this.pos = pos;\n    }\n    ;\n}\n;\nclass Knight extends Piece {\n    canMoveTo(position) {\n        return true;\n    }\n    add(value) {\n        return this;\n    }\n}\n;\nconst knight = new Knight(4);\nclass MyMapClass {\n    map = {};\n    constructor(initialKey, initialValue) {\n        this.set(initialKey, initialValue);\n    }\n    get(key) {\n        return this.map[key.toString()];\n    }\n    set(key, value) {\n        this.map[key.toString()] = value;\n    }\n}\nlet myMap = new MyMapClass('k', 1);\n// simulate final classes (blz 108)\nclass FinalClass {\n    messages;\n    constructor(messages) {\n        this.messages = messages;\n    }\n    static create(messages) {\n        return new FinalClass(messages);\n    }\n}\nlet finalClass = FinalClass.create(['yesyes']);\n\n\n//# sourceURL=webpack://programming-typescript/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;