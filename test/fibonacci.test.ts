import { describe, expect, it } from 'vitest'
import { fibonacci } from '../src/lib/fibonacci'

describe('fibonacci', () => {
	it('computes first two numbers correctly', () => {
		expect(fibonacci(0)).toBe(0)
		expect(fibonacci(1)).toBe(1)
	})

	it('computes arbitrary Fibonacci numbers', () => {
		expect(fibonacci(2)).toBe(1)
		expect(fibonacci(3)).toBe(2)
		expect(fibonacci(4)).toBe(3)
		expect(fibonacci(5)).toBe(5)
		expect(fibonacci(6)).toBe(8)
		expect(fibonacci(10)).toBe(55)
	})

	it('returns zero for negative inputs', () => {
		expect(fibonacci(-1)).toBe(0)
	})

	it('rounds up for non-integer argument', () => {
		expect(fibonacci(5.8)).toBe(8)
	})
})
