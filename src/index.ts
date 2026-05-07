type RestrictedGlobalProxy = Pick<typeof globalThis,
    'Infinity' |
    'NaN' |
    'undefined' |
    'isFinite' |
    'isNaN' |
    'parseFloat' |
    'parseInt' |
    'decodeURI' |
    'decodeURIComponent' |
    'encodeURI' |
    'encodeURIComponent' |
    'Object' |
    'Function' |
    'Boolean' |
    'Symbol' |
    'Error' |
    'AggregateError' |
    'RangeError' |
    'ReferenceError' |
    'SyntaxError' |
    'TypeError' |
    'URIError' |
    'Number' |
    'BigInt' |
    'Math' |
    'String' |
    'RegExp' |
    'Array' |
    'Int8Array' |
    'Uint8Array' |
    'Uint8ClampedArray' |
    'Int16Array' |
    'Uint16Array' |
    'Int32Array' |
    'Uint32Array' |
    'BigInt64Array' |
    'BigUint64Array' |
    'Float16Array' |
    'Float32Array' |
    'Float64Array' |
    'Map' |
    'Set' |
    'WeakMap' |
    'WeakSet' |
    'ArrayBuffer' |
    'DataView' |
    'JSON' |
    'Iterator' |
    'Promise' |
    'Reflect' |
    'Proxy' |
    'Intl' |
    'console'
> & {
    global: RestrictedGlobalProxy
    globalThis: RestrictedGlobalProxy
}

export const createRestrictedGlobalProxy: () => RestrictedGlobalProxy = () => {
    const context = {
        global: undefined,
        globalThis: undefined,
        Infinity: globalThis.Infinity,
        NaN: globalThis.NaN,
        undefined: globalThis.undefined,
        isFinite: globalThis.isFinite,
        isNaN: globalThis.isNaN,
        parseFloat: globalThis.parseFloat,
        parseInt: globalThis.parseInt,
        decodeURI: globalThis.decodeURI,
        decodeURIComponent: globalThis.decodeURIComponent,
        encodeURI: globalThis.encodeURI,
        encodeURIComponent: globalThis.encodeURIComponent,
        Object: globalThis.Object,
        Function: globalThis.Function,
        Boolean: globalThis.Boolean,
        Symbol: globalThis.Symbol,
        Error: globalThis.Error,
        AggregateError: globalThis.AggregateError,
        RangeError: globalThis.RangeError,
        ReferenceError: globalThis.ReferenceError,
        SyntaxError: globalThis.SyntaxError,
        TypeError: globalThis.TypeError,
        URIError: globalThis.URIError,
        Number: globalThis.Number,
        BigInt: globalThis.BigInt,
        Math: globalThis.Math,
        String: globalThis.String,
        RegExp: globalThis.RegExp,
        Array: globalThis.Array,
        Int8Array: globalThis.Int8Array,
        Uint8Array: globalThis.Uint8Array,
        Uint8ClampedArray: globalThis.Uint8ClampedArray,
        Int16Array: globalThis.Int16Array,
        Uint16Array: globalThis.Uint16Array,
        Int32Array: globalThis.Int32Array,
        Uint32Array: globalThis.Uint32Array,
        BigInt64Array: globalThis.BigInt64Array,
        BigUint64Array: globalThis.BigUint64Array,
        Float16Array: globalThis.Float16Array,
        Float32Array: globalThis.Float32Array,
        Float64Array: globalThis.Float64Array,
        Map: globalThis.Map,
        Set: globalThis.Set,
        WeakMap: globalThis.WeakMap,
        WeakSet: globalThis.WeakSet,
        ArrayBuffer: globalThis.ArrayBuffer,
        DataView: globalThis.DataView,
        JSON: globalThis.JSON,
        Iterator: globalThis.Iterator,
        Promise: globalThis.Promise,
        Reflect: globalThis.Reflect,
        Proxy: globalThis.Proxy,
        Intl: globalThis.Intl,
        console: globalThis.console
    }
    context.global = context.globalThis = context
    context.Function = new Proxy (Function, {
        construct: (target, args) => createSandboxedFunction(new target(...args), context)
    })

    return new Proxy(context, {
        has: () => true,
        get: (t, p) => p in t ? t[p] : undefined
    })
}

export const createSandboxFunction = (fn: Function, context: any) => {
    if (typeof fn !== 'function') throw new TypeError(`Argument fn (${typeof fn}) is not a function`)

    return new Function('context', `
        with (context) {
            return ${fn.toString()}
        }
    `)(context) as Function
}