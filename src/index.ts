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
> & { globalThis: RestrictedGlobalProxy }

export const createRestrictedGlobalProxy: () => RestrictedGlobalProxy = () => {
    const context = {
        globalThis: undefined,
        Infinity,
        NaN,
        undefined,
        isFinite,
        isNaN,
        parseFloat,
        parseInt,
        decodeURI,
        decodeURIComponent,
        encodeURI,
        encodeURIComponent,
        Object,
        Function,
        Boolean,
        Symbol,
        Error,
        AggregateError,
        RangeError,
        ReferenceError,
        SyntaxError,
        TypeError,
        URIError,
        Number,
        BigInt,
        Math,
        String,
        RegExp,
        Array,
        Int8Array,
        Uint8Array,
        Uint8ClampedArray,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        BigInt64Array,
        BigUint64Array,
        Float16Array,
        Float32Array,
        Float64Array,
        Map,
        Set,
        WeakMap,
        WeakSet,
        ArrayBuffer,
        DataView,
        JSON,
        Iterator,
        Promise,
        Reflect,
        Proxy,
        Intl,
        console
    }
    context.globalThis = context
    context.Function = new Proxy (Function, {
        construct: (target, args) => createSandboxedFunction(new target(...args), context)
    })

    return new Proxy(context, {
        has: () => true,
        get: (t, p) => p in t ? t[p] : undefined
    })
}

export const createSandboxFunction = (fn: Function, context: object) => new Function('context', `
    with (context) {
        return ${fn.toString()}
    }
`)(context) as Function