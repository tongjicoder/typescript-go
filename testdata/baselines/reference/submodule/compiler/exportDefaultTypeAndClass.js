//// [tests/cases/compiler/exportDefaultTypeAndClass.ts] ////

//// [exportDefaultTypeAndClass.ts]
export default class Foo {}
type Bar = {}
export default Bar


//// [exportDefaultTypeAndClass.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Foo {
}
exports.default = Foo;
