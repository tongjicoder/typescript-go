//// [tests/cases/compiler/copyrightWithNewLine1.ts] ////

//// [copyrightWithNewLine1.ts]
/*****************************
* (c) Copyright - Important
****************************/

import model = require("./greeter")
var el = document.getElementById('content');
var greeter = new model.Greeter(el);
/** things */
greeter.start();

//// [copyrightWithNewLine1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*****************************
* (c) Copyright - Important
****************************/
const model = require("./greeter");
var el = document.getElementById('content');
var greeter = new model.Greeter(el);
/** things */
greeter.start();
