//// [tests/cases/compiler/typeReferenceDirectives10.ts] ////

//// [ref.d.ts]
export interface $ { x }

//// [index.d.ts]
declare let $: { x: number }

//// [app.ts]
/// <reference types="lib"/>
import {$} from "./ref";
export interface A {
    x: $
}


//// [app.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
