//// [assignmentLHSIsValue.ts]
// expected error for all the LHS of assignments
var value: any;

// this
class C {
    constructor() { this = value; }
    foo() { this = value; }
    static sfoo() { this = value; }
}

function foo() { this = value; }

this = value;

// identifiers: module, class, enum, function
module M { export var a; }
M = value;

C = value;

enum E { }
E = value;

foo = value;

// literals
null = value;
true = value;
false = value;
0 = value;
'' = value;
/d+/ = value;

// object literals
{ a: 0} = value;

// array literals
['', ''] = value;

// super
class Derived extends C {
    constructor() { super(); super = value; }

    foo() { super = value }

    static sfoo() { super = value; }
}

// function expression
function bar() { } = value;
() => { } = value;

// function calls
foo() = value;

// parentheses, the containted expression is value
(this) = value;
(M) = value;
(C) = value;
(E) = value;
(foo) = value;
(null) = value;
(true) = value;
(0) = value;
('') = value;
(/d+/) = value;
({}) = value;
([]) = value;
(function baz() { }) = value;
(foo()) = value;

//// [assignmentLHSIsValue.js]
var __names = (this && this.__names) || (function() {
    var name = Object.defineProperty ? (function(proto, name) {
        Object.defineProperty(proto[name], 'name', { 
            value: name, configurable: true
        });
    }) : (function(proto, name) {
        proto[name].name = name;
    });
    return function (proto, keys) {
        for (var i = keys.length - 1; i >= 0; i--) {
            name(proto, keys[i])
        }
    };
})();
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// expected error for all the LHS of assignments
var value;
// this
var C = (function () {
    function C() {
        this = value;
    }
    C.prototype.foo = function () { this = value; };
    C.sfoo = function () { this = value; };
    __names(C.prototype, ["foo"]);
    return C;
}());
function foo() { this = value; }
this = value;
// identifiers: module, class, enum, function
var M;
(function (M) {
})(M || (M = {}));
M = value;
C = value;
var E;
(function (E) {
})(E || (E = {}));
E = value;
foo = value;
// literals
null = value;
true = value;
false = value;
0 = value;
'' = value;
/d+/ = value;
// object literals
{
    a: 0;
}
value;
// array literals
'' = value[0], '' = value[1];
// super
var Derived = (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        var _this = _super.call(this) || this;
        _super.prototype. = value;
        return _this;
    }
    Derived.prototype.foo = function () { _super.prototype. = value; };
    Derived.sfoo = function () { _super. = value; };
    __names(Derived.prototype, ["foo"]);
    return Derived;
}(C));
// function expression
function bar() { }
value;
(function () { });
value;
// function calls
foo() = value;
// parentheses, the containted expression is value
(this) = value;
(M) = value;
(C) = value;
(E) = value;
(foo) = value;
(null) = value;
(true) = value;
(0) = value;
('') = value;
(/d+/) = value;
({}) = value;
([]) = value;
(function baz() { }) = value;
(foo()) = value;
