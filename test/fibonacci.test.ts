import { fibonacci } from '../src/fibonacci'

describe('Computes Fibonacci numbers', () => {
	test('Computes first two numbers correctly', () => {
		expect(fibonacci(0)).toBe(0)
		expect(fibonacci(1)).toBe(1)
	})

	test('Computes arbitrary Fibonacci numbers', () => {
		expect(fibonacci(2)).toBe(1)
		expect(fibonacci(3)).toBe(2)
		expect(fibonacci(6)).toBe(8)
	})

	test('Returns zero for negative inputs', () => {
		expect(fibonacci(-1)).toBe(0)
	})

	test('Rounds up for non-integer argument', () => {
		expect(fibonacci(5.8)).toBe(8)
	})
})
