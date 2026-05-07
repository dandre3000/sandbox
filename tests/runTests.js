import { expect } from 'expect'
import { createSandboxFunction } from '@dandre3000/sandbox'

export const runTests = test => {
    test('createSandboxFunction fn must be a function', () => {
        expect(() => createSandboxFunction()).toThrowError(TypeError)
        expect(() => createSandboxFunction({})).toThrowError(TypeError)
    })

    test('createSandboxFunction returns a function where global property access is intercepted by the given context', () => {
        const context = { foo: 'bar' }
        expect(createSandboxFunction(() => foo, context)()).toBe(context.foo)
    })
}