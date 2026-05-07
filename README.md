# @dandre3000/sandbox

Run code with a temporary globalThis.

## Install

npm i @dandre3000/sandbox

## Usage

```js
import { createRestrictedGlobalProxy, createSandboxFunction } from '@dandre3000/sandbox'

const sandbox = createRestrictedGlobalProxy()
sandbox.foo = 'bar'

const fn = createSandboxFunction(() => console.log(foo, window, process, userAgent, navigator), sandbox)

fn() // bar undefined undefined undefined undefined
```
## Exports

<h4>type RestrictedGlobalProxy = Pick&lt;'Infinity' | 'NaN' | 'undefined' | 'isFinite' | </br>'isNaN' | 'parseFloat' | 'parseInt' | 'decodeURI' | 'decodeURIComponent' | </br>'encodeURI' | 'encodeURIComponent' | 'Object' | 'Function' | 'Boolean' | 'Symbol' | 'Error' | </br>'AggregateError' | 'RangeError' | 'ReferenceError' | 'SyntaxError' | 'TypeError' | 'URIError' | </br>'Number' | 'BigInt' | 'Math' | 'String' | 'RegExp' | 'Array' | 'Int8Array' | 'Uint8Array' | </br>'Uint8ClampedArray' | 'Int16Array' | 'Uint16Array' | 'Int32Array' | 'Uint32Array' | </br>'BigInt64Array' | 'BigUint64Array' | 'Float16Array' | 'Float32Array' | 'Float64Array' | 'Map' | </br>'Set' | 'WeakMap' | 'WeakSet' | 'ArrayBuffer' | 'DataView' | 'JSON' | 'Iterator' | 'Promise' | </br>'Reflect' | 'Proxy' | 'Intl' | 'console'&gt; & {</br>
    &emsp;global: RestrictedGlobalProxy;</br>
    &emsp;globalThis: RestrictedGlobalProxy;</br>
}</h4>

#### createRestrictedGlobalProxy: () => RestrictedGlobalProxy

#### createSandboxFunction: createSandboxFunction: (fn: Function, context: any) => Function

## License

[MIT](https://github.com/dandre3000/sandbox/blob/main/LICENSE)