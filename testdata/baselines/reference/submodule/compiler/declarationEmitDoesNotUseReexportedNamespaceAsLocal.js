//// [tests/cases/compiler/declarationEmitDoesNotUseReexportedNamespaceAsLocal.ts] ////

//// [sub.ts]
export function a() {}
//// [index.ts]
export const x = add(import("./sub"));
export * as Q from "./sub";
declare function add<T>(x: Promise<T>): T;

//// [sub.js]
export function a() { }
//// [index.js]
export const x = add(import("./sub"));
export * as Q from "./sub";
