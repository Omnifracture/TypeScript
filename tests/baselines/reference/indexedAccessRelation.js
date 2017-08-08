//// [indexedAccessRelation.ts]
// Repro from #14723

class Component<S> {
    setState<K extends keyof S>(state: Pick<S, K>) {}
}

export interface State<T> {
    a?: T;
}

class Foo {}

class Comp<T extends Foo, S> extends Component<S & State<T>>
{
    foo(a: T) {
        this.setState({ a: a });
    }
}


//// [indexedAccessRelation.js]
"use strict";
// Repro from #14723
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
exports.__esModule = true;
var Component = (function () {
    function Component() {
    }
    Component.prototype.setState = function (state) { };
    __names(Component.prototype, ["setState"]);
    return Component;
}());
var Foo = (function () {
    function Foo() {
    }
    return Foo;
}());
var Comp = (function (_super) {
    __extends(Comp, _super);
    function Comp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Comp.prototype.foo = function (a) {
        this.setState({ a: a });
    };
    __names(Comp.prototype, ["foo"]);
    return Comp;
}(Component));
