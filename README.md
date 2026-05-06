# @dandre3000/sandbox

Run code that only has access to an isolated globalThis.

## Install

npm i @dandre3000/sandbox

## Usage

```js
import { createRestrictedGlobalProxy, createSandboxFunction } from '@dandre3000/sandbox'

const sandbox = createRestrictedGlobalProxy()
const fn = createSandboxFunction(() => console.log(globalThis), sandbox)

fn() // log: sandbox, sandbox
```
## Exports

#### createRestrictedGlobalProxy: () => RestrictedGlobalProxy

#### createSandboxFunction: createSandboxFunction: (fn: Function, context: object) => Function

## License

[MIT](https://github.com/dandre3000/sandbox/blob/main/LICENSE)