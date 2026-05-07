import { test } from 'bun:test'
import { runTests } from './runTests.js'

runTests(test, 'bun', Worker)