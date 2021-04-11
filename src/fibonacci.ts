/**
 * A very in performant implementation of the fibonacci row.
 * https://de.wikipedia.org/wiki/Fibonacci-Folge
 */
export function fibonacci(n: number): number {
	n = Math.ceil(n)
	if (n <= 0) return 0
	if (n <= 2) return 1
	return fibonacci(n - 1) + fibonacci(n - 2)
}
